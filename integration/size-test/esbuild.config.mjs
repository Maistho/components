/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import babel from '@babel/core';
import {createEs2015LinkerPlugin} from '@angular/compiler-cli/linker/babel';
import {ConsoleLogger, NodeJSFileSystem, LogLevel} from '@angular/compiler-cli';
import {GLOBAL_DEFS_FOR_TERSER_WITH_AOT} from '@angular/compiler-cli/private/tooling';
import ngBuild from '@angular/build/private';
import fs from 'fs';

/** Babel plugin running the Angular linker. */
const linkerBabelPlugin = createEs2015LinkerPlugin({
  fileSystem: new NodeJSFileSystem(),
  logger: new ConsoleLogger(LogLevel.warn),
  linkerJitMode: false,
});

/**
 * ESBuild plugin configuring various optimization Babel plugins. The Babel plugins
 * configured as part of this plugin run in the Angular CLI compilation pipeline as well.
 */
const esbuildBabelOptimizePlugin = {
  name: 'ng-babel-optimize-esbuild',
  setup: build => {
    build.onLoad({filter: /.*/}, async args => {
      const filePath = args.path;
      const content = await fs.promises.readFile(filePath, 'utf8');
      const plugins = [
        linkerBabelPlugin,
        ngBuild.adjustStaticMembers,
        ngBuild.elideAngularMetadata,
        ngBuild.adjustTypeScriptEnums,
      ];

      // All files except for the auto-generated module entry-point are considered side-effect
      // free. For these we can add the pure-top level Babel plugin. This matches conceptually
      // with what is done in the Angular CLI compilation pipeline, with respect to everything
      // in this repo being an official side-effect free APF package.
      if (!args.path.includes('autogenerated_module_index.mjs')) {
        plugins.push(ngBuild.markTopLevelPure);
      }

      const {code} = await babel.transformAsync(content, {
        filename: filePath,
        filenameRelative: filePath,
        plugins: plugins,
        // Sourcemaps are generated inline so that ESBuild can process them.
        sourceMaps: 'inline',
        compact: false,
      });

      return {contents: code};
    });
  },
};

export default {
  // Note: We prefer `.mjs` here as this is the extension used by Angular APF packages.
  resolveExtensions: ['.mjs', '.js'],
  conditions: ['es2020', 'es2015'],
  mainFields: ['fesm2020', 'es2020', 'es2015', 'module'],
  format: 'iife',
  // The majority of these options match with the ones the CLI sets:
  // https://github.com/angular/angular-cli/blob/0d76bf04bca6e083865972b5398a32bbe9396e14/packages/angular_devkit/build_angular/src/webpack/plugins/javascript-optimizer-worker.ts#L133.
  treeShaking: true,
  minifyIdentifiers: true,
  minifySyntax: true,
  minifyWhitespace: false,
  pure: ['forwardRef'],
  legalComments: 'none',
  // ESBuild requires the `define` option to take a string-based dictionary.
  define: convertObjectToStringDictionary(GLOBAL_DEFS_FOR_TERSER_WITH_AOT),
  plugins: [esbuildBabelOptimizePlugin],
};

/** Converts an object to a string dictionary. */
function convertObjectToStringDictionary(value) {
  return Object.entries(value).reduce((result, [propName, value]) => {
    result[propName] = String(value);
    return result;
  }, {});
}