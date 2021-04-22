/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { CandyDate } from 'ng-zorro-antd/core/time/candy-date';
export interface PanelSelector {
    className: string;
    title?: string;
    label: string;
    onClick(): void;
}
export interface DateCell {
    trackByIndex: NzSafeAny;
    value: Date;
    content: TemplateRef<Date> | string;
    onClick(): void;
    onMouseEnter(): void;
    isDisabled: boolean;
    isSelected: boolean;
    label?: string;
    title?: string;
    cellRender?: TemplateRef<Date> | string;
    fullCellRender?: TemplateRef<Date> | string;
    isToday?: boolean;
    classMap?: object;
    isStartSingle?: boolean;
    isEndSingle?: boolean | CandyDate;
    isSelectedStart?: boolean;
    isSelectedEnd?: boolean;
    isHoverStart?: boolean;
    isHoverEnd?: boolean;
    isInHoverRange?: boolean;
    isInSelectedRange?: boolean;
    isRangeStartNearHover?: boolean;
    isRangeEndNearHover?: boolean;
    isFirstCellInPanel?: boolean;
    isLastCellInPanel?: boolean;
}
export interface DateBodyRow {
    trackByIndex: NzSafeAny;
    dateCells: DateCell[];
    isActive?: boolean;
    weekNum?: number;
    classMap?: object;
}
export interface DecadeCell extends DateCell {
    isBiggerThanEnd?: boolean;
    isLowerThanStart?: boolean;
}
export interface YearCell extends DateCell {
    isSameDecade?: boolean;
}
//# sourceMappingURL=interface.d.ts.map