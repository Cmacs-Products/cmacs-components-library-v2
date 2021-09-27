import { __decorate } from "tslib";
import { Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ngx-device-detector";
import * as i2 from "@angular/common";
import * as i3 from "@angular/cdk/drag-drop";
import * as i4 from "ngx-perfect-scrollbar";
import * as i5 from "../cmacs-button/cmacs-button.component";
import * as i6 from "ng-zorro-antd/grid";
function CmacsKanbanComponent_div_4_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 21);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r9.columnHeaderCollapsedTemplate);
} }
function CmacsKanbanComponent_div_4_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(column_r1.name);
} }
const _c0 = function (a0) { return { column: a0 }; };
function CmacsKanbanComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("click", function CmacsKanbanComponent_div_4_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r14); const column_r1 = i0.ɵɵnextContext().$implicit; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.columnExpand(column_r1); });
    i0.ɵɵelementStart(1, "button", 15);
    i0.ɵɵelement(2, "i", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 17);
    i0.ɵɵtemplate(4, CmacsKanbanComponent_div_4_div_1_ng_container_4_Template, 1, 1, "ng-container", 18);
    i0.ɵɵtemplate(5, CmacsKanbanComponent_div_4_div_1_div_5_Template, 3, 1, "div", 19);
    i0.ɵɵelement(6, "div", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.columnHeaderCollapsedTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, column_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.columnHeaderCollapsedTemplate);
} }
function CmacsKanbanComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r3.columnHeaderTemplate);
} }
function CmacsKanbanComponent_div_4_div_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function CmacsKanbanComponent_div_4_div_3_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const column_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.columnCollapse(column_r1); });
    i0.ɵɵelement(1, "i", 30);
    i0.ɵɵelementEnd();
} }
function CmacsKanbanComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵelementStart(2, "div", 26);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 27);
    i0.ɵɵtemplate(5, CmacsKanbanComponent_div_4_div_3_button_5_Template, 2, 0, "button", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(column_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.showShrink);
} }
function CmacsKanbanComponent_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 31);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r5.subHeader);
} }
function CmacsKanbanComponent_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 31);
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r6.getActionPanel(column_r1.id));
} }
function CmacsKanbanComponent_div_4_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0, a1) { return { item: a0, columnId: a1 }; };
function CmacsKanbanComponent_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵlistener("cdkDragStarted", function CmacsKanbanComponent_div_4_div_8_Template_div_cdkDragStarted_0_listener() { i0.ɵɵrestoreView(_r26); const column_r1 = i0.ɵɵnextContext().$implicit; const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.setDragStartedColumn(column_r1); })("click", function CmacsKanbanComponent_div_4_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r26); const item_r22 = ctx.$implicit; const column_r1 = i0.ɵɵnextContext().$implicit; const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.clickItem(item_r22, column_r1.id); })("dblclick", function CmacsKanbanComponent_div_4_div_8_Template_div_dblclick_0_listener() { i0.ɵɵrestoreView(_r26); const item_r22 = ctx.$implicit; const column_r1 = i0.ɵɵnextContext().$implicit; const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.dblclickItem(item_r22, column_r1.id); });
    i0.ɵɵtemplate(1, CmacsKanbanComponent_div_4_div_8_ng_container_1_Template, 1, 0, "ng-container", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("task-selected", ctx_r7.isItemSelected(item_r22.id));
    i0.ɵɵproperty("cdkDragData", item_r22)("cdkDragDisabled", item_r22.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.getItemTemplate(column_r1.id))("ngTemplateOutletContext", i0.ɵɵpureFunction2(6, _c1, item_r22, column_r1.id));
} }
function CmacsKanbanComponent_div_4_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 34);
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r8.getDescriptionPanel(column_r1.id));
} }
function CmacsKanbanComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, CmacsKanbanComponent_div_4_div_1_Template, 7, 5, "div", 6);
    i0.ɵɵtemplate(2, CmacsKanbanComponent_div_4_ng_container_2_Template, 1, 1, "ng-container", 7);
    i0.ɵɵtemplate(3, CmacsKanbanComponent_div_4_div_3_Template, 6, 2, "div", 8);
    i0.ɵɵtemplate(4, CmacsKanbanComponent_div_4_ng_container_4_Template, 1, 1, "ng-container", 9);
    i0.ɵɵtemplate(5, CmacsKanbanComponent_div_4_ng_container_5_Template, 1, 1, "ng-container", 9);
    i0.ɵɵelementStart(6, "perfect-scrollbar", 10);
    i0.ɵɵelementStart(7, "div", 11);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsKanbanComponent_div_4_Template_div_cdkDropListDropped_7_listener($event) { i0.ɵɵrestoreView(_r34); const column_r1 = ctx.$implicit; const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.drop($event, column_r1.id); });
    i0.ɵɵtemplate(8, CmacsKanbanComponent_div_4_div_8_Template, 2, 9, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CmacsKanbanComponent_div_4_ng_container_9_Template, 1, 1, "ng-container", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("collapsed", column_r1.collapsed);
    i0.ɵɵproperty("ngStyle", ctx_r0.columnStyle(column_r1.collapsed))("ngClass", column_r1.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r1.collapsed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.columnHeaderTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(18, _c0, column_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.columnHeaderTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.subHeader)("ngTemplateOutletContext", i0.ɵɵpureFunction1(20, _c0, column_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.getActionPanel(column_r1.id))("ngTemplateOutletContext", i0.ɵɵpureFunction1(22, _c0, column_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r0.verticalScrollStyle())("ngStyle", ctx_r0.verticalScrollStyle());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkDropListData", column_r1.items);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", column_r1.items);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.getDescriptionPanel(column_r1.id))("ngTemplateOutletContext", i0.ɵɵpureFunction1(24, _c0, column_r1));
} }
export class CmacsKanbanComponent {
    constructor(deviceDetector) {
        this.deviceDetector = deviceDetector;
        this.multiselect = false;
        /**
         * Template for items to render. "item" object ist passed (see examples)
         * itemTemplate is for each column
         * itemTemplates is for change the template of a column
         */
        this.itemTemplate = null;
        this.itemTemplates = null;
        /** Template for column headers. Current groupName will be passed (see examples) */
        this.columnHeaderTemplate = null;
        /** Template for column headers. Current groupName will be passed (see examples) */
        this.columnHeaderCollapsedTemplate = null;
        /** Shrink columns */
        this.showShrink = false;
        // scrolling
        this.hasVerticalScroll = false;
        this.heightContainer = '500px';
        /** Templates for actions and description panels  */
        this.actionPanelTemplates = null;
        this.descriptionPanelTemplates = null;
        // subheader
        this.subHeader = null;
        this.draggedItem = new EventEmitter();
        this.noDraggedItem = new EventEmitter();
        this.onclickItem = new EventEmitter();
        this.ondblclickItem = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.onColumnExpand = new EventEmitter();
        this.selectedItems = [];
        this.dragStartedColumn = null;
        this.mobile = false;
        this.mobile = deviceDetector.isMobile() || deviceDetector.isTablet();
    }
    ngOnInit() {
    }
    getItemTemplate(id) {
        if (this.actionPanelTemplates) {
            const elem = this.itemTemplates.find(i => i.id === id);
            if (elem) {
                return elem.template;
            }
        }
        return this.itemTemplate;
    }
    getActionPanel(id) {
        if (this.actionPanelTemplates == null) {
            return null;
        }
        const elem = this.actionPanelTemplates.find(d => d.id === id);
        return elem ? elem.template : null;
    }
    getDescriptionPanel(id) {
        if (this.descriptionPanelTemplates == null) {
            return null;
        }
        const elem = this.descriptionPanelTemplates.find(d => d.id === id);
        return elem ? elem.template : null;
    }
    verticalScrollStyle() {
        return (this.hasVerticalScroll) ? { height: this.heightContainer } : {};
    }
    boardStyle() {
        return (this.hasVerticalScroll) ? { 'min-height': this.heightContainer } : {};
    }
    columnStyle(collapsed) {
        return (this.columnWidth && !collapsed) ? { minWidth: this.columnWidth } : {};
    }
    columnExpand(column) {
        column.collapsed = false;
        this.onColumnExpand.emit(column);
    }
    columnCollapse(column) {
        column.collapsed = true;
    }
    setDragStartedColumn(col) {
        this.dragStartedColumn = col;
    }
    drop(event, columnId) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            this.emitDroppedItem(event.item.data, columnId);
        }
        else {
            if (!this.dragStartedColumn.disabledDrop || !this.dragStartedColumn.disabledDrop.some(id => id === columnId)) {
                if (this.itemType === 'custom' && !event.item.data.data.isEditable) {
                    this.noDraggedItem.emit(event.item.data);
                    this.dragStartedColumn = null;
                    return;
                }
                transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                this.emitDroppedItem(event.item.data, columnId);
            }
            else {
                this.noDraggedItem.emit(event.item.data);
            }
        }
        this.dragStartedColumn = null;
    }
    emitDroppedItem(data, columnId) {
        data.columnId = columnId;
        this.draggedItem.emit(data);
    }
    clickItem(item, columnId) {
        item.columnId = columnId;
        this.onclickItem.emit(item);
        // add or remove elements to selected items
        if (!item.disabled) {
            const idx = this.selectedItems.findIndex(elem => elem.id === item.id);
            if (idx === -1) {
                if (!this.multiselect) {
                    this.selectedItems = [];
                }
                this.selectedItems.push(item);
            }
            else {
                this.selectedItems.splice(idx, 1);
            }
            this.selectionChange.emit(this.selectedItems);
        }
    }
    dblclickItem(item, columnId) {
        item.columnId = columnId;
        this.ondblclickItem.emit(item);
    }
    isItemSelected(id) {
        return this.selectedItems.some(elem => elem.id === id);
    }
}
CmacsKanbanComponent.ɵfac = function CmacsKanbanComponent_Factory(t) { return new (t || CmacsKanbanComponent)(i0.ɵɵdirectiveInject(i1.DeviceDetectorService)); };
CmacsKanbanComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsKanbanComponent, selectors: [["cmacs-kanban"]], inputs: { board: "board", multiselect: "multiselect", itemTemplate: "itemTemplate", itemTemplates: "itemTemplates", columnHeaderTemplate: "columnHeaderTemplate", columnHeaderCollapsedTemplate: "columnHeaderCollapsedTemplate", showShrink: "showShrink", hasVerticalScroll: "hasVerticalScroll", heightContainer: "heightContainer", actionPanelTemplates: "actionPanelTemplates", descriptionPanelTemplates: "descriptionPanelTemplates", columnWidth: "columnWidth", itemType: "itemType", subHeader: "subHeader" }, outputs: { draggedItem: "draggedItem", noDraggedItem: "noDraggedItem", onclickItem: "onclickItem", ondblclickItem: "ondblclickItem", selectionChange: "selectionChange", onColumnExpand: "onColumnExpand" }, exportAs: ["cmacsKanban"], decls: 5, vars: 2, consts: [[1, "root"], [1, "board", 3, "ngStyle"], [1, "board-wrapper"], ["cdkDropListGroup", "", 1, "board-columns"], ["class", "board-column", 3, "ngStyle", "ngClass", "collapsed", 4, "ngFor", "ngForOf"], [1, "board-column", 3, "ngStyle", "ngClass"], ["class", "column-header-collapsed", 3, "click", 4, "ngIf"], ["class", "column-header-template", 3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-row", "", "class", "column-header", 4, "ngIf"], ["class", "column-action-panel", 3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-kanban-scrollbar", 3, "ngStyle"], ["id", "tasks-container", "cdkDropList", "", 1, "tasks-container", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "task", "cdkDrag", "", 3, "cdkDragData", "cdkDragDisabled", "task-selected", "cdkDragStarted", "click", "dblclick", 4, "ngFor", "ngForOf"], ["class", "column-description-panel", 3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-header-collapsed", 3, "click"], ["cmacs-button", "", "role", "button", "aria-label", "expand", 2, "padding", "8px"], [1, "iconArrowLarge-Expand"], [1, "column-header-collapsed-line", "column-header-collapsed-line-1"], [3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "column-header-collapsed-text", 4, "ngIf"], [1, "column-header-collapsed-line", "column-header-collapsed-line-2"], [3, "ngIf"], [1, "column-header-collapsed-text"], [1, "column-header-template", 3, "ngIf"], ["nz-row", "", 1, "column-header"], ["nz-col", "", "nzSpan", "18"], [1, "column-title"], ["nz-col", "", "nzSpan", "6", 1, "header-actions"], ["role", "button", "aria-label", "collapse", "cmacs-button", "", "class", "column-shrink", "ghost", "", 3, "click", 4, "ngIf"], ["role", "button", "aria-label", "collapse", "cmacs-button", "", "ghost", "", 1, "column-shrink", 3, "click"], [1, "iconArrowLarge-Collapse"], [1, "column-action-panel", 3, "ngIf"], ["cdkDrag", "", 1, "task", 3, "cdkDragData", "cdkDragDisabled", "cdkDragStarted", "click", "dblclick"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-description-panel", 3, "ngIf"]], template: function CmacsKanbanComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, CmacsKanbanComponent_div_4_Template, 10, 26, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", ctx.boardStyle());
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.board.columns);
    } }, directives: [i2.NgStyle, i3.CdkDropListGroup, i2.NgForOf, i2.NgClass, i2.NgIf, i2.NgTemplateOutlet, i4.PerfectScrollbarComponent, i3.CdkDropList, i5.CmacsButtonComponent, i6.NzRowDirective, i6.NzColDirective, i3.CdkDrag], styles: [".cmacs-kanban-scrollbar .ps__rail-y{display:block!important;opacity:1!important;width:15px!important;background-color:transparent!important}.cmacs-kanban-scrollbar .ps.ps--active-y .ps-content{padding-right:15px}.cmacs-kanban-scrollbar .ps__thumb-y{display:block!important;opacity:1!important;width:7px!important;background-color:#cfd3d9!important}.root{height:100%}.board,.root{display:flex;flex-direction:column}.board{flex-grow:1;min-width:0;min-height:0}.board-name{font-size:20px;font-weight:700}.board-wrapper{overflow-x:auto}.board-column,.board-columns,.board-wrapper{display:flex;flex-grow:1}.board-column{flex-direction:column;flex-basis:0;border-radius:4px}.board-column:not(:first-child){margin-left:0}.column-header{padding:12px 15px 10px;font-family:Roboto-Regular;line-height:1;border-left:1px solid #dee0e5;box-shadow:0 3px 7px -3px rgba(5,6,6,.18);margin-bottom:10px}.column-title{text-transform:capitalize;color:#656c79;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:calc(100% - 82px);display:inline-block}.column-title-items{color:#97a0ae!important;font-size:12px!important;font-family:Roboto-Medium!important}.column-shrink{height:20px!important;width:20px;padding-right:0!important;padding-left:0!important;margin-left:5px;float:right}.tasks-container{flex-grow:1;overflow-y:auto;margin-bottom:2px;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.board-wrapper::-webkit-scrollbar,.tasks-container::-webkit-scrollbar{-webkit-appearance:none;width:7px;height:7px;-webkit-overflow-scrolling:auto}.board-wrapper::-webkit-scrollbar-thumb,.tasks-container::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}.board-wrapper::-webkit-scrollbar-thumb:hover,.tasks-container::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}.task{display:flex;position:relative}.task.cdk-drag-preview{opacity:.9}.task-selected{border-color:#2a7cff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.board-column.collapsed{min-width:37px!important;padding:0;margin:0 10px;flex-basis:0;flex-grow:0}.board-column.collapsed .column-action-panel,.board-column.collapsed .column-description-panel,.board-column.collapsed .column-header,.board-column.collapsed .column-header-template,.board-column.collapsed .tasks-container{display:none}.column-header-collapsed{display:contents;height:100%}.column-header-collapsed-line{background-color:#acb3bf;width:1px;margin:0 auto}.column-header-collapsed-line-1{margin-top:14px;margin-bottom:14px;height:25px}.column-header-collapsed-line-2{margin-top:14px;height:inherit}.column-header-collapsed-text{transform:none;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;margin:0 0 0 10px;text-transform:capitalize;color:#656c79;font-size:14px;font-weight:500;font-family:Roboto-Medium;display:table}.column-header-collapsed-text>*{display:table-cell;white-space:nowrap}.column-header .column-shrink{display:block}.column-shrink,.header-actions{height:100%!important}.column-shrink i{font-size:17px!important}"], encapsulation: 2 });
__decorate([
    InputBoolean()
], CmacsKanbanComponent.prototype, "multiselect", void 0);
__decorate([
    InputBoolean()
], CmacsKanbanComponent.prototype, "showShrink", void 0);
__decorate([
    InputBoolean()
], CmacsKanbanComponent.prototype, "hasVerticalScroll", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKanbanComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-kanban',
                exportAs: 'cmacsKanban',
                templateUrl: './cmacs-kanban.component.html',
                styleUrls: ['./cmacs-kanban.component.css'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.DeviceDetectorService }]; }, { board: [{
            type: Input
        }], multiselect: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }], itemTemplates: [{
            type: Input
        }], columnHeaderTemplate: [{
            type: Input
        }], columnHeaderCollapsedTemplate: [{
            type: Input
        }], showShrink: [{
            type: Input
        }], hasVerticalScroll: [{
            type: Input
        }], heightContainer: [{
            type: Input
        }], actionPanelTemplates: [{
            type: Input
        }], descriptionPanelTemplates: [{
            type: Input
        }], columnWidth: [{
            type: Input
        }], itemType: [{
            type: Input
        }], subHeader: [{
            type: Input
        }], draggedItem: [{
            type: Output
        }], noDraggedItem: [{
            type: Output
        }], onclickItem: [{
            type: Output
        }], ondblclickItem: [{
            type: Output
        }], selectionChange: [{
            type: Output
        }], onColumnExpand: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta2FuYmFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rYW5iYW4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rYW5iYW4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUdwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7SUNBekMsNEJBQWtKOzs7SUFBcEksMkRBQXNDOzs7SUFDcEQsK0JBQWlGO0lBQy9FLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUNoQyxpQkFBTTs7O0lBREUsZUFBaUI7SUFBakIsb0NBQWlCOzs7OztJQVAzQiwrQkFBNkY7SUFBL0IseVBBQThCO0lBQzFGLGtDQUE2RTtJQUMzRSx3QkFBcUM7SUFDdkMsaUJBQVM7SUFDVCwwQkFBK0U7SUFDL0Usb0dBQWtKO0lBQ2xKLGtGQUVNO0lBQ04sMEJBQStFO0lBQ2pGLGlCQUFNOzs7O0lBTGtELGVBQWlEO0lBQWpELHVFQUFpRCxrRUFBQTtJQUNqRyxlQUFvQztJQUFwQyw0REFBb0M7OztJQU81Qyw0QkFBK0o7OztJQUFsSCxrREFBNkI7Ozs7SUFPdEUsa0NBQXlJO0lBQWpDLHdRQUFnQztJQUN0SSx3QkFBdUM7SUFDekMsaUJBQVM7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dUIxQztJQUFmLFlBQVksRUFBRTt5REFBcUI7QUFpQnBCO0lBQWYsWUFBWSxFQUFFO3dEQUFvQjtBQUduQjtJQUFmLFlBQVksRUFBRTsrREFBMkI7dUZBeEIxQyxvQkFBb0I7Y0FSaEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3hDO3dFQUtZLEtBQUs7a0JBQWIsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBT0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFHRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFHRyw2QkFBNkI7a0JBQXJDLEtBQUs7WUFHbUIsVUFBVTtrQkFBbEMsS0FBSztZQUdtQixpQkFBaUI7a0JBQXpDLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBR0csb0JBQW9CO2tCQUE1QixLQUFLO1lBQ0cseUJBQXlCO2tCQUFqQyxLQUFLO1lBR0csV0FBVztrQkFBbkIsS0FBSztZQUdHLFFBQVE7a0JBQWhCLEtBQUs7WUFHRyxTQUFTO2tCQUFqQixLQUFLO1lBRUksV0FBVztrQkFBcEIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUNHLGVBQWU7a0JBQXhCLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIE9uSW5pdCxcclxuICAgIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IEthbmJhbkJvYXJkLCBLYW5iYW5Db2x1bW4sIEthbmJhbkl0ZW0sIEthbmJhbkNvbHVtblRlbXBsYXRlIH0gZnJvbSAnLi9jbWFjcy1rYW5iYW4tZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IERldmljZURldGVjdG9yU2VydmljZSB9IGZyb20gJ25neC1kZXZpY2UtZGV0ZWN0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NtYWNzLWthbmJhbicsXHJcbiAgICBleHBvcnRBczogJ2NtYWNzS2FuYmFuJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rYW5iYW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0thbmJhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgLyoqIEl0ZW1zIHRvIGRpc3BsYXkgICovXHJcbiAgICBASW5wdXQoKSBib2FyZDogS2FuYmFuQm9hcmQ7XHJcbiAgICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRlbXBsYXRlIGZvciBpdGVtcyB0byByZW5kZXIuIFwiaXRlbVwiIG9iamVjdCBpc3QgcGFzc2VkIChzZWUgZXhhbXBsZXMpXHJcbiAgICAgKiBpdGVtVGVtcGxhdGUgaXMgZm9yIGVhY2ggY29sdW1uXHJcbiAgICAgKiBpdGVtVGVtcGxhdGVzIGlzIGZvciBjaGFuZ2UgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBpdGVtVGVtcGxhdGVzOiBLYW5iYW5Db2x1bW5UZW1wbGF0ZVtdID0gbnVsbDtcclxuXHJcbiAgICAvKiogVGVtcGxhdGUgZm9yIGNvbHVtbiBoZWFkZXJzLiBDdXJyZW50IGdyb3VwTmFtZSB3aWxsIGJlIHBhc3NlZCAoc2VlIGV4YW1wbGVzKSAqL1xyXG4gICAgQElucHV0KCkgY29sdW1uSGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG5cclxuICAgIC8qKiBUZW1wbGF0ZSBmb3IgY29sdW1uIGhlYWRlcnMuIEN1cnJlbnQgZ3JvdXBOYW1lIHdpbGwgYmUgcGFzc2VkIChzZWUgZXhhbXBsZXMpICovXHJcbiAgICBASW5wdXQoKSBjb2x1bW5IZWFkZXJDb2xsYXBzZWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcblxyXG4gICAgLyoqIFNocmluayBjb2x1bW5zICovXHJcbiAgICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NocmluayA9IGZhbHNlO1xyXG5cclxuICAgIC8vIHNjcm9sbGluZ1xyXG4gICAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc1ZlcnRpY2FsU2Nyb2xsID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBoZWlnaHRDb250YWluZXIgPSAnNTAwcHgnO1xyXG5cclxuICAgIC8qKiBUZW1wbGF0ZXMgZm9yIGFjdGlvbnMgYW5kIGRlc2NyaXB0aW9uIHBhbmVscyAgKi9cclxuICAgIEBJbnB1dCgpIGFjdGlvblBhbmVsVGVtcGxhdGVzOiBLYW5iYW5Db2x1bW5UZW1wbGF0ZVtdICA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBkZXNjcmlwdGlvblBhbmVsVGVtcGxhdGVzOiBLYW5iYW5Db2x1bW5UZW1wbGF0ZVtdICA9IG51bGw7XHJcblxyXG4gICAgLy8gc3R5bGVzXHJcbiAgICBASW5wdXQoKSBjb2x1bW5XaWR0aDogc3RyaW5nO1xyXG5cclxuICAgIC8vIGthbmJhbiB0eXBlXHJcbiAgICBASW5wdXQoKSBpdGVtVHlwZTogc3RyaW5nO1xyXG5cclxuICAgIC8vIHN1YmhlYWRlclxyXG4gICAgQElucHV0KCkgc3ViSGVhZGVyOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuXHJcbiAgICBAT3V0cHV0KCkgZHJhZ2dlZEl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcclxuICAgIEBPdXRwdXQoKSBub0RyYWdnZWRJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxLYW5iYW5JdGVtPigpO1xyXG4gICAgQE91dHB1dCgpIG9uY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25kYmxjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEthbmJhbkl0ZW1bXT4oKTtcclxuICAgIEBPdXRwdXQoKSBvbkNvbHVtbkV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXI8S2FuYmFuQ29sdW1uPigpO1xyXG5cclxuICAgIHNlbGVjdGVkSXRlbXM6IEthbmJhbkl0ZW0gW10gPSBbXTtcclxuICAgIGRyYWdTdGFydGVkQ29sdW1uOiBLYW5iYW5Db2x1bW4gPSBudWxsO1xyXG4gICAgbW9iaWxlID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXZpY2VEZXRlY3RvcjogRGV2aWNlRGV0ZWN0b3JTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMubW9iaWxlID0gZGV2aWNlRGV0ZWN0b3IuaXNNb2JpbGUoKSB8fCBkZXZpY2VEZXRlY3Rvci5pc1RhYmxldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1UZW1wbGF0ZShpZDogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uUGFuZWxUZW1wbGF0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuaXRlbVRlbXBsYXRlcy5maW5kKGkgPT4gaS5pZCA9PT0gaWQpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbSkgeyByZXR1cm4gZWxlbS50ZW1wbGF0ZTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtVGVtcGxhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aW9uUGFuZWwoaWQ6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvblBhbmVsVGVtcGxhdGVzID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5hY3Rpb25QYW5lbFRlbXBsYXRlcy5maW5kKGQgPT4gZC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtID8gZWxlbS50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzY3JpcHRpb25QYW5lbChpZDogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb25QYW5lbFRlbXBsYXRlcyA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZGVzY3JpcHRpb25QYW5lbFRlbXBsYXRlcy5maW5kKGQgPT4gZC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtID8gZWxlbS50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmVydGljYWxTY3JvbGxTdHlsZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCkgPyB7IGhlaWdodDogdGhpcy5oZWlnaHRDb250YWluZXJ9IDoge307XHJcbiAgICB9XHJcblxyXG4gICAgYm9hcmRTdHlsZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCkgPyB7ICdtaW4taGVpZ2h0JzogdGhpcy5oZWlnaHRDb250YWluZXJ9IDoge307XHJcbiAgICB9XHJcblxyXG4gICAgY29sdW1uU3R5bGUoY29sbGFwc2VkOiBib29sZWFuKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY29sdW1uV2lkdGggJiYgIWNvbGxhcHNlZCkgPyB7IG1pbldpZHRoOiB0aGlzLmNvbHVtbldpZHRofSA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtbkV4cGFuZChjb2x1bW46IEthbmJhbkNvbHVtbik6IGFueSB7XHJcbiAgICAgICAgY29sdW1uLmNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25Db2x1bW5FeHBhbmQuZW1pdChjb2x1bW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtbkNvbGxhcHNlKGNvbHVtbjogS2FuYmFuQ29sdW1uKTogdm9pZCB7XHJcbiAgICAgICAgY29sdW1uLmNvbGxhcHNlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHJhZ1N0YXJ0ZWRDb2x1bW4oY29sOiBLYW5iYW5Db2x1bW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gY29sO1xyXG4gICAgfVxyXG5cclxuICAgIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPiwgY29sdW1uSWQ6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdERyb3BwZWRJdGVtKGV2ZW50Lml0ZW0uZGF0YSwgY29sdW1uSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnU3RhcnRlZENvbHVtbi5kaXNhYmxlZERyb3AgfHwgIXRoaXMuZHJhZ1N0YXJ0ZWRDb2x1bW4uZGlzYWJsZWREcm9wLnNvbWUoaWQgPT4gaWQgPT09IGNvbHVtbklkKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbVR5cGUgPT09ICdjdXN0b20nICYmICFldmVudC5pdGVtLmRhdGEuZGF0YS5pc0VkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0RyYWdnZWRJdGVtLmVtaXQoZXZlbnQuaXRlbS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdERyb3BwZWRJdGVtKGV2ZW50Lml0ZW0uZGF0YSwgY29sdW1uSWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub0RyYWdnZWRJdGVtLmVtaXQoZXZlbnQuaXRlbS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZW1pdERyb3BwZWRJdGVtKGRhdGE6IGFueSwgY29sdW1uSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGRhdGEuY29sdW1uSWQgPSBjb2x1bW5JZDtcclxuICAgICAgICB0aGlzLmRyYWdnZWRJdGVtLmVtaXQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tJdGVtKGl0ZW06IEthbmJhbkl0ZW0sIGNvbHVtbklkOiBzdHJpbmcpIHtcclxuICAgICAgICBpdGVtLmNvbHVtbklkID0gY29sdW1uSWQ7XHJcbiAgICAgICAgdGhpcy5vbmNsaWNrSXRlbS5lbWl0KGl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBhZGQgb3IgcmVtb3ZlIGVsZW1lbnRzIHRvIHNlbGVjdGVkIGl0ZW1zXHJcbiAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maW5kSW5kZXgoZWxlbSA9PiBlbGVtLmlkID09PSBpdGVtLmlkKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXNlbGVjdCkgeyB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYmxjbGlja0l0ZW0oaXRlbTogS2FuYmFuSXRlbSwgY29sdW1uSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGl0ZW0uY29sdW1uSWQgPSBjb2x1bW5JZDtcclxuICAgICAgICB0aGlzLm9uZGJsY2xpY2tJdGVtLmVtaXQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJdGVtU2VsZWN0ZWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMuc29tZShlbGVtID0+IGVsZW0uaWQgPT09IGlkKTtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicm9vdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImJvYXJkXCIgW25nU3R5bGVdPVwiYm9hcmRTdHlsZSgpXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib2FyZC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkLWNvbHVtbnNcIiBjZGtEcm9wTGlzdEdyb3VwPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkLWNvbHVtblwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgYm9hcmQuY29sdW1uc1wiIFtuZ1N0eWxlXT1cImNvbHVtblN0eWxlKGNvbHVtbi5jb2xsYXBzZWQpXCIgW25nQ2xhc3NdPVwiY29sdW1uLmNsYXNzXCJcclxuICAgICAgICAgICAgICAgW2NsYXNzLmNvbGxhcHNlZF09XCJjb2x1bW4uY29sbGFwc2VkXCI+XHJcbiAgICAgICAgICAgIDwhLS0gY29sbGFwc2VkIC0tPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLmNvbGxhcHNlZFwiIGNsYXNzPVwiY29sdW1uLWhlYWRlci1jb2xsYXBzZWRcIiAoY2xpY2spPVwiY29sdW1uRXhwYW5kKGNvbHVtbilcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiBzdHlsZT1cInBhZGRpbmc6IDhweDtcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cImV4cGFuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1FeHBhbmRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1oZWFkZXItY29sbGFwc2VkLWxpbmUgY29sdW1uLWhlYWRlci1jb2xsYXBzZWQtbGluZS0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdJZl09XCJjb2x1bW5IZWFkZXJDb2xsYXBzZWRUZW1wbGF0ZVwiICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uSGVhZGVyQ29sbGFwc2VkVGVtcGxhdGU7IGNvbnRleHQ6IHsgY29sdW1uOiBjb2x1bW59XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFjb2x1bW5IZWFkZXJDb2xsYXBzZWRUZW1wbGF0ZVwiIGNsYXNzPVwiY29sdW1uLWhlYWRlci1jb2xsYXBzZWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgY29sdW1uLm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1oZWFkZXItY29sbGFwc2VkLWxpbmUgY29sdW1uLWhlYWRlci1jb2xsYXBzZWQtbGluZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIGVuZCBjb2xsYXBzZWQgLS0+XHJcbiAgICAgICAgICAgIDwhLS0gY29sdW1uIGhlYWRlciAtLT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBjbGFzcz1cImNvbHVtbi1oZWFkZXItdGVtcGxhdGVcIiBbbmdJZl09XCJjb2x1bW5IZWFkZXJUZW1wbGF0ZVwiICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uSGVhZGVyVGVtcGxhdGU7IGNvbnRleHQ6IHsgY29sdW1uOiBjb2x1bW59XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgbnotcm93IGNsYXNzPVwiY29sdW1uLWhlYWRlclwiICpuZ0lmPVwiIWNvbHVtbkhlYWRlclRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdGl0bGVcIj57e2NvbHVtbi5uYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbHVtbi10aXRsZS1pdGVtc1wiPnt7Y29sdW1uLml0ZW1zLmxlbmd0aH19IEl0ZW1zPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjZcIiBjbGFzcz1cImhlYWRlci1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd1Nocmlua1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiY29sbGFwc2VcIiBjbWFjcy1idXR0b24gY2xhc3M9XCJjb2x1bW4tc2hyaW5rXCIgZ2hvc3QgKGNsaWNrKT1cImNvbHVtbkNvbGxhcHNlKGNvbHVtbilcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1Db2xsYXBzZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sdW1uLWhlYWRlclwiID5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdGl0bGVcIj57e2NvbHVtbi5uYW1lfX08L2Rpdj5cclxuXHJcbiAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi10aXRsZS1pdGVtc1wiPnt7Y29sdW1uLml0ZW1zLmxlbmd0aH19IEl0ZW1zPC9zcGFuPlxyXG4gIDwvZGl2PiAtLT5cclxuICAgICAgICAgICAgPCEtLSBlbmQgaGVhZGVyIC0tPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIGNsYXNzPVwiY29sdW1uLWFjdGlvbi1wYW5lbFwiIFtuZ0lmXT1cInN1YkhlYWRlclwiICpuZ1RlbXBsYXRlT3V0bGV0PVwic3ViSGVhZGVyOyBjb250ZXh0OiB7IGNvbHVtbjogY29sdW1ufVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIGNsYXNzPVwiY29sdW1uLWFjdGlvbi1wYW5lbFwiIFtuZ0lmXT1cImdldEFjdGlvblBhbmVsKGNvbHVtbi5pZClcIiAqbmdUZW1wbGF0ZU91dGxldD1cImdldEFjdGlvblBhbmVsKGNvbHVtbi5pZCk7IGNvbnRleHQ6IHsgY29sdW1uOiBjb2x1bW59XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxwZXJmZWN0LXNjcm9sbGJhciBbbmdTdHlsZV09XCJ2ZXJ0aWNhbFNjcm9sbFN0eWxlKClcIiBjbGFzcz1cImNtYWNzLWthbmJhbi1zY3JvbGxiYXJcIiBbbmdTdHlsZV09XCJ2ZXJ0aWNhbFNjcm9sbFN0eWxlKClcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidGFza3MtY29udGFpbmVyXCIgY2xhc3M9XCJ0YXNrcy1jb250YWluZXJcIiBjZGtEcm9wTGlzdCBbY2RrRHJvcExpc3REYXRhXT1cImNvbHVtbi5pdGVtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50LCBjb2x1bW4uaWQpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbHVtbi5pdGVtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNka0RyYWdcclxuICAgICAgICAgICAgICAgICAgICAgW2Nka0RyYWdEYXRhXT1cIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICBbY2RrRHJhZ0Rpc2FibGVkXT1cIml0ZW0uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAoY2RrRHJhZ1N0YXJ0ZWQpPVwic2V0RHJhZ1N0YXJ0ZWRDb2x1bW4oY29sdW1uKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGlja0l0ZW0oaXRlbSwgY29sdW1uLmlkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJkYmxjbGlja0l0ZW0oaXRlbSwgY29sdW1uLmlkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy50YXNrLXNlbGVjdGVkXT1cImlzSXRlbVNlbGVjdGVkKGl0ZW0uaWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJnZXRJdGVtVGVtcGxhdGUoY29sdW1uLmlkKTsgY29udGV4dDoge2l0ZW06IGl0ZW0sIGNvbHVtbklkOiBjb2x1bW4uaWR9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9wZXJmZWN0LXNjcm9sbGJhcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBjbGFzcz1cImNvbHVtbi1kZXNjcmlwdGlvbi1wYW5lbFwiIFtuZ0lmXT1cImdldERlc2NyaXB0aW9uUGFuZWwoY29sdW1uLmlkKVwiICpuZ1RlbXBsYXRlT3V0bGV0PVwiZ2V0RGVzY3JpcHRpb25QYW5lbChjb2x1bW4uaWQpOyBjb250ZXh0OiB7IGNvbHVtbjogY29sdW1ufVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiJdfQ==