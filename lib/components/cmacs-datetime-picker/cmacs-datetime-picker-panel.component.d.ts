import { ChangeDetectorRef, DebugElement, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TimeHolder } from './time-holder';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export type NzTimePickerUnit = 'hour' | 'minute' | 'second' | '12-hour';
export declare class CmacsDatetimePickerPanelComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {
    private cdr;
    dateHelper: DateHelperService;
    private elementRef;
    private _nzHourStep;
    private _nzMinuteStep;
    private _nzSecondStep;
    private unsubscribe$;
    private onChange?;
    private onTouch?;
    private _format;
    private _disabledHours?;
    private _disabledMinutes?;
    private _disabledSeconds?;
    private _allowEmpty;
    time: TimeHolder;
    hourEnabled: boolean;
    minuteEnabled: boolean;
    secondEnabled: boolean;
    firstScrolled: boolean;
    enabledColumns: number;
    hourRange: ReadonlyArray<{
        index: number;
        disabled: boolean;
    }>;
    minuteRange: ReadonlyArray<{
        index: number;
        disabled: boolean;
    }>;
    secondRange: ReadonlyArray<{
        index: number;
        disabled: boolean;
    }>;
    use12HoursRange: ReadonlyArray<{
        index: number;
        value: string;
    }>;
    hours: number;
    seconds: number;
    minutes: number;
    range: any;
    hourListElement?: DebugElement;
    minuteListElement?: DebugElement;
    secondListElement?: DebugElement;
    use12HoursListElement?: DebugElement;
    nzInDatePicker: boolean;
    nzAddOn?: TemplateRef<void>;
    nzHideDisabledOptions: boolean;
    nzClearText?: string;
    nzNowText?: string;
    nzOkText?: string;
    nzPlaceHolder?: string | null;
    nzUse12Hours: boolean;
    hideSeconds: boolean;
    nzDefaultOpenValue?: Date;
    readonly closePanel: EventEmitter<void>;
    set nzAllowEmpty(value: boolean);
    get nzAllowEmpty(): boolean;
    set nzDisabledHours(value: undefined | (() => number[]));
    get nzDisabledHours(): undefined | (() => number[]);
    set nzDisabledMinutes(value: undefined | ((hour: number) => number[]));
    get nzDisabledMinutes(): undefined | ((hour: number) => number[]);
    set nzDisabledSeconds(value: undefined | ((hour: number, minute: number) => number[]));
    get nzDisabledSeconds(): undefined | ((hour: number, minute: number) => number[]);
    set format(value: string);
    get format(): string;
    set nzHourStep(value: number);
    get nzHourStep(): number;
    set nzMinuteStep(value: number);
    get nzMinuteStep(): number;
    set nzSecondStep(value: number);
    get nzSecondStep(): number;
    trackByFn(index: number): number;
    buildHours(): void;
    buildMinutes(): void;
    buildSeconds(): void;
    build12Hours(): void;
    get defaultHours(): number;
    get defaultMinutes(): number;
    get defaultSeconds(): number;
    get default12Hours(): string;
    buildTimes(): void;
    select12Hours(value: string): void;
    scrollToTime(delay?: number): void;
    selectHour(hour: {
        index: number;
        disabled: boolean;
    }): void;
    selectMinute(minute: {
        index: number;
        disabled: boolean;
    }): void;
    selectSecond(second: {
        index: number;
        disabled: boolean;
    }): void;
    scrollToSelected(instance: HTMLElement, index: number, duration: number, unit: NzTimePickerUnit): void;
    translateIndex(index: number, unit: NzTimePickerUnit): number;
    scrollTo(element: HTMLElement, to: number, duration: number): void;
    calcIndex(array: number[] | undefined, index: number): number;
    protected changed(): void;
    protected touched(): void;
    timeDisabled(value: Date): boolean;
    onClickNow(): void;
    onClickOk(): void;
    isSelectedHour(hour: {
        index: number;
        disabled: boolean;
    }): boolean;
    isSelectedMinute(minute: {
        index: number;
        disabled: boolean;
    }): boolean;
    isSelectedSecond(second: {
        index: number;
        disabled: boolean;
    }): boolean;
    isSelected12Hours(value: {
        index: number;
        value: string;
    }): boolean;
    constructor(cdr: ChangeDetectorRef, dateHelper: DateHelperService, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: Date): void;
    registerOnChange(fn: (value: Date) => void): void;
    registerOnTouched(fn: () => void): void;
    /**
     * Prevent input losing focus when click panel
     * @param event
     */
    onMousedown(event: MouseEvent): void;
    updateTime($event: any, type: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsDatetimePickerPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsDatetimePickerPanelComponent, "cmacs-datetime-picker-panel", ["cmacsDateTimePickerPanel"], { "nzInDatePicker": { "alias": "nzInDatePicker"; "required": false; }; "nzAddOn": { "alias": "nzAddOn"; "required": false; }; "nzHideDisabledOptions": { "alias": "nzHideDisabledOptions"; "required": false; }; "nzClearText": { "alias": "nzClearText"; "required": false; }; "nzNowText": { "alias": "nzNowText"; "required": false; }; "nzOkText": { "alias": "nzOkText"; "required": false; }; "nzPlaceHolder": { "alias": "nzPlaceHolder"; "required": false; }; "nzUse12Hours": { "alias": "nzUse12Hours"; "required": false; }; "hideSeconds": { "alias": "hideSeconds"; "required": false; }; "nzDefaultOpenValue": { "alias": "nzDefaultOpenValue"; "required": false; }; "nzAllowEmpty": { "alias": "nzAllowEmpty"; "required": false; }; "nzDisabledHours": { "alias": "nzDisabledHours"; "required": false; }; "nzDisabledMinutes": { "alias": "nzDisabledMinutes"; "required": false; }; "nzDisabledSeconds": { "alias": "nzDisabledSeconds"; "required": false; }; "format": { "alias": "format"; "required": false; }; "nzHourStep": { "alias": "nzHourStep"; "required": false; }; "nzMinuteStep": { "alias": "nzMinuteStep"; "required": false; }; "nzSecondStep": { "alias": "nzSecondStep"; "required": false; }; }, { "closePanel": "closePanel"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-datetime-picker-panel.component.d.ts.map