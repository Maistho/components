## API Report File for "components-srcs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AsyncFactoryFn } from '@angular/cdk/testing';
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ComponentHarnessConstructor } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';
import { MatSelectHarness } from '@angular/material/select/testing';
import { TestElement } from '@angular/cdk/testing';

// @public
export class MatPaginatorHarness extends ComponentHarness {
    getPageSize(): Promise<number>;
    getRangeLabel(): Promise<string>;
    goToFirstPage(): Promise<void>;
    goToLastPage(): Promise<void>;
    goToNextPage(): Promise<void>;
    goToPreviousPage(): Promise<void>;
    static hostSelector: string;
    isNextPageDisabled(): Promise<boolean>;
    // (undocumented)
    isPreviousPageDisabled(): Promise<boolean>;
    // (undocumented)
    _rangeLabel: AsyncFactoryFn<TestElement>;
    // (undocumented)
    _select: AsyncFactoryFn<MatSelectHarness | null>;
    setPageSize(size: number): Promise<void>;
    static with<T extends MatPaginatorHarness>(this: ComponentHarnessConstructor<T>, options?: PaginatorHarnessFilters): HarnessPredicate<T>;
}

// @public
export interface PaginatorHarnessFilters extends BaseHarnessFilters {
}

// (No @packageDocumentation comment for this package)

```