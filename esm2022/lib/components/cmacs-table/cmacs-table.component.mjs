import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, delay, repeat } from 'rxjs/operators';
import { TemplateType } from '../core/enums/TemplateType.enum';
import { CeldType } from '../core/enums/CeldType.enum';
import { ExportType } from '../core/enums/export-type.enum';
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
import { InputBoolean, InputNumber, toBoolean } from 'ng-zorro-antd/core/util';
import { CmacsInputNumberComponent } from '../cmacs-input-number/cmacs-input-number.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "ngx-export-as";
import * as i3 from "../cmacs-dropdown/context-menu.service";
import * as i4 from "../core/services/excel.service";
import * as i5 from "../core/services/util.service";
import * as i6 from "@angular/common";
import * as i7 from "ngx-cookie-service";
import * as i8 from "ng-zorro-antd/resizable";
import * as i9 from "ng-zorro-antd/table";
import * as i10 from "ng-zorro-antd/rate";
import * as i11 from "@angular/forms";
import * as i12 from "ng-zorro-antd/core/transition-patch";
import * as i13 from "ng-zorro-antd/icon";
import * as i14 from "../cmacs-tag/tag.component";
import * as i15 from "../cmacs-tooltip/tooltip";
import * as i16 from "../cmacs-checkbox/cmacs-checkbox.component";
import * as i17 from "../cmacs-button/cmacs-button.component";
import * as i18 from "../cmacs-select/cmacs-select.component";
import * as i19 from "../cmacs-select/cmacs-option.component";
import * as i20 from "../cmacs-input/cmacs-input.directive";
import * as i21 from "../cmacs-dropdown/dropdown-menu.component";
import * as i22 from "../cmacs-date-picker/date-picker.component";
import * as i23 from "../cmacs-input-number/cmacs-input-number.component";
import * as i24 from "../cmacs-button-favorite/cmacs-button-favorite.component";
const _c0 = ["renderItemTemplate"];
const _c1 = ["fieldTypeInput"];
const _c2 = ["fieldTypeInputNumber"];
const _c3 = ["fieldTypeDatePicker"];
const _c4 = ["fieldTypeSelect"];
const _c5 = ["fieldTypeBool"];
function CmacsTableComponent_thead_3_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 8)(1, "label", 9);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_thead_3_th_2_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.selected = $event); })("checkedChange", function CmacsTableComponent_thead_3_th_2_Template_label_checkedChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onCheckboxAllChange($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.selected)("indeterminate", ctx_r3.isIndeterminate);
} }
function CmacsTableComponent_thead_3_th_3_nz_resize_handle_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-resize-handle", 12);
    i0.ɵɵelement(1, "div", 13);
    i0.ɵɵelementEnd();
} }
const _c6 = function () { return ["ascend", "descend"]; };
function CmacsTableComponent_thead_3_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵlistener("nzResizeEnd", function CmacsTableComponent_thead_3_th_3_Template_th_nzResizeEnd_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const field_r9 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onResize($event, field_r9.property, field_r9)); })("nzSortOrderChange", function CmacsTableComponent_thead_3_th_3_Template_th_nzSortOrderChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const field_r9 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(field_r9.showSort ? field_r9.sortOrder : ctx_r13.defaultSortOrder = $event); })("nzSortOrderChange", function CmacsTableComponent_thead_3_th_3_Template_th_nzSortOrderChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const field_r9 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.sort($event, field_r9.property)); });
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsTableComponent_thead_3_th_3_nz_resize_handle_3_Template, 2, 0, "nz-resize-handle", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r9 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", field_r9.minWidth ? field_r9.minWidth : field_r9.width)("max-width", field_r9.width);
    i0.ɵɵclassProp("cmacs-table-sorted-null", field_r9.showSort && !field_r9.sortOrder)("cmacs-table-sorted-ascend", field_r9.showSort && field_r9.sortOrder === "ascend")("cmacs-table-sorted-descend", field_r9.showSort && field_r9.sortOrder === "descend");
    i0.ɵɵproperty("nzDisabled", !field_r9.resizable)("nzMinWidth", field_r9.minWidth ? field_r9.minWidth : 100)("nzMaxWidth", field_r9.maxWidth ? field_r9.maxWidth : 500)("nzShowSort", field_r9.showSort)("nzSortDirections", i0.ɵɵpureFunction0(23, _c6))("nzSortOrder", field_r9.showSort ? field_r9.sortOrder : ctx_r4.defaultSortOrder)("nzWidth", field_r9.width);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", ctx_r4.getHeaderMaxWidth(field_r9));
    i0.ɵɵclassProp("cmacs-table-overflow-cell-header", !ctx_r4.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r9.display, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r9.resizable);
} }
function CmacsTableComponent_thead_3_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 14);
} if (rf & 2) {
    i0.ɵɵstyleProp("min-width", "105px")("max-width", "105px");
    i0.ɵɵproperty("nzWidth", "105px");
} }
function CmacsTableComponent_thead_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead")(1, "tr");
    i0.ɵɵtemplate(2, CmacsTableComponent_thead_3_th_2_Template, 2, 6, "th", 5);
    i0.ɵɵtemplate(3, CmacsTableComponent_thead_3_th_3_Template, 4, 24, "th", 6);
    i0.ɵɵtemplate(4, CmacsTableComponent_thead_3_th_4_Template, 1, 5, "th", 7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.showRate);
} }
function CmacsTableComponent_tr_5_td_4_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_4_label_1_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const data_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.checkboxCache[ctx_r22.getIndex(data_r15[ctx_r22.config.fieldId])].selected = $event); })("checkedChange", function CmacsTableComponent_tr_5_td_4_label_1_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const data_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.onCheckboxChange($event, data_r15)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r21.checkboxCache[ctx_r21.getIndex(data_r15[ctx_r21.config.fieldId])].selected);
} }
function CmacsTableComponent_tr_5_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_4_label_1_Template, 1, 1, "label", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", "40px")("min-width", "40px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r15[ctx_r18.config.fieldId] && ctx_r18.checkboxCache[ctx_r18.getIndex(data_r15[ctx_r18.config.fieldId])]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(4).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r40 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r40.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r40.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r15[field_r29.property] !== null && data_r15[field_r29.property] !== undefined && data_r15[field_r29.property] !== "" ? data_r15[field_r29.property] : field_r29.placeholder, " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(4).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r41 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r41.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r41.wrapLines);
    i0.ɵɵproperty("title", data_r15[field_r29.property]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r15[field_r29.property], " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_1_Template, 2, 5, "div", 31);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_div_2_Template, 2, 6, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r29.showTooltip || data_r15[field_r29.property] === null || data_r15[field_r29.property] === undefined || data_r15[field_r29.property] === "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r29.showTooltip && data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r38 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r38.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 3, data_r15[field_r29.property], field_r29.dateFormat));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r39 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r39.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r39.getLabel(data_r15, field_r29));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_3_Template, 4, 6, "ng-container", 3);
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_ng_container_4_Template, 3, 3, "ng-container", 3);
    i0.ɵɵelementStart(5, "i", 30);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_Template_i_click_5_listener($event) { i0.ɵɵrestoreView(_r54); const field_r29 = i0.ɵɵnextContext(2).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; const ctx_r52 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r52.startEdit(data_r15[ctx_r52.config.fieldId], field_r29.property, $event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-width", "100%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r34.isDate(field_r29) && !ctx_r34.isSelect(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.isDate(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.isSelect(field_r29));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 40, 41);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r63 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r63.preventDefault($event)); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r65 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r65.preventDefault($event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r64); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r15[field_r29.property] = $event)); })("keyup", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r64); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r69 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r69.endEditMode($event, i_r16)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-input-number", 42, 43);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_click_0_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r74.preventDefault($event)); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r76 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r76.preventDefault($event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r75); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r15[field_r29.property] = $event)); })("keyup", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_keyup_0_listener($event) { i0.ɵɵrestoreView(_r75); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r80 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r80.endEditMode($event, i_r16)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template_cmacs_input_number_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r75); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r82 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r82.ngModelChange(i_r16)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r15[field_r29.property])("cmacsStep", 1);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 44, 45);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template_label_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r89); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r15[field_r29.property] = $event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template_label_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r89); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r91 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r91.endEditModeNgModel(i_r16)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template(rf, ctx) { if (rf & 1) {
    const _r97 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-date-picker", 46, 47);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_click_0_listener($event) { i0.ɵɵrestoreView(_r97); const ctx_r96 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r96.preventDefault($event)); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r97); const ctx_r98 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r98.preventDefault($event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r97); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r15[field_r29.property] = $event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template_cmacs_date_picker_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r97); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r102 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r102.endEditModeNgModel(i_r16)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("allowClear", true)("ngModel", data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_cmacs_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 51);
} if (rf & 2) {
    const sData_r108 = ctx.$implicit;
    const field_r29 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵpropertyInterpolate("label", sData_r108[field_r29.select.label]);
    i0.ɵɵpropertyInterpolate("value", sData_r108[field_r29.select.value]);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r111 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-select", 48, 49);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_click_0_listener($event) { i0.ɵɵrestoreView(_r111); const ctx_r110 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r110.preventDefault($event)); })("dblclick", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r111); const ctx_r112 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r112.preventDefault($event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r111); const field_r29 = i0.ɵɵnextContext(3).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r15[field_r29.property] = $event)); })("ngModelChange", function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template_cmacs_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r111); const i_r16 = i0.ɵɵnextContext(4).index; const ctx_r116 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r116.endEditModeNgModel(i_r16)); });
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_cmacs_option_2_Template, 1, 2, "cmacs-option", 50);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r15[field_r29.property]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r29.select.selectData);
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_input_0_Template, 2, 1, "input", 35);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_input_number_1_Template, 2, 2, "cmacs-input-number", 36);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_label_2_Template, 2, 1, "label", 37);
    i0.ɵɵtemplate(3, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_date_picker_3_Template, 2, 2, "cmacs-date-picker", 38);
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_cmacs_select_4_Template, 3, 2, "cmacs-select", 39);
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r36 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r36.isString(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r36.isNumber(field_r29) && !ctx_r36.isSelect(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r36.isBoolean(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r36.isDate(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r36.isSelect(field_r29));
} }
function CmacsTableComponent_tr_5_td_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_div_1_Template, 6, 7, "div", 26);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_container_1_ng_template_2_Template, 5, 5, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r35 = i0.ɵɵreference(3);
    const field_r29 = i0.ɵɵnextContext().$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r31 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r31.editId !== data_r15[ctx_r31.config.fieldId] || ctx_r31.property !== field_r29.property)("ngIfElse", _r35);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, null, 54);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_ng_container_2_Template, 1, 0, "ng-container", 55);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", data_r15[field_r29.property].ref)("ngTemplateOutletContext", data_r15[field_r29.property].context);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 59);
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵpropertyInterpolate("type", field_r29.button.icon);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵtextInterpolate(field_r29.display);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r141 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 56);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r141); const data_r15 = i0.ɵɵnextContext(3).$implicit; const ctx_r139 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r139.onButtonClick(data_r15)); });
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_i_1_Template, 1, 1, "i", 57);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_ng_template_2_Template, 1, 1, "ng-template", null, 58, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r135 = i0.ɵɵreference(3);
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r124 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("aria-label", field_r29.display);
    i0.ɵɵpropertyInterpolate("type", field_r29.button.style);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r124.isUndefined(field_r29.button.icon))("ngIfElse", _r135);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "cmacs-button-favorite", 60);
    i0.ɵɵlistener("onChangedValue", function CmacsTableComponent_tr_5_td_5_ng_template_2_div_2_Template_cmacs_button_favorite_onChangedValue_1_listener($event) { i0.ɵɵrestoreView(_r145); const field_r29 = i0.ɵɵnextContext(2).$implicit; const data_r15 = i0.ɵɵnextContext().$implicit; const ctx_r143 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r143.onFavoriteChange($event, field_r29, data_r15)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_span_1_cmacs_tag_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-tag", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r150 = i0.ɵɵnextContext().$implicit;
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("color", field_r29.tag.color ? data_r15[field_r29.tag.color] : null)("cmacsGridType", field_r29.tag.cmacsGridType ? data_r15[field_r29.tag.cmacsGridType] : null)("cmacsStatusType", field_r29.tag.cmacsStatusType ? data_r15[field_r29.tag.cmacsStatusType] : null)("cmacsPriorityType", field_r29.tag.cmacsPriorityType ? data_r15[field_r29.tag.cmacsPriorityType] : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tag_r150, " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_span_1_cmacs_tag_1_Template, 2, 5, "cmacs-tag", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r150 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", tag_r150.trim().length > 0);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_span_1_Template, 2, 1, "span", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r155 = i0.ɵɵnextContext(2);
    const fi_r30 = ctx_r155.index;
    const field_r29 = ctx_r155.$implicit;
    const ctx_r156 = i0.ɵɵnextContext();
    const i_r16 = ctx_r156.index;
    const data_r15 = ctx_r156.$implicit;
    const ctx_r126 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r126.gridID + "column" + fi_r30 + "row" + i_r16);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", data_r15[field_r29.property].split(","));
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r127 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r127.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r127.transformDate(data_r15[field_r29.property], field_r29.dateFormat));
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r159 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r159.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r159.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r15[field_r29.property] !== null && data_r15[field_r29.property] !== undefined && data_r15[field_r29.property] !== "" ? data_r15[field_r29.property] : field_r29.placeholder, " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(3).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r160 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", ctx_r160.getMaxWidth());
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r160.wrapLines);
    i0.ɵɵproperty("title", data_r15[field_r29.property]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r15[field_r29.property], " ");
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_div_1_Template, 2, 5, "div", 31);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_div_2_Template, 2, 6, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r29.showTooltip || data_r15[field_r29.property] === null || data_r15[field_r29.property] === undefined || data_r15[field_r29.property] === "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r29.showTooltip && data_r15[field_r29.property]);
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext(2).$implicit;
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r129 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-table-overflow-cell", !ctx_r129.wrapLines);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r129.getLabel(data_r15, field_r29));
} }
function CmacsTableComponent_tr_5_td_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_template_2_button_1_Template, 4, 4, "button", 52);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_div_2_Template, 2, 1, "div", 3);
    i0.ɵɵtemplate(3, CmacsTableComponent_tr_5_td_5_ng_template_2_div_3_Template, 2, 2, "div", 53);
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_4_Template, 3, 3, "ng-container", 3);
    i0.ɵɵtemplate(5, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_5_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(6, CmacsTableComponent_tr_5_td_5_ng_template_2_ng_container_6_Template, 3, 3, "ng-container", 3);
} if (rf & 2) {
    const field_r29 = i0.ɵɵnextContext().$implicit;
    const ctx_r33 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r33.isCeldTypeTemplateRef(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r33.isCeldTypeButton(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r33.isCeldTypeButtonFavorite(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r33.isCeldTypeTag(field_r29) && field_r29.tag !== undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (!ctx_r33.inLineEdit || ctx_r33.isReadOnly(field_r29)) && ctx_r33.isDate(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (!ctx_r33.inLineEdit || ctx_r33.isReadOnly(field_r29)) && !ctx_r33.isCeldTypeButton(field_r29) && !ctx_r33.isCeldTypeButtonFavorite(field_r29) && !ctx_r33.isCeldTypeTag(field_r29) && !ctx_r33.isCeldTypeTemplateRef(field_r29) && !ctx_r33.isDate(field_r29) && !ctx_r33.isSelect(field_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r33.isSelect(field_r29));
} }
const _c7 = function (a1) { return ["editable-row", a1]; };
const _c8 = function (a0) { return [a0]; };
function CmacsTableComponent_tr_5_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 23);
    i0.ɵɵtemplate(1, CmacsTableComponent_tr_5_td_5_ng_container_1_Template, 4, 2, "ng-container", 24);
    i0.ɵɵtemplate(2, CmacsTableComponent_tr_5_td_5_ng_template_2_Template, 7, 7, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r29 = ctx.$implicit;
    const _r32 = i0.ɵɵreference(3);
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("max-width", "100%");
    i0.ɵɵproperty("ngClass", ctx_r19.isCeldTypeDefault(field_r29) && ctx_r19.inLineEdit && !ctx_r19.isReadOnly(field_r29) ? i0.ɵɵpureFunction1(5, _c7, "cmacs-table-cell-" + field_r29.property) : i0.ɵɵpureFunction1(7, _c8, "cmacs-table-cell-" + field_r29.property));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.isCeldTypeDefault(field_r29) && ctx_r19.inLineEdit && !ctx_r19.isReadOnly(field_r29))("ngIfElse", _r32);
} }
function CmacsTableComponent_tr_5_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r172 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 65)(1, "nz-rate", 66);
    i0.ɵɵlistener("ngModelChange", function CmacsTableComponent_tr_5_td_6_Template_nz_rate_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r172); const data_r15 = i0.ɵɵnextContext().$implicit; const ctx_r170 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r170.onRateChange($event, data_r15)); })("click", function CmacsTableComponent_tr_5_td_6_Template_nz_rate_click_1_listener($event) { i0.ɵɵrestoreView(_r172); const ctx_r173 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r173.onRateClick($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", data_r15[ctx_r20.config.fieldRate])("nzCount", ctx_r20.rateCount)("nzDisabled", !ctx_r20.inLineEdit);
} }
const _c9 = function (a0) { return { data: a0 }; };
function CmacsTableComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r176 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 15);
    i0.ɵɵlistener("click", function CmacsTableComponent_tr_5_Template_tr_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r176); const data_r15 = restoredCtx.$implicit; const ctx_r175 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r175.clickRow($event, data_r15)); })("touchstart", function CmacsTableComponent_tr_5_Template_tr_touchstart_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r176); const data_r15 = restoredCtx.$implicit; const ctx_r177 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r177.tapHandler($event, data_r15)); })("contextmenu", function CmacsTableComponent_tr_5_Template_tr_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r176); const _r17 = i0.ɵɵreference(2); const ctx_r178 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r178.contextMenu($event, _r17)); });
    i0.ɵɵelementStart(1, "cmacs-dropdown-menu", null, 16);
    i0.ɵɵelementContainer(3, 17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsTableComponent_tr_5_td_4_Template, 2, 5, "td", 18);
    i0.ɵɵtemplate(5, CmacsTableComponent_tr_5_td_5_Template, 4, 9, "td", 19);
    i0.ɵɵtemplate(6, CmacsTableComponent_tr_5_td_6_Template, 2, 3, "td", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r15 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-table-selected-row", ctx_r2.isRowSelected(data_r15));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.contextmenu)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c9, data_r15));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.checkboxSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.showRate);
} }
const moment = moment_;
// tslint:disable-next-line no-any
export class CmacsTableComponent {
    constructor(cdr, i18n, exportAsService, cmacsContextMenuService, excelService, utilService, datePipe, cookies) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.exportAsService = exportAsService;
        this.cmacsContextMenuService = cmacsContextMenuService;
        this.excelService = excelService;
        this.utilService = utilService;
        this.datePipe = datePipe;
        this.cookies = cookies;
        this.locale = {}; // tslint:disable-line:no-any
        this.headerBottomStyle = {};
        this.destroy$ = new Subject();
        // tslint:disable-next-line: no-input-rename
        this.size = 'default';
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.virtualScroll = false;
        this.virtualItemSize = 0;
        this.loadingDelay = 0;
        this.total = 0;
        this.widthConfig = [];
        this.pageIndex = 1;
        this.pageSize = 10;
        // tslint:disable-next-line: no-input-rename
        this.data = [];
        this.configChange = new EventEmitter();
        this.paginationPosition = 'bottom';
        this.scroll = { x: null, y: null };
        this.printLandscape = true;
        this.wrapLines = false;
        this.frontPagination = true;
        this.templateMode = false;
        this.bordered = false;
        this.showPagination = true;
        this.loading = false;
        this.showSizeChanger = false;
        this.hideOnSinglePage = false;
        this.showQuickJumper = false;
        this.simple = false;
        this.checkboxSelect = false;
        this.inLineEdit = false;
        this.dataTable = false;
        this.showRate = false;
        this.hasCookies = true;
        this.exportEvent = new EventEmitter();
        this.buttonClick = new EventEmitter();
        this.rateChange = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.ondlclickRow = new EventEmitter();
        this.onclickRow = new EventEmitter();
        this.onclickFavorite = new EventEmitter();
        this.onedit = new EventEmitter();
        this.rateCount = 5;
        this.multiSelect = false;
        this.sortChange = new EventEmitter();
        this.onresize = new EventEmitter();
        this.selected = false;
        this.defaultSortOrder = null;
        this.checkboxCache = [];
        this.isIndeterminate = false;
        this.allChecked = false;
        this.rowOnEdition = -1;
        this.tapCount = 0;
        this.lastIdxSelected = null;
        this._onresize$ = new Subject();
        this.onresizeobs = this._onresize$.asObservable();
        this._onsort$ = new Subject();
        this.onsortobs = this._onsort$.asObservable();
        this.order = 0;
        this.clicks = 0;
        // renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
    contextMenu($event, template) {
        this.cmacsContextMenuService.create($event, template);
    }
    startEdit(id, property, event) {
        event.preventDefault();
        event.stopPropagation();
        this.editId = id;
        this.property = property;
        this.cdr.detectChanges();
        this.focusSelect(this.inputElement);
        if (this.inputNumberComponent) {
            this.focusSelect(this.inputNumberComponent.inputElement);
        }
    }
    sort($event, fieldProperty) {
        this.cdr.detectChanges();
        this._onsort$.next({ sortName: fieldProperty, sortValue: $event });
    }
    onResize(event, col, field) {
        this._onresize$.next({ event, col, field });
    }
    onResizeEvt({ width }, col, field) {
        if (this.config && this.config.fields) {
            for (let i = 0; i < this.config.fields.length; i++) {
                const field = this.config.fields[i];
                if (field.property === col) {
                    const elWidth = field.width ? Number(field.width.replace(/[^\d.-]/g, '')) : 0;
                    if (this.scroll.x && i + 1 === this.config.fields.length - 1 &&
                        this.config.fields[i + 1] !== null && this.config.fields[i + 1] !== undefined) {
                        const elWidthNext = this.config.fields[i + 1].width ? Number(this.config.fields[i + 1].width.replace(/[^\d.-]/g, '')) : 0;
                        const delta = width - elWidth;
                        if (delta > 0 && delta < elWidthNext) {
                            if (this.config.fields[i + 1].minWidth !== null && this.config.fields[i + 1].minWidth !== undefined) {
                                if (Number(this.config.fields[i + 1].minWidth) < (elWidthNext - delta)) {
                                    this.config.fields[i + 1].width = `${elWidthNext - delta}px`;
                                }
                            }
                            else {
                                this.config.fields[i + 1].width = `${elWidthNext - delta}px`;
                            }
                        }
                        if (delta < 0) {
                            this.config.fields[i + 1].width = `${elWidthNext - delta}px`;
                        }
                    }
                    field.width = `${width}px`;
                    // this.scroll.x = this.scroll.x ? `${Number(this.scroll.x.replace(/[^\d.-]/g, '')) - elWidth + width}px` : null;
                    continue;
                }
            }
        }
        this.onresize.emit({ col, config: this.config });
        this.configChange.emit(this.config);
        if (this.gridID === null || this.gridID === undefined) {
            return;
        }
        if (this.hasCookies && this.getIndexCookie()) {
            this.cookies.set(this.gridID, JSON.stringify(this.config), 365);
        }
    }
    handleMouseDown(e) {
        const element = e.target;
        if (this.editId && this.property) {
            if ((this.inputElement && this.inputElement.nativeElement !== e.target) ||
                (this.inputNumberElement && !this.childOf(element, this.inputNumberElement.nativeElement)) ||
                (this.datePickerElement && !this.childOf(element, this.datePickerElement.nativeElement)) ||
                (this.selectElement && !this.childOf(element, this.selectElement.nativeElement) ||
                    (this.boolElement && !this.childOf(element, this.boolElement.nativeElement)))) {
                if (this.inputNumberComponent) {
                    this.inputNumberComponent.blur();
                }
                this.editId = null;
                this.property = null;
                if (this.rowOnEdition >= 0) {
                    this.onedit.emit(this.data[this.rowOnEdition]);
                    this.rowOnEdition = -1;
                }
            }
        }
    }
    focusSelect(elem) {
        if (elem) {
            elem.nativeElement.focus();
            setTimeout(() => {
                elem.nativeElement.select();
            }, 100);
        }
    }
    getHeaderMaxWidth(field) {
        if (field.showSort) {
            return `calc(100% - 15px)`;
        }
        return `100%`;
    }
    childOf(node, ancestor) {
        let child = node;
        while (child !== null) {
            if (child === ancestor) {
                return true;
            }
            if (child.classList && child.classList.length > 0 && child.className && typeof child.className === 'string'
                && child.className.indexOf('cdk-overlay-pane') >= 0) {
                for (let i = 0; i < child.childNodes.length; ++i) {
                    const node = child.childNodes[i];
                    if (node.nodeName === 'CMACS-MODAL') {
                        return false;
                    }
                }
                return true;
            }
            child = child.parentNode;
        }
        return false;
    }
    endEditMode($event, index) {
        if ($event.key === ('Enter' || 'enter')) {
            this.editId = null;
            this.property = null;
            this.rowOnEdition = -1;
            this.onedit.emit(this.data[index]);
        }
        else {
            this.rowOnEdition = index;
        }
    }
    endEditModeNgModel(index) {
        this.editId = null;
        this.property = null;
        this.rowOnEdition = -1;
        this.onedit.emit(this.data[index]);
    }
    getIndex(id) {
        let i = -1;
        i = this.checkboxCache.findIndex(item => item.data[this.config.fieldId] === id);
        return i;
    }
    updateCheckboxCache() {
        this.checkboxCache.length = 0;
        this.data.forEach(item => {
            this.checkboxCache.push({
                selected: item.selected ? item.selected : false,
                data: { ...item },
                order: item.selected ? this.order++ : -1
            });
        });
    }
    getMaxWidth() {
        if (!this.inLineEdit) {
            return `100%`;
        }
        return `calc(100% - 20px)`;
    }
    onButtonClick(field) {
        this.buttonClick.emit(field);
    }
    onCheckboxChange($event, data) {
        this.checkboxCache[this.getIndex(data[this.config.fieldId])].order = $event ? this.order++ : -1;
        this.refreshCheckboxState();
    }
    refreshCheckboxState(oninit = false) {
        const dataSelected = this.checkCheckboxState();
        if (!oninit) {
            this.selectionChange.emit(dataSelected.map(item => item.data));
        }
    }
    checkCheckboxState() {
        const dataSelected = this.checkboxCache.filter(item => item.selected).sort((a, b) => a.order - b.order);
        this.selected = this.allChecked = (dataSelected.length > 0 && (dataSelected.length === this.checkboxCache.length));
        this.isIndeterminate = dataSelected.length > 0 && !this.allChecked;
        return dataSelected;
    }
    ngModelChange(index) {
        this.rowOnEdition = index;
    }
    // tslint:disable-next-line: no-shadowed-variable
    onRateChange(count, data) {
        data[this.config.fieldRate] = count;
        this.rateChange.emit(data);
    }
    onFavoriteChange(isFavorite, field, data) {
        data[field.property] = isFavorite;
        this.onclickFavorite.emit(data);
    }
    onRateClick(event) {
        this.preventDefault(event);
    }
    getFields() {
        return this.config.fields.filter(item => item.hidden === undefined || !item.hidden);
    }
    onCheckboxAllChange(status) {
        this.checkboxCache.forEach(element => {
            element.selected = status;
        });
        this.isIndeterminate = false;
        this.selectionChange.emit((status) ? this.data : []);
    }
    getLabel(data, field) {
        let result = '';
        if (field.editTemplate === TemplateType.Select && field.select !== undefined) {
            // tslint:disable-next-line: no-shadowed-variable
            const item = field.select.selectData.find(item => item !== undefined && item[field.select.value] === data[field.property]);
            result = (item !== undefined) ? item[field.select.label] : '';
        }
        return result;
    }
    isSelect(field) {
        return field !== undefined && field.editTemplate === TemplateType.Select;
    }
    isReadOnly(field) {
        return field !== undefined && field.readonly !== undefined && field.readonly;
    }
    isBoolean(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Boolean;
    }
    isObject(value) {
        return value !== undefined && typeof (value) === 'object';
    }
    isDate(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Date;
    }
    isString(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.String;
    }
    isNumber(field) {
        return field !== undefined && field.celdType === CeldType.Default && field.editTemplate === TemplateType.Number;
    }
    isCeldTypeDefault(field) {
        return field !== undefined && field.celdType === CeldType.Default;
    }
    isCeldTypeButton(field) {
        return field !== undefined && field.celdType === CeldType.Button;
    }
    isCeldTypeTag(field) {
        return field !== undefined && field.celdType === CeldType.Tag;
    }
    isCeldTypeTemplateRef(field) {
        return field !== undefined && field.celdType === CeldType.TemplateRef;
    }
    isCeldTypeButtonFavorite(field) {
        return field !== undefined && field.celdType === CeldType.Favorite;
    }
    isUndefined(value) {
        return value === undefined;
    }
    isRowSelected(data) {
        const dataSelectd = this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]);
        return dataSelectd.indexOf(data[this.config.fieldId]) !== -1;
    }
    ngAfterViewInit() {
        if (this.hasCookies && this.getIndexCookie() && this.cookies.check(this.gridID)) {
            const savedConfigStr = this.cookies.get(this.gridID);
            // reset expiration date
            this.cookies.set(this.gridID, savedConfigStr, 365);
            // parse cookie value to typescript const
            const savedConfig = JSON.parse(this.cookies.get(this.gridID));
            if (typeof savedConfig === 'object') {
                this.config = savedConfig;
                this.configChange.emit(this.config);
            }
        }
        this.cdr.detectChanges();
    }
    getIndexCookie() {
        return true;
        /*let allowIndexPageCookie = false;
        let consentCookie = this.cookies.get('OptanonConsent');
        if (consentCookie != "") {
          let groupIndex = consentCookie.indexOf('groups=');
          let groups = consentCookie.substring(groupIndex); //will return somethinglike groups=C0002:0,C0001:1
          let functionalGroupIndex = groups.indexOf('C0009:');
          if (functionalGroupIndex != -1) {
            const categoryValue = groups.substring(functionalGroupIndex + 6, functionalGroupIndex + 7);
            if (Number(categoryValue) === 1) {
              allowIndexPageCookie = true;
            }
          }
        }
        return allowIndexPageCookie;*/
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        });
        if (this.checkboxSelect) {
            this.updateCheckboxCache();
            this.refreshCheckboxState(true);
        }
        if (this.dataTable && this.data.length > 1) {
            while (this.data.length > 1) {
                this.data.pop();
            }
            this.showPagination = false;
        }
        this.checkCheckboxState();
        if (!this.gridID) {
            this.gridID = this.utilService.uuidv4();
        }
        this.exportEvent.subscribe((config) => {
            switch (config.exportType) {
                case ExportType.Pdf:
                    this.exportToPdf(config);
                    break;
                case ExportType.Xslx:
                    this.exportToExcel(config.fileName);
                    break;
                case ExportType.Png:
                    this.exportToPng(config.fileName);
                    break;
            }
        });
        this.utilService.exportCompleted.subscribe(() => {
            this.loading = false;
            this.cdr.markForCheck();
        });
        this.excelService.exportCompleted.subscribe(() => {
            this.loading = false;
            this.cdr.markForCheck();
        });
        this.checkSortEvent();
        this.checkResizeEvent();
    }
    checkSortEvent() {
        this.onsortobs.pipe(takeUntil(this._onresize$), delay(300), repeat(), takeUntil(this.destroy$)).subscribe((obj) => {
            const f = this.config.fields.find(el => el.property === obj.sortName);
            f.sortOrder = obj.sortValue;
            this.sortChange.emit({ sortName: obj.sortName, sortValue: obj.sortValue });
        });
    }
    checkResizeEvent() {
        this.onresizeobs.pipe(takeUntil(this.destroy$)).subscribe((obj) => {
            this.config = JSON.parse(JSON.stringify(this.config));
            this.onResizeEvt(obj.event, obj.col, obj.field);
        });
    }
    ngOnChanges(changes) {
        if (changes.data) {
            this.updateCheckboxCache();
            this.refreshCheckboxState();
        }
    }
    exportToPng(fileName) {
        this.loading = true;
        this.utilService.exportTable('png', fileName, this.gridID);
    }
    exportToExcel(fileName) {
        this.loading = true;
        const dataToExport = [];
        const fields = this.config.fields.filter(item => item.celdType === CeldType.Default ||
            item.celdType === CeldType.Tag ||
            item.celdType === CeldType.TemplateRef);
        this.data.forEach(item => {
            const itemToExport = {};
            // tslint:disable-next-line: no-shadowed-variable
            fields.forEach(field => {
                if (!field.hidden) {
                    if (field.editTemplate === TemplateType.Select) {
                        const selectItem = field.select.selectData.find(option => option[field.select.value] === item[field.property]);
                        if (selectItem !== undefined) {
                            itemToExport[field.display] = selectItem[field.select.label];
                        }
                    }
                    else if (field.celdType === CeldType.TemplateRef) {
                        itemToExport[field.display] = item[field.property].context.exportValue;
                    }
                    else {
                        itemToExport[field.display] = item[field.property];
                    }
                }
            });
            dataToExport.push(itemToExport);
        });
        const filenameFormatted = moment().format('DD.MM.YYYY.HH.mm.ss') + '_' + fileName;
        this.excelService.exportAsExcelFile(dataToExport, filenameFormatted);
    }
    exportToPdf(config) {
        this.loading = true;
        this.cdr.detectChanges();
        if (!config.useVersion2) {
            this.utilService.exportTable('pdf', config.fileName, this.gridID, config.exportCompanyName, config.exportUserName, config.exportTitle, config.exportCompanyLogoUrl, config.exportTableCustomWidth, config.exportTableCustomHeight);
        }
        else {
            const exportConfig = {
                checkboxSelect: this.checkboxSelect,
                selectedItems: this.checkboxSelect ?
                    this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]) : [],
                fileName: config.fileName,
                datePipe: this.datePipe,
                elemID: this.gridID,
                data: this.data,
                config: this.config,
                columnStyles: config.columnStyles,
                exportCompanyName: config.exportCompanyName,
                exportUserName: config.exportUserName,
                exportTitle: config.exportTitle,
                exportCompanyLogoUrl: config.exportCompanyLogoUrl ? config.exportCompanyLogoUrl : 'assets/PToB_logo.png',
            };
            this.utilService.exportTablev2(exportConfig);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    tapHandler($event, data) {
        this.tapCount += 1;
        setTimeout(() => {
            if (this.tapCount === 1) {
                $event.preventDefault();
                this.clickRow(null, data);
            }
            this.tapCount = 0;
        }, 600);
        if (this.tapCount > 1) {
            $event.preventDefault();
            this.dblClickRow(data);
        }
    }
    clickRow(event, data) {
        this.clicks++;
        setTimeout(() => {
            event.preventDefault();
            event.stopImmediatePropagation();
            if (this.clicks === 1) {
                this.selectRow(event, data);
            }
            if (this.clicks > 1) {
                this.dblClickRow(data);
            }
            this.clicks = 0;
        }, 300);
    }
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    selectRow(event, data) {
        this.onclickRow.emit(data);
        /* Get index of selection */
        const index = this.checkboxCache.findIndex(item => item.data[this.config.fieldId] === data[this.config.fieldId]);
        if (!this.checkboxSelect) {
            if (event && (toBoolean(event.ctrlKey) || toBoolean(event.shiftKey))) {
                /* Shift Selection */
                if (toBoolean(event.shiftKey)) {
                    this.selectMultiple(index);
                }
            }
            else {
                this.removeSelection(data);
            }
            /* Select element */
            if (index !== -1) {
                this.checkboxCache[index].selected = event && toBoolean(event.shiftKey) ? true : !this.checkboxCache[index].selected;
                /* Save last index selected */
                this.lastIdxSelected = this.checkboxCache[index].selected ? index : null;
            }
            const selectedItems = this.checkboxCache.filter(item => item.selected);
            this.checkboxCache[index].order = this.checkboxCache[index].selected ? this.order++ : -1;
            this.selectionChange.emit(selectedItems.sort((a, b) => a.order - b.order).map(item => item.data));
        }
        this.cdr.detectChanges();
    }
    removeSelection(data) {
        this.checkboxCache.filter(item => item.selected && item.data[this.config.fieldId] !== data[this.config.fieldId])
            .forEach(elem => { elem.selected = false, elem.order = -1; });
    }
    selectMultiple(currentIdx) {
        if (this.lastIdxSelected !== null) {
            while (currentIdx !== this.lastIdxSelected) {
                this.checkboxCache[this.lastIdxSelected].selected = true;
                this.checkboxCache[this.lastIdxSelected].order = this.order++;
                this.lastIdxSelected = currentIdx > this.lastIdxSelected ? this.lastIdxSelected + 1 : this.lastIdxSelected - 1;
            }
        }
        else {
            this.checkboxCache[currentIdx].selected = true;
            this.checkboxCache[currentIdx].order = this.order++;
        }
        this.lastIdxSelected = currentIdx;
    }
    dblClickRow(data) {
        this.ondlclickRow.emit(data);
    }
    transformDate(date, dateFormat = null) {
        const m = moment(date);
        if (m.isValid()) {
            if (dateFormat) {
                return m.format(dateFormat);
            }
            else {
                m.locale(this.i18n.getLocale().locale);
                switch (this.i18n.getLocale().locale) {
                    case 'de':
                        return m.format('DD.MM.YYYY');
                    case 'en':
                        return m.format('MM/DD/YYYY');
                    case 'ja':
                        return m.format('YYYY/MM/DD');
                    default:
                        return m.format('MM/DD/YYYY');
                }
            }
        }
        return '';
    }
    static { this.ɵfac = function CmacsTableComponent_Factory(t) { return new (t || CmacsTableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i2.ExportAsService), i0.ɵɵdirectiveInject(i3.CmacsContextMenuService), i0.ɵɵdirectiveInject(i4.ExcelService), i0.ɵɵdirectiveInject(i5.UtilService), i0.ɵɵdirectiveInject(i6.DatePipe), i0.ɵɵdirectiveInject(i7.CookieService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTableComponent, selectors: [["cmacs-table"]], viewQuery: function CmacsTableComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5, ElementRef);
            i0.ɵɵviewQuery(_c2, 5, ElementRef);
            i0.ɵɵviewQuery(CmacsInputNumberComponent, 5, CmacsInputNumberComponent);
            i0.ɵɵviewQuery(_c3, 5, ElementRef);
            i0.ɵɵviewQuery(_c4, 5, ElementRef);
            i0.ɵɵviewQuery(_c5, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzItemRender = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputNumberElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputNumberComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePickerElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.boolElement = _t.first);
        } }, hostBindings: function CmacsTableComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function CmacsTableComponent_mousedown_HostBindingHandler($event) { return ctx.handleMouseDown($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { size: "size", showTotal: "showTotal", pageSizeOptions: "pageSizeOptions", virtualScroll: "virtualScroll", virtualItemSize: "virtualItemSize", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", total: "total", title: "title", footer: "footer", noResult: "noResult", widthConfig: "widthConfig", pageIndex: "pageIndex", pageSize: "pageSize", data: "data", config: "config", fieldId: "fieldId", gridID: "gridID", paginationPosition: "paginationPosition", scroll: "scroll", printLandscape: "printLandscape", wrapLines: "wrapLines", frontPagination: "frontPagination", templateMode: "templateMode", bordered: "bordered", showPagination: "showPagination", loading: "loading", showSizeChanger: "showSizeChanger", hideOnSinglePage: "hideOnSinglePage", showQuickJumper: "showQuickJumper", simple: "simple", checkboxSelect: "checkboxSelect", inLineEdit: "inLineEdit", dataTable: "dataTable", showRate: "showRate", hasCookies: "hasCookies", exportEvent: "exportEvent", rateCount: "rateCount", multiSelect: "multiSelect", contextmenu: "contextmenu" }, outputs: { configChange: "configChange", buttonClick: "buttonClick", rateChange: "rateChange", selectionChange: "selectionChange", ondlclickRow: "ondlclickRow", onclickRow: "onclickRow", onclickFavorite: "onclickFavorite", onedit: "onedit", sortChange: "sortChange", onresize: "onresize" }, exportAs: ["cmacsTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 26, consts: [[3, "id"], [1, "cmacs-table", 3, "nzData", "nzShowTotal", "nzPageSizeOptions", "nzVirtualItemSize", "nzLoadingDelay", "nzLoadingIndicator", "nzTotal", "nzTitle", "nzFooter", "nzNoResult", "nzWidthConfig", "nzPageIndex", "nzPageSize", "nzPaginationPosition", "nzScroll", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], ["gridComponent", ""], [4, "ngIf"], ["class", "cmacs-no-selection", 3, "ant-table-selected-row", "click", "touchstart", "contextmenu", 4, "ngFor", "ngForOf"], ["nzWidth", "40px", 3, "maxWidth", "minWidth", 4, "ngIf"], ["nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzDisabled", "nzMinWidth", "nzMaxWidth", "nzShowSort", "nzSortDirections", "cmacs-table-sorted-null", "cmacs-table-sorted-ascend", "cmacs-table-sorted-descend", "nzSortOrder", "minWidth", "maxWidth", "nzWidth", "nzResizeEnd", "nzSortOrderChange", 4, "ngFor", "ngForOf"], [3, "minWidth", "maxWidth", "nzWidth", 4, "ngIf"], ["nzWidth", "40px"], ["cmacs-checkbox", "", 3, "ngModel", "indeterminate", "ngModelChange", "checkedChange"], ["nz-resizable", "", "nzBounds", "window", "nzPreview", "", 3, "nzDisabled", "nzMinWidth", "nzMaxWidth", "nzShowSort", "nzSortDirections", "nzSortOrder", "nzWidth", "nzResizeEnd", "nzSortOrderChange"], ["nzDirection", "right", 4, "ngIf"], ["nzDirection", "right"], [1, "cmacs-table-resize-trigger"], [3, "nzWidth"], [1, "cmacs-no-selection", 3, "click", "touchstart", "contextmenu"], ["contextMenuTemplate", "cmacsDropdownMenu"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "maxWidth", "minWidth", 4, "ngIf"], [3, "ngClass", "maxWidth", 4, "ngFor", "ngForOf"], ["class", "cmacs-table-rating", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", "checkedChange"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["componentTpl", ""], ["class", "editable-cell", 3, "maxWidth", 4, "ngIf", "ngIfElse"], ["editTpl", ""], [1, "editable-cell"], [1, "editable-cell-value-wrap"], [1, "iconUISmall-Edit", "cmacs-table-edit-icon", 3, "click"], ["style", "word-break: break-word;", 3, "cmacs-table-overflow-cell", "maxWidth", 4, "ngIf"], ["style", "word-break: break-word;", "cmacs-tooltip", "", "placement", "right", 3, "cmacs-table-overflow-cell", "maxWidth", "title", 4, "ngIf"], [2, "word-break", "break-word"], ["cmacs-tooltip", "", "placement", "right", 2, "word-break", "break-word", 3, "title"], ["type", "text", "cmacs-input", "", "class", "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["id", "testing2", "class", "tableinput", 3, "ngModel", "cmacsStep", "click", "dblclick", "ngModelChange", "keyup", 4, "ngIf"], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "tableinput", 3, "allowClear", "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["style", "width: 100%;", "showSearch", "", "class", "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", 4, "ngIf"], ["type", "text", "cmacs-input", "", 1, "tableinput", 3, "ngModel", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInput", ""], ["id", "testing2", 1, "tableinput", 3, "ngModel", "cmacsStep", "click", "dblclick", "ngModelChange", "keyup"], ["fieldTypeInputNumber", ""], ["cmacs-checkbox", "", 3, "ngModel", "ngModelChange"], ["fieldTypeBool", ""], [1, "tableinput", 3, "allowClear", "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeDatePicker", ""], ["showSearch", "", 1, "tableinput", 2, "width", "100%", 3, "ngModel", "click", "dblclick", "ngModelChange"], ["fieldTypeSelect", ""], [3, "label", "value", 4, "ngFor", "ngForOf"], [3, "label", "value"], ["role", "button", "cmacs-button", "", 3, "aria-label", "type", "click", 4, "ngIf"], ["style", "display: 'inline-flex';", 3, "id", 4, "ngIf"], ["templateRefCeld", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "button", "cmacs-button", "", 3, "aria-label", "type", "click"], ["nz-icon", "", 3, "type", 4, "ngIf", "ngIfElse"], ["titleTpl", ""], ["nz-icon", "", 3, "type"], [3, "value", "onChangedValue"], [2, "display", "'inline-flex'", 3, "id"], [4, "ngFor", "ngForOf"], [3, "color", "cmacsGridType", "cmacsStatusType", "cmacsPriorityType", 4, "ngIf"], [3, "color", "cmacsGridType", "cmacsStatusType", "cmacsPriorityType"], [1, "cmacs-table-rating"], [3, "ngModel", "nzCount", "nzDisabled", "ngModelChange", "click"]], template: function CmacsTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "nz-table", 1, 2);
            i0.ɵɵtemplate(3, CmacsTableComponent_thead_3_Template, 5, 3, "thead", 3);
            i0.ɵɵelementStart(4, "tbody");
            i0.ɵɵtemplate(5, CmacsTableComponent_tr_5_Template, 7, 9, "tr", 4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(2);
            i0.ɵɵpropertyInterpolate("id", ctx.gridID);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzData", ctx.data)("nzShowTotal", ctx.showTotal)("nzPageSizeOptions", ctx.pageSizeOptions)("nzVirtualItemSize", ctx.virtualItemSize)("nzLoadingDelay", ctx.loadingDelay)("nzLoadingIndicator", ctx.loadingIndicator)("nzTotal", ctx.total)("nzTitle", ctx.title)("nzFooter", ctx.footer)("nzNoResult", ctx.noResult)("nzWidthConfig", ctx.widthConfig)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPaginationPosition", ctx.paginationPosition)("nzScroll", ctx.scroll)("nzFrontPagination", ctx.frontPagination)("nzTemplateMode", ctx.templateMode)("nzShowPagination", ctx.showPagination)("nzLoading", ctx.loading)("nzShowSizeChanger", ctx.showSizeChanger)("nzHideOnSinglePage", ctx.hideOnSinglePage)("nzShowQuickJumper", ctx.showQuickJumper)("nzSimple", ctx.simple);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.dataTable);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", _r0.data);
        } }, dependencies: [i8.NzResizableDirective, i8.NzResizeHandleComponent, i6.NgClass, i6.NgForOf, i6.NgIf, i6.NgTemplateOutlet, i9.NzTableComponent, i9.NzThAddOnComponent, i9.NzTableCellDirective, i9.NzThMeasureDirective, i9.NzTheadComponent, i9.NzTbodyComponent, i9.NzTrDirective, i10.NzRateComponent, i11.DefaultValueAccessor, i11.NgControlStatus, i11.NgModel, i12.ɵNzTransitionPatchDirective, i13.NzIconDirective, i14.CmacsTagComponent, i15.CmacsTooltipDirective, i16.CmacsCheckboxComponent, i17.CmacsButtonComponent, i18.CmacsSelectComponent, i19.CmacsOptionComponent, i20.CmacsInputDirective, i21.CmacsDropdownMenuComponent, i22.CmacsDatePickerComponent, i23.CmacsInputNumberComponent, i24.CmacsButtonFavoriteComponent, i6.DatePipe], styles: [".cmacs-table .cmacs-table-sorted-ascend .anticon.ant-table-column-sorter-up:before,   .cmacs-table .cmacs-table-sorted-null .anticon.ant-table-column-sorter-up:before{font-family:ArrowSmall!important;content:\"\\e90f\";display:block;font-size:25px;margin-top:24px}  .cmacs-table .ant-table-thead>tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]):before{display:none}  .cmacs-table .ant-table-thead th.ant-table-column-has-sorters{cursor:pointer;transition:none!important}  .cmacs-table .anticon.ant-table-column-sorter-up.active:before,   .cmacs-table .anticon.ant-table-column-sorter-down.active:after{color:#2a7cff}  .cmacs-table .cmacs-table-sorted-descend .anticon.ant-table-column-sorter-down:after{font-family:ArrowSmall!important;content:\"\\e90c\";display:block;font-size:25px}  .cmacs-table .ant-table-column-sorter-up+.ant-table-column-sorter-down{margin-top:0}  .cmacs-table .anticon.ant-table-column-sorter-up svg{display:none}  .cmacs-table .anticon.ant-table-column-sorter-down svg{display:none}.cmacs-table-resize-trigger[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#bfbfbf;position:absolute;right:10px;opacity:0}  .cmacs-table th:hover .cmacs-table-resize-trigger{opacity:1}  .cmacs-table .nz-resizable-preview{border-width:0;border-right-width:1px;border-color:#2a7cff;border-top:none!important;border-left:none!important;border-style:solid;height:100%;max-height:100%;padding:0;margin:0}  .cmacs-table .nz-resizable .ant-table-filter-trigger-container{right:10px;display:inline-block}  .cmacs-table .ant-table-cell.ant-table-cell-fix-left,   .cmacs-compact-table .ant-table-cell.ant-table-cell-fix-right{z-index:10}  .cmacs-table .nz-resizable.ant-table-cell.ant-table-cell-fix-left.ant-table-cell-fix-left-last .nz-resizable-handle-right{right:0!important}  .cmacs-table .ant-table-filter-column{margin:0}  .cmacs-table .ant-table-filter-column-title{padding:0}  .cmacs-table .nz-resizable-handle-right{right:0}  .cmacs-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}  .cmacs-table .ant-table-placeholder .ant-table-cell{box-shadow:none!important;border-bottom:none!important}  .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover{box-shadow:none!important;border-bottom:none!important}  .cmacs-table tr.ant-table-placeholder .ant-table-expanded-row-fixed{margin:0!important;padding:0!important}  .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover>td{box-shadow:none!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-table-rating[_ngcontent-%COMP%]{min-width:105px}.cmacs-table-overflow-cell[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle}.cmacs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] > .cmacs-table-overflow-cell[_ngcontent-%COMP%]{line-height:24px!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-table-overflow-cell-header[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}  .cmacs-table .ant-table-column-sorter{width:12px;display:none!important;right:8px;position:absolute}  .cmacs-table th:hover .ant-table-column-sorter{display:table-cell!important;right:8px;position:absolute}  .cmacs-table .ant-table-column-sorters,   .cmacs-table .ant-table-header-column{width:100%;padding:0}  .cmacs-table .ant-table-column-sorters span:not(.ant-table-column-sorter){width:100%}  .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{background-color:#f6f7fb}  .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover:before{background-color:transparent}.cmacs-table[_ngcontent-%COMP%]   .editable-cell[_ngcontent-%COMP%]{position:relative}.cmacs-table[_ngcontent-%COMP%]   .editable-cell-value-wrap[_ngcontent-%COMP%]{padding:6px 0;cursor:pointer;min-height:30px;max-height:30px}.cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover > td.editable-row[_ngcontent-%COMP%]   .cmacs-table-edit-icon[_ngcontent-%COMP%]{opacity:1}.cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td.editable-row[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]   td.editable-row[_ngcontent-%COMP%]:first-child{padding:9px 10px}  .cmacs-table .ant-rate{height:16px;font-size:16px}  .cmacs-table .ant-rate-star{font-size:16px;margin:0}.cmacs-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]{box-shadow:0 3px 7px -3px #0506062e}  .cmacs-table .ant-table-tbody>tr>td{border:none!important}  .cmacs-table .ant-table-thead>tr>th{padding:15px 10px;color:#656c79;background-color:#f6f7fb;border-bottom:1px solid #F6F7FB;border-right:none!important;border-left:none!important;border-top:none!important}  .cmacs-table .ant-table-thead th.ant-table-column-has-sorters:hover{background-color:#f6f7fb!important}  .cmacs-table .ant-table-tbody>tr>td{padding:12px 10px;border-bottom:0px;box-shadow:0 -1px #dee0e5 inset}  .cmacs-table .ant-table-tbody>tr:hover{box-shadow:0 3px 7px -3px #0506062e;position:relative}  .cmacs-table .ant-table-tbody>tr td:first-child{padding:12px 10px;box-shadow:0 -1px #dee0e5 inset}  .cmacs-table .ant-table-thead>tr>th{padding:15px 10px}  .cmacs-table .ant-table-tbody>tr:hover td:first-child{box-shadow:3px 0 #2a7cff inset,0 -1px #dee0e5 inset}  .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td:first-child{box-shadow:3px 0 #2a7cff inset,0 1px #2a7cff inset,0 -1px #2a7cff inset}  .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td{box-shadow:0 1px #2a7cff inset,0 -1px #2a7cff inset}  .cmacs-table .ant-table-thead{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:normal;position:relative}.cmacs-table[_ngcontent-%COMP%]   .editable-row[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%]{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal}.cmacs-table[_ngcontent-%COMP%]   cmacs-tag[_ngcontent-%COMP%]{padding:1px 5px;height:unset}  .cmacs-table .ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td, .cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr.ant-table-row-hover[_ngcontent-%COMP%]:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%], .cmacs-table[_ngcontent-%COMP%]   .ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row) > td[_ngcontent-%COMP%]{background-color:#fff}  .cmacs-table .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#f2f7ff}  .cmacs-table .ant-spin-nested-loading{clear:both}  .cmacs-table .ant-table table{border-collapse:collapse}  .cmacs-table .tableinput.ant-input:focus,   .cmacs-table .tableinput.ant-input:hover{box-shadow:none;border:1px solid #2A7CFF}  .cmacs-table .tableinput,   .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number),   .cmacs-table .tableinput>*,   .cmacs-table .tableinput .datepickerwidth,   .cmacs-table .tableinput .datepickerwidth .ant-input,   .cmacs-table .tableinput .ant-select-selection--single{height:30px!important}  .cmacs-table tr:not(.cmacs-no-selection) .tableinput{margin-left:-5px}  .cmacs-table tr:not(.cmacs-no-selection) input.tableinput{padding:5px 4px}  .cmacs-table cmacs-date-picker.tableinput{margin-left:-5px}  .cmacs-table .tableinput .datepickerwidth .ant-input{padding:0 4px}  .cmacs-table .tableinput .ant-select-selection--single .ant-select-selection__rendered{margin-left:4px;line-height:30px}  .cmacs-table .tableinput .ant-input-number-input{padding-left:4px}  .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number){overflow:visible}  .cmacs-table cmacs-input-number.tableinput,   .cmacs-table cmacs-select.tableinput{margin-left:-5px}  .cmacs-table .tableinput .ant-input-number-handler-wrap{height:28px!important}.cmacs-table[_ngcontent-%COMP%]   .cmacs-no-selection[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}  .cmacs-table .cmacs-no-selection .editable-cell,   .cmacs-table .cmacs-no-selection .tableinput{margin-top:-4px;margin-bottom:-3px;height:30px}  .cmacs-table .cmacs-no-selection input.tableinput{padding:6px 4px 5px;margin-left:-5px}  .cmacs-table .cmacs-no-selection .editable-cell-value-wrap{height:30px}  .cmacs-table table{table-layout:fixed}  .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:inline-flex;position:relative;top:3px}  .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner,   .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-up:not(.on),   .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-down:not(.on){color:#bec4cd}  .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}  .cmacs-table .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1}  .cmacs-table .ant-table-fixed-header>.ant-table-container>.ant-table-body{scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin;overflow:auto!important;position:inherit}  .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar, [_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}  .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb, [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}  .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb:hover, [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}.cmacs-table-edit-icon[_ngcontent-%COMP%]{position:relative;top:3px;left:5px;opacity:0;float:right;font-size:14px}.cmacs-table-edit-icon[_ngcontent-%COMP%]:hover{color:#2a7cff}"], changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "virtualScroll", void 0);
__decorate([
    InputNumber()
], CmacsTableComponent.prototype, "virtualItemSize", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "printLandscape", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "wrapLines", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "frontPagination", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "templateMode", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "showPagination", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "showSizeChanger", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "hideOnSinglePage", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "showQuickJumper", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "simple", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "checkboxSelect", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "inLineEdit", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "dataTable", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "showRate", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "hasCookies", void 0);
__decorate([
    InputBoolean()
], CmacsTableComponent.prototype, "multiSelect", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTableComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-table', exportAs: 'cmacsTable', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent [nzData]=\"data\" [nzShowTotal]=\"showTotal\" [nzPageSizeOptions]=\"pageSizeOptions\"\r\n    [nzVirtualItemSize]=\"virtualItemSize\" [nzLoadingDelay]=\"loadingDelay\"\r\n    [nzLoadingIndicator]=\"loadingIndicator\" [nzTotal]=\"total\" [nzTitle]=\"title\" [nzFooter]=\"footer\"\r\n    [nzNoResult]=\"noResult\" [nzWidthConfig]=\"widthConfig\" [nzPageIndex]=\"pageIndex\" [nzPageSize]=\"pageSize\"\r\n    [nzPaginationPosition]=\"paginationPosition\" [nzScroll]=\"scroll\" [nzFrontPagination]=\"frontPagination\"\r\n    [nzTemplateMode]=\"templateMode\" [nzShowPagination]=\"showPagination\" [nzLoading]=\"loading\"\r\n    [nzShowSizeChanger]=\"showSizeChanger\" [nzHideOnSinglePage]=\"hideOnSinglePage\" [nzShowQuickJumper]=\"showQuickJumper\"\r\n    [nzSimple]=\"simple\" class=\"cmacs-table\">\r\n    <thead *ngIf=\"!dataTable\">\r\n      <tr>\r\n        <th *ngIf=\"checkboxSelect\"\r\n            nzWidth=\"40px\"\r\n            [style.maxWidth]=\"'40px'\"\r\n            [style.minWidth]=\"'40px'\">\r\n          <label cmacs-checkbox [(ngModel)]=\"selected\" [indeterminate]=\"isIndeterminate\"\r\n            (checkedChange)=onCheckboxAllChange($event)></label>\r\n        </th>\r\n        <th *ngFor=\"let field of getFields()\"\r\n            nz-resizable\r\n            [nzDisabled]=\"!field.resizable\"\r\n            nzBounds=\"window\"\r\n            [nzMinWidth]=\"field.minWidth ? field.minWidth : 100\"\r\n            [nzMaxWidth]=\"field.maxWidth ? field.maxWidth : 500\"\r\n            nzPreview\r\n            (nzResizeEnd)=\"onResize($event, field.property, field)\"\r\n            [nzShowSort]=\"field.showSort\"\r\n            [nzSortDirections]=\"['ascend', 'descend']\"\r\n            [class.cmacs-table-sorted-null]=\"field.showSort && !field.sortOrder\"\r\n            [class.cmacs-table-sorted-ascend]=\"field.showSort && field.sortOrder === 'ascend'\"\r\n            [class.cmacs-table-sorted-descend]=\"field.showSort && field.sortOrder === 'descend'\"\r\n            [(nzSortOrder)]=\"field.showSort ? field.sortOrder : defaultSortOrder\"\r\n            (nzSortOrderChange)=\"sort($event, field.property)\"\r\n            [style.minWidth]=\"field.minWidth ? field.minWidth : field.width\"\r\n            [style.maxWidth]=\"field.width\"\r\n            [nzWidth]=\"field.width\">\r\n          <div [style.maxWidth]=\"getHeaderMaxWidth(field)\"\r\n               [class.cmacs-table-overflow-cell-header]=\"!wrapLines\">\r\n            {{field.display}}\r\n          </div>\r\n          <nz-resize-handle nzDirection=\"right\" *ngIf=\"field.resizable\">\r\n            <div class=\"cmacs-table-resize-trigger\"></div>\r\n          </nz-resize-handle>\r\n        </th>\r\n        <th [style.minWidth]=\"'105px'\"\r\n            [style.maxWidth]=\"'105px'\"\r\n            [nzWidth]=\"'105px'\" *ngIf=\"showRate\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of gridComponent.data; index as i\"\r\n          (click)=\"clickRow($event, data)\"\r\n          (touchstart)=\"tapHandler($event, data)\"\r\n          class=\"cmacs-no-selection\"\r\n          [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n          (contextmenu)=\"contextMenu($event, contextMenuTemplate)\">\r\n\r\n        <cmacs-dropdown-menu #contextMenuTemplate=\"cmacsDropdownMenu\">\r\n          <ng-container [ngTemplateOutlet]=\"contextmenu\" [ngTemplateOutletContext]=\"{ data: data }\"></ng-container>\r\n        </cmacs-dropdown-menu>\r\n\r\n        <td *ngIf=\"checkboxSelect\" [style.maxWidth]=\"'40px'\" [style.minWidth]=\"'40px'\">\r\n          <label cmacs-checkbox [(ngModel)]=\"checkboxCache[getIndex(data[config.fieldId])].selected\"\r\n            (checkedChange)=\"onCheckboxChange($event, data)\"\r\n            *ngIf=\"data[config.fieldId] && checkboxCache[getIndex(data[config.fieldId])]\"></label>\r\n        </td>\r\n        <td *ngFor=\"let field of getFields(); index as fi\" [ngClass]=\"(isCeldTypeDefault(field) && inLineEdit && !isReadOnly(field)) ? ['editable-row', 'cmacs-table-cell-' + field.property] : ['cmacs-table-cell-' + field.property]\" [style.maxWidth]=\"'100%'\">\r\n          <ng-container *ngIf=\"isCeldTypeDefault(field) && inLineEdit && !isReadOnly(field); else componentTpl\">\r\n            <div class=\"editable-cell\" [style.maxWidth]=\"'100%'\"\r\n              *ngIf=\"(editId !== data[config.fieldId] || property !== field.property); else editTpl\">\r\n              <div class=\"editable-cell-value-wrap\" [style.maxWidth]=\"'100%'\">\r\n                <ng-container *ngIf=\"!isDate(field) && !isSelect(field)\">\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                       *ngIf=\"!field.showTooltip || data[field.property] === null || data[field.property] === undefined || data[field.property] === ''\"\r\n                       [style.maxWidth]=\"getMaxWidth()\">\r\n                    {{ data[field.property] !== null && data[field.property] !== undefined && data[field.property] !== '' ? data[field.property] : field.placeholder }}\r\n                  </div>\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                       *ngIf=\"field.showTooltip && data[field.property]!!\"\r\n                       [style.maxWidth]=\"getMaxWidth()\" cmacs-tooltip [title]=\"data[field.property]\" placement=\"right\">\r\n                    {{ data[field.property] }}\r\n                  </div>\r\n                  <!-- <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property] }}</div> -->\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isDate(field)\">\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property]  | date: field.dateFormat}}</div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isSelect(field)\">\r\n                  <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ getLabel(data, field) }}</div>\r\n                </ng-container>\r\n                <i class=\"iconUISmall-Edit cmacs-table-edit-icon\" (click)=\"startEdit(data[config.fieldId], field.property, $event)\"></i>\r\n              </div>\r\n            </div>\r\n            <ng-template #editTpl>\r\n              <input #fieldTypeInput *ngIf=\"isString(field)\" type=\"text\" cmacs-input class=\"tableinput\"\r\n                 (click)=\"preventDefault($event)\"\r\n                 (dblclick)=\"preventDefault($event)\"\r\n                [(ngModel)]=\"data[field.property]\"\r\n                     (keyup)=\"endEditMode($event, i)\" />\r\n\r\n              <cmacs-input-number #fieldTypeInputNumber id=\"testing2\" class=\"tableinput\"\r\n                 (click)=\"preventDefault($event)\"\r\n                 (dblclick)=\"preventDefault($event)\"\r\n                *ngIf=\"isNumber(field) && !isSelect(field)\" [(ngModel)]=\"data[field.property]\"\r\n                [cmacsStep]=\"1\" (keyup)=\"endEditMode($event, i)\" (ngModelChange)=\"ngModelChange(i)\"></cmacs-input-number>\r\n\r\n              <label #fieldTypeBool cmacs-checkbox *ngIf=\"isBoolean(field)\"\r\n                [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\"></label>\r\n\r\n              <cmacs-date-picker\r\n                #fieldTypeDatePicker\r\n                *ngIf=\"isDate(field)\"\r\n                (click)=\"preventDefault($event)\"\r\n                (dblclick)=\"preventDefault($event)\"\r\n                [allowClear]=\"true\"\r\n                class=\"tableinput\"\r\n                [(ngModel)]=\"data[field.property]\"\r\n                (ngModelChange)=\"endEditModeNgModel(i)\">\r\n              </cmacs-date-picker>\r\n\r\n              <cmacs-select #fieldTypeSelect *ngIf=\"isSelect(field)\" style=\"width: 100%;\" showSearch class=\"tableinput\"\r\n                 (click)=\"preventDefault($event)\"\r\n                 (dblclick)=\"preventDefault($event)\"\r\n                [(ngModel)]=\"data[field.property]\" (ngModelChange)=\"endEditModeNgModel(i)\">\r\n                <cmacs-option *ngFor=\"let sData of field.select.selectData\" label=\"{{sData[field.select.label]}}\"\r\n                  value=\"{{sData[field.select.value]}}\"></cmacs-option>\r\n              </cmacs-select>\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-template #componentTpl>\r\n            <ng-container #templateRefCeld *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\">\r\n              </ng-container>\r\n            </ng-container>\r\n            <button *ngIf=\"isCeldTypeButton(field)\" aria-label=\"{{field.display}}\" role=\"button\" cmacs-button type=\"{{field.button.style}}\"\r\n                    (click)=onButtonClick(data)>\r\n              <i *ngIf=\"!isUndefined(field.button.icon); else titleTpl\" nz-icon type=\"{{field.button.icon}}\"></i>\r\n              <ng-template #titleTpl>{{field.display}}</ng-template>\r\n            </button>\r\n            <div *ngIf=\"isCeldTypeButtonFavorite(field)\">\r\n              <cmacs-button-favorite\r\n                [value]=\"data[field.property]\"\r\n                (onChangedValue)=\"onFavoriteChange($event, field, data)\">\r\n              </cmacs-button-favorite>\r\n            </div>\r\n            <div *ngIf=\"isCeldTypeTag(field) && field.tag !== undefined\" [id]=\"gridID + 'column' + fi + 'row' + i\"\r\n              style=\"display: 'inline-flex';\">\r\n              <span *ngFor=\"let tag of data[field.property].split(',')\">\r\n                <cmacs-tag *ngIf=\"tag.trim().length > 0\" [color]=\"field.tag.color ? data[field.tag.color] : null\"\r\n                  [cmacsGridType]=\"field.tag.cmacsGridType ? data[field.tag.cmacsGridType] : null\"\r\n                  [cmacsStatusType]=\"field.tag.cmacsStatusType ? data[field.tag.cmacsStatusType] : null\"\r\n                  [cmacsPriorityType]=\"field.tag.cmacsPriorityType ? data[field.tag.cmacsPriorityType] : null\">\r\n                  {{ tag }}\r\n                </cmacs-tag>\r\n              </span>\r\n            </div>\r\n            <ng-container *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && isDate(field)\">\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ transformDate(data[field.property], field.dateFormat) }}</div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"(!inLineEdit ||  isReadOnly(field)) && !isCeldTypeButton(field) && !isCeldTypeButtonFavorite(field) && !isCeldTypeTag(field) && !isCeldTypeTemplateRef(field) && !isDate(field) && !isSelect(field)\">\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                   *ngIf=\"!field.showTooltip || data[field.property] === null || data[field.property] === undefined || data[field.property] === ''\" [style.maxWidth]=\"getMaxWidth()\">\r\n                {{ data[field.property] !== null && data[field.property] !== undefined && data[field.property] !== '' ? data[field.property] : field.placeholder }}\r\n              </div>\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\"\r\n                   *ngIf=\"field.showTooltip && data[field.property]!!\" [style.maxWidth]=\"getMaxWidth()\"\r\n                   cmacs-tooltip [title]=\"data[field.property]\" placement=\"right\">\r\n                {{ data[field.property] }}\r\n              </div>\r\n              <!-- <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ data[field.property] }}</div> -->\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isSelect(field)\">\r\n              <div [class.cmacs-table-overflow-cell]=\"!wrapLines\" style=\"word-break: break-word;\">{{ getLabel(data, field) }}</div>\r\n            </ng-container>\r\n          </ng-template>\r\n        </td>\r\n        <td *ngIf=\"showRate\" class=\"cmacs-table-rating\">\r\n          <nz-rate [ngModel]=\"data[config.fieldRate]\"\r\n                   [nzCount]='rateCount'\r\n                   (ngModelChange)=\"onRateChange($event, data)\"\r\n                   [nzDisabled]=\"!inLineEdit\"\r\n                   (click)=\"onRateClick($event)\"></nz-rate>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n", styles: ["::ng-deep .cmacs-table .cmacs-table-sorted-ascend .anticon.ant-table-column-sorter-up:before,::ng-deep .cmacs-table .cmacs-table-sorted-null .anticon.ant-table-column-sorter-up:before{font-family:ArrowSmall!important;content:\"\\e90f\";display:block;font-size:25px;margin-top:24px}::ng-deep .cmacs-table .ant-table-thead>tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]):before{display:none}::ng-deep .cmacs-table .ant-table-thead th.ant-table-column-has-sorters{cursor:pointer;transition:none!important}::ng-deep .cmacs-table .anticon.ant-table-column-sorter-up.active:before,::ng-deep .cmacs-table .anticon.ant-table-column-sorter-down.active:after{color:#2a7cff}::ng-deep .cmacs-table .cmacs-table-sorted-descend .anticon.ant-table-column-sorter-down:after{font-family:ArrowSmall!important;content:\"\\e90c\";display:block;font-size:25px}::ng-deep .cmacs-table .ant-table-column-sorter-up+.ant-table-column-sorter-down{margin-top:0}::ng-deep .cmacs-table .anticon.ant-table-column-sorter-up svg{display:none}::ng-deep .cmacs-table .anticon.ant-table-column-sorter-down svg{display:none}.cmacs-table-resize-trigger{width:1px;height:100%;background-color:#bfbfbf;position:absolute;right:10px;opacity:0}::ng-deep .cmacs-table th:hover .cmacs-table-resize-trigger{opacity:1}::ng-deep .cmacs-table .nz-resizable-preview{border-width:0;border-right-width:1px;border-color:#2a7cff;border-top:none!important;border-left:none!important;border-style:solid;height:100%;max-height:100%;padding:0;margin:0}::ng-deep .cmacs-table .nz-resizable .ant-table-filter-trigger-container{right:10px;display:inline-block}::ng-deep .cmacs-table .ant-table-cell.ant-table-cell-fix-left,::ng-deep .cmacs-compact-table .ant-table-cell.ant-table-cell-fix-right{z-index:10}::ng-deep .cmacs-table .nz-resizable.ant-table-cell.ant-table-cell-fix-left.ant-table-cell-fix-left-last .nz-resizable-handle-right{right:0!important}::ng-deep .cmacs-table .ant-table-filter-column{margin:0}::ng-deep .cmacs-table .ant-table-filter-column-title{padding:0}::ng-deep .cmacs-table .nz-resizable-handle-right{right:0}::ng-deep .cmacs-table .ant-table-column-sorter-inner{margin-left:0;margin-right:0}::ng-deep .cmacs-table .ant-table-placeholder .ant-table-cell{box-shadow:none!important;border-bottom:none!important}::ng-deep .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover{box-shadow:none!important;border-bottom:none!important}::ng-deep .cmacs-table tr.ant-table-placeholder .ant-table-expanded-row-fixed{margin:0!important;padding:0!important}::ng-deep .cmacs-table .ant-table-tbody>tr.ant-table-placeholder:hover>td{box-shadow:none!important}.cmacs-table .cmacs-table-rating{min-width:105px}.cmacs-table-overflow-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;max-width:100%;vertical-align:middle}.cmacs-table tbody td>.cmacs-table-overflow-cell{line-height:24px!important}.cmacs-table .cmacs-table-overflow-cell-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}::ng-deep .cmacs-table .ant-table-column-sorter{width:12px;display:none!important;right:8px;position:absolute}::ng-deep .cmacs-table th:hover .ant-table-column-sorter{display:table-cell!important;right:8px;position:absolute}::ng-deep .cmacs-table .ant-table-column-sorters,::ng-deep .cmacs-table .ant-table-header-column{width:100%;padding:0}::ng-deep .cmacs-table .ant-table-column-sorters span:not(.ant-table-column-sorter){width:100%}::ng-deep .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{background-color:#f6f7fb}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters:hover:before{background-color:transparent}.cmacs-table .editable-cell{position:relative}.cmacs-table .editable-cell-value-wrap{padding:6px 0;cursor:pointer;min-height:30px;max-height:30px}.cmacs-table .ant-table-tbody>tr:hover>td.editable-row .cmacs-table-edit-icon{opacity:1}.cmacs-table .ant-table-tbody>tr>td.editable-row,.cmacs-table .ant-table-tbody>tr td.editable-row:first-child{padding:9px 10px}::ng-deep .cmacs-table .ant-rate{height:16px;font-size:16px}::ng-deep .cmacs-table .ant-rate-star{font-size:16px;margin:0}.cmacs-table .ant-table-thead>tr{box-shadow:0 3px 7px -3px #0506062e}::ng-deep .cmacs-table .ant-table-tbody>tr>td{border:none!important}::ng-deep .cmacs-table .ant-table-thead>tr>th{padding:15px 10px;color:#656c79;background-color:#f6f7fb;border-bottom:1px solid #F6F7FB;border-right:none!important;border-left:none!important;border-top:none!important}::ng-deep .cmacs-table .ant-table-thead th.ant-table-column-has-sorters:hover{background-color:#f6f7fb!important}::ng-deep .cmacs-table .ant-table-tbody>tr>td{padding:12px 10px;border-bottom:0px;box-shadow:0 -1px #dee0e5 inset}::ng-deep .cmacs-table .ant-table-tbody>tr:hover{box-shadow:0 3px 7px -3px #0506062e;position:relative}::ng-deep .cmacs-table .ant-table-tbody>tr td:first-child{padding:12px 10px;box-shadow:0 -1px #dee0e5 inset}::ng-deep .cmacs-table .ant-table-thead>tr>th{padding:15px 10px}::ng-deep .cmacs-table .ant-table-tbody>tr:hover td:first-child{box-shadow:3px 0 #2a7cff inset,0 -1px #dee0e5 inset}::ng-deep .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td:first-child{box-shadow:3px 0 #2a7cff inset,0 1px #2a7cff inset,0 -1px #2a7cff inset}::ng-deep .cmacs-table .ant-table-tbody>.ant-table-selected-row:hover td{box-shadow:0 1px #2a7cff inset,0 -1px #2a7cff inset}::ng-deep .cmacs-table .ant-table-thead{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:normal;position:relative}.cmacs-table .editable-row,.cmacs-table .ng-star-inserted{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal}.cmacs-table cmacs-tag{padding:1px 5px;height:unset}::ng-deep .cmacs-table .ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.cmacs-table .ant-table-tbody>tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.cmacs-table .ant-table-thead>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td,.cmacs-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-selected-row)>td{background-color:#fff}::ng-deep .cmacs-table .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#f2f7ff}::ng-deep .cmacs-table .ant-spin-nested-loading{clear:both}::ng-deep .cmacs-table .ant-table table{border-collapse:collapse}::ng-deep .cmacs-table .tableinput.ant-input:focus,::ng-deep .cmacs-table .tableinput.ant-input:hover{box-shadow:none;border:1px solid #2A7CFF}::ng-deep .cmacs-table .tableinput,::ng-deep .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number),::ng-deep .cmacs-table .tableinput>*,::ng-deep .cmacs-table .tableinput .datepickerwidth,::ng-deep .cmacs-table .tableinput .datepickerwidth .ant-input,::ng-deep .cmacs-table .tableinput .ant-select-selection--single{height:30px!important}::ng-deep .cmacs-table tr:not(.cmacs-no-selection) .tableinput{margin-left:-5px}::ng-deep .cmacs-table tr:not(.cmacs-no-selection) input.tableinput{padding:5px 4px}::ng-deep .cmacs-table cmacs-date-picker.tableinput{margin-left:-5px}::ng-deep .cmacs-table .tableinput .datepickerwidth .ant-input{padding:0 4px}::ng-deep .cmacs-table .tableinput .ant-select-selection--single .ant-select-selection__rendered{margin-left:4px;line-height:30px}::ng-deep .cmacs-table .tableinput .ant-input-number-input{padding-left:4px}::ng-deep .cmacs-table .ant-input-number:not(.cmacs-datetime-picker-input-number){overflow:visible}::ng-deep .cmacs-table cmacs-input-number.tableinput,::ng-deep .cmacs-table cmacs-select.tableinput{margin-left:-5px}::ng-deep .cmacs-table .tableinput .ant-input-number-handler-wrap{height:28px!important}.cmacs-table .cmacs-no-selection{-webkit-user-select:none;user-select:none}::ng-deep .cmacs-table .cmacs-no-selection .editable-cell,::ng-deep .cmacs-table .cmacs-no-selection .tableinput{margin-top:-4px;margin-bottom:-3px;height:30px}::ng-deep .cmacs-table .cmacs-no-selection input.tableinput{padding:6px 4px 5px;margin-left:-5px}::ng-deep .cmacs-table .cmacs-no-selection .editable-cell-value-wrap{height:30px}::ng-deep .cmacs-table table{table-layout:fixed}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters{display:inline-flex;position:relative;top:3px}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner,::ng-deep .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-up:not(.on),::ng-deep .cmacs-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-down:not(.on){color:#bec4cd}::ng-deep .cmacs-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner-full{margin-left:0!important}::ng-deep .cmacs-table .ant-table-fixed-header .ant-table-scroll .ant-table-header{overflow:hidden;margin-bottom:-20px!important;padding-bottom:20px!important;opacity:1}::ng-deep .cmacs-table .ant-table-fixed-header>.ant-table-container>.ant-table-body{scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin;overflow:auto!important;position:inherit}::ng-deep .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar,::-webkit-scrollbar{width:6px;height:6px}::ng-deep .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb,::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::ng-deep .ant-table-fixed-header>.ant-table-container>.ant-table-body::-webkit-scrollbar-thumb:hover,::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}.cmacs-table-edit-icon{position:relative;top:3px;left:5px;opacity:0;float:right;font-size:14px}.cmacs-table-edit-icon:hover{color:#2a7cff}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }, { type: i2.ExportAsService }, { type: i3.CmacsContextMenuService }, { type: i4.ExcelService }, { type: i5.UtilService }, { type: i6.DatePipe }, { type: i7.CookieService }]; }, { size: [{
            type: Input
        }], showTotal: [{
            type: Input
        }], pageSizeOptions: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], virtualItemSize: [{
            type: Input
        }], loadingDelay: [{
            type: Input
        }], loadingIndicator: [{
            type: Input
        }], total: [{
            type: Input
        }], title: [{
            type: Input
        }], footer: [{
            type: Input
        }], noResult: [{
            type: Input
        }], widthConfig: [{
            type: Input
        }], pageIndex: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], data: [{
            type: Input
        }], config: [{
            type: Input
        }], configChange: [{
            type: Output
        }], fieldId: [{
            type: Input
        }], gridID: [{
            type: Input
        }], paginationPosition: [{
            type: Input
        }], scroll: [{
            type: Input
        }], nzItemRender: [{
            type: ViewChild,
            args: ['renderItemTemplate']
        }], printLandscape: [{
            type: Input
        }], wrapLines: [{
            type: Input
        }], frontPagination: [{
            type: Input
        }], templateMode: [{
            type: Input
        }], bordered: [{
            type: Input
        }], showPagination: [{
            type: Input
        }], loading: [{
            type: Input
        }], showSizeChanger: [{
            type: Input
        }], hideOnSinglePage: [{
            type: Input
        }], showQuickJumper: [{
            type: Input
        }], simple: [{
            type: Input
        }], checkboxSelect: [{
            type: Input
        }], inLineEdit: [{
            type: Input
        }], dataTable: [{
            type: Input
        }], showRate: [{
            type: Input
        }], hasCookies: [{
            type: Input
        }], exportEvent: [{
            type: Input
        }], buttonClick: [{
            type: Output
        }], rateChange: [{
            type: Output
        }], selectionChange: [{
            type: Output
        }], ondlclickRow: [{
            type: Output
        }], onclickRow: [{
            type: Output
        }], onclickFavorite: [{
            type: Output
        }], onedit: [{
            type: Output
        }], rateCount: [{
            type: Input
        }], multiSelect: [{
            type: Input
        }], sortChange: [{
            type: Output
        }], onresize: [{
            type: Output
        }], contextmenu: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['fieldTypeInput', { read: ElementRef }]
        }], inputNumberElement: [{
            type: ViewChild,
            args: ['fieldTypeInputNumber', { read: ElementRef }]
        }], inputNumberComponent: [{
            type: ViewChild,
            args: [CmacsInputNumberComponent, { read: CmacsInputNumberComponent }]
        }], datePickerElement: [{
            type: ViewChild,
            args: ['fieldTypeDatePicker', { read: ElementRef }]
        }], selectElement: [{
            type: ViewChild,
            args: ['fieldTypeSelect', { read: ElementRef }]
        }], boolElement: [{
            type: ViewChild,
            args: ['fieldTypeBool', { read: ElementRef }]
        }], handleMouseDown: [{
            type: HostListener,
            args: ['document:mousedown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYmxlL2NtYWNzLXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJsZS9jbWFjcy10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBSU4sU0FBUyxFQUNULFlBQVksRUFDWix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RCxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLHFCQUFxQixDQUFDO0FBRzdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRS9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDeEJ2Riw2QkFHOEIsZUFBQTtJQUNOLHlPQUFzQixnTEFD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LENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7d0JBQy9FLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxSCxNQUFNLEtBQUssR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO3dCQUM5QixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLFdBQVcsRUFBRTs0QkFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQ0FDbkcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEs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SSxFQUFFLFVBQVUsRUFBRTtZQStFaEQsZUFBZTtrQkFEZCxZQUFZO21CQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGNvdW50LCBkZWxheSwgcmVwZWF0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgRXhwb3J0QXNTZXJ2aWNlIH0gZnJvbSAnbmd4LWV4cG9ydC1hcyc7XHJcbmltcG9ydCB7IEdyaWRDb25maWcsIEZpZWxkIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgR3JpZEV4cENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWV4cC1jb25maWcnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL1RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL0NlbGRUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9leHBvcnQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCB7IE56U2l6ZU1EU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IENtYWNzQ29udGV4dE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vY21hY3MtZHJvcGRvd24vY29udGV4dC1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtaW5wdXQtbnVtYmVyL2NtYWNzLWlucHV0LW51bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelJlc2l6ZUV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xyXG5cclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRhYmxlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBleHBvcnRBc1NlcnZpY2U6IEV4cG9ydEFzU2VydmljZSxcclxuICAgIHByaXZhdGUgY21hY3NDb250ZXh0TWVudVNlcnZpY2U6IENtYWNzQ29udGV4dE1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBleGNlbFNlcnZpY2U6IEV4Y2VsU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXHJcbiAgICBwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2VcclxuICApIHtcclxuICAgIC8vIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS13cmFwcGVyJyk7XHJcbiAgfVxyXG4gIGxvY2FsZTogYW55ID0ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgaGVhZGVyQm90dG9tU3R5bGUgPSB7fTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZU1EU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgc2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PjtcclxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0RlbGF5ID0gMDtcclxuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB0b3RhbCA9IDA7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHdpZHRoQ29uZmlnOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XHJcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgpIGRhdGEgPSBbXTtcclxuICBASW5wdXQoKSBjb25maWc6IEdyaWRDb25maWc7XHJcbiAgQE91dHB1dCgpIGNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPEdyaWRDb25maWc+ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGZpZWxkSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBncmlkSUQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBzY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuICBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnKSBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPHtcclxuICAgICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnO1xyXG4gICAgcGFnZTogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBwcmludExhbmRzY2FwZSA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHdyYXBMaW5lcyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmcm9udFBhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0ZW1wbGF0ZU1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2hlY2tib3hTZWxlY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5MaW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkYXRhVGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1JhdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzQ29va2llcyA9IHRydWU7XHJcbiAgQElucHV0KCkgZXhwb3J0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRFeHBDb25maWc+KCk7XHJcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHJhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuICBAT3V0cHV0KCkgb25kbGNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja0Zhdm9yaXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHJhdGVDb3VudCA9IDU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpU2VsZWN0ID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25yZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQElucHV0KCkgY29udGV4dG1lbnU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIHB1YmxpYyBkcm9wZG93bjogYW55O1xyXG5cclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGRlZmF1bHRTb3J0T3JkZXIgPSBudWxsO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBhbGxDaGVja2VkID0gZmFsc2U7XHJcbiAgZWRpdElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJvd09uRWRpdGlvbiA9IC0xO1xyXG4gIHRhcENvdW50ID0gMDtcclxuICBsYXN0SWR4U2VsZWN0ZWQgPSBudWxsO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWVsZFR5cGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlSW5wdXROdW1iZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXROdW1iZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NJbnB1dE51bWJlckNvbXBvbmVudCwgeyByZWFkOiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IH0pIGlucHV0TnVtYmVyQ29tcG9uZW50OiBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkVHlwZURhdGVQaWNrZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgZGF0ZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlU2VsZWN0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHNlbGVjdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmllbGRUeXBlQm9vbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBib29sRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBfb25yZXNpemUkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHB1YmxpYyBvbnJlc2l6ZW9icyA9IHRoaXMuX29ucmVzaXplJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBfb25zb3J0JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwdWJsaWMgb25zb3J0b2JzID0gdGhpcy5fb25zb3J0JC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgb3JkZXIgPSAwO1xyXG5cclxuICBjbGlja3MgPSAwO1xyXG5cclxuICBjb250ZXh0TWVudSgkZXZlbnQ6IE1vdXNlRXZlbnQsIHRlbXBsYXRlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuY21hY3NDb250ZXh0TWVudVNlcnZpY2UuY3JlYXRlKCRldmVudCwgdGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRFZGl0KGlkOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcsIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmVkaXRJZCA9IGlkO1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5mb2N1c1NlbGVjdCh0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgICBpZiAodGhpcy5pbnB1dE51bWJlckNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmZvY3VzU2VsZWN0KHRoaXMuaW5wdXROdW1iZXJDb21wb25lbnQuaW5wdXRFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnQoJGV2ZW50OiBhbnksIGZpZWxkUHJvcGVydHk6IHN0cmluZywpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuX29uc29ydCQubmV4dCh7IHNvcnROYW1lOiBmaWVsZFByb3BlcnR5LCBzb3J0VmFsdWU6ICRldmVudCB9KTtcclxuICB9XHJcblxyXG4gIG9uUmVzaXplKGV2ZW50OiBOelJlc2l6ZUV2ZW50LCBjb2w6IHN0cmluZywgZmllbGQ6IEZpZWxkKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5fb25yZXNpemUkLm5leHQoeyBldmVudCwgY29sLCBmaWVsZCB9KTtcclxuICB9XHJcblxyXG4gIG9uUmVzaXplRXZ0KHsgd2lkdGggfTogTnpSZXNpemVFdmVudCwgY29sOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCk6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWVsZHMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbmZpZy5maWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuY29uZmlnLmZpZWxkc1tpXTtcclxuICAgICAgICBpZiAoZmllbGQucHJvcGVydHkgPT09IGNvbCkge1xyXG4gICAgICAgICAgY29uc3QgZWxXaWR0aCA9IGZpZWxkLndpZHRoID8gTnVtYmVyKGZpZWxkLndpZHRoLnJlcGxhY2UoL1teXFxkLi1dL2csICcnKSkgOiAwO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnggJiYgaSArIDEgPT09IHRoaXMuY29uZmlnLmZpZWxkcy5sZW5ndGggLSAxICYmXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0gIT09IG51bGwgJiYgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsV2lkdGhOZXh0ID0gdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aCA/IE51bWJlcih0aGlzLmNvbmZpZy5maWVsZHNbaSArIDFdLndpZHRoLnJlcGxhY2UoL1teXFxkLi1dL2csICcnKSkgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IHdpZHRoIC0gZWxXaWR0aDtcclxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMCAmJiBkZWx0YSA8IGVsV2lkdGhOZXh0KSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ubWluV2lkdGggIT09IG51bGwgJiYgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS5taW5XaWR0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ubWluV2lkdGgpIDwgKGVsV2lkdGhOZXh0IC0gZGVsdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmZpZWxkc1tpICsgMV0ud2lkdGggPSBgJHtlbFdpZHRoTmV4dCAtIGRlbHRhfXB4YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aCA9IGAke2VsV2lkdGhOZXh0IC0gZGVsdGF9cHhgO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb25maWcuZmllbGRzW2kgKyAxXS53aWR0aCA9IGAke2VsV2lkdGhOZXh0IC0gZGVsdGF9cHhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmaWVsZC53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgIC8vIHRoaXMuc2Nyb2xsLnggPSB0aGlzLnNjcm9sbC54ID8gYCR7TnVtYmVyKHRoaXMuc2Nyb2xsLngucmVwbGFjZSgvW15cXGQuLV0vZywgJycpKSAtIGVsV2lkdGggKyB3aWR0aH1weGAgOiBudWxsO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm9ucmVzaXplLmVtaXQoeyBjb2wsIGNvbmZpZzogdGhpcy5jb25maWcgfSk7XHJcbiAgICB0aGlzLmNvbmZpZ0NoYW5nZS5lbWl0KHRoaXMuY29uZmlnKTtcclxuICAgIGlmICh0aGlzLmdyaWRJRCA9PT0gbnVsbCB8fCB0aGlzLmdyaWRJRCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhhc0Nvb2tpZXMgJiYgdGhpcy5nZXRJbmRleENvb2tpZSgpKSB7XHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnKSwgMzY1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlTW91c2VEb3duKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5lZGl0SWQgJiYgdGhpcy5wcm9wZXJ0eSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSB8fFxyXG4gICAgICAgICh0aGlzLmlucHV0TnVtYmVyRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuaW5wdXROdW1iZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB8fFxyXG4gICAgICAgICh0aGlzLmRhdGVQaWNrZXJFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5kYXRlUGlja2VyRWxlbWVudC5uYXRpdmVFbGVtZW50KSkgfHxcclxuICAgICAgICAodGhpcy5zZWxlY3RFbGVtZW50ICYmICF0aGlzLmNoaWxkT2YoZWxlbWVudCwgdGhpcy5zZWxlY3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHx8XHJcbiAgICAgICAgICAodGhpcy5ib29sRWxlbWVudCAmJiAhdGhpcy5jaGlsZE9mKGVsZW1lbnQsIHRoaXMuYm9vbEVsZW1lbnQubmF0aXZlRWxlbWVudCkpKVxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dE51bWJlckNvbXBvbmVudCkge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dE51bWJlckNvbXBvbmVudC5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5yb3dPbkVkaXRpb24gPj0gMCkge1xyXG4gICAgICAgICAgdGhpcy5vbmVkaXQuZW1pdCh0aGlzLmRhdGFbdGhpcy5yb3dPbkVkaXRpb25dKTtcclxuICAgICAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c1NlbGVjdChlbGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChlbGVtKSB7XHJcbiAgICAgIGVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtLm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRIZWFkZXJNYXhXaWR0aChmaWVsZDogRmllbGQpOiBzdHJpbmcge1xyXG4gICAgaWYgKGZpZWxkLnNob3dTb3J0KSB7XHJcbiAgICAgIHJldHVybiBgY2FsYygxMDAlIC0gMTVweClgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAxMDAlYDtcclxuICB9XHJcblxyXG4gIGNoaWxkT2Yobm9kZTogYW55LCBhbmNlc3RvcjogYW55KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgY2hpbGQgPSBub2RlO1xyXG4gICAgd2hpbGUgKGNoaWxkICE9PSBudWxsKSB7XHJcbiAgICAgIGlmIChjaGlsZCA9PT0gYW5jZXN0b3IpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdCAmJiBjaGlsZC5jbGFzc0xpc3QubGVuZ3RoID4gMCAmJiBjaGlsZC5jbGFzc05hbWUgJiYgdHlwZW9mIGNoaWxkLmNsYXNzTmFtZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignY2RrLW92ZXJsYXktcGFuZScpID49IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkLmNoaWxkTm9kZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZC5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdDTUFDUy1NT0RBTCcpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNoaWxkID0gY2hpbGQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgdGhpcy5wcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgIHRoaXMucm93T25FZGl0aW9uID0gLTE7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvd09uRWRpdGlvbiA9IGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGVOZ01vZGVsKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgIHRoaXMucHJvcGVydHkgPSBudWxsO1xyXG4gICAgdGhpcy5yb3dPbkVkaXRpb24gPSAtMTtcclxuICAgIHRoaXMub25lZGl0LmVtaXQodGhpcy5kYXRhW2luZGV4XSk7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleChpZCk6IG51bWJlciB7XHJcbiAgICBsZXQgaSA9IC0xO1xyXG4gICAgaSA9IHRoaXMuY2hlY2tib3hDYWNoZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGlkKTtcclxuICAgIHJldHVybiBpO1xyXG4gIH1cclxuICB1cGRhdGVDaGVja2JveENhY2hlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlLnB1c2goe1xyXG4gICAgICAgIHNlbGVjdGVkOiBpdGVtLnNlbGVjdGVkID8gaXRlbS5zZWxlY3RlZCA6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IHsgLi4uaXRlbSB9LFxyXG4gICAgICAgIG9yZGVyOiBpdGVtLnNlbGVjdGVkID8gdGhpcy5vcmRlcisrIDogLTFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldE1heFdpZHRoKCk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMuaW5MaW5lRWRpdCkge1xyXG4gICAgICByZXR1cm4gYDEwMCVgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBjYWxjKDEwMCUgLSAyMHB4KWA7XHJcbiAgfVxyXG5cclxuICBvbkJ1dHRvbkNsaWNrKGZpZWxkOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuYnV0dG9uQ2xpY2suZW1pdChmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94Q2hhbmdlKCRldmVudCwgZGF0YSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMuZ2V0SW5kZXgoZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSldLm9yZGVyID0gJGV2ZW50ID8gdGhpcy5vcmRlcisrIDogLTE7XHJcbiAgICB0aGlzLnJlZnJlc2hDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoQ2hlY2tib3hTdGF0ZShvbmluaXQgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja0NoZWNrYm94U3RhdGUoKTtcclxuICAgIGlmICghb25pbml0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZGF0YVNlbGVjdGVkLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDaGVja2JveFN0YXRlKCk6IENoZWNrYm94U2VsZWN0W10ge1xyXG4gICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmFsbENoZWNrZWQgPSAoZGF0YVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgKGRhdGFTZWxlY3RlZC5sZW5ndGggPT09IHRoaXMuY2hlY2tib3hDYWNoZS5sZW5ndGgpKTtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZGF0YVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgIXRoaXMuYWxsQ2hlY2tlZDtcclxuICAgIHJldHVybiBkYXRhU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBuZ01vZGVsQ2hhbmdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMucm93T25FZGl0aW9uID0gaW5kZXg7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgb25SYXRlQ2hhbmdlKGNvdW50OiBudW1iZXIsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgZGF0YVt0aGlzLmNvbmZpZy5maWVsZFJhdGVdID0gY291bnQ7XHJcbiAgICB0aGlzLnJhdGVDaGFuZ2UuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIG9uRmF2b3JpdGVDaGFuZ2UoaXNGYXZvcml0ZTogYm9vbGVhbiwgZmllbGQ6IEZpZWxkLCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIGRhdGFbZmllbGQucHJvcGVydHldID0gaXNGYXZvcml0ZTtcclxuICAgIHRoaXMub25jbGlja0Zhdm9yaXRlLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBvblJhdGVDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGdldEZpZWxkcygpOiBGaWVsZFtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5oaWRkZW4gPT09IHVuZGVmaW5lZCB8fCAhaXRlbS5oaWRkZW4pO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveEFsbENoYW5nZShzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBlbGVtZW50LnNlbGVjdGVkID0gc3RhdHVzO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoKHN0YXR1cykgPyB0aGlzLmRhdGEgOiBbXSk7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChkYXRhOiBhbnksIGZpZWxkOiBGaWVsZCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0ICYmIGZpZWxkLnNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgY29uc3QgaXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQoaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbVtmaWVsZC5zZWxlY3QudmFsdWVdID09PSBkYXRhW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgIHJlc3VsdCA9IChpdGVtICE9PSB1bmRlZmluZWQpID8gaXRlbVtmaWVsZC5zZWxlY3QubGFiZWxdIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0KGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gIH1cclxuXHJcbiAgaXNSZWFkT25seShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLnJlYWRvbmx5ICE9PSB1bmRlZmluZWQgJiYgZmllbGQucmVhZG9ubHk7XHJcbiAgfVxyXG5cclxuICBpc0Jvb2xlYW4oZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5Cb29sZWFuO1xyXG4gIH1cclxuXHJcbiAgaXNPYmplY3QodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mICh2YWx1ZSkgPT09ICdvYmplY3QnO1xyXG4gIH1cclxuXHJcbiAgaXNEYXRlKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICB9XHJcblxyXG4gIGlzU3RyaW5nKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQgJiYgZmllbGQuZWRpdFRlbXBsYXRlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNOdW1iZXIoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCAmJiBmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlRGVmYXVsdChmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZUJ1dHRvbihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5CdXR0b247XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGFnKGZpZWxkOiBGaWVsZCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRhZztcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVCdXR0b25GYXZvcml0ZShmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5GYXZvcml0ZTtcclxuICB9XHJcblxyXG4gIGlzVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRhdGFTZWxlY3RkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLm1hcChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICByZXR1cm4gZGF0YVNlbGVjdGQuaW5kZXhPZihkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5oYXNDb29raWVzICYmIHRoaXMuZ2V0SW5kZXhDb29raWUoKSAmJiB0aGlzLmNvb2tpZXMuY2hlY2sodGhpcy5ncmlkSUQpKSB7XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnU3RyID0gdGhpcy5jb29raWVzLmdldCh0aGlzLmdyaWRJRCk7XHJcbiAgICAgIC8vIHJlc2V0IGV4cGlyYXRpb24gZGF0ZVxyXG4gICAgICB0aGlzLmNvb2tpZXMuc2V0KHRoaXMuZ3JpZElELCBzYXZlZENvbmZpZ1N0ciwgMzY1KTtcclxuXHJcbiAgICAgIC8vIHBhcnNlIGNvb2tpZSB2YWx1ZSB0byB0eXBlc2NyaXB0IGNvbnN0XHJcbiAgICAgIGNvbnN0IHNhdmVkQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmNvb2tpZXMuZ2V0KHRoaXMuZ3JpZElEKSkgYXMgR3JpZENvbmZpZztcclxuICAgICAgaWYgKHR5cGVvZiBzYXZlZENvbmZpZyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHNhdmVkQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuY29uZmlnQ2hhbmdlLmVtaXQodGhpcy5jb25maWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleENvb2tpZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gICAgLypsZXQgYWxsb3dJbmRleFBhZ2VDb29raWUgPSBmYWxzZTtcclxuICAgIGxldCBjb25zZW50Q29va2llID0gdGhpcy5jb29raWVzLmdldCgnT3B0YW5vbkNvbnNlbnQnKTtcclxuICAgIGlmIChjb25zZW50Q29va2llICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGdyb3VwSW5kZXggPSBjb25zZW50Q29va2llLmluZGV4T2YoJ2dyb3Vwcz0nKTtcclxuICAgICAgbGV0IGdyb3VwcyA9IGNvbnNlbnRDb29raWUuc3Vic3RyaW5nKGdyb3VwSW5kZXgpOyAvL3dpbGwgcmV0dXJuIHNvbWV0aGluZ2xpa2UgZ3JvdXBzPUMwMDAyOjAsQzAwMDE6MVxyXG4gICAgICBsZXQgZnVuY3Rpb25hbEdyb3VwSW5kZXggPSBncm91cHMuaW5kZXhPZignQzAwMDk6Jyk7XHJcbiAgICAgIGlmIChmdW5jdGlvbmFsR3JvdXBJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5VmFsdWUgPSBncm91cHMuc3Vic3RyaW5nKGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNiwgZnVuY3Rpb25hbEdyb3VwSW5kZXggKyA3KTtcclxuICAgICAgICBpZiAoTnVtYmVyKGNhdGVnb3J5VmFsdWUpID09PSAxKSB7XHJcbiAgICAgICAgICBhbGxvd0luZGV4UGFnZUNvb2tpZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsb3dJbmRleFBhZ2VDb29raWU7Ki9cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveFNlbGVjdCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRhVGFibGUgJiYgdGhpcy5kYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgd2hpbGUgKHRoaXMuZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5jaGVja0NoZWNrYm94U3RhdGUoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZ3JpZElEKSB7XHJcbiAgICAgIHRoaXMuZ3JpZElEID0gdGhpcy51dGlsU2VydmljZS51dWlkdjQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV4cG9ydEV2ZW50LnN1YnNjcmliZSgoY29uZmlnOiBHcmlkRXhwQ29uZmlnKSA9PiB7XHJcblxyXG4gICAgICBzd2l0Y2ggKGNvbmZpZy5leHBvcnRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBFeHBvcnRUeXBlLlBkZjpcclxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9QZGYoY29uZmlnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXhwb3J0VHlwZS5Yc2x4OlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb0V4Y2VsKGNvbmZpZy5maWxlTmFtZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEV4cG9ydFR5cGUuUG5nOlxyXG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BuZyhjb25maWcuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0Q29tcGxldGVkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydENvbXBsZXRlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hlY2tTb3J0RXZlbnQoKTtcclxuICAgIHRoaXMuY2hlY2tSZXNpemVFdmVudCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrU29ydEV2ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbnNvcnRvYnMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuX29ucmVzaXplJCksXHJcbiAgICAgIGRlbGF5KDMwMCksXHJcbiAgICAgIHJlcGVhdCgpLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICkuc3Vic2NyaWJlKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBmID0gdGhpcy5jb25maWcuZmllbGRzLmZpbmQoZWwgPT4gZWwucHJvcGVydHkgPT09IG9iai5zb3J0TmFtZSk7XHJcbiAgICAgIGYuc29ydE9yZGVyID0gb2JqLnNvcnRWYWx1ZTtcclxuICAgICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoeyBzb3J0TmFtZTogb2JqLnNvcnROYW1lLCBzb3J0VmFsdWU6IG9iai5zb3J0VmFsdWUgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrUmVzaXplRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9ucmVzaXplb2JzLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgKS5zdWJzY3JpYmUoKG9iajogeyBldmVudDogTnpSZXNpemVFdmVudCwgY29sOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCB9KSA9PiB7XHJcbiAgICAgIHRoaXMuY29uZmlnID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZykpO1xyXG4gICAgICB0aGlzLm9uUmVzaXplRXZ0KG9iai5ldmVudCwgb2JqLmNvbCwgb2JqLmZpZWxkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuZGF0YSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QbmcoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMudXRpbFNlcnZpY2UuZXhwb3J0VGFibGUoJ3BuZycsIGZpbGVOYW1lLCB0aGlzLmdyaWRJRCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRUb0V4Y2VsKGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBkYXRhVG9FeHBvcnQ6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT5cclxuICAgICAgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdCB8fFxyXG4gICAgICBpdGVtLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UYWcgfHxcclxuICAgICAgaXRlbS5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWYpO1xyXG5cclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVG9FeHBvcnQgPSB7fTtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKCFmaWVsZC5oaWRkZW4pIHtcclxuICAgICAgICAgIGlmIChmaWVsZC5lZGl0VGVtcGxhdGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3QpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IGZpZWxkLnNlbGVjdC5zZWxlY3REYXRhLmZpbmQob3B0aW9uID0+IG9wdGlvbltmaWVsZC5zZWxlY3QudmFsdWVdID09PSBpdGVtW2ZpZWxkLnByb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RJdGVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBzZWxlY3RJdGVtW2ZpZWxkLnNlbGVjdC5sYWJlbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Ub0V4cG9ydFtmaWVsZC5kaXNwbGF5XSA9IGl0ZW1bZmllbGQucHJvcGVydHldLmNvbnRleHQuZXhwb3J0VmFsdWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtVG9FeHBvcnRbZmllbGQuZGlzcGxheV0gPSBpdGVtW2ZpZWxkLnByb3BlcnR5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGF0YVRvRXhwb3J0LnB1c2goaXRlbVRvRXhwb3J0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpbGVuYW1lRm9ybWF0dGVkID0gbW9tZW50KCkuZm9ybWF0KCdERC5NTS5ZWVlZLkhILm1tLnNzJykgKyAnXycgKyBmaWxlTmFtZTtcclxuICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGFUb0V4cG9ydCwgZmlsZW5hbWVGb3JtYXR0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VG9QZGYoY29uZmlnKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgaWYgKCFjb25maWcudXNlVmVyc2lvbjIpIHtcclxuICAgICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZShcclxuICAgICAgICAncGRmJyxcclxuICAgICAgICBjb25maWcuZmlsZU5hbWUsXHJcbiAgICAgICAgdGhpcy5ncmlkSUQsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlOYW1lLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRVc2VyTmFtZSxcclxuICAgICAgICBjb25maWcuZXhwb3J0VGl0bGUsXHJcbiAgICAgICAgY29uZmlnLmV4cG9ydENvbXBhbnlMb2dvVXJsLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUYWJsZUN1c3RvbVdpZHRoLFxyXG4gICAgICAgIGNvbmZpZy5leHBvcnRUYWJsZUN1c3RvbUhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXhwb3J0Q29uZmlnID0ge1xyXG4gICAgICAgIGNoZWNrYm94U2VsZWN0OiB0aGlzLmNoZWNrYm94U2VsZWN0LFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbXM6IHRoaXMuY2hlY2tib3hTZWxlY3QgP1xyXG4gICAgICAgICAgdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLm1hcChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSkgOiBbXSxcclxuICAgICAgICBmaWxlTmFtZTogY29uZmlnLmZpbGVOYW1lLFxyXG4gICAgICAgIGRhdGVQaXBlOiB0aGlzLmRhdGVQaXBlLFxyXG4gICAgICAgIGVsZW1JRDogdGhpcy5ncmlkSUQsXHJcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxyXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXHJcbiAgICAgICAgY29sdW1uU3R5bGVzOiBjb25maWcuY29sdW1uU3R5bGVzLFxyXG4gICAgICAgIGV4cG9ydENvbXBhbnlOYW1lOiBjb25maWcuZXhwb3J0Q29tcGFueU5hbWUsXHJcbiAgICAgICAgZXhwb3J0VXNlck5hbWU6IGNvbmZpZy5leHBvcnRVc2VyTmFtZSxcclxuICAgICAgICBleHBvcnRUaXRsZTogY29uZmlnLmV4cG9ydFRpdGxlLFxyXG4gICAgICAgIGV4cG9ydENvbXBhbnlMb2dvVXJsOiBjb25maWcuZXhwb3J0Q29tcGFueUxvZ29VcmwgPyBjb25maWcuZXhwb3J0Q29tcGFueUxvZ29VcmwgOiAnYXNzZXRzL1BUb0JfbG9nby5wbmcnLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy51dGlsU2VydmljZS5leHBvcnRUYWJsZXYyKFxyXG4gICAgICAgIGV4cG9ydENvbmZpZ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHRhcEhhbmRsZXIoJGV2ZW50LCBkYXRhKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhcENvdW50ICs9IDE7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMudGFwQ291bnQgPT09IDEpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmNsaWNrUm93KG51bGwsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGFwQ291bnQgPSAwO1xyXG4gICAgfSwgNjAwKTtcclxuICAgIGlmICh0aGlzLnRhcENvdW50ID4gMSkge1xyXG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kYmxDbGlja1JvdyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIGNsaWNrUm93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tzKys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Um93KGV2ZW50LCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPiAxKSB7XHJcbiAgICAgICAgdGhpcy5kYmxDbGlja1JvdyhkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNsaWNrcyA9IDA7XHJcbiAgICB9LCAzMDApO1xyXG4gIH1cclxuXHJcbiAgcHJldmVudERlZmF1bHQoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICAgIC8qIEdldCBpbmRleCBvZiBzZWxlY3Rpb24gKi9cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2JveENhY2hlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3QpIHtcclxuICAgICAgaWYgKGV2ZW50ICYmICh0b0Jvb2xlYW4oZXZlbnQuY3RybEtleSkgfHwgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkpIHtcclxuICAgICAgICAvKiBTaGlmdCBTZWxlY3Rpb24gKi9cclxuICAgICAgICBpZiAodG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RNdWx0aXBsZShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0aW9uKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIFNlbGVjdCBlbGVtZW50ICovXHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2FjaGVbaW5kZXhdLnNlbGVjdGVkID0gZXZlbnQgJiYgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSA/IHRydWUgOiAhdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5zZWxlY3RlZDtcclxuICAgICAgICAvKiBTYXZlIGxhc3QgaW5kZXggc2VsZWN0ZWQgKi9cclxuICAgICAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyBpbmRleCA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKTtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2luZGV4XS5vcmRlciA9IHRoaXMuY2hlY2tib3hDYWNoZVtpbmRleF0uc2VsZWN0ZWQgPyB0aGlzLm9yZGVyKysgOiAtMTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3RlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGlvbihkYXRhKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCAmJiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gIT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pXHJcbiAgICAgIC5mb3JFYWNoKGVsZW0gPT4geyBlbGVtLnNlbGVjdGVkID0gZmFsc2UsIGVsZW0ub3JkZXIgPSAtMTsgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RNdWx0aXBsZShjdXJyZW50SWR4KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sYXN0SWR4U2VsZWN0ZWQgIT09IG51bGwpIHtcclxuICAgICAgd2hpbGUgKGN1cnJlbnRJZHggIT09IHRoaXMubGFzdElkeFNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMubGFzdElkeFNlbGVjdGVkXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENhY2hlW3RoaXMubGFzdElkeFNlbGVjdGVkXS5vcmRlciA9IHRoaXMub3JkZXIrKztcclxuICAgICAgICB0aGlzLmxhc3RJZHhTZWxlY3RlZCA9IGN1cnJlbnRJZHggPiB0aGlzLmxhc3RJZHhTZWxlY3RlZCA/IHRoaXMubGFzdElkeFNlbGVjdGVkICsgMSA6IHRoaXMubGFzdElkeFNlbGVjdGVkIC0gMTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2N1cnJlbnRJZHhdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlW2N1cnJlbnRJZHhdLm9yZGVyID0gdGhpcy5vcmRlcisrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYXN0SWR4U2VsZWN0ZWQgPSBjdXJyZW50SWR4O1xyXG4gIH1cclxuXHJcbiAgZGJsQ2xpY2tSb3coZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uZGxjbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtRGF0ZShkYXRlLCBkYXRlRm9ybWF0PW51bGwpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbSA9IG1vbWVudChkYXRlKTtcclxuICAgIGlmIChtLmlzVmFsaWQoKSkge1xyXG4gICAgICBpZihkYXRlRm9ybWF0KXtcclxuICAgICAgICByZXR1cm4gbS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIG0ubG9jYWxlKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbS5mb3JtYXQoJ0RELk1NLllZWVknKTtcclxuICAgICAgICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG0uZm9ybWF0KCdNTS9ERC9ZWVlZJyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2phJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtLmZvcm1hdCgnWVlZWS9NTS9ERCcpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG0uZm9ybWF0KCdNTS9ERC9ZWVlZJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFNlbGVjdCB7XHJcbiAgZGF0YTogYW55O1xyXG4gIHNlbGVjdGVkOiBib29sZWFuIHwgbnVtYmVyO1xyXG4gIG9yZGVyPzogbnVtYmVyO1xyXG59XHJcbiIsIjxkaXYgaWQ9XCJ7e2dyaWRJRH19XCI+XHJcbiAgPG56LXRhYmxlICNncmlkQ29tcG9uZW50IFtuekRhdGFdPVwiZGF0YVwiIFtuelNob3dUb3RhbF09XCJzaG93VG90YWxcIiBbbnpQYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcclxuICAgIFtuelZpcnR1YWxJdGVtU2l6ZV09XCJ2aXJ0dWFsSXRlbVNpemVcIiBbbnpMb2FkaW5nRGVsYXldPVwibG9hZGluZ0RlbGF5XCJcclxuICAgIFtuekxvYWRpbmdJbmRpY2F0b3JdPVwibG9hZGluZ0luZGljYXRvclwiIFtuelRvdGFsXT1cInRvdGFsXCIgW256VGl0bGVdPVwidGl0bGVcIiBbbnpGb290ZXJdPVwiZm9vdGVyXCJcclxuICAgIFtuek5vUmVzdWx0XT1cIm5vUmVzdWx0XCIgW256V2lkdGhDb25maWddPVwid2lkdGhDb25maWdcIiBbbnpQYWdlSW5kZXhdPVwicGFnZUluZGV4XCIgW256UGFnZVNpemVdPVwicGFnZVNpemVcIlxyXG4gICAgW256UGFnaW5hdGlvblBvc2l0aW9uXT1cInBhZ2luYXRpb25Qb3NpdGlvblwiIFtuelNjcm9sbF09XCJzY3JvbGxcIiBbbnpGcm9udFBhZ2luYXRpb25dPVwiZnJvbnRQYWdpbmF0aW9uXCJcclxuICAgIFtuelRlbXBsYXRlTW9kZV09XCJ0ZW1wbGF0ZU1vZGVcIiBbbnpTaG93UGFnaW5hdGlvbl09XCJzaG93UGFnaW5hdGlvblwiIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXHJcbiAgICBbbnpTaG93U2l6ZUNoYW5nZXJdPVwic2hvd1NpemVDaGFuZ2VyXCIgW256SGlkZU9uU2luZ2xlUGFnZV09XCJoaWRlT25TaW5nbGVQYWdlXCIgW256U2hvd1F1aWNrSnVtcGVyXT1cInNob3dRdWlja0p1bXBlclwiXHJcbiAgICBbbnpTaW1wbGVdPVwic2ltcGxlXCIgY2xhc3M9XCJjbWFjcy10YWJsZVwiPlxyXG4gICAgPHRoZWFkICpuZ0lmPVwiIWRhdGFUYWJsZVwiPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoICpuZ0lmPVwiY2hlY2tib3hTZWxlY3RcIlxyXG4gICAgICAgICAgICBueldpZHRoPVwiNDBweFwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiIFtpbmRldGVybWluYXRlXT1cImlzSW5kZXRlcm1pbmF0ZVwiXHJcbiAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1vbkNoZWNrYm94QWxsQ2hhbmdlKCRldmVudCk+PC9sYWJlbD5cclxuICAgICAgICA8L3RoPlxyXG4gICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZ2V0RmllbGRzKClcIlxyXG4gICAgICAgICAgICBuei1yZXNpemFibGVcclxuICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiIWZpZWxkLnJlc2l6YWJsZVwiXHJcbiAgICAgICAgICAgIG56Qm91bmRzPVwid2luZG93XCJcclxuICAgICAgICAgICAgW256TWluV2lkdGhdPVwiZmllbGQubWluV2lkdGggPyBmaWVsZC5taW5XaWR0aCA6IDEwMFwiXHJcbiAgICAgICAgICAgIFtuek1heFdpZHRoXT1cImZpZWxkLm1heFdpZHRoID8gZmllbGQubWF4V2lkdGggOiA1MDBcIlxyXG4gICAgICAgICAgICBuelByZXZpZXdcclxuICAgICAgICAgICAgKG56UmVzaXplRW5kKT1cIm9uUmVzaXplKCRldmVudCwgZmllbGQucHJvcGVydHksIGZpZWxkKVwiXHJcbiAgICAgICAgICAgIFtuelNob3dTb3J0XT1cImZpZWxkLnNob3dTb3J0XCJcclxuICAgICAgICAgICAgW256U29ydERpcmVjdGlvbnNdPVwiWydhc2NlbmQnLCAnZGVzY2VuZCddXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXRhYmxlLXNvcnRlZC1udWxsXT1cImZpZWxkLnNob3dTb3J0ICYmICFmaWVsZC5zb3J0T3JkZXJcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtdGFibGUtc29ydGVkLWFzY2VuZF09XCJmaWVsZC5zaG93U29ydCAmJiBmaWVsZC5zb3J0T3JkZXIgPT09ICdhc2NlbmQnXCJcclxuICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXRhYmxlLXNvcnRlZC1kZXNjZW5kXT1cImZpZWxkLnNob3dTb3J0ICYmIGZpZWxkLnNvcnRPcmRlciA9PT0gJ2Rlc2NlbmQnXCJcclxuICAgICAgICAgICAgWyhuelNvcnRPcmRlcildPVwiZmllbGQuc2hvd1NvcnQgPyBmaWVsZC5zb3J0T3JkZXIgOiBkZWZhdWx0U29ydE9yZGVyXCJcclxuICAgICAgICAgICAgKG56U29ydE9yZGVyQ2hhbmdlKT1cInNvcnQoJGV2ZW50LCBmaWVsZC5wcm9wZXJ0eSlcIlxyXG4gICAgICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwiZmllbGQubWluV2lkdGggPyBmaWVsZC5taW5XaWR0aCA6IGZpZWxkLndpZHRoXCJcclxuICAgICAgICAgICAgW3N0eWxlLm1heFdpZHRoXT1cImZpZWxkLndpZHRoXCJcclxuICAgICAgICAgICAgW256V2lkdGhdPVwiZmllbGQud2lkdGhcIj5cclxuICAgICAgICAgIDxkaXYgW3N0eWxlLm1heFdpZHRoXT1cImdldEhlYWRlck1heFdpZHRoKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsLWhlYWRlcl09XCIhd3JhcExpbmVzXCI+XHJcbiAgICAgICAgICAgIHt7ZmllbGQuZGlzcGxheX19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxuei1yZXNpemUtaGFuZGxlIG56RGlyZWN0aW9uPVwicmlnaHRcIiAqbmdJZj1cImZpZWxkLnJlc2l6YWJsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdGFibGUtcmVzaXplLXRyaWdnZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvbnotcmVzaXplLWhhbmRsZT5cclxuICAgICAgICA8L3RoPlxyXG4gICAgICAgIDx0aCBbc3R5bGUubWluV2lkdGhdPVwiJzEwNXB4J1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS5tYXhXaWR0aF09XCInMTA1cHgnXCJcclxuICAgICAgICAgICAgW256V2lkdGhdPVwiJzEwNXB4J1wiICpuZ0lmPVwic2hvd1JhdGVcIj48L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuICAgIDx0Ym9keT5cclxuICAgICAgPHRyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGdyaWRDb21wb25lbnQuZGF0YTsgaW5kZXggYXMgaVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwiY2xpY2tSb3coJGV2ZW50LCBkYXRhKVwiXHJcbiAgICAgICAgICAodG91Y2hzdGFydCk9XCJ0YXBIYW5kbGVyKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1uby1zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC10YWJsZS1zZWxlY3RlZC1yb3ddPVwiaXNSb3dTZWxlY3RlZChkYXRhKVwiXHJcbiAgICAgICAgICAoY29udGV4dG1lbnUpPVwiY29udGV4dE1lbnUoJGV2ZW50LCBjb250ZXh0TWVudVRlbXBsYXRlKVwiPlxyXG5cclxuICAgICAgICA8Y21hY3MtZHJvcGRvd24tbWVudSAjY29udGV4dE1lbnVUZW1wbGF0ZT1cImNtYWNzRHJvcGRvd25NZW51XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRleHRtZW51XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgZGF0YTogZGF0YSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9jbWFjcy1kcm9wZG93bi1tZW51PlxyXG5cclxuICAgICAgICA8dGQgKm5nSWY9XCJjaGVja2JveFNlbGVjdFwiIFtzdHlsZS5tYXhXaWR0aF09XCInNDBweCdcIiBbc3R5bGUubWluV2lkdGhdPVwiJzQwcHgnXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJjaGVja2JveENhY2hlW2dldEluZGV4KGRhdGFbY29uZmlnLmZpZWxkSWRdKV0uc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAoY2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrYm94Q2hhbmdlKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICAqbmdJZj1cImRhdGFbY29uZmlnLmZpZWxkSWRdICYmIGNoZWNrYm94Q2FjaGVbZ2V0SW5kZXgoZGF0YVtjb25maWcuZmllbGRJZF0pXVwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBmaVwiIFtuZ0NsYXNzXT1cIihpc0NlbGRUeXBlRGVmYXVsdChmaWVsZCkgJiYgaW5MaW5lRWRpdCAmJiAhaXNSZWFkT25seShmaWVsZCkpID8gWydlZGl0YWJsZS1yb3cnLCAnY21hY3MtdGFibGUtY2VsbC0nICsgZmllbGQucHJvcGVydHldIDogWydjbWFjcy10YWJsZS1jZWxsLScgKyBmaWVsZC5wcm9wZXJ0eV1cIiBbc3R5bGUubWF4V2lkdGhdPVwiJzEwMCUnXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNDZWxkVHlwZURlZmF1bHQoZmllbGQpICYmIGluTGluZUVkaXQgJiYgIWlzUmVhZE9ubHkoZmllbGQpOyBlbHNlIGNvbXBvbmVudFRwbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdGFibGUtY2VsbFwiIFtzdHlsZS5tYXhXaWR0aF09XCInMTAwJSdcIlxyXG4gICAgICAgICAgICAgICpuZ0lmPVwiKGVkaXRJZCAhPT0gZGF0YVtjb25maWcuZmllbGRJZF0gfHwgcHJvcGVydHkgIT09IGZpZWxkLnByb3BlcnR5KTsgZWxzZSBlZGl0VHBsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRhYmxlLWNlbGwtdmFsdWUtd3JhcFwiIFtzdHlsZS5tYXhXaWR0aF09XCInMTAwJSdcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNEYXRlKGZpZWxkKSAmJiAhaXNTZWxlY3QoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWZpZWxkLnNob3dUb29sdGlwIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSBudWxsIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09ICcnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldICE9PSBudWxsICYmIGRhdGFbZmllbGQucHJvcGVydHldICE9PSB1bmRlZmluZWQgJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIT09ICcnID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiBmaWVsZC5wbGFjZWhvbGRlciB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgc3R5bGU9XCJ3b3JkLWJyZWFrOiBicmVhay13b3JkO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5zaG93VG9vbHRpcCAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XSEhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGhdPVwiZ2V0TWF4V2lkdGgoKVwiIGNtYWNzLXRvb2x0aXAgW3RpdGxlXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgcGxhY2VtZW50PVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCI+e3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gfX08L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0RhdGUoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIj57eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSAgfCBkYXRlOiBmaWVsZC5kYXRlRm9ybWF0fX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU2VsZWN0KGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCI+e3sgZ2V0TGFiZWwoZGF0YSwgZmllbGQpIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJU21hbGwtRWRpdCBjbWFjcy10YWJsZS1lZGl0LWljb25cIiAoY2xpY2spPVwic3RhcnRFZGl0KGRhdGFbY29uZmlnLmZpZWxkSWRdLCBmaWVsZC5wcm9wZXJ0eSwgJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZWRpdFRwbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgI2ZpZWxkVHlwZUlucHV0ICpuZ0lmPVwiaXNTdHJpbmcoZmllbGQpXCIgdHlwZT1cInRleHRcIiBjbWFjcy1pbnB1dCBjbGFzcz1cInRhYmxlaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSlcIiAvPlxyXG5cclxuICAgICAgICAgICAgICA8Y21hY3MtaW5wdXQtbnVtYmVyICNmaWVsZFR5cGVJbnB1dE51bWJlciBpZD1cInRlc3RpbmcyXCIgY2xhc3M9XCJ0YWJsZWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpc051bWJlcihmaWVsZCkgJiYgIWlzU2VsZWN0KGZpZWxkKVwiIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgW2NtYWNzU3RlcF09XCIxXCIgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSlcIiAobmdNb2RlbENoYW5nZSk9XCJuZ01vZGVsQ2hhbmdlKGkpXCI+PC9jbWFjcy1pbnB1dC1udW1iZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbCAjZmllbGRUeXBlQm9vbCBjbWFjcy1jaGVja2JveCAqbmdJZj1cImlzQm9vbGVhbihmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRhW2ZpZWxkLnByb3BlcnR5XVwiIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpKVwiPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxjbWFjcy1kYXRlLXBpY2tlclxyXG4gICAgICAgICAgICAgICAgI2ZpZWxkVHlwZURhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNEYXRlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbYWxsb3dDbGVhcl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGFibGVpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImVuZEVkaXRNb2RlTmdNb2RlbChpKVwiPlxyXG4gICAgICAgICAgICAgIDwvY21hY3MtZGF0ZS1waWNrZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxjbWFjcy1zZWxlY3QgI2ZpZWxkVHlwZVNlbGVjdCAqbmdJZj1cImlzU2VsZWN0KGZpZWxkKVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgc2hvd1NlYXJjaCBjbGFzcz1cInRhYmxlaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCIgKG5nTW9kZWxDaGFuZ2UpPVwiZW5kRWRpdE1vZGVOZ01vZGVsKGkpXCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBzRGF0YSBvZiBmaWVsZC5zZWxlY3Quc2VsZWN0RGF0YVwiIGxhYmVsPVwie3tzRGF0YVtmaWVsZC5zZWxlY3QubGFiZWxdfX1cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7c0RhdGFbZmllbGQuc2VsZWN0LnZhbHVlXX19XCI+PC9jbWFjcy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50VHBsPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICN0ZW1wbGF0ZVJlZkNlbGQgKm5nSWY9XCJpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImRhdGFbZmllbGQucHJvcGVydHldLnJlZjsgY29udGV4dDogZGF0YVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dFwiPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQ2VsZFR5cGVCdXR0b24oZmllbGQpXCIgYXJpYS1sYWJlbD1cInt7ZmllbGQuZGlzcGxheX19XCIgcm9sZT1cImJ1dHRvblwiIGNtYWNzLWJ1dHRvbiB0eXBlPVwie3tmaWVsZC5idXR0b24uc3R5bGV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1vbkJ1dHRvbkNsaWNrKGRhdGEpPlxyXG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwiIWlzVW5kZWZpbmVkKGZpZWxkLmJ1dHRvbi5pY29uKTsgZWxzZSB0aXRsZVRwbFwiIG56LWljb24gdHlwZT1cInt7ZmllbGQuYnV0dG9uLmljb259fVwiPjwvaT5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3RpdGxlVHBsPnt7ZmllbGQuZGlzcGxheX19PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc0NlbGRUeXBlQnV0dG9uRmF2b3JpdGUoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLWJ1dHRvbi1mYXZvcml0ZVxyXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgIChvbkNoYW5nZWRWYWx1ZSk9XCJvbkZhdm9yaXRlQ2hhbmdlKCRldmVudCwgZmllbGQsIGRhdGEpXCI+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1idXR0b24tZmF2b3JpdGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNDZWxkVHlwZVRhZyhmaWVsZCkgJiYgZmllbGQudGFnICE9PSB1bmRlZmluZWRcIiBbaWRdPVwiZ3JpZElEICsgJ2NvbHVtbicgKyBmaSArICdyb3cnICsgaVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiAnaW5saW5lLWZsZXgnO1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCB0YWcgb2YgZGF0YVtmaWVsZC5wcm9wZXJ0eV0uc3BsaXQoJywnKVwiPlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLXRhZyAqbmdJZj1cInRhZy50cmltKCkubGVuZ3RoID4gMFwiIFtjb2xvcl09XCJmaWVsZC50YWcuY29sb3IgPyBkYXRhW2ZpZWxkLnRhZy5jb2xvcl0gOiBudWxsXCJcclxuICAgICAgICAgICAgICAgICAgW2NtYWNzR3JpZFR5cGVdPVwiZmllbGQudGFnLmNtYWNzR3JpZFR5cGUgPyBkYXRhW2ZpZWxkLnRhZy5jbWFjc0dyaWRUeXBlXSA6IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICBbY21hY3NTdGF0dXNUeXBlXT1cImZpZWxkLnRhZy5jbWFjc1N0YXR1c1R5cGUgPyBkYXRhW2ZpZWxkLnRhZy5jbWFjc1N0YXR1c1R5cGVdIDogbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbWFjc1ByaW9yaXR5VHlwZV09XCJmaWVsZC50YWcuY21hY3NQcmlvcml0eVR5cGUgPyBkYXRhW2ZpZWxkLnRhZy5jbWFjc1ByaW9yaXR5VHlwZV0gOiBudWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IHRhZyB9fVxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy10YWc+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIighaW5MaW5lRWRpdCB8fCAgaXNSZWFkT25seShmaWVsZCkpICYmIGlzRGF0ZShmaWVsZClcIj5cclxuICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCI+e3sgdHJhbnNmb3JtRGF0ZShkYXRhW2ZpZWxkLnByb3BlcnR5XSwgZmllbGQuZGF0ZUZvcm1hdCkgfX08L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIoIWluTGluZUVkaXQgfHwgIGlzUmVhZE9ubHkoZmllbGQpKSAmJiAhaXNDZWxkVHlwZUJ1dHRvbihmaWVsZCkgJiYgIWlzQ2VsZFR5cGVCdXR0b25GYXZvcml0ZShmaWVsZCkgJiYgIWlzQ2VsZFR5cGVUYWcoZmllbGQpICYmICFpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQpICYmICFpc0RhdGUoZmllbGQpICYmICFpc1NlbGVjdChmaWVsZClcIj5cclxuICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5jbWFjcy10YWJsZS1vdmVyZmxvdy1jZWxsXT1cIiF3cmFwTGluZXNcIiBzdHlsZT1cIndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XCJcclxuICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWZpZWxkLnNob3dUb29sdGlwIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSBudWxsIHx8IGRhdGFbZmllbGQucHJvcGVydHldID09PSB1bmRlZmluZWQgfHwgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gPT09ICcnXCIgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKClcIj5cclxuICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldICE9PSBudWxsICYmIGRhdGFbZmllbGQucHJvcGVydHldICE9PSB1bmRlZmluZWQgJiYgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gIT09ICcnID8gZGF0YVtmaWVsZC5wcm9wZXJ0eV0gOiBmaWVsZC5wbGFjZWhvbGRlciB9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIlxyXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5zaG93VG9vbHRpcCAmJiBkYXRhW2ZpZWxkLnByb3BlcnR5XSEhXCIgW3N0eWxlLm1heFdpZHRoXT1cImdldE1heFdpZHRoKClcIlxyXG4gICAgICAgICAgICAgICAgICAgY21hY3MtdG9vbHRpcCBbdGl0bGVdPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIiBwbGFjZW1lbnQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAge3sgZGF0YVtmaWVsZC5wcm9wZXJ0eV0gfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8IS0tIDxkaXYgW2NsYXNzLmNtYWNzLXRhYmxlLW92ZXJmbG93LWNlbGxdPVwiIXdyYXBMaW5lc1wiIHN0eWxlPVwid29yZC1icmVhazogYnJlYWstd29yZDtcIj57eyBkYXRhW2ZpZWxkLnByb3BlcnR5XSB9fTwvZGl2PiAtLT5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNTZWxlY3QoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuY21hY3MtdGFibGUtb3ZlcmZsb3ctY2VsbF09XCIhd3JhcExpbmVzXCIgc3R5bGU9XCJ3b3JkLWJyZWFrOiBicmVhay13b3JkO1wiPnt7IGdldExhYmVsKGRhdGEsIGZpZWxkKSB9fTwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgKm5nSWY9XCJzaG93UmF0ZVwiIGNsYXNzPVwiY21hY3MtdGFibGUtcmF0aW5nXCI+XHJcbiAgICAgICAgICA8bnotcmF0ZSBbbmdNb2RlbF09XCJkYXRhW2NvbmZpZy5maWVsZFJhdGVdXCJcclxuICAgICAgICAgICAgICAgICAgIFtuekNvdW50XT0ncmF0ZUNvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25SYXRlQ2hhbmdlKCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiIWluTGluZUVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmF0ZUNsaWNrKCRldmVudClcIj48L256LXJhdGU+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGJvZHk+XHJcbiAgPC9uei10YWJsZT5cclxuPC9kaXY+XHJcbiJdfQ==