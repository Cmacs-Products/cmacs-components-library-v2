import { EventEmitter, OnChanges, SimpleChanges, OnInit, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export interface CmacsConfigItemLoader {
    PropertyId: string;
    DisplayName: string;
    Required: boolean;
    MatchedColumn: string;
}
export declare class CmacsXlsxLoaderComponent implements OnInit, OnChanges, OnDestroy {
    private cdr;
    private i18n;
    private destroy$;
    headers: any[];
    data: any[];
    configuration: CmacsConfigItemLoader[];
    modalTitle: string;
    visible: boolean;
    saveBtnLabel: string;
    cancelBtnLabel: string;
    placeholder: string;
    cmacsStyle: {};
    files: any[];
    width: number | string;
    infoTemplate: ElementRef;
    configurationChange: EventEmitter<any>;
    onsave: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onVisibleChange($event: any): void;
    saveConfig(): void;
    handleCancel(): void;
    parseXlsx(): void;
    createHeaders(data: any): void;
    onSelectionChange($event: any, header: any): void;
    disableSaveBtn(): boolean;
    getLabel(config: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsXlsxLoaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsXlsxLoaderComponent, "cmacs-xlsx-loader", ["cmacsXlsxLoader"], { "configuration": { "alias": "configuration"; "required": false; }; "modalTitle": { "alias": "modalTitle"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "saveBtnLabel": { "alias": "saveBtnLabel"; "required": false; }; "cancelBtnLabel": { "alias": "cancelBtnLabel"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "cmacsStyle": { "alias": "cmacsStyle"; "required": false; }; "files": { "alias": "files"; "required": false; }; "width": { "alias": "width"; "required": false; }; "infoTemplate": { "alias": "infoTemplate"; "required": false; }; }, { "configurationChange": "configurationChange"; "onsave": "onsave"; "visibleChange": "visibleChange"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-xlsx-loader.component.d.ts.map