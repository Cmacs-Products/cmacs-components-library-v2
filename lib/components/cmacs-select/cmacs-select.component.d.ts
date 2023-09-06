import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CmacsSelectTopControlComponent } from './cmacs-select-top-control.component';
import { CmacsOptionComponent } from './cmacs-option.component';
import { CmacsOptionGroupComponent } from "./cmacs-option-group.component";
import { CmacsSelectService } from "./cmacs-select.service";
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { CmacsDropdownPositionType, CmacsSelectModeType, CmacsSelectOptionInterface } from './cmacs-select.types';
import * as i0 from "@angular/core";
export declare class CmacsSelectComponent implements ControlValueAccessor, OnInit, OnChanges, AfterViewInit, OnDestroy, AfterContentInit {
    private renderer;
    nzSelectService: CmacsSelectService;
    private cdr;
    private focusMonitor;
    private platform;
    private elementRef;
    noAnimation?: NzNoAnimationDirective;
    nzOpen: boolean;
    _tagsOut: boolean;
    value: any | any[];
    searchValue: string;
    onChange: (value: string | string[]) => void;
    onTouched: () => void;
    private isReactiveDriven;
    dropDownPosition: CmacsDropdownPositionType;
    triggerWidth: number;
    private _disabled;
    private _cmacsOpen;
    private _autoFocus;
    private isInit;
    private destroy$;
    cdkOverlayOrigin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    selectTopControlComponent: CmacsSelectTopControlComponent;
    listOfCmacsOptionComponent: QueryList<CmacsOptionComponent>;
    listOfCmacsOptionGroupComponent: QueryList<CmacsOptionGroupComponent>;
    readonly cmacsOnSearch: EventEmitter<string>;
    readonly cmacsEditedInput: EventEmitter<string>;
    readonly scrollToBottom: EventEmitter<void>;
    readonly openChange: EventEmitter<boolean>;
    readonly cmacsBlur: EventEmitter<void>;
    readonly cmacsFocus: EventEmitter<void>;
    size: NzSizeLDSType;
    dropdownClassName: string;
    dropdownMatchSelectWidth: boolean;
    action: boolean;
    dropdownStyle: {
        [key: string]: string;
    };
    notFoundContent: string;
    notFoundContentShow: boolean;
    allowClear: boolean;
    open: boolean;
    showSearch: boolean;
    showCmacsSearch: boolean;
    showCustomSearch: boolean;
    loading: boolean;
    showSelectAll: boolean;
    placeHolder: string;
    maxTagCount: number;
    maxTagCountAuto: boolean;
    dropdownRender: TemplateRef<void>;
    suffixIcon: TemplateRef<void>;
    clearIcon: TemplateRef<void>;
    removeIcon: TemplateRef<void>;
    notFoundContentCustom: TemplateRef<void>;
    menuItemSelectedIcon: TemplateRef<void>;
    showArrow: boolean;
    tokenSeparators: string[];
    maxTagPlaceholder: TemplateRef<{
        $implicit: any[];
    }>;
    selectAllLabel: string;
    options: CmacsSelectOptionInterface[];
    set autoClearSearchValue(value: boolean);
    set maxMultipleCount(value: number);
    set serverSearch(value: boolean);
    set cmacsEditable(value: boolean);
    get cmacsEditable(): boolean;
    set userDropdown(value: boolean);
    get userDropdown(): boolean;
    set mode(value: CmacsSelectModeType);
    set filterOption(value: any);
    set tagsOut(value: boolean);
    set compareWith(value: (o1: any, o2: any) => boolean);
    set autoFocus(value: boolean);
    get autoFocus(): boolean;
    set cmacsOpen(value: boolean);
    get cmacsOpen(): boolean;
    set disabled(value: boolean);
    get disabled(): boolean;
    updateAutoFocus(): void;
    focus(): void;
    trackValue(_index: number, option: CmacsOptionComponent): any;
    blur(): void;
    removeSelectedValue(option: CmacsOptionComponent, e: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    toggleDropDown(): void;
    closeDropDown(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    updateCdkConnectedOverlayStatus(): void;
    updateCdkConnectedOverlayPositions(): void;
    constructor(renderer: Renderer2, nzSelectService: CmacsSelectService, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor, platform: Platform, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective);
    /** update ngModel -> update listOfSelectedValue **/
    writeValue(value: any | any[]): void;
    registerOnChange(fn: (value: string | string[]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    onSearch(value: string): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsSelectComponent, [null, null, null, null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsSelectComponent, "cmacs-select", ["cmacsSelect"], { "size": "size"; "dropdownClassName": "dropdownClassName"; "dropdownMatchSelectWidth": "dropdownMatchSelectWidth"; "action": "action"; "dropdownStyle": "dropdownStyle"; "notFoundContent": "notFoundContent"; "notFoundContentShow": "notFoundContentShow"; "allowClear": "allowClear"; "open": "open"; "showSearch": "showSearch"; "showCmacsSearch": "showCmacsSearch"; "showCustomSearch": "showCustomSearch"; "loading": "loading"; "showSelectAll": "showSelectAll"; "placeHolder": "placeHolder"; "maxTagCount": "maxTagCount"; "maxTagCountAuto": "maxTagCountAuto"; "dropdownRender": "dropdownRender"; "suffixIcon": "suffixIcon"; "clearIcon": "clearIcon"; "removeIcon": "removeIcon"; "notFoundContentCustom": "notFoundContentCustom"; "menuItemSelectedIcon": "menuItemSelectedIcon"; "showArrow": "showArrow"; "tokenSeparators": "tokenSeparators"; "maxTagPlaceholder": "maxTagPlaceholder"; "selectAllLabel": "selectAllLabel"; "options": "options"; "autoClearSearchValue": "autoClearSearchValue"; "maxMultipleCount": "maxMultipleCount"; "serverSearch": "serverSearch"; "cmacsEditable": "cmacsEditable"; "userDropdown": "userDropdown"; "mode": "mode"; "filterOption": "filterOption"; "tagsOut": "tagsOut"; "compareWith": "compareWith"; "autoFocus": "autoFocus"; "cmacsOpen": "cmacsOpen"; "disabled": "disabled"; }, { "cmacsOnSearch": "cmacsOnSearch"; "cmacsEditedInput": "cmacsEditedInput"; "scrollToBottom": "scrollToBottom"; "openChange": "openChange"; "cmacsBlur": "cmacsBlur"; "cmacsFocus": "cmacsFocus"; }, ["listOfCmacsOptionComponent", "listOfCmacsOptionGroupComponent"], ["*"]>;
}
//# sourceMappingURL=cmacs-select.component.d.ts.map