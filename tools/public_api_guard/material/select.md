## API Report File for "components-srcs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { AfterContentInit } from '@angular/core';
import { AnimationTriggerMetadata } from '@angular/animations';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectorRef } from '@angular/core';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { ControlValueAccessor } from '@angular/forms';
import { DoCheck } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { EventEmitter } from '@angular/core';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/overlay';
import * as i2 from '@angular/material/core';
import * as i4 from '@angular/cdk/scrolling';
import * as i5 from '@angular/material/form-field';
import { InjectionToken } from '@angular/core';
import { MatError } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatHint } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatOptgroup } from '@angular/material/core';
import { MatOption } from '@angular/material/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatPrefix } from '@angular/material/form-field';
import { MatSuffix } from '@angular/material/form-field';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { QueryList } from '@angular/core';
import { ScrollStrategy } from '@angular/cdk/overlay';
import { SelectionModel } from '@angular/cdk/collections';
import { SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { ViewportRuler } from '@angular/cdk/scrolling';

// @public
export const MAT_SELECT_CONFIG: InjectionToken<MatSelectConfig>;

// @public
export const MAT_SELECT_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;

// @public
export const MAT_SELECT_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY;
};

// @public
export function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay): () => ScrollStrategy;

// @public
export const MAT_SELECT_TRIGGER: InjectionToken<MatSelectTrigger>;

export { MatError }

export { MatFormField }

export { MatHint }

export { MatLabel }

export { MatOptgroup }

export { MatOption }

export { MatPrefix }

// @public (undocumented)
export class MatSelect implements AfterContentInit, OnChanges, OnDestroy, OnInit, DoCheck, ControlValueAccessor, MatFormFieldControl<any> {
    constructor(...args: unknown[]);
    ariaLabel: string;
    ariaLabelledby: string;
    protected _canOpen(): boolean;
    canSelectNullableOptions: boolean;
    // (undocumented)
    protected _changeDetectorRef: ChangeDetectorRef;
    close(): void;
    readonly _closedStream: Observable<void>;
    get compareWith(): (o1: any, o2: any) => boolean;
    set compareWith(fn: (o1: any, o2: any) => boolean);
    controlType: string;
    customTrigger: MatSelectTrigger;
    // (undocumented)
    protected _defaultOptions: MatSelectConfig | null;
    protected readonly _destroy: Subject<void>;
    readonly disableAutomaticLabeling = true;
    disabled: boolean;
    disableOptionCentering: boolean;
    disableRipple: boolean;
    // (undocumented)
    readonly _elementRef: ElementRef<any>;
    get empty(): boolean;
    get errorState(): boolean;
    set errorState(value: boolean);
    get errorStateMatcher(): ErrorStateMatcher;
    set errorStateMatcher(value: ErrorStateMatcher);
    focus(options?: FocusOptions): void;
    get focused(): boolean;
    _getAriaActiveDescendant(): string | null;
    _getPanelAriaLabelledby(): string | null;
    _getPanelTheme(): string;
    _handleKeydown(event: KeyboardEvent): void;
    get hideSingleSelectionIndicator(): boolean;
    set hideSingleSelectionIndicator(value: boolean);
    get id(): string;
    set id(value: string);
    _isRtl(): boolean;
    _keyManager: ActiveDescendantKeyManager<MatOption>;
    get multiple(): boolean;
    set multiple(value: boolean);
    // (undocumented)
    static ngAcceptInputType_canSelectNullableOptions: unknown;
    // (undocumented)
    static ngAcceptInputType_disabled: unknown;
    // (undocumented)
    static ngAcceptInputType_disableOptionCentering: unknown;
    // (undocumented)
    static ngAcceptInputType_disableRipple: unknown;
    // (undocumented)
    static ngAcceptInputType_hideSingleSelectionIndicator: unknown;
    // (undocumented)
    static ngAcceptInputType_multiple: unknown;
    // (undocumented)
    static ngAcceptInputType_required: unknown;
    // (undocumented)
    static ngAcceptInputType_tabIndex: unknown;
    // (undocumented)
    static ngAcceptInputType_typeaheadDebounceInterval: unknown;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngControl: NgControl;
    // (undocumented)
    ngDoCheck(): void;
    // (undocumented)
    ngOnChanges(changes: SimpleChanges): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    _onAttached(): void;
    _onBlur(): void;
    _onChange: (value: any) => void;
    onContainerClick(): void;
    // (undocumented)
    _onFocus(): void;
    _onTouched: () => void;
    open(): void;
    readonly openedChange: EventEmitter<boolean>;
    readonly _openedStream: Observable<void>;
    optionGroups: QueryList<MatOptgroup>;
    options: QueryList<MatOption>;
    readonly optionSelectionChanges: Observable<MatOptionSelectionChange>;
    protected _overlayDir: CdkConnectedOverlay;
    // (undocumented)
    _overlayPanelClass: string | string[];
    _overlayWidth: string | number;
    panel: ElementRef;
    panelClass: string | string[] | Set<string> | {
        [key: string]: any;
    };
    protected _panelDoneAnimating(isOpen: boolean): void;
    readonly _panelDoneAnimatingStream: Subject<string>;
    get panelOpen(): boolean;
    panelWidth: string | number | null;
    // (undocumented)
    protected _parentFormField: MatFormField | null;
    get placeholder(): string;
    set placeholder(value: string);
    _positions: ConnectedPosition[];
    _preferredOverlayOrigin: CdkOverlayOrigin | ElementRef | undefined;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => {}): void;
    get required(): boolean;
    set required(value: boolean);
    _scrollOptionIntoView(index: number): void;
    _scrollStrategy: ScrollStrategy;
    get selected(): MatOption | MatOption[];
    readonly selectionChange: EventEmitter<MatSelectChange>;
    _selectionModel: SelectionModel<MatOption>;
    setDescribedByIds(ids: string[]): void;
    setDisabledState(isDisabled: boolean): void;
    get shouldLabelFloat(): boolean;
    sortComparator: (a: MatOption, b: MatOption, options: MatOption[]) => number;
    readonly stateChanges: Subject<void>;
    _syncParentProperties(): void;
    tabIndex: number;
    toggle(): void;
    trigger: ElementRef;
    get triggerValue(): string;
    typeaheadDebounceInterval: number;
    updateErrorState(): void;
    userAriaDescribedBy: string;
    get value(): any;
    set value(newValue: any);
    readonly valueChange: EventEmitter<any>;
    _valueId: string;
    // (undocumented)
    protected _viewportRuler: ViewportRuler;
    writeValue(value: any): void;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSelect, "mat-select", ["matSelect"], { "userAriaDescribedBy": { "alias": "aria-describedby"; "required": false; }; "panelClass": { "alias": "panelClass"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disableRipple": { "alias": "disableRipple"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; "hideSingleSelectionIndicator": { "alias": "hideSingleSelectionIndicator"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "disableOptionCentering": { "alias": "disableOptionCentering"; "required": false; }; "compareWith": { "alias": "compareWith"; "required": false; }; "value": { "alias": "value"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; }; "errorStateMatcher": { "alias": "errorStateMatcher"; "required": false; }; "typeaheadDebounceInterval": { "alias": "typeaheadDebounceInterval"; "required": false; }; "sortComparator": { "alias": "sortComparator"; "required": false; }; "id": { "alias": "id"; "required": false; }; "panelWidth": { "alias": "panelWidth"; "required": false; }; "canSelectNullableOptions": { "alias": "canSelectNullableOptions"; "required": false; }; }, { "openedChange": "openedChange"; "_openedStream": "opened"; "_closedStream": "closed"; "selectionChange": "selectionChange"; "valueChange": "valueChange"; }, ["customTrigger", "options", "optionGroups"], ["mat-select-trigger", "*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelect, never>;
}

// @public
export const matSelectAnimations: {
    readonly transformPanelWrap: AnimationTriggerMetadata;
    readonly transformPanel: AnimationTriggerMetadata;
};

// @public
export class MatSelectChange {
    constructor(
    source: MatSelect,
    value: any);
    source: MatSelect;
    value: any;
}

// @public
export interface MatSelectConfig {
    canSelectNullableOptions?: boolean;
    disableOptionCentering?: boolean;
    hideSingleSelectionIndicator?: boolean;
    overlayPanelClass?: string | string[];
    panelWidth?: string | number | null;
    typeaheadDebounceInterval?: number;
}

// @public (undocumented)
export class MatSelectModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelectModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatSelectModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatSelectModule, never, [typeof i1.OverlayModule, typeof i2.MatOptionModule, typeof i2.MatCommonModule, typeof i3.MatSelect, typeof i3.MatSelectTrigger], [typeof i4.CdkScrollableModule, typeof i5.MatFormFieldModule, typeof i3.MatSelect, typeof i3.MatSelectTrigger, typeof i2.MatOptionModule, typeof i2.MatCommonModule]>;
}

// @public
export class MatSelectTrigger {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatSelectTrigger, "mat-select-trigger", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelectTrigger, never>;
}

export { MatSuffix }

// (No @packageDocumentation comment for this package)

```