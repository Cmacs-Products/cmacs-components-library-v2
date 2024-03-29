import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, AfterViewInit, TemplateRef } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import 'jspdf-autotable';
import { GridConfig, Field, EditColumnAction, EditColumnEvent } from '../core/interfaces/grid-config';
import { GridExpConfig } from '../core/interfaces/grid-exp-config';
import { ExcelService } from '../core/services/excel.service';
import { CookieService } from 'ngx-cookie-service';
import { CheckboxSelect } from '../cmacs-table/cmacs-table.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { UntypedFormControl } from '@angular/forms';
import { CmacsInputNumberComponent } from '../cmacs-input-number/cmacs-input-number.component';
import { UtilService } from '../core/services/util.service';
import 'moment/locale/en-ie';
import { CmacsDateTimePickerComponent } from '../cmacs-datetime-picker/cmacs-datetime-picker.component';
import { SelectionModel } from '@angular/cdk/collections';
import { NzSizeMDSType } from 'ng-zorro-antd/core/types';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { CmacsContextMenuService } from '../cmacs-dropdown/context-menu.service';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CmacsCompactTableColumnTooltipComponent } from './components/cmacs-compact-table-column-tooltip/cmacs-compact-table-column-tooltip.component';
import * as i0 from "@angular/core";
export declare class CmacsCompactTableComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    private cdr;
    private i18n;
    private excelService;
    private deviceDetector;
    private datePipe;
    private nzDropdownService;
    private cookies;
    private utilService;
    /** local variables */
    locale: any;
    headerBottomStyle: {};
    private destroy$;
    selection: SelectionModel<any>;
    private _onresize$;
    onresizeobs: import("rxjs").Observable<any>;
    private _onsort$;
    onsortobs: import("rxjs").Observable<any>;
    dropdown: any;
    selected: boolean;
    phoneLocation: string;
    formPhoneControl: UntypedFormControl;
    editionOpTriggered: boolean;
    defaultSortOrder: any;
    checkboxCache: CheckboxSelect[];
    isIndeterminate: boolean;
    allChecked: boolean;
    editId: string | null;
    property: string | null;
    rowOnEdition: number;
    nodeOnEdition: any;
    mapOfExpandedData: {
        [key: string]: any[];
    };
    defaultTimeValue: Date;
    lastIdxSelected: any;
    fieldID: any;
    selectedColumnId: number;
    selectedMore: number;
    isAdvancedConfiguration: boolean;
    order: number;
    clicks: number;
    tapCount: number;
    addedOption: string;
    /** end local variables */
    /** input variables */
    size: NzSizeMDSType;
    showTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }>;
    pageSizeOptions: number[];
    virtualScroll: boolean;
    exclusiveSelect: boolean;
    logs: boolean;
    expandable: boolean;
    smartTable: boolean;
    draggable: boolean;
    virtualItemSize: number;
    expandAll: boolean;
    addColumn: boolean;
    loadingDelay: number;
    loadingIndicator: TemplateRef<void>;
    hasCookies: boolean;
    total: number;
    title: string | TemplateRef<void>;
    footer: string | TemplateRef<void>;
    noResult: string | TemplateRef<void>;
    widthConfig: string[];
    pageIndex: number;
    pageSize: number;
    actionColumnWidth: string;
    wrapLines: boolean;
    dropdownAddOptionTemplateRef: string | TemplateRef<void>;
    data: any[];
    config: GridConfig;
    use12Hours: boolean;
    configChange: EventEmitter<GridConfig>;
    fieldId: string;
    gridID: string;
    paginationPosition: 'top' | 'bottom' | 'both';
    scroll: {
        x?: string | null;
        y?: string | null;
    };
    nzItemRender: TemplateRef<{
        $implicit: 'page' | 'prev' | 'next';
        page: number;
    }>;
    frontPagination: boolean;
    templateMode: boolean;
    bordered: boolean;
    hideButtons: boolean;
    centerTable: boolean;
    showPagination: boolean;
    loading: boolean;
    showSizeChanger: boolean;
    hideOnSinglePage: boolean;
    showQuickJumper: boolean;
    simple: boolean;
    checkboxSelect: boolean;
    inLineEdit: boolean;
    dataTable: boolean;
    showRate: boolean;
    exportEvent: EventEmitter<GridExpConfig>;
    columnMenu: any;
    extra: string | TemplateRef<void>;
    contextmenu: string | TemplateRef<void>;
    indentSize: number;
    virtualMaxBufferPx: number;
    /** end input variables */
    /** output variables */
    buttonClick: EventEmitter<any>;
    rateChange: EventEmitter<any>;
    selectionChange: EventEmitter<any[]>;
    ondlclickRow: EventEmitter<any>;
    onclickRow: EventEmitter<any>;
    onclickHyperlink: EventEmitter<any>;
    onedit: EventEmitter<any>;
    onRowExpandCollapse: EventEmitter<any>;
    ondrop: EventEmitter<any>;
    rateCount: number;
    multiSelect: boolean;
    sortChange: EventEmitter<any>;
    filterChange: EventEmitter<any>;
    onrowdeleted: EventEmitter<any>;
    onrowadded: EventEmitter<any>;
    oncolumnadded: EventEmitter<any>;
    oneditcolumn: EventEmitter<EditColumnEvent>;
    onresize: EventEmitter<any>;
    oncontextmenu: EventEmitter<any>;
    onDropdownRender: EventEmitter<any>;
    onChangeAttachments: EventEmitter<string[]>;
    onclickChooseFile: EventEmitter<{
        row: any;
        indexCol: any;
    }>;
    /** end output variables */
    /** constructor */
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService, excelService: ExcelService, deviceDetector: DeviceDetectorService, datePipe: DatePipe, nzDropdownService: CmacsContextMenuService, cookies: CookieService, utilService: UtilService);
    /** view child variables */
    nzTableComponent: NzTableComponent<any>;
    inputElement: ElementRef;
    inputNumberElement: ElementRef;
    inputNumberComponent: CmacsInputNumberComponent;
    datePickerElement: ElementRef;
    dateTimePickerElement: ElementRef;
    selectElement: ElementRef;
    boolElement: ElementRef;
    dateTimePicker: CmacsDateTimePickerComponent;
    tooltipComponent: CmacsCompactTableColumnTooltipComponent;
    /** end view child variables */
    currentPhoneSelected(data: any, field: any): void;
    getPhoneFieldValue(data: any, field: any): UntypedFormControl;
    onCountryChange($event: any): void;
    hasPhoneNumberError(event: any, index: number, data?: any, property?: any, field?: Field): void;
    formatter: (value: number) => any;
    parser: (value: string) => any;
    defaultFormatter: (value: number) => number;
    defaultParser: (value: string) => string;
    oncontextmenuevt($event: any, item: any): void;
    openColumnMenu(idx: number): void;
    openColumnMore(idx: number): void;
    closeColumnMenu(): void;
    closeColumnMore(): void;
    onFieldChanged(idx: number, field: EditColumnAction): void;
    onFieldTapEllipsis(id: string): void;
    onDataTapEllipsis(id: string): void;
    getTooltipEllipsisTrigger(): "click" | "hover";
    isEllipsisActive(id: string, field: any): boolean;
    isTooltipActive(data: any, field: any): boolean;
    measureText(str: string, fontSize: number): number;
    getInputNumberValue(data: any, field: Field): any;
    getStringFieldValue(data: any, field: any): any;
    onResize(event: NzResizeEvent, col: string, field: Field): void;
    onResizeEvt({ width }: NzResizeEvent, col: string, field: Field): void;
    preventDefault($event: Event): void;
    contextMenu($event: MouseEvent, template: any, item?: any): void;
    validate(data: any, field: Field): boolean;
    /**
     * will loop thru every field in the configuration and set the custom validators depending on the validation rules
     * if no validation rule is present this will be ignored
     */
    setCustomValidators(): void;
    addRow(idx: number, $event?: any): void;
    addcolumn(idx: number): void;
    cmacsEditedInput(event: any): void;
    addOption(index: number, data?: any, property?: any, field?: Field): void;
    drop(event: CdkDragDrop<string[]>): void;
    deleteRow(idx: number, $event?: any): void;
    startEdit(id: string, property: string, event: MouseEvent, data: any): void;
    focusSelect(elem: any): void;
    sort($event: any, fieldProperty: string): void;
    filter($event: any, fieldProperty: string): void;
    getHeaderMaxWidth(field: Field): string;
    handleMouseDown(e: any): void;
    getCustomPadding(item: any, i: number): number;
    childOf(node: any, ancestor: any): boolean;
    endEditMode($event: KeyboardEvent, index: number, data?: any): void;
    endEditModeNgModel(index: number, data?: any, property?: any, field?: Field): void;
    ngModelChange(index: number, data?: any): void;
    getIndex(id: any): number;
    updateCheckboxCache(): void;
    updateCheckboxCacheTreeData(): void;
    clickHyperlink(data: string): void;
    convertExpandTreeToList(item: any, plainList: any[]): void;
    onButtonClick(field: any): void;
    onCheckboxChange($event: any, data: any): void;
    refreshCheckboxState(oninit?: boolean): void;
    checkCheckboxState(): CheckboxSelect[];
    onRateChange(count: number, data: any): void;
    onRateClick(event: any): void;
    getFields(): Field[];
    onCheckboxAllChange(status: boolean): void;
    getLabel(data: any, field: Field): string;
    isSelect(field: Field): boolean;
    isString(field: Field): boolean;
    isReadOnly(field: Field): boolean;
    isNumber(field: Field): boolean;
    isNull(value: any): boolean;
    isBoolean(field: any): boolean;
    isObject(value: any): boolean;
    isDate(field: Field): boolean;
    isTime(field: Field): boolean;
    isCeldTypeDefault(field: Field): boolean;
    isCeldTypeButton(field: Field): boolean;
    isCeldTypeTag(field: Field): boolean;
    isCeldTypeTemplateRef(field: Field): boolean;
    isCeldTypeHyperlink(field: Field): boolean;
    isPhone(field: Field): boolean;
    isAttachment(field: Field): boolean;
    isUndefined(value: any): boolean;
    isRowSelected(data: any): boolean;
    _onChangeAttachments(event: any, index: number, field: any): void;
    _onclickChooseFile(index: number, field: any): void;
    ngAfterViewInit(): void;
    disableSelectEventOnExpand(): void;
    getIndexCookie(): boolean;
    setFieldsDefault(): void;
    ngOnInit(): void;
    checkSortEvent(): void;
    checkResizeEvent(): void;
    ngOnChanges(changes: SimpleChanges): void;
    exportTreePdf(fileName: string): void;
    exportTreeToPdfRec(rows: any, data: any, offSetMargin?: number): void;
    convertTreeToList(root: any): any[];
    visitNode(node: any, hashMap: any, array: any[]): void;
    ExpandCollapse(array: any[], data: any, $event: boolean): void;
    collapseChildren(array: any[], data: any, $event: boolean): void;
    onCheckboxTreeChange($event: any, item: any, subtree?: any): void;
    updateTreeCheckboxes($event: boolean, array: any): void;
    refreshSubTreeCheckboxes(subtree: any): void;
    getNode(key: any): CheckboxSelect;
    exportToPng(fileName: string): void;
    exportToExcel(fileName: string): void;
    exportTreeExcel(fileName: string): void;
    exportTreeExcelRec(data: any, dataToExport: any): void;
    exportToPdf(config: any): void;
    ngOnDestroy(): void;
    clickRow(event: MouseEvent, data: any): void;
    selectRow(event: MouseEvent, data: any): void;
    removeSelection(data: any): void;
    selectMultiple(currentIdx: any): void;
    dblClickRow(data: any): void;
    tapHandler($event: any, data: any): void;
    clickBooleanCell(data: any, id: any, field: Field, index: number, $event: null): void;
    showViewModeTpl(field: any, item: any): boolean;
    showViewModeTplTree(field: any, data: any): boolean;
    showEditTpl(item: any, field: any): any;
    showEditTplTree(data: any, field: any): any;
    emitOnEditEvent(): void;
    getClassMap(field: Field): any;
    getCustomClass(field: Field): any;
    getMaxWidth(field: Field, item: any, i: number): string;
    getMaxWidthFieldViewMode(field: Field, i: number): string;
    getStickyWidth(position: any): string;
    getStickyWidthRight(position: any): string;
    getTableComponent(): NzTableComponent<any>;
    transformDate(date: any, dateFormat?: any): string;
    selectTreeSingle(item: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsCompactTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsCompactTableComponent, "cmacs-compact-table", ["cmacsCompactTable"], { "size": { "alias": "size"; "required": false; }; "showTotal": { "alias": "showTotal"; "required": false; }; "pageSizeOptions": { "alias": "pageSizeOptions"; "required": false; }; "virtualScroll": { "alias": "virtualScroll"; "required": false; }; "exclusiveSelect": { "alias": "exclusiveSelect"; "required": false; }; "logs": { "alias": "logs"; "required": false; }; "expandable": { "alias": "expandable"; "required": false; }; "smartTable": { "alias": "smartTable"; "required": false; }; "draggable": { "alias": "draggable"; "required": false; }; "virtualItemSize": { "alias": "virtualItemSize"; "required": false; }; "expandAll": { "alias": "expandAll"; "required": false; }; "addColumn": { "alias": "addColumn"; "required": false; }; "loadingDelay": { "alias": "loadingDelay"; "required": false; }; "loadingIndicator": { "alias": "loadingIndicator"; "required": false; }; "hasCookies": { "alias": "hasCookies"; "required": false; }; "total": { "alias": "total"; "required": false; }; "title": { "alias": "title"; "required": false; }; "footer": { "alias": "footer"; "required": false; }; "noResult": { "alias": "noResult"; "required": false; }; "widthConfig": { "alias": "widthConfig"; "required": false; }; "pageIndex": { "alias": "pageIndex"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "actionColumnWidth": { "alias": "actionColumnWidth"; "required": false; }; "wrapLines": { "alias": "wrapLines"; "required": false; }; "dropdownAddOptionTemplateRef": { "alias": "dropdownAddOptionTemplateRef"; "required": false; }; "data": { "alias": "data"; "required": false; }; "config": { "alias": "config"; "required": false; }; "use12Hours": { "alias": "use12Hours"; "required": false; }; "fieldId": { "alias": "fieldId"; "required": false; }; "gridID": { "alias": "gridID"; "required": false; }; "paginationPosition": { "alias": "paginationPosition"; "required": false; }; "scroll": { "alias": "scroll"; "required": false; }; "frontPagination": { "alias": "frontPagination"; "required": false; }; "templateMode": { "alias": "templateMode"; "required": false; }; "bordered": { "alias": "bordered"; "required": false; }; "hideButtons": { "alias": "hideButtons"; "required": false; }; "centerTable": { "alias": "centerTable"; "required": false; }; "showPagination": { "alias": "showPagination"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "showSizeChanger": { "alias": "showSizeChanger"; "required": false; }; "hideOnSinglePage": { "alias": "hideOnSinglePage"; "required": false; }; "showQuickJumper": { "alias": "showQuickJumper"; "required": false; }; "simple": { "alias": "simple"; "required": false; }; "checkboxSelect": { "alias": "checkboxSelect"; "required": false; }; "inLineEdit": { "alias": "inLineEdit"; "required": false; }; "dataTable": { "alias": "dataTable"; "required": false; }; "showRate": { "alias": "showRate"; "required": false; }; "exportEvent": { "alias": "exportEvent"; "required": false; }; "columnMenu": { "alias": "columnMenu"; "required": false; }; "extra": { "alias": "extra"; "required": false; }; "contextmenu": { "alias": "contextmenu"; "required": false; }; "indentSize": { "alias": "indentSize"; "required": false; }; "virtualMaxBufferPx": { "alias": "virtualMaxBufferPx"; "required": false; }; "rateCount": { "alias": "rateCount"; "required": false; }; "multiSelect": { "alias": "multiSelect"; "required": false; }; }, { "configChange": "configChange"; "buttonClick": "buttonClick"; "rateChange": "rateChange"; "selectionChange": "selectionChange"; "ondlclickRow": "ondlclickRow"; "onclickRow": "onclickRow"; "onclickHyperlink": "onclickHyperlink"; "onedit": "onedit"; "onRowExpandCollapse": "onRowExpandCollapse"; "ondrop": "ondrop"; "sortChange": "sortChange"; "filterChange": "filterChange"; "onrowdeleted": "onrowdeleted"; "onrowadded": "onrowadded"; "oncolumnadded": "oncolumnadded"; "oneditcolumn": "oneditcolumn"; "onresize": "onresize"; "oncontextmenu": "oncontextmenu"; "onDropdownRender": "onDropdownRender"; "onChangeAttachments": "onChangeAttachments"; "onclickChooseFile": "onclickChooseFile"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-compact-table.component.d.ts.map