import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput, OnChangeType, OnTouchedType, NzSizeDSType } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class CmacsSwitchComponent implements ControlValueAccessor, AfterViewInit, OnDestroy, OnInit {
    nzConfigService: NzConfigService;
    private cdr;
    private focusMonitor;
    private directionality;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_loading: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_control: BooleanInput;
    isChecked: boolean;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    private switchElement?;
    loading: boolean;
    disabled: boolean;
    control: boolean;
    checkedChildren: string | TemplateRef<void> | null;
    unCheckedChildren: string | TemplateRef<void> | null;
    size: NzSizeDSType;
    dir: Direction;
    private destroy$;
    onHostClick(e: MouseEvent): void;
    updateValue(value: boolean): void;
    onKeyDown(e: KeyboardEvent): void;
    focus(): void;
    blur(): void;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor, directionality: Directionality);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(disabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsSwitchComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsSwitchComponent, "cmacs-switch", ["cmacsSwitch"], { "loading": { "alias": "loading"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "control": { "alias": "control"; "required": false; }; "checkedChildren": { "alias": "checkedChildren"; "required": false; }; "unCheckedChildren": { "alias": "unCheckedChildren"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=switch.component.d.ts.map