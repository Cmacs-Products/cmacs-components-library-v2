import { OnInit, EventEmitter, AfterViewInit, TemplateRef, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { UtilService } from '../core/services/util.service';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import * as i0 from "@angular/core";
export declare class CmacsStatusDistributionComponent implements OnInit, AfterViewInit, OnChanges {
    private renderer;
    private elementRef;
    private util;
    columnTemplate: TemplateRef<{}>;
    legendContent: ElementRef<any>;
    clickMenu: EventEmitter<any>;
    view: number[];
    data: any[];
    columnsHeader: string[];
    displayArrowBtns: boolean;
    col2: number;
    col3: number;
    minWidth: number;
    chartWidth: number;
    showChart: boolean;
    scrollY: number;
    p: number;
    scroll: {
        x: string;
        y: string;
    };
    id: any;
    dataTable: any[];
    configurationExpandableRows: any;
    constructor(renderer: Renderer2, elementRef: ElementRef, util: UtilService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    resize(): void;
    setScroll(): void;
    scrollRight(): void;
    scrollLeft(): void;
    menuClick(type: WidgetActionType): void;
    setConfiguration(): void;
    setData(): void;
    drawCanvas(): void;
    showArrowBtns(): void;
    getDataTable(): any[];
    getConfiguration(): any;
    getChartImage(): string;
    static ɵfac: i0.ɵɵFactoryDef<CmacsStatusDistributionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsStatusDistributionComponent, "cmacs-status-distribution", never, { "view": "view"; "data": "data"; "columnsHeader": "columnsHeader"; }, { "clickMenu": "clickMenu"; }, never, never>;
}
//# sourceMappingURL=cmacs-status-distribution.component.d.ts.map