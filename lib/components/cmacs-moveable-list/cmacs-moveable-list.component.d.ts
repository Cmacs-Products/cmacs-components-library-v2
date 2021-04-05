import { EventEmitter, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from "@angular/forms";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsGridTemplateRef } from '../core/interfaces/grid-config';
import * as i0 from "@angular/core";
export interface MoveableListItem {
    display: string;
    hidden: boolean;
    editable: boolean;
    draggable: boolean;
    template?: CmacsGridTemplateRef;
}
export declare class CmacsMoveableListComponent implements OnDestroy, OnInit {
    private cdr;
    private i18n;
    private destroy$;
    header: string;
    showLabel: string;
    hideLabel: string;
    data: MoveableListItem[];
    dataChange: EventEmitter<MoveableListItem[]>;
    displayChange: EventEmitter<MoveableListItem>;
    selectedChange: EventEmitter<number>;
    onEditIdx: number;
    allowEdition: boolean;
    rowSelectedIdx: number;
    formControl: FormControl;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    handleClick(e: Event): void;
    drop(event: CdkDragDrop<string[]>): void;
    switchToEditMode(row: any, index: number): void;
    stopEdition(): void;
    select(index: number): void;
    hideShow(index: number): void;
    remove(idx: number): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsMoveableListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsMoveableListComponent, "cmacs-moveable-list", ["cmacsMoveableList"], { "header": "header"; "showLabel": "showLabel"; "hideLabel": "hideLabel"; "data": "data"; }, { "dataChange": "dataChange"; "displayChange": "displayChange"; "selectedChange": "selectedChange"; }, never, never>;
}
//# sourceMappingURL=cmacs-moveable-list.component.d.ts.map