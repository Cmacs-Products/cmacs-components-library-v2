import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import { CandyDate, CompatibleValue, SingleValue } from 'ng-zorro-antd/core/time';
import { FunctionProp } from 'ng-zorro-antd/core/types';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { DatePickerService } from './date-picker.service';
import { CompatibleDate, DisabledDateFn, DisabledTimeFn, NzDateMode, PresetRanges, RangePartType, SupportTimeOptions } from './standard-types';
import * as i0 from "@angular/core";
export declare class DateRangePopupComponent implements OnInit, OnChanges, OnDestroy {
    datePickerService: DatePickerService;
    cdr: ChangeDetectorRef;
    isRange: boolean;
    showWeek: boolean;
    showWeekCustom: boolean;
    locale: NzCalendarI18nInterface | undefined;
    disabledDate?: DisabledDateFn;
    disabledTime?: DisabledTimeFn;
    showToday: boolean;
    showNow: boolean;
    showTime: SupportTimeOptions | boolean;
    extraFooter?: TemplateRef<void> | string;
    ranges?: PresetRanges;
    dateRender?: string | TemplateRef<Date> | FunctionProp<TemplateRef<Date> | string>;
    panelMode: NzDateMode | NzDateMode[];
    defaultPickerValue: CompatibleDate | undefined | null;
    readonly panelModeChange: EventEmitter<"time" | "month" | "year" | "date" | "decade" | "week" | NzDateMode[]>;
    readonly calendarChange: EventEmitter<CompatibleValue>;
    readonly resultOk: EventEmitter<void>;
    dir: Direction;
    prefixCls: string;
    endPanelMode: NzDateMode | NzDateMode[];
    timeOptions: SupportTimeOptions | SupportTimeOptions[] | null;
    hoverValue: SingleValue[];
    checkedPartArr: boolean[];
    destroy$: Subject<unknown>;
    get hasTimePicker(): boolean;
    get hasFooter(): boolean;
    constructor(datePickerService: DatePickerService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    updateActiveDate(): void;
    init(): void;
    /**
     * Prevent input losing focus when click panel
     * @param event
     */
    onMousedown(event: MouseEvent): void;
    onClickOk(): void;
    onClickToday(value: CandyDate): void;
    onCellHover(value: CandyDate): void;
    onPanelModeChange(mode: NzDateMode, partType?: RangePartType): void;
    onActiveDateChange(value: CandyDate, partType: RangePartType): void;
    onSelectTime(value: CandyDate, partType?: RangePartType): void;
    changeValueFromSelect(value: CandyDate, emitValue?: boolean): void;
    reversedPart(part: RangePartType): RangePartType;
    getPanelMode(panelMode: NzDateMode | NzDateMode[], partType?: RangePartType): NzDateMode;
    getValue(partType?: RangePartType): CandyDate;
    getActiveDate(partType?: RangePartType): CandyDate;
    disabledStartTime: DisabledTimeFn;
    disabledEndTime: DisabledTimeFn;
    isOneAllowed(selectedValue: SingleValue[]): boolean;
    isBothAllowed(selectedValue: SingleValue[]): boolean;
    isAllowed(value: CompatibleValue, isBoth?: boolean): boolean;
    getTimeOptions(partType?: RangePartType): SupportTimeOptions | null;
    onClickPresetRange(val: PresetRanges[keyof PresetRanges]): void;
    onPresetRangeMouseLeave(): void;
    onHoverPresetRange(val: PresetRanges[keyof PresetRanges]): void;
    getObjectKeys(obj?: PresetRanges): string[];
    show(partType: RangePartType): boolean;
    private clearHoverValue;
    private buildTimeOptions;
    private overrideTimeOptions;
    private overrideHms;
    static ɵfac: i0.ɵɵFactoryDef<DateRangePopupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DateRangePopupComponent, "date-range-popup", ["dateRangePopup"], { "isRange": "isRange"; "showWeek": "showWeek"; "showWeekCustom": "showWeekCustom"; "locale": "locale"; "disabledDate": "disabledDate"; "disabledTime": "disabledTime"; "showToday": "showToday"; "showNow": "showNow"; "showTime": "showTime"; "extraFooter": "extraFooter"; "ranges": "ranges"; "dateRender": "dateRender"; "panelMode": "panelMode"; "defaultPickerValue": "defaultPickerValue"; "dir": "dir"; }, { "panelModeChange": "panelModeChange"; "calendarChange": "calendarChange"; "resultOk": "resultOk"; }, never, never>;
}
//# sourceMappingURL=date-range-popup.component.d.ts.map