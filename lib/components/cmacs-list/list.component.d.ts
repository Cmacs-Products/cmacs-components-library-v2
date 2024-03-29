import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentInit, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzDirectionVHType, NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { NzListGrid } from './interface';
import { CmacsListFooterComponent, CmacsListLoadMoreDirective, CmacsListPaginationComponent } from './list-cell';
import * as i0 from "@angular/core";
export declare class CmacsListComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {
    private elementRef;
    private directionality;
    dataSource?: NzSafeAny[];
    bordered: boolean;
    grid?: NzListGrid | '';
    header?: string | TemplateRef<void>;
    footer?: string | TemplateRef<void>;
    itemLayout: NzDirectionVHType;
    classicGrid: boolean;
    renderItem: TemplateRef<void> | null;
    loading: boolean;
    loadMore: TemplateRef<void> | null;
    pagination?: TemplateRef<void>;
    size: NzSizeLDSType;
    split: boolean;
    noResult?: string | TemplateRef<void>;
    nzListFooterComponent: CmacsListFooterComponent;
    nzListPaginationComponent: CmacsListPaginationComponent;
    nzListLoadMoreDirective: CmacsListLoadMoreDirective;
    hasSomethingAfterLastItem: boolean;
    dir: Direction;
    private itemLayoutNotifySource;
    private destroy$;
    get itemLayoutNotify$(): Observable<NzDirectionVHType>;
    constructor(elementRef: ElementRef, directionality: Directionality);
    ngOnInit(): void;
    getSomethingAfterLastItem(): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsListComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsListComponent, "cmacs-list, [cmacs-list]", ["cmacsList"], { "dataSource": "dataSource"; "bordered": "bordered"; "grid": "grid"; "header": "header"; "footer": "footer"; "itemLayout": "itemLayout"; "classicGrid": "classicGrid"; "renderItem": "renderItem"; "loading": "loading"; "loadMore": "loadMore"; "pagination": "pagination"; "size": "size"; "split": "split"; "noResult": "noResult"; }, {}, ["nzListFooterComponent", "nzListPaginationComponent", "nzListLoadMoreDirective"], ["*", "cmacs-list-header", "cmacs-list-footer, [cmacs-list-footer]", "cmacs-list-load-more, [cmacs-list-load-more]", "cmacs-list-pagination, [cmacs-list-pagination]"]>;
}
//# sourceMappingURL=list.component.d.ts.map