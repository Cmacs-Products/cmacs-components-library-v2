/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, OnInit } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { DateHelperService, NzCalendarI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractTable } from './abstract-table';
import { DateBodyRow, DateCell } from './interface';
import * as i0 from "@angular/core";
export declare class DateTableComponent extends AbstractTable implements OnChanges, OnInit {
    private i18n;
    private dateHelper;
    locale: NzCalendarI18nInterface;
    showWeekCustom: boolean;
    constructor(i18n: NzI18nService, dateHelper: DateHelperService);
    private changeValueFromInside;
    makeHeadRow(): DateCell[];
    private getVeryShortWeekFormat;
    makeBodyRows(): DateBodyRow[];
    addCellProperty(cell: DateCell, date: CandyDate): void;
    getClassMap(cell: DateCell): {
        [key: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<DateTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateTableComponent, "date-table", ["dateTable"], { "locale": { "alias": "locale"; "required": false; }; "showWeekCustom": { "alias": "showWeekCustom"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=date-table.component.d.ts.map