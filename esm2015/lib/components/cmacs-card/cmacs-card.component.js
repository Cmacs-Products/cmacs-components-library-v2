import { __decorate } from "tslib";
import { Component, ContentChild, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import { CmacsCardTabComponent } from './cmacs-card-tab.component';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import propagating from 'propagating-hammerjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "../cmacs-radio/cmacs-radio.component";
import * as i5 from "@angular/forms";
import * as i6 from "ng-zorro-antd/grid";
import * as i7 from "../cmacs-tooltip/tooltip";
import * as i8 from "ng-zorro-antd/core/transition-patch";
import * as i9 from "ng-zorro-antd/icon";
import * as i10 from "../cmacs-video-player/cmacs-video-player.component";
import * as i11 from "../cmacs-tag/tag.component";
import * as i12 from "./cmacs-card-loading.component";
function CmacsCardComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function CmacsCardComponent_div_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r10.title);
} }
function CmacsCardComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_2_div_2_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.title);
} }
function CmacsCardComponent_div_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r11.extra);
} }
function CmacsCardComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_2_div_3_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r8.extra);
} }
function CmacsCardComponent_div_2_ng_container_4_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_2_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r9.tab.template);
} }
function CmacsCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵtemplate(2, CmacsCardComponent_div_2_div_2_Template, 2, 1, "div", 8);
    i0.ɵɵtemplate(3, CmacsCardComponent_div_2_div_3_Template, 2, 1, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCardComponent_div_2_ng_container_4_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.tab);
} }
function CmacsCardComponent_div_3_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_div_3_ng_container_2_ng_template_3_Template(rf, ctx) { }
function CmacsCardComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 15);
    i0.ɵɵlistener("ngModelChange", function CmacsCardComponent_div_3_ng_container_2_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.selected = $event; })("ngModelChange", function CmacsCardComponent_div_3_ng_container_2_Template_label_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.checkRadio(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsCardComponent_div_3_ng_container_2_ng_template_3_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r14.selected)("disabled", ctx_r14.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.labelTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r14.body);
} }
function CmacsCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_3_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵtemplate(2, CmacsCardComponent_div_3_ng_container_2_Template, 4, 4, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.cover);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.cmacsType === "selection");
} }
function CmacsCardComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 17);
    i0.ɵɵelementStart(4, "div", 18);
    i0.ɵɵelementStart(5, "span", 19);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 20);
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 21);
    i0.ɵɵelement(14, "i", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 21);
    i0.ɵɵelement(16, "i", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 21);
    i0.ɵɵelement(18, "i", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 21);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 21);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 21);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r19.weather.temp + (ctx_r19.celcius ? "\u00B0C" : "\u00B0F"));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("alt", ctx_r19.weather.description);
    i0.ɵɵproperty("src", ctx_r19.weather.icon, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 9, ctx_r19.weather.description));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r19.weather.temp_min + "\u00B0 / ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r19.weather.temp_max + "\u00B0");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r19.weather.clouds_all + "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r19.weather.humidity + "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r19.weather.wind_speed + " Km/H");
} }
function CmacsCardComponent_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r29.todo.UniqueId);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelementStart(1, "span", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-todo-card-overdue", ctx_r30.todo.isOverdue);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r30.todo.date);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r31.todo.project);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 43);
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", ctx_r38.todoUserAssigned);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_11_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵelement(1, "i", 44);
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0, a1, a2) { return { id: a0, name: a1, logoUrl: a2 }; };
function CmacsCardComponent_ng_container_5_ng_container_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_2_div_11_ng_container_1_Template, 1, 1, "ng-container", 42);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_2_div_11_a_2_Template, 2, 0, "a", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r32.todoUserAssigned)("ngTemplateOutletContext", i0.ɵɵpureFunction3(3, _c0, ctx_r32.todo.userAssignedId, ctx_r32.todo.userAssignedName, ctx_r32.todo.userAssignedLogoUrl));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r32.todoUserAssigned);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵelement(2, "i", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵelement(2, "i", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", ctx_r34.todo.stateColor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", "flag");
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵelementStart(1, "span", 50);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_2_div_14_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.goToModuleToDo($event, ctx_r40.todo.link); });
    i0.ɵɵelement(2, "i", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵlistener("tap", function CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template_div_tap_0_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(3); return ctx_r42.iconsToDoClick($event, "attachments"); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a");
    i0.ɵɵelement(4, "i", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r36.todo.attachments);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵlistener("tap", function CmacsCardComponent_ng_container_5_ng_container_2_div_16_Template_div_tap_0_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(3); return ctx_r44.iconsToDoClick($event, "comments"); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a");
    i0.ɵɵelement(4, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r37.todo.comments);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵelementStart(2, "div", 26);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_2_ng_container_3_Template, 3, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCardComponent_ng_container_5_ng_container_2_div_4_Template, 3, 3, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 28);
    i0.ɵɵelementStart(6, "div", 29);
    i0.ɵɵelementStart(7, "span", 30);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CmacsCardComponent_ng_container_5_ng_container_2_div_9_Template, 3, 1, "div", 31);
    i0.ɵɵelementStart(10, "div", 32);
    i0.ɵɵtemplate(11, CmacsCardComponent_ng_container_5_ng_container_2_div_11_Template, 3, 7, "div", 33);
    i0.ɵɵtemplate(12, CmacsCardComponent_ng_container_5_ng_container_2_div_12_Template, 3, 0, "div", 34);
    i0.ɵɵtemplate(13, CmacsCardComponent_ng_container_5_ng_container_2_div_13_Template, 3, 3, "div", 35);
    i0.ɵɵtemplate(14, CmacsCardComponent_ng_container_5_ng_container_2_div_14_Template, 3, 0, "div", 36);
    i0.ɵɵtemplate(15, CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template, 5, 1, "div", 37);
    i0.ɵɵtemplate(16, CmacsCardComponent_ng_container_5_ng_container_2_div_16_Template, 5, 1, "div", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.UniqueId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.date);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("cmacs-todo-card-overdue", ctx_r20.todo.isOverdue);
    i0.ɵɵpropertyInterpolate("title", ctx_r20.todo.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r20.todo.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.project);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r20.todo.isTeam);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.isTeam);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.hasPriorityFlag);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.association);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.attachments);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.comments);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 63);
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 64);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r46.cmacsIcon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r46.file.extension);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_div_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r50.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_3_div_13_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r48.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 56);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_3_ng_container_2_Template, 7, 4, "ng-container", 4);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 57);
    i0.ɵɵelementStart(5, "div", 58);
    i0.ɵɵelementStart(6, "div", 59);
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 60);
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 61);
    i0.ɵɵtemplate(13, CmacsCardComponent_ng_container_5_ng_container_3_div_13_Template, 2, 1, "div", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r21.useDefaultContent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r21.useDefaultContent);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r21.file.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r21.file.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r21.file.created_at);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r21.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 66);
    i0.ɵɵelementStart(2, "cmacs-video-player", 67);
    i0.ɵɵlistener("playerReady", function CmacsCardComponent_ng_container_5_ng_container_4_Template_cmacs_video_player_playerReady_2_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(2); return ctx_r51.onPlayerReady($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 68);
    i0.ɵɵelementStart(4, "div", 69);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("sources", ctx_r22.sources);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r22.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r22.title);
} }
function CmacsCardComponent_ng_container_5_ng_container_5_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r54.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_5_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 73);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_5_div_7_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r53 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r53.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 70);
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 71);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CmacsCardComponent_ng_container_5_ng_container_5_div_7_Template, 2, 1, "div", 72);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r23.cmacsIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r23.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r23.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 74);
    i0.ɵɵelementStart(2, "a", 75);
    i0.ɵɵelement(3, "i", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 77);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r24.title);
} }
function CmacsCardComponent_ng_container_5_ng_container_7_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_ng_container_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_7_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_1_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 83);
    i0.ɵɵlistener("error", function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_img_1_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r67); const person_r61 = i0.ɵɵnextContext().$implicit; const ctx_r65 = i0.ɵɵnextContext(4); return ctx_r65.onError(person_r61); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r61 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("alt", person_r61.name);
    i0.ɵɵproperty("src", person_r61.image, i0.ɵɵsanitizeUrl);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r61 = i0.ɵɵnextContext().$implicit;
    const ctx_r64 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r64.getInitials(person_r61.name));
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_img_1_Template, 1, 2, "img", 82);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_span_2_Template, 2, 1, "span", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r61 = ctx.$implicit;
    const i_r62 = ctx.index;
    const ctx_r59 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("background-color", !person_r61.image || person_r61.pictureError ? "#512DA8" : "#c7f5ff")("padding", !person_r61.image || person_r61.pictureError ? "4px" : "0px")("display", i_r62 >= 4 && ctx_r59.team.length > 5 ? "none" : "inline-block");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", person_r61.image && !person_r61.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !person_r61.image || person_r61.pictureError);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r60 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("+", ctx_r60.team.length - 4, "");
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 78);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_Template, 3, 8, "div", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_3_Template, 2, 1, "div", 80);
    i0.ɵɵprojection(4, 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r57.team);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r57.team.length > 5);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_1_Template, 2, 1, "ng-container", 4);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_Template, 5, 2, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.useDefaultContent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r26.useDefaultContent);
} }
function CmacsCardComponent_ng_container_5_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 102);
    i0.ɵɵelementStart(1, "div", 103);
    i0.ɵɵelementStart(2, "img", 104);
    i0.ɵɵlistener("error", function CmacsCardComponent_ng_container_5_ng_container_9_div_1_Template_img_error_2_listener() { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(3); return ctx_r74.onError(ctx_r74.project); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r70 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("src", ctx_r70.getBackgroundImage(), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", ctx_r70.project.name);
} }
function CmacsCardComponent_ng_container_5_ng_container_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 105);
    i0.ɵɵelementStart(1, "span", 106);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r71.getInitials(ctx_r71.project.name));
} }
function CmacsCardComponent_ng_container_5_ng_container_9_img_17_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 107);
    i0.ɵɵlistener("error", function CmacsCardComponent_ng_container_5_ng_container_9_img_17_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r77); const ctx_r76 = i0.ɵɵnextContext(3); return ctx_r76.onError(ctx_r76.project.teamLead); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r72 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("alt", ctx_r72.project.teamLead.name);
    i0.ɵɵproperty("src", ctx_r72.project.teamLead.avatar, i0.ɵɵsanitizeUrl);
} }
function CmacsCardComponent_ng_container_5_ng_container_9_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 108);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r73 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r73.getInitials(ctx_r73.project.teamLead.name));
} }
function CmacsCardComponent_ng_container_5_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_9_div_1_Template, 3, 2, "div", 85);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_9_div_2_Template, 3, 1, "div", 86);
    i0.ɵɵelementStart(3, "cmacs-tag", 87);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 88);
    i0.ɵɵelementStart(6, "span", 89);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 90);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 75);
    i0.ɵɵelement(11, "i", 91);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 90);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 92);
    i0.ɵɵelement(15, "div", 93);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 94);
    i0.ɵɵtemplate(17, CmacsCardComponent_ng_container_5_ng_container_9_img_17_Template, 1, 2, "img", 95);
    i0.ɵɵtemplate(18, CmacsCardComponent_ng_container_5_ng_container_9_span_18_Template, 2, 1, "span", 96);
    i0.ɵɵelementStart(19, "div", 97);
    i0.ɵɵelement(20, "div", 98);
    i0.ɵɵelement(21, "div", 99);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "a", 100);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_9_Template_a_click_22_listener($event) { i0.ɵɵrestoreView(_r79); const ctx_r78 = i0.ɵɵnextContext(2); return ctx_r78.openMail($event); });
    i0.ɵɵelement(23, "i", 101);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.project.projectImage !== "" && !ctx_r27.project.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.project.projectImage === "" || ctx_r27.project.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cmacsGridType", ctx_r27.project.statusTag);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r27.project.status);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r27.projectDateLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r27.project.startDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r27.project.endDate);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r27.project.completion);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r27.project.teamLead.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r27.project.teamLead.avatar || ctx_r27.project.teamLead.avatar === "" || ctx_r27.project.teamLead.pictureError);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r27.buildLabel(ctx_r27.project.teamLead.name), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r27.buildLabel(ctx_r27.project.teamLead.charge), i0.ɵɵsanitizeHtml);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_1_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r86 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r86.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 115);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r85 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r85.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 109);
    i0.ɵɵelementStart(2, "a", 75);
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 110, 111);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r88); const _r83 = i0.ɵɵreference(5); const ctx_r87 = i0.ɵɵnextContext(3); return ctx_r87.toggleEdit(_r83); });
    i0.ɵɵelementStart(6, "span", 112, 113);
    i0.ɵɵlistener("keydown.enter", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_span_keydown_enter_6_listener($event) { i0.ɵɵrestoreView(_r88); const _r83 = i0.ɵɵreference(5); const _r84 = i0.ɵɵreference(7); const ctx_r89 = i0.ɵɵnextContext(3); return ctx_r89.handleEnter($event, _r83, _r84); })("keyup", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_span_keyup_6_listener($event) { i0.ɵɵrestoreView(_r88); const _r84 = i0.ɵɵreference(7); const ctx_r90 = i0.ɵɵnextContext(3); return ctx_r90.handleEdit($event, _r84); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_Template, 2, 1, "div", 114);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r81 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r81.folderIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r81.title);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("contentEditable", ctx_r81.isEditable);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r81.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r81.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 4);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template, 10, 6, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.useDefaultContent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r28.useDefaultContent);
} }
function CmacsCardComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_1_Template, 25, 11, "ng-container", 4);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_2_Template, 17, 13, "ng-container", 4);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_3_Template, 14, 6, "ng-container", 4);
    i0.ɵɵtemplate(4, CmacsCardComponent_ng_container_5_ng_container_4_Template, 7, 3, "ng-container", 4);
    i0.ɵɵtemplate(5, CmacsCardComponent_ng_container_5_ng_container_5_Template, 8, 6, "ng-container", 4);
    i0.ɵɵtemplate(6, CmacsCardComponent_ng_container_5_ng_container_6_Template, 7, 1, "ng-container", 4);
    i0.ɵɵtemplate(7, CmacsCardComponent_ng_container_5_ng_container_7_Template, 2, 1, "ng-container", 4);
    i0.ɵɵtemplate(8, CmacsCardComponent_ng_container_5_ng_container_8_Template, 3, 2, "ng-container", 4);
    i0.ɵɵtemplate(9, CmacsCardComponent_ng_container_5_ng_container_9_Template, 24, 13, "ng-container", 4);
    i0.ɵɵtemplate(10, CmacsCardComponent_ng_container_5_ng_container_10_Template, 3, 2, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "weather");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "todo");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "big-file");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "video");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "file");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "measure");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "none" || ctx_r4.cmacsType === "selection" || ctx_r4.cmacsType === "action");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "team");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "project");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "folder");
} }
function CmacsCardComponent_cmacs_card_loading_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-card-loading");
} }
function CmacsCardComponent_ul_7_li_1_ng_template_2_Template(rf, ctx) { }
function CmacsCardComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtemplate(2, CmacsCardComponent_ul_7_li_1_ng_template_2_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r92 = ctx.$implicit;
    const ctx_r91 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", 100 / ctx_r91.actions.length, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", action_r92);
} }
function CmacsCardComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 116);
    i0.ɵɵtemplate(1, CmacsCardComponent_ul_7_li_1_Template, 3, 3, "li", 117);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.actions);
} }
const _c1 = ["*", [["", "cmacs-action-panel", ""]]];
const _c2 = ["*", "[cmacs-action-panel]"];
Hammer = propagating(Hammer);
export class CmacsCardComponent {
    constructor(cdr, renderer, sanitizer, elementRef) {
        this.cdr = cdr;
        this.sanitizer = sanitizer;
        this.folderIcon = '';
        this.isEditable = false;
        this.bordered = true;
        this.opened = false;
        this.editable = false;
        this.isRadio = false;
        this.loading = false;
        this.disabled = false;
        this.hoverable = false;
        this.useDefaultContent = false;
        this.playerReady = new EventEmitter();
        this.actions = [];
        this.team = [];
        this.file = null;
        this.project = [];
        this.celcius = true;
        this.cmacsType = 'none';
        this.cmacsIcon = '';
        this.cmacsIconOpenedFolder = 'iconUILarge-Folder';
        this.cmacsIconClosedFolder = 'iconUILarge-Folder';
        this.titleChange = new EventEmitter();
        this.ondlclickCard = new EventEmitter();
        this.open = new EventEmitter();
        this.close = new EventEmitter();
        this.selected = false;
        this.selectedChange = new EventEmitter();
        this.goToModule = new EventEmitter();
        this.iconToDoClick = new EventEmitter();
        this.tapTimeoutHandler = null;
        renderer.addClass(elementRef.nativeElement, 'ant-card');
    }
    openMail($event) {
        $event.stopImmediatePropagation();
        $event.preventDefault();
        const link = `mailto: ${this.project.teamLead.email}`;
        location.href = link;
    }
    ngOnInit() {
        if (this.cmacsType === 'folder') {
            this.folderIcon = this.opened ? this.cmacsIconOpenedFolder : this.cmacsIconClosedFolder;
        }
        this.isEditable = this.editable;
        if (this.projectDateLabel === undefined || this.projectDateLabel === null) {
            this.projectDateLabel = 'Project Dates';
        }
    }
    onPlayerReady(api) {
        this.playerReady.emit(api);
    }
    checkRadio() {
        this.selectedChange.emit(this.selected);
    }
    onClick(event) {
        if (!this.useDefaultContent || this.cmacsType === 'big-file') {
            this.select(event);
        }
    }
    onDblClick(event) {
        if (this.cmacsType === 'folder' && !this.useDefaultContent) {
            this.opened = !this.opened;
            this.folderIcon = this.opened ? this.cmacsIconOpenedFolder : this.cmacsIconClosedFolder;
            if (this.opened) {
                this.open.emit();
            }
            else {
                this.close.emit();
            }
        }
        if (this.cmacsType === 'project') {
            this.ondlclickCard.emit(this.project);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    select(event) {
        event.preventDefault();
        if (this.cmacsType !== 'todo') {
            event.stopPropagation();
        }
        if (!this.disabled) {
            if (!this.isRadio) {
                this.selected = !this.selected;
            }
            else {
                this.selected = this.selected ? this.selected : !this.selected;
            }
            this.selectedChange.emit(this.selected);
        }
    }
    handleEnter(event, titleContainer, titleSpan) {
        event.preventDefault();
        event.stopImmediatePropagation();
        titleContainer.style.textOverflow = 'ellipsis';
        const text = titleSpan.innerText.replace(/(\r\n|\n|\r)/gm, "");
        titleSpan.innerText = text;
        this.isEditable = false;
        this.titleChange.emit(text);
    }
    handleEdit(event, titleSpan) {
        const text = titleSpan.innerText.replace(/(\r\n|\n|\r)/gm, "");
        this.titleChange.emit(text);
    }
    toggleEdit(titleContainer) {
        this.isEditable = this.editable;
        if (this.isEditable) {
            titleContainer.style.textOverflow = 'initial';
        }
    }
    getInitials(name) {
        let initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    }
    getBackgroundImage() {
        return this.project.projectImage;
    }
    onError(elem) {
        elem.pictureError = true;
        this.cdr.detectChanges();
    }
    iconsToDoClick(event, icon) {
        event.preventDefault();
        this.iconToDoClick.next({ icon, id: this.todo.UniqueId });
    }
    goToModuleToDo(event, url) {
        event.preventDefault();
        event.stopPropagation();
        this.goToModule.emit(url);
    }
    buildLabel(value) {
        let result = '&nbsp;';
        if (value !== undefined && value !== null && value !== '') {
            if (value.length > 20) {
                result = `${value.slice(0, 20)}...`;
            }
            else if (value.length > 0) {
                result = value;
            }
        }
        return result;
    }
}
CmacsCardComponent.ɵfac = function CmacsCardComponent_Factory(t) { return new (t || CmacsCardComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ElementRef)); };
CmacsCardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCardComponent, selectors: [["cmacs-card"]], contentQueries: function CmacsCardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsCardTabComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tab = _t.first);
    } }, hostVars: 48, hostBindings: function CmacsCardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("tap", function CmacsCardComponent_tap_HostBindingHandler($event) { return ctx.onClick($event); })("doubletap", function CmacsCardComponent_doubletap_HostBindingHandler($event) { return ctx.onDblClick($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-card-loading", ctx.loading)("ant-card-bordered", ctx.bordered)("ant-card-hoverable", ctx.hoverable || ctx.cmacsType === "selection")("ant-card-type-inner", ctx.type === "inner")("ant-card-contain-tabs", !!ctx.tab)("cmacs-card-files-wrapper", ctx.cmacsType === "file")("cmacs-card-measure-wrapper", ctx.cmacsType === "measure")("cmacs-card-measure-wrapper-selected", ctx.cmacsType === "measure" && ctx.selected)("cmacs-selection-card", ctx.cmacsType === "selection")("cmacs-card-selected", ctx.cmacsType === "selection" && ctx.selected)("cmacs-card-disabled", ctx.cmacsType === "selection" && ctx.disabled)("cmacs-action-card", ctx.cmacsType === "action")("cmacs-weather-card", ctx.cmacsType === "weather")("cmacs-big-file-card", ctx.cmacsType === "big-file")("cmacs-big-file-card-selected", ctx.cmacsType === "big-file" && ctx.selected)("cmacs-action-card-disabled", ctx.cmacsType === "action" && ctx.disabled)("cmacs-information-card", ctx.cmacsType === "team")("cmacs-team-card", ctx.cmacsType === "project")("cmacs-video-player-card", ctx.cmacsType === "video")("cmacs-todo-card", ctx.cmacsType === "todo")("cmacs-todo-card-selected", ctx.cmacsType === "todo" && ctx.selected)("cmacs-team-card-selected", ctx.cmacsType === "project" && ctx.selected)("cmacs-card-files-folders-wrapper", ctx.cmacsType === "folder")("file-card-selected", ctx.cmacsType === "folder" && ctx.selected);
    } }, inputs: { bordered: "bordered", opened: "opened", editable: "editable", isRadio: "isRadio", loading: "loading", disabled: "disabled", hoverable: "hoverable", useDefaultContent: "useDefaultContent", sources: "sources", bodyStyle: "bodyStyle", cover: "cover", body: "body", actions: "actions", team: "team", file: "file", project: "project", projectDateLabel: "projectDateLabel", todo: "todo", weather: "weather", celcius: "celcius", type: "type", cmacsType: "cmacsType", cmacsIcon: "cmacsIcon", cmacsIconOpenedFolder: "cmacsIconOpenedFolder", cmacsIconClosedFolder: "cmacsIconClosedFolder", title: "title", labelTitle: "labelTitle", extra: "extra", selected: "selected", value: "value", todoUserAssigned: "todoUserAssigned" }, outputs: { playerReady: "playerReady", titleChange: "titleChange", ondlclickCard: "ondlclickCard", open: "open", close: "close", selectedChange: "selectedChange", goToModule: "goToModule", iconToDoClick: "iconToDoClick" }, exportAs: ["cmacsCard"], ngContentSelectors: _c2, decls: 8, vars: 6, consts: [["content", ""], ["class", "ant-card-head", 4, "ngIf"], ["class", "ant-card-cover", 4, "ngIf"], [1, "ant-card-body", 3, "ngStyle"], [4, "ngIf"], ["class", "ant-card-actions", 4, "ngIf"], [1, "ant-card-head"], [1, "ant-card-head-wrapper"], ["class", "ant-card-head-title", 4, "ngIf"], ["class", "ant-card-extra", 4, "ngIf"], [1, "ant-card-head-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [1, "ant-card-cover"], ["cmacs-radio", "", 3, "ngModel", "disabled", "ngModelChange"], [1, "cmacs-weather-card-temp"], [1, "cmacs-weather-card-cloud-img", 3, "src", "alt"], [1, "cmacs-weather-card-description-wrapper"], [1, "cmacs-weather-card-description"], [1, "cmacs-weather-card-temp-min-max"], [1, "cmacs-weather-col-1-3"], [1, "iconUILarge-Rain"], [1, "iconUILarge-Humidity"], [1, "iconUILarge-Wind"], ["nz-row", "", 1, "todo-card-header"], ["nz-col", "", "nzSpan", "12"], ["nz-col", "", "nzSpan", "12", 4, "ngIf"], [1, "todo-card-content"], [1, "cmacs-todo-card-title"], ["placement", "bottom", "cmacs-tooltip", "", 3, "title"], ["class", "cmacs-todo-card-project", 4, "ngIf"], ["nz-row", "", 1, "cmacs-todo-card-action"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-person", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-team", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-priority", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-association", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-attachments", 3, "tap", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", "class", "cmacs-todo-card-comments", 3, "tap", 4, "ngIf"], [1, "cmacs-todo-card-date"], [1, "cmacs-todo-card-project"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-person"], [3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngIf"], [1, "iconCreation-User"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-team"], [1, "iconUILarge-Team"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-priority"], ["nz-icon", "", 3, "nzType"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-association"], [3, "click"], [1, "iconUILarge-Link"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-attachments", 3, "tap"], [1, "iconUILarge-Attached"], ["nz-col", "", "nzSpan", "4", 1, "cmacs-todo-card-comments", 3, "tap"], [1, "iconUILarge-Comments"], [1, "cmacs-card-big-file-meta"], [1, "cmacs-card-big-file-description"], [1, "cmacs-card-big-file-description-left-panel"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-big-file-title", 3, "title"], [1, "cmacs-card-big-file-date"], [1, "cmacs-card-big-file-description-right-panel"], ["class", "cmacs-card-big-file-extra", 4, "ngIf"], [1, "cmacs-card-big-file-icon-wrapper"], [1, "cmacs-card-big-file-extension-wrapper"], [1, "cmacs-card-big-file-extra"], [1, "cmacs-card-video-player-wrapper"], [3, "sources", "playerReady"], [1, "cmacs-card-video-description"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-video-title", 3, "title"], [1, "cmacs-card-files-icon-wrapper"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-label-recent", 3, "title"], ["class", "cmacs-card-file-extra", 4, "ngIf"], [1, "cmacs-card-file-extra"], [1, "cmacs-card-measure-icon-wrapper"], [1, "iconspan"], [1, "iconUILarge-Ruler"], [1, "cmacs-card-label-measure"], [2, "margin-bottom", "20px", "min-height", "25px", "display", "inline-flex"], ["class", "team-person-card", 3, "backgroundColor", "padding", "display", 4, "ngFor", "ngForOf"], ["class", "plus-team-card", 4, "ngIf"], [1, "team-person-card"], ["width", "30px", "height", "30px", 3, "src", "alt", "error", 4, "ngIf"], ["width", "30px", "height", "30px", 3, "src", "alt", "error"], [1, "plus-team-card"], ["class", "projectimagecontainer", 4, "ngIf"], ["class", "cmacs-proj-card-div-Logo", 4, "ngIf"], [1, "project-status", 3, "cmacsGridType"], [1, "project-dates-wrapper"], [1, "project-dates-title"], [1, "project-dates", "project-dates-date"], [1, "iconArrowLarge-Arrow-Right", "project-dates"], [1, "project-card-progress-bar"], [1, "project-card-progress-bar-inner"], [1, "project-manager-details"], ["class", "manager-avatar", "width", "30px", "height", "30px", 3, "alt", "src", "error", 4, "ngIf"], ["class", "cmacs-proj-avatar-text", 4, "ngIf"], [1, "project-manager-metadata"], [1, "manager-name", 3, "innerHtml"], [1, "manager-charge", 3, "innerHtml"], [1, "iconspan", "project-email-icon", 3, "click"], [1, "iconUILarge-Message"], [1, "projectimagecontainer"], [1, "project-image"], [3, "src", "alt", "error"], [1, "cmacs-proj-card-div-Logo"], [1, "cmacs-proj-card-text-Logo"], ["width", "30px", "height", "30px", 1, "manager-avatar", 3, "alt", "src", "error"], [1, "cmacs-proj-avatar-text"], [1, "card-files-folders-icon-wrapper"], ["placement", "bottom", "cmacs-tooltip", "", 1, "card-files-folders-label", 3, "title", "click"], ["titleContainer", ""], [3, "keydown.enter", "keyup"], ["name", ""], ["class", "card-files-folder-extra iconspan", 4, "ngIf"], [1, "card-files-folder-extra", "iconspan"], [1, "ant-card-actions"], [3, "width", 4, "ngFor", "ngForOf"]], template: function CmacsCardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵtemplate(0, CmacsCardComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, CmacsCardComponent_div_2_Template, 5, 3, "div", 1);
        i0.ɵɵtemplate(3, CmacsCardComponent_div_3_Template, 3, 2, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵtemplate(5, CmacsCardComponent_ng_container_5_Template, 11, 10, "ng-container", 4);
        i0.ɵɵtemplate(6, CmacsCardComponent_cmacs_card_loading_6_Template, 1, 0, "cmacs-card-loading", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, CmacsCardComponent_ul_7_Template, 2, 1, "ul", 5);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (ctx.title || ctx.extra || ctx.tab) && (ctx.cmacsType === "none" || ctx.cmacsType === "team" || ctx.cmacsType === "project"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.cover || ctx.cmacsType === "selection" || ctx.cmacsType === "action");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", ctx.bodyStyle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.actions.length);
    } }, directives: [i2.NgIf, i2.NgStyle, i3.NzStringTemplateOutletDirective, i2.NgTemplateOutlet, i4.CmacsRadioComponent, i5.NgControlStatus, i5.NgModel, i6.NzRowDirective, i6.NzColDirective, i7.CmacsTooltipDirective, i8.ɵNzTransitionPatchDirective, i9.NzIconDirective, i10.CmacsVideoPlayerComponent, i2.NgForOf, i11.CmacsTagComponent, i12.CmacsCardLoadingComponent], pipes: [i2.TitleCasePipe], styles: [".cmacs-weather-card{width:318px;height:218px;border-radius:10px;background-color:#fff;border-color:transparent;box-shadow:0 2px 4px rgba(0,0,0,.1)}.cmacs-weather-card .ant-card-body{padding-top:35px}.cmacs-weather-card-cloud-img{width:75px;height:auto;float:right}.cmacs-weather-card-temp-min-max{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;margin-left:10px}.cmacs-weather-card-description-wrapper{margin-top:14px;margin-bottom:18px;height:40px}.cmacs-weather-card-description{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.43;letter-spacing:normal;color:#656c79}.cmacs-weather-col-1-3 i{font-size:22px}.cmacs-weather-col-1-3{width:33.3333%;display:inline-block;text-align:center;font-size:12px;font-weight:400;line-height:1.67}.cmacs-weather-card-temp,.cmacs-weather-col-1-3{font-family:Roboto-Regular;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#3b3f46}.cmacs-weather-card-temp{font-size:24px;font-weight:500;line-height:2.08}.ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-extra,.ant-card-head-title{padding:0;font-size:12px;font-weight:500;font-family:Roboto-Medium}.ant-card-head{min-height:40px;padding:12px}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;cursor:pointer}.card-list-row .ant-card-grid>*{display:block}.card-list-row .ant-card-grid>*,.cmacs-card-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-shared-I .cmacs-card-title{width:100%}.cmacs-card-left-panel label.cmacs-checkbox-card{float:left}.cmacs-card-shared-II .cmacs-card-title{width:calc(100% - 40px);left:80px}.cmacs-card-person-info-II{display:flex}.cmacs-card-shared-III .cmacs-card-title{width:calc(100% - 60px)}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{height:36px;border:1px solid #dee0e5}.cmacs-card-label-measure{padding:6px 20px;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;width:calc(100% - 35px)}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;text-align:center;padding:7px 7px 6px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label-recent{padding:10px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:calc(100% - 96px);vertical-align:middle}.cmacs-selection-card{height:100%;border-radius:8px}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled){border:1px solid #bec4cd;box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled) .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.ant-radio-disabled+span,.ant-radio-disabled .ant-radio-inner,.ant-radio-disabled .ant-radio-input,.ant-radio.ant-radio-disabled,input[type=radio][disabled]{cursor:default}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#dee0e5!important;cursor:default;background-color:#f3f3f4}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5;cursor:default;box-shadow:none}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;margin-left:auto;margin-right:auto;min-width:131px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5;border-radius:8px}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .cmacs-btn-action{border-color:#dee0e5}.cmacs-information-card:hover .cmacs-btn-action,.cmacs-information-card:hover .cmacs-btn-action span i{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:20px 10px}.cmacs-information-card .team-person-card{line-height:22px;font-size:12px;width:30px;height:30px;display:inline-block;border-radius:3px;background:#512da8;color:#fff;text-align:center;cursor:pointer;margin-right:10px}.cmacs-information-card img{border-radius:3px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{line-height:22px;font-size:12px;width:30px;height:30px;display:inline-block;border-radius:3px;background-color:#dae8ff;color:#2a7cff;text-align:center;cursor:pointer;padding:4px}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:text-top}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5;border-radius:8px}.cmacs-team-card.ant-card-bordered:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper a,.project-manager-metadata{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block}.manager-name{font-family:Roboto-Medium;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#97a0ae;height:15.45px}.manager-charge,.manager-name{max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative}.manager-charge{color:#acb3bf;height:17.26px}.project-manager-details{margin:20px}.manager-avatar{display:inline-block;border-radius:3px;font-size:12px;color:#fff;text-align:center;line-height:1.33;float:left}.project-manager-details i{color:#656c79}.project-email-icon{float:right}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important;border-radius:8px}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff;border-color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra a{opacity:1}.card-files-folder-extra{display:inline-block;font-size:20px}.card-files-folder-extra a{opacity:0}.card-files-folders-label{width:calc(100% - 50px);display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:14px 10px}.card-files-folders-icon-wrapper{margin-right:10px;display:inline-block;vertical-align:middle}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;transition:all .3s}.cmacs-big-file-card:before{content:\" \";width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;transition:all .3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0;color:#acb3bf}.cmacs-card-big-file-description{height:61px;margin-top:10px;transition:all .3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;transition:all .3s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;transition:all .3s}.cmacs-card-big-file-extra a{color:#656c79;opacity:0;transition:all .3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra a{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected.cmacs-big-file-card:before,.cmacs-big-file-card-selected .cmacs-card-big-file-meta{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px;margin:7px auto;border:1px solid #dee0e5;border-radius:8px}.cmacs-todo-card.ant-card-hoverable:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;margin:15px 14px 0;white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-webkit-box-orient:vertical}.cmacs-todo-card-project,.cmacs-todo-card-title{font-size:12px;overflow:hidden;text-overflow:ellipsis}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;white-space:nowrap}.cmacs-todo-card-date{color:#656c79;background-color:#f6f7fb;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;float:right;padding:0 5px}.cmacs-todo-card-action{padding:15px 14px 0 15px;font-size:14px;position:absolute;bottom:12px;width:100%}.cmacs-todo-card-attachments,.cmacs-todo-card-comments,.cmacs-todo-card-person,.cmacs-todo-card-team{float:left}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-priority{float:left}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a,.cmacs-todo-card-team a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}.cmacs-proj-card-text-Logo{font-size:50px;color:#fff;background-color:#512da8}.cmacs-proj-card-div-Logo{background-color:#512da8;width:221px;height:107px;text-align:center}.cmacs-proj-avatar-text{height:30px;width:30px;line-height:22px;font-size:11px;border-radius:3px;background:#512da8;color:#fff;text-align:center;cursor:pointer;padding:4px;display:inline-block;float:left}.projectimagecontainer{height:107px;border-top:1px solid #dee0e5;border-bottom:1px solid #dee0e5;background-color:#f6f7fb}.project-image{background-repeat:no-repeat;background-position:50%;background-size:contain;text-align:center}.project-image,.project-image img{height:100%;width:auto}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span,.cmacs-todo-card-person a{vertical-align:middle}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a{vertical-align:sub;font-size:18px}.cmacs-todo-card-team a{font-size:19px;vertical-align:top}.cmacs-todo-card-overdue{color:#f5222d}.cmacs-todo-card-association{float:left;cursor:pointer;font-size:18px}.todo-card-header{padding:12px;border-bottom:1px solid #dee0e5}.todo-card-content{min-height:110px}.cardrow{margin-left:-4px;margin-right:-4px}.cardcolumn{padding-left:4px;padding-right:4px}", "cmacs-card {\n        display: block;\n      }\n    "], encapsulation: 2 });
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "opened", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "editable", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "isRadio", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "hoverable", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "useDefaultContent", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCardComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-card',
                exportAs: 'cmacsCard',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './cmacs-card.component.html',
                styles: [
                    `cmacs-card {
        display: block;
      }
    `
                ],
                host: {
                    '[class.ant-card-loading]': 'loading',
                    '[class.ant-card-bordered]': 'bordered',
                    '[class.ant-card-hoverable]': "hoverable || cmacsType === 'selection'",
                    '[class.ant-card-type-inner]': `type === 'inner'`,
                    '[class.ant-card-contain-tabs]': '!!tab',
                    '[class.cmacs-card-files-wrapper]': "cmacsType === 'file'",
                    '[class.cmacs-card-measure-wrapper]': "cmacsType === 'measure'",
                    '[class.cmacs-card-measure-wrapper-selected]': "cmacsType === 'measure' && selected",
                    '[class.cmacs-selection-card]': "cmacsType === 'selection'",
                    '[class.cmacs-card-selected]': "cmacsType === 'selection' && selected",
                    '[class.cmacs-card-disabled]': "cmacsType === 'selection' && disabled",
                    '[class.cmacs-action-card]': "cmacsType === 'action'",
                    '[class.cmacs-weather-card]': "cmacsType === 'weather'",
                    '[class.cmacs-big-file-card]': "cmacsType === 'big-file'",
                    '[class.cmacs-big-file-card-selected]': "cmacsType === 'big-file' && selected",
                    '[class.cmacs-action-card-disabled]': "cmacsType === 'action' && disabled",
                    '[class.cmacs-information-card]': "cmacsType === 'team'",
                    '[class.cmacs-team-card]': "cmacsType === 'project'",
                    '[class.cmacs-video-player-card]': "cmacsType === 'video'",
                    '[class.cmacs-todo-card]': "cmacsType === 'todo'",
                    '[class.cmacs-todo-card-selected]': "cmacsType === 'todo' && selected",
                    '[class.cmacs-team-card-selected]': "cmacsType === 'project' && selected",
                    '[class.cmacs-card-files-folders-wrapper]': "cmacsType === 'folder'",
                    '[class.file-card-selected]': "cmacsType === 'folder' && selected"
                },
                styleUrls: ['./cmacs-card.component.css'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.DomSanitizer }, { type: i0.ElementRef }]; }, { bordered: [{
            type: Input
        }], opened: [{
            type: Input
        }], editable: [{
            type: Input
        }], isRadio: [{
            type: Input
        }], loading: [{
            type: Input
        }], disabled: [{
            type: Input
        }], hoverable: [{
            type: Input
        }], useDefaultContent: [{
            type: Input
        }], sources: [{
            type: Input
        }], playerReady: [{
            type: Output
        }], bodyStyle: [{
            type: Input
        }], cover: [{
            type: Input
        }], body: [{
            type: Input
        }], actions: [{
            type: Input
        }], team: [{
            type: Input
        }], file: [{
            type: Input
        }], project: [{
            type: Input
        }], projectDateLabel: [{
            type: Input
        }], todo: [{
            type: Input
        }], weather: [{
            type: Input
        }], celcius: [{
            type: Input
        }], type: [{
            type: Input
        }], cmacsType: [{
            type: Input
        }], cmacsIcon: [{
            type: Input
        }], cmacsIconOpenedFolder: [{
            type: Input
        }], cmacsIconClosedFolder: [{
            type: Input
        }], title: [{
            type: Input
        }], labelTitle: [{
            type: Input
        }], titleChange: [{
            type: Output
        }], extra: [{
            type: Input
        }], tab: [{
            type: ContentChild,
            args: [CmacsCardTabComponent]
        }], ondlclickCard: [{
            type: Output
        }], open: [{
            type: Output
        }], close: [{
            type: Output
        }], selected: [{
            type: Input
        }], value: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }], goToModule: [{
            type: Output
        }], todoUserAssigned: [{
            type: Input
        }], iconToDoClick: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['tap', ['$event']]
        }], onDblClick: [{
            type: HostListener,
            args: ['doubletap', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY2FyZC9jbWFjcy1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jYXJkL2NtYWNzLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNBLFlBQVksRUFBYyxZQUFZLEVBQ2xELEtBQUssRUFBcUIsTUFBTSxFQUdoQyxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sV0FBVyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNkN0Msa0JBQXlCOzs7SUFPckIsNkJBQThDO0lBQUEsWUFBVztJQUFBLDBCQUFlOzs7SUFBMUIsZUFBVztJQUFYLG1DQUFXOzs7SUFEM0QsK0JBQStDO0lBQzdDLGtHQUF3RTtJQUMxRSxpQkFBTTs7O0lBRFcsZUFBNkI7SUFBN0IscURBQTZCOzs7SUFHNUMsNkJBQThDO0lBQUEsWUFBVztJQUFBLDBCQUFlOzs7SUFBMUIsZUFBVztJQUFYLG1DQUFXOzs7SUFEM0QsK0JBQTBDO0lBQ3hDLGtHQUF3RTtJQUMxRSxpQkFBTTs7O0lBRFcsZUFBNkI7SUFBN0IscURBQTZCOzs7O0lBR2hELDZCQUEwQjtJQUN4Qix5R0FBNkQ7SUFDL0QsMEJBQWU7OztJQURBLGVBQWlDO0lBQWpDLHNEQUFpQzs7O0lBWGxELDhCQUNnSDtJQUM5Ryw4QkFBbUM7SUFDakMseUVBRU07SUFDTix5RUFFTTtJQUNSLGlCQUFNO0lBQ04sMkZBRWU7SUFDakIsaUJBQU07OztJQVZnQyxlQUFXO0lBQVgsbUNBQVc7SUFHaEIsZUFBVztJQUFYLG1DQUFXO0lBSTNCLGVBQVM7SUFBVCxpQ0FBUzs7Ozs7O0lBUXhCLDZCQUFnRDtJQUM5QyxpQ0FDd0I7SUFETCxtT0FBc0IsMk1BQUE7SUFDakIsWUFBYztJQUFBLGlCQUFRO0lBQzlDLHlHQUFxRDtJQUN2RCwwQkFBZTs7O0lBSE0sZUFBc0I7SUFBdEIsMENBQXNCLDhCQUFBO0lBQ2pCLGVBQWM7SUFBZCx3Q0FBYztJQUN6QixlQUF5QjtJQUF6QiwrQ0FBeUI7OztJQUwxQywrQkFBaUc7SUFDL0YsMEZBQXNEO0lBQ3RELDJGQUllO0lBQ2pCLGlCQUFNOzs7SUFOUyxlQUEwQjtJQUExQiwrQ0FBMEI7SUFDeEIsZUFBK0I7SUFBL0IsdURBQStCOzs7SUFXNUMsNkJBQThDO0lBQzVDLGdDQUFzQztJQUFBLFlBQTRDO0lBQUEsaUJBQU87SUFDekYsMEJBQTZGO0lBRTdGLCtCQUFvRDtJQUNsRCxnQ0FBNkM7SUFBQSxZQUFtQzs7SUFBQSxpQkFBTztJQUN2RixnQ0FBOEM7SUFDNUMsNEJBQU07SUFBQSxhQUE2QjtJQUFBLGlCQUFPO0lBQzFDLDZCQUFNO0lBQUEsYUFBMEI7SUFBQSxpQkFBTztJQUN6QyxpQkFBTztJQUNULGlCQUFNO0lBRU4sZ0NBQW1DO0lBQUEseUJBQWdDO0lBQUEsaUJBQU07SUFDekUsZ0NBQW1DO0lBQUEseUJBQW9DO0lBQUEsaUJBQU07SUFDN0UsZ0NBQW1DO0lBQUEseUJBQWdDO0lBQUEsaUJBQU07SUFDekUsZ0NBQW1DO0lBQUEsYUFBNEI7SUFBQSxpQkFBTTtJQUNyRSxnQ0FBbUM7SUFBQSxhQUEwQjtJQUFBLGlCQUFNO0lBQ25FLGdDQUFtQztJQUFBLGFBQWdDO0lBQUEsaUJBQU07SUFDM0UsMEJBQWU7OztJQWpCeUIsZUFBNEM7SUFBNUMsc0ZBQTRDO0lBQ25CLGVBQTZCO0lBQTdCLDREQUE2QjtJQUFsRCw0REFBb0I7SUFHZixlQUFtQztJQUFuQyx1RUFBbUM7SUFFeEUsZUFBNkI7SUFBN0IsNERBQTZCO0lBQzdCLGVBQTBCO0lBQTFCLHlEQUEwQjtJQU9ELGVBQTRCO0lBQTVCLHNEQUE0QjtJQUM1QixlQUEwQjtJQUExQixvREFBMEI7SUFDMUIsZUFBZ0M7SUFBaEMsMERBQWdDOzs7SUFPL0QsNkJBQXFDO0lBQ25DLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUNoQywwQkFBZTs7O0lBRFAsZUFBaUI7SUFBakIsMkNBQWlCOzs7SUFJM0IsK0JBQTRDO0lBQzFDLGdDQUFvRjtJQUFBLFlBQWE7SUFBQSxpQkFBTztJQUMxRyxpQkFBTTs7O0lBRCtCLGVBQWdEO0lBQWhELGlFQUFnRDtJQUFDLGVBQWE7SUFBYix1Q0FBYTs7O0lBT25HLCtCQUEwRDtJQUN4RCw0QkFBTTtJQUFBLFlBQWdCO0lBQUEsaUJBQU87SUFDL0IsaUJBQU07OztJQURFLGVBQWdCO0lBQWhCLDBDQUFnQjs7O0lBS3BCLDRCQUFnTTs7O0lBQWxMLCtDQUF5Qjs7O0lBQ3ZDLHlCQUE2QjtJQUFBLHdCQUFpQztJQUFBLGlCQUFJOzs7O0lBRnBFLCtCQUE0RTtJQUMxRSwySEFBZ007SUFDaE0sb0dBQWtFO0lBQ3BFLGlCQUFNOzs7SUFGcUMsZUFBb0M7SUFBcEMsMkRBQW9DLHFKQUFBO0lBQ3pFLGVBQXVCO0lBQXZCLGdEQUF1Qjs7O0lBRzdCLCtCQUF3RTtJQUN0RSx5QkFBRztJQUFBLHdCQUFnQztJQUFBLGlCQUFJO0lBQ3pDLGlCQUFNOzs7SUFFTiwrQkFBcUY7SUFDbkYseUJBQW1DO0lBQUEsd0JBQWlDO0lBQUEsaUJBQUk7SUFDMUUsaUJBQU07OztJQURELGVBQStCO0lBQS9CLGdEQUErQjtJQUFZLGVBQWlCO0lBQWpCLCtCQUFpQjs7OztJQUdqRSwrQkFBb0Y7SUFDbEYsZ0NBQWtEO0lBQTVDLDBQQUEyQztJQUFDLHdCQUFnQztJQUFBLGlCQUFPO0lBQzNGLGlCQUFNOzs7O0lBRU4sK0JBQWtJO0lBQWxGLCtOQUE4QixhQUFhLEtBQUU7SUFDM0YsNEJBQU07SUFBQSxZQUFvQjtJQUFBLGlCQUFPO0lBQ2pDLHlCQUFHO0lBQUEsd0JBQW9DO0lBQUEsaUJBQUk7SUFDN0MsaUJBQU07OztJQUZFLGVBQW9CO0lBQXBCLDhDQUFvQjs7OztJQUk1QiwrQkFBeUg7SUFBNUUsK05BQThCLFVBQVUsS0FBRTtJQUNyRiw0QkFBTTtJQUFBLFlBQWlCO0lBQUEsaUJBQU87SUFDOUIseUJBQUc7SUFBQSx3QkFBb0M7SUFBQSxpQkFBSTtJQUM3QyxpQkFBTTs7O0lBRkUsZUFBaUI7SUFBakIsMkNBQWlCOzs7SUE1Qy9CLDZCQUEyQztJQUN6QywrQkFBcUM7SUFDbkMsK0JBQXdCO0lBQ3RCLG1IQUVlO0lBQ2pCLGlCQUFNO0lBRU4sa0dBRU07SUFDUixpQkFBTTtJQUNOLCtCQUErQjtJQUM3QiwrQkFBbUM7SUFDakMsZ0NBQStHO0lBQUEsWUFBYztJQUFBLGlCQUFPO0lBQ3RJLGlCQUFNO0lBQ04sa0dBRU07SUFDTixnQ0FBMkM7SUFFekMsb0dBR007SUFFTixvR0FFTTtJQUVOLG9HQUVNO0lBRU4sb0dBRU07SUFFTixvR0FHTTtJQUVOLG9HQUdNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTtJQUNSLDBCQUFlOzs7SUE5Q00sZUFBbUI7SUFBbkIsNENBQW1CO0lBSzlCLGVBQWU7SUFBZix3Q0FBZTtJQU1iLGVBQWdEO0lBQWhELGlFQUFnRDtJQUFDLHFEQUFzQjtJQUFrQyxlQUFjO0lBQWQsd0NBQWM7SUFFekgsZUFBa0I7SUFBbEIsMkNBQWtCO0lBS0UsZUFBa0I7SUFBbEIsMkNBQWtCO0lBS2xCLGVBQWlCO0lBQWpCLDBDQUFpQjtJQUlqQixlQUEwQjtJQUExQixtREFBMEI7SUFJMUIsZUFBc0I7SUFBdEIsK0NBQXNCO0lBSXRCLGVBQXNCO0lBQXRCLCtDQUFzQjtJQUt0QixlQUFtQjtJQUFuQiw0Q0FBbUI7OztJQVc3Qyw2QkFBeUM7SUFDdkMsK0JBQThDO0lBQzVDLHlCQUFHO0lBQUEsb0JBQTZCO0lBQUEsaUJBQUk7SUFDdEMsaUJBQU07SUFDTiwrQkFBbUQ7SUFDakQsNEJBQU07SUFBQSxZQUFrQjtJQUFBLGlCQUFPO0lBQ2pDLGlCQUFNO0lBQ1IsMEJBQWU7OztJQUxMLGVBQXFCO0lBQXJCLGdDQUFxQjtJQUdyQixlQUFrQjtJQUFsQiw0Q0FBa0I7Ozs7SUFHNUIsNkJBQXdDO0lBQ3RDLGlJQUF3RDtJQUMxRCwwQkFBZTs7OztJQURBLGVBQTRCO0lBQTVCLHNDQUE0Qjs7O0lBY3ZDLDZCQUE4QztJQUFBLFlBQVc7SUFBQSwwQkFBZTs7O0lBQTFCLGVBQVc7SUFBWCxtQ0FBVzs7O0lBRDNELCtCQUFxRDtJQUNuRCwySEFBd0U7SUFDMUUsaUJBQU07OztJQURXLGVBQTZCO0lBQTdCLHNEQUE2Qjs7O0lBekJwRCw2QkFBK0M7SUFDN0MsK0JBQXNDO0lBQ3BDLG1IQU9lO0lBQ2YsbUhBRWU7SUFDakIsaUJBQU07SUFDTiwrQkFBNkM7SUFDM0MsK0JBQXdEO0lBQ3RELCtCQUErRjtJQUM3Riw0QkFBTTtJQUFBLFlBQWM7SUFBQSxpQkFBTztJQUM3QixpQkFBTTtJQUNOLCtCQUFzQztJQUNwQyw2QkFBTTtJQUFBLGFBQW1CO0lBQUEsaUJBQU87SUFDbEMsaUJBQU07SUFDUixpQkFBTTtJQUNOLGdDQUF5RDtJQUN2RCxvR0FFTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFDUiwwQkFBZTs7O0lBM0JJLGVBQXdCO0lBQXhCLGlEQUF3QjtJQVF4QixlQUF1QjtJQUF2QixnREFBdUI7SUFNRyxlQUFzQjtJQUF0QixxREFBc0I7SUFDckQsZUFBYztJQUFkLHdDQUFjO0lBR2QsZUFBbUI7SUFBbkIsNkNBQW1CO0lBSWEsZUFBVztJQUFYLG9DQUFXOzs7O0lBUXpELDZCQUE0QztJQUMxQywrQkFBNkM7SUFDM0MsOENBQThFO0lBQXRDLHlQQUFxQztJQUFDLGlCQUFxQjtJQUNyRyxpQkFBTTtJQUNOLCtCQUEwQztJQUN4QywrQkFBdUY7SUFDckYsNEJBQU07SUFBQSxZQUFTO0lBQUEsaUJBQU87SUFDeEIsaUJBQU07SUFDUixpQkFBTTtJQUNSLDBCQUFlOzs7SUFQUyxlQUFtQjtJQUFuQix5Q0FBbUI7SUFHSCxlQUFpQjtJQUFqQixnREFBaUI7SUFDN0MsZUFBUztJQUFULG1DQUFTOzs7SUFjakIsNkJBQThDO0lBQUEsWUFBVztJQUFBLDBCQUFlOzs7SUFBMUIsZUFBVztJQUFYLG1DQUFXOzs7SUFEM0QsK0JBQWlEO0lBQy9DLDBIQUF3RTtJQUMxRSxpQkFBTTs7O0lBRFcsZUFBNkI7SUFBN0Isc0RBQTZCOzs7SUFSaEQsNkJBQTJDO0lBQ3pDLCtCQUEyQztJQUN6Qyx5QkFBRztJQUFBLG9CQUE2QjtJQUFBLGlCQUFJO0lBQ3RDLGlCQUFNO0lBQ04sK0JBQXdGO0lBQ3RGLDRCQUFNO0lBQUEsWUFBUztJQUFBLGlCQUFPO0lBQ3hCLGlCQUFNO0lBQ04sa0dBRU07SUFDUiwwQkFBZTs7O0lBUkwsZUFBcUI7SUFBckIsZ0NBQXFCO0lBRVEsZUFBaUI7SUFBakIsZ0RBQWlCO0lBQzlDLGVBQVM7SUFBVCxtQ0FBUztJQUVtQixlQUFXO0lBQVgsb0NBQVc7OztJQU1qRCw2QkFBOEM7SUFDNUMsK0JBQTZDO0lBQzNDLDZCQUFvQjtJQUFBLHdCQUFpQztJQUFBLGlCQUFJO0lBQzNELGlCQUFNO0lBQ04sK0JBQXNDO0lBQ3BDLDRCQUFNO0lBQUEsWUFBUztJQUFBLGlCQUFPO0lBQ3hCLGlCQUFNO0lBQ1IsMEJBQWU7OztJQUZMLGVBQVM7SUFBVCxtQ0FBUzs7OztJQUtuQiw2QkFBa0c7SUFDaEcsa0hBQXdEO0lBQzFELDBCQUFlOzs7O0lBREEsZUFBNEI7SUFBNUIsc0NBQTRCOzs7O0lBTXpDLDZCQUF3QztJQUN0QyxpSUFBd0Q7SUFDMUQsMEJBQWU7Ozs7SUFEQSxlQUE0QjtJQUE1QixzQ0FBNEI7Ozs7SUFRckMsK0JBQzBFO0lBQTFCLGtTQUF5QjtJQUR6RSxpQkFDMEU7OztJQUFoRCxnREFBcUI7SUFBMUMsd0RBQW9COzs7SUFDekIsNEJBQW1EO0lBQUEsWUFBNEI7SUFBQSxpQkFBTzs7OztJQUFuQyxlQUE0QjtJQUE1QiwwREFBNEI7OztJQU5qRiwrQkFHMkU7SUFDekUsdUhBQzBFO0lBQzFFLHdIQUFzRjtJQUN4RixpQkFBTTs7Ozs7SUFOSix3R0FBd0YseUVBQUEsNEVBQUE7SUFHdkQsZUFBMEM7SUFBMUMsbUVBQTBDO0lBRXBFLGVBQTBDO0lBQTFDLG1FQUEwQzs7O0lBR3JELCtCQUFvRDtJQUFBLFlBQW9CO0lBQUEsaUJBQU07OztJQUExQixlQUFvQjtJQUFwQix1REFBb0I7OztJQVgxRSw2QkFBeUM7SUFDdkMsK0JBQXlFO0lBQ3ZFLGlIQU9NO0lBQ1IsaUJBQU07SUFDTixpSEFBOEU7SUFDOUUscUJBQXVEO0lBQ3pELDBCQUFlOzs7SUFYc0MsZUFBUztJQUFULHNDQUFTO0lBUy9CLGVBQXFCO0lBQXJCLDhDQUFxQjs7O0lBZnRELDZCQUEyQztJQUN6QyxtSEFFZTtJQUNmLG1IQWFlO0lBQ2pCLDBCQUFlOzs7SUFqQkUsZUFBdUI7SUFBdkIsZ0RBQXVCO0lBR3ZCLGVBQXdCO0lBQXhCLGlEQUF3Qjs7OztJQWtCdkMsZ0NBQ2tFO0lBQ2hFLGdDQUEyQjtJQUN6QixnQ0FBc0Y7SUFBM0IsaU9BQTBCO0lBQXJGLGlCQUFzRjtJQUN4RixpQkFBTTtJQUNSLGlCQUFNOzs7SUFGRyxlQUE4QjtJQUE5QiwrRUFBOEI7SUFBQyxxREFBc0I7OztJQUc5RCxnQ0FBa0c7SUFDaEcsaUNBQXdDO0lBQUEsWUFBNkI7SUFBQSxpQkFBTztJQUM5RSxpQkFBTTs7O0lBRG9DLGVBQTZCO0lBQTdCLCtEQUE2Qjs7OztJQWFyRSxnQ0FFa0M7SUFERywyT0FBbUM7SUFEeEUsaUJBRWtDOzs7SUFEN0IsOERBQStCO0lBQ2xDLHVFQUErQjs7O0lBQ2pDLGlDQUNpQztJQUFBLFlBQXNDO0lBQUEsaUJBQU87OztJQUE3QyxlQUFzQztJQUF0Qyx3RUFBc0M7Ozs7SUF6QjNFLDZCQUE4QztJQUM1QyxrR0FLTTtJQUNOLGtHQUVNO0lBQ04scUNBQXNFO0lBQUEsWUFBa0I7SUFBQSxpQkFBWTtJQUNwRywrQkFBbUM7SUFDakMsZ0NBQWtDO0lBQUEsWUFBb0I7SUFBQSxpQkFBTztJQUM3RCxnQ0FBK0M7SUFBQSxZQUFxQjtJQUFBLGlCQUFPO0lBQzNFLDhCQUFvQjtJQUFBLHlCQUF3RDtJQUFBLGlCQUFJO0lBQ2hGLGlDQUErQztJQUFBLGFBQW1CO0lBQUEsaUJBQU87SUFDM0UsaUJBQU07SUFDTixnQ0FBdUM7SUFDckMsMkJBQXNGO0lBQ3hGLGlCQUFNO0lBQ04sZ0NBQXFDO0lBQ25DLG9HQUVrQztJQUNsQyxzR0FDOEU7SUFDOUUsZ0NBQXNDO0lBQ3BDLDJCQUNNO0lBQ04sMkJBQ007SUFDUixpQkFBTTtJQUNOLCtCQUFrRTtJQUEvRCx3TkFBMEI7SUFBcUMsMEJBQW1DO0lBQUEsaUJBQUk7SUFDM0csaUJBQU07SUFDUiwwQkFBZTs7O0lBaENQLGVBQTBEO0lBQTFELDJGQUEwRDtJQUsxRCxlQUF5RDtJQUF6RCwwRkFBeUQ7SUFHN0IsZUFBbUM7SUFBbkMseURBQW1DO0lBQUMsZUFBa0I7SUFBbEIsNENBQWtCO0lBRXBELGVBQW9CO0lBQXBCLDhDQUFvQjtJQUNQLGVBQXFCO0lBQXJCLCtDQUFxQjtJQUVyQixlQUFtQjtJQUFuQiw2Q0FBbUI7SUFHckIsZUFBa0M7SUFBbEMsbURBQWtDO0lBR3pFLGVBQW9DO0lBQXBDLDZEQUFvQztJQUduQyxlQUFpRztJQUFqRywwSUFBaUc7SUFHNUUsZUFBK0M7SUFBL0MsZ0dBQStDO0lBRTdDLGVBQWlEO0lBQWpELGtHQUFpRDs7OztJQVNqRiw2QkFBd0M7SUFDdEMsa0lBQXdEO0lBQzFELDBCQUFlOzs7O0lBREEsZUFBNEI7SUFBNUIsc0NBQTRCOzs7SUFXdkMsNkJBQThDO0lBQUEsWUFBVztJQUFBLDBCQUFlOzs7SUFBMUIsZUFBVztJQUFYLG1DQUFXOzs7SUFEM0QsZ0NBQTREO0lBQzFELDBJQUF3RTtJQUMxRSxpQkFBTTs7O0lBRFcsZUFBNkI7SUFBN0Isc0RBQTZCOzs7O0lBVGhELDZCQUF5QztJQUN2QyxnQ0FBNkM7SUFDM0MsNkJBQW9CO0lBQUEsb0JBQTRCO0lBQUEsaUJBQUk7SUFDdEQsaUJBQU07SUFDTixxQ0FBOEk7SUFBekgsbVFBQW9DO0lBQ3ZELHNDQUNzQztJQUQxQix5VUFBMkQscVFBQUE7SUFDakMsWUFBUztJQUFBLGlCQUFPO0lBQ3hELGlCQUFNO0lBQ04sbUhBRU07SUFDUiwwQkFBZTs7O0lBVFksZUFBb0I7SUFBcEIsaUNBQW9CO0lBRThDLGVBQWlCO0lBQWpCLGdEQUFpQjtJQUV4RyxlQUFtQztJQUFuQyxxREFBbUM7SUFBQyxlQUFTO0lBQVQsbUNBQVM7SUFFRixlQUFXO0lBQVgsb0NBQVc7OztJQVo5RCw2QkFBNkM7SUFDM0Msb0hBRWU7SUFDZixxSEFXZTtJQUNqQiwwQkFBZTs7O0lBZkUsZUFBdUI7SUFBdkIsZ0RBQXVCO0lBR3ZCLGVBQXdCO0lBQXhCLGlEQUF3Qjs7O0lBbk4zQyw2QkFBK0I7SUFHN0Isc0dBa0JlO0lBR2Ysc0dBaURlO0lBR2YscUdBNkJlO0lBR2Ysb0dBU2U7SUFHZixvR0FVZTtJQUdmLG9HQU9lO0lBR2Ysb0dBRWU7SUFJZixvR0FrQmU7SUFHZixzR0FrQ2U7SUFHZixzR0FnQmU7SUFDakIsMEJBQWU7OztJQTdORSxlQUE2QjtJQUE3QixxREFBNkI7SUFxQjdCLGVBQTBCO0lBQTFCLGtEQUEwQjtJQW9EMUIsZUFBOEI7SUFBOUIsc0RBQThCO0lBZ0M5QixlQUEyQjtJQUEzQixtREFBMkI7SUFZM0IsZUFBMEI7SUFBMUIsa0RBQTBCO0lBYTFCLGVBQTZCO0lBQTdCLHFEQUE2QjtJQVU3QixlQUFpRjtJQUFqRix1SEFBaUY7SUFNakYsZUFBMEI7SUFBMUIsa0RBQTBCO0lBcUIxQixlQUE2QjtJQUE3QixxREFBNkI7SUFxQzdCLGVBQTRCO0lBQTVCLG9EQUE0Qjs7O0lBbUI3QyxxQ0FBeUQ7Ozs7SUFLekQsMEJBQTBFO0lBQ3hFLDRCQUFNO0lBQ0osOEZBQXVEO0lBQ3pELGlCQUFPO0lBQ1QsaUJBQUs7Ozs7SUFKOEIsMERBQXNDO0lBRXhELGVBQTJCO0lBQTNCLDZDQUEyQjs7O0lBSDlDLCtCQUFvRDtJQUNsRCx3RUFJSztJQUNQLGlCQUFLOzs7SUFMb0IsZUFBVTtJQUFWLHdDQUFVOzs7O0FEL05uQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBMEM3QixNQUFNLE9BQU8sa0JBQWtCO0lBNkM3QixZQUFvQixHQUFzQixFQUN4QyxRQUFtQixFQUNYLFNBQXVCLEVBQy9CLFVBQXNCO1FBSEosUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFFaEMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQTlDakMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ00sYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUV6QyxnQkFBVyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBSTlELFlBQU8sR0FBNkIsRUFBRSxDQUFDO1FBQ3ZDLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJbEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLGNBQVMsR0FBa0IsTUFBTSxDQUFDO1FBQ2xDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsMEJBQXFCLEdBQVcsb0JBQW9CLENBQUM7UUFDckQsMEJBQXFCLEdBQVcsb0JBQW9CLENBQUM7UUFHcEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUcvRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQixtQkFBYyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3BFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3hDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQXlEbEQsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBbkR2QixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFhO1FBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLElBQUksR0FBRyxXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQ3pGO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWhDLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO1lBQ3pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLEdBQVU7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUdELFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVnQyxPQUFPLENBQUMsS0FBWTtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRXNDLFVBQVUsQ0FBQyxLQUFZO1FBQzVELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUN4RixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ25CO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFJRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUM3QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDaEU7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQW9CLEVBQUUsY0FBYyxFQUFFLFNBQVM7UUFDekQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2pDLGNBQWMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztRQUMvQyxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMvRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQW9CLEVBQUUsU0FBUztRQUN4QyxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsVUFBVSxDQUFDLGNBQWM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixjQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFDbkMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFJO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQVUsRUFBRSxJQUFZO1FBQ3JDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxjQUFjLENBQUMsS0FBVSxFQUFFLEdBQVc7UUFDcEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDekQsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtnQkFDckIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzthQUNyQztpQkFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ2hCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztvRkFwTFUsa0JBQWtCO3VEQUFsQixrQkFBa0I7b0NBaUNmLHFCQUFxQjs7Ozs7aUdBakN4QixtQkFBZSw0RkFBZixzQkFBa0I7Ozs7O1FDaEYvQixvSEFFYztRQUVkLG1FQWFNO1FBR04sbUVBT007UUFFTiw4QkFBaUQ7UUFDL0MsdUZBZ09lO1FBRWYsaUdBQXlEO1FBQzNELGlCQUFNO1FBR04saUVBTUs7O1FBclFGLGVBQTJHO1FBQTNHLG1KQUEyRztRQWVqRixlQUFrRTtRQUFsRSwrRkFBa0U7UUFTcEUsZUFBcUI7UUFBckIsdUNBQXFCO1FBQy9CLGVBQWM7UUFBZCxtQ0FBYztRQWtPUixlQUFhO1FBQWIsa0NBQWE7UUFJTixlQUFvQjtRQUFwQix5Q0FBb0I7O0FEakx2QjtJQUFmLFlBQVksRUFBRTtvREFBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7a0RBQWdCO0FBQ2Y7SUFBZixZQUFZLEVBQUU7b0RBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFO21EQUFpQjtBQUNoQjtJQUFmLFlBQVksRUFBRTttREFBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7b0RBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFO3FEQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTs2REFBMkI7dUZBVnhDLGtCQUFrQjtjQXhDOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLE1BQU0sRUFBRTtvQkFDTjs7O0tBR0M7aUJBQ0Y7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLDBCQUEwQixFQUFFLFNBQVM7b0JBQ3JDLDJCQUEyQixFQUFFLFVBQVU7b0JBQ3ZDLDRCQUE0QixFQUFFLHdDQUF3QztvQkFDdEUsNkJBQTZCLEVBQUUsa0JBQWtCO29CQUNqRCwrQkFBK0IsRUFBRSxPQUFPO29CQUN4QyxrQ0FBa0MsRUFBRSxzQkFBc0I7b0JBQzFELG9DQUFvQyxFQUFFLHlCQUF5QjtvQkFDL0QsNkNBQTZDLEVBQUUscUNBQXFDO29CQUNwRiw4QkFBOEIsRUFBRSwyQkFBMkI7b0JBQzNELDZCQUE2QixFQUFFLHVDQUF1QztvQkFDdEUsNkJBQTZCLEVBQUUsdUNBQXVDO29CQUN0RSwyQkFBMkIsRUFBRSx3QkFBd0I7b0JBQ3JELDRCQUE0QixFQUFFLHlCQUF5QjtvQkFDdkQsNkJBQTZCLEVBQUUsMEJBQTBCO29CQUN6RCxzQ0FBc0MsRUFBRSxzQ0FBc0M7b0JBQzlFLG9DQUFvQyxFQUFFLG9DQUFvQztvQkFDMUUsZ0NBQWdDLEVBQUUsc0JBQXNCO29CQUN4RCx5QkFBeUIsRUFBRSx5QkFBeUI7b0JBQ3BELGlDQUFpQyxFQUFFLHVCQUF1QjtvQkFDMUQseUJBQXlCLEVBQUUsc0JBQXNCO29CQUNqRCxrQ0FBa0MsRUFBRSxrQ0FBa0M7b0JBQ3RFLGtDQUFrQyxFQUFFLHFDQUFxQztvQkFDekUsMENBQTBDLEVBQUUsd0JBQXdCO29CQUNwRSw0QkFBNEIsRUFBRSxvQ0FBb0M7aUJBQ25FO2dCQUNELFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDO2dKQUkwQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixPQUFPO2tCQUEvQixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ21CLGlCQUFpQjtrQkFBekMsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU07WUFDRSxTQUFTO2tCQUFqQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFDRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0ksV0FBVztrQkFBcEIsTUFBTTtZQUNFLEtBQUs7a0JBQWIsS0FBSztZQUMrQixHQUFHO2tCQUF2QyxZQUFZO21CQUFDLHFCQUFxQjtZQUN6QixhQUFhO2tCQUF0QixNQUFNO1lBQ0csSUFBSTtrQkFBYixNQUFNO1lBQ0csS0FBSztrQkFBZCxNQUFNO1lBQ0UsUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLGNBQWM7a0JBQXZCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBQ0UsZ0JBQWdCO2tCQUF4QixLQUFLO1lBRUksYUFBYTtrQkFBdEIsTUFBTTtZQW9DMEIsT0FBTztrQkFBdkMsWUFBWTttQkFBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFNUSxVQUFVO2tCQUFoRCxZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCxcclxuICBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbWFjc0NhcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLWNhcmQtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnbmd4LXZpZGVvZ3VsYXInO1xyXG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tIFwiLi4vY21hY3MtdmlkZW8tcGxheWVyL2NtYWNzLXZpZGVvLXBsYXllci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgcHJvcGFnYXRpbmcgZnJvbSAncHJvcGFnYXRpbmctaGFtbWVyanMnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ21hY3NDYXJkVHlwZSA9ICdmaWxlJyB8ICdzZWxlY3Rpb24nIHxcclxuICAnYWN0aW9uJyB8ICd0ZWFtJyB8ICdwcm9qZWN0JyB8ICdmb2xkZXInIHwgJ21lYXN1cmUnIHwgJ3dlYXRoZXInIHxcclxuICAnYmlnLWZpbGUnIHwgJ25vbmUnIHwgJ3ZpZGVvJyB8ICd0b2RvJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmlnRmlsZSB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgZXh0ZW5zaW9uPzogc3RyaW5nO1xyXG4gIGNyZWF0ZWRfYXQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlciB7XHJcbiAgdGVtcD86IG51bWJlcixcclxuICB0ZW1wX21pbj86IG51bWJlcixcclxuICB0ZW1wX21heD86IG51bWJlcixcclxuICBodW1pZGl0eT86IG51bWJlcixcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZyxcclxuICBpY29uPzogc3RyaW5nLFxyXG4gIGNsb3Vkc19hbGw/OiBudW1iZXIsXHJcbiAgd2luZF9zcGVlZD86IG51bWJlclxyXG59XHJcblxyXG5IYW1tZXIgPSBwcm9wYWdhdGluZyhIYW1tZXIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jYXJkJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ2FyZCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgY21hY3MtY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWNhcmQtbG9hZGluZ10nOiAnbG9hZGluZycsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWJvcmRlcmVkXSc6ICdib3JkZXJlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWhvdmVyYWJsZV0nOiBcImhvdmVyYWJsZSB8fCBjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nXCIsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLXR5cGUtaW5uZXJdJzogYHR5cGUgPT09ICdpbm5lcidgLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1jb250YWluLXRhYnNdJzogJyEhdGFiJyxcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1maWxlcy13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnZmlsZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1tZWFzdXJlLXdyYXBwZXJdJzogXCJjbWFjc1R5cGUgPT09ICdtZWFzdXJlJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLW1lYXN1cmUtd3JhcHBlci1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ21lYXN1cmUnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXNlbGVjdGlvbi1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLWRpc2FibGVkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyAmJiBkaXNhYmxlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1hY3Rpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2FjdGlvbidcIixcclxuICAgICdbY2xhc3MuY21hY3Mtd2VhdGhlci1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnd2VhdGhlcidcIixcclxuICAgICdbY2xhc3MuY21hY3MtYmlnLWZpbGUtY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1iaWctZmlsZS1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnYmlnLWZpbGUnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWFjdGlvbi1jYXJkLWRpc2FibGVkXSc6IFwiY21hY3NUeXBlID09PSAnYWN0aW9uJyAmJiBkaXNhYmxlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1pbmZvcm1hdGlvbi1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndGVhbSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtdGVhbS1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAncHJvamVjdCdcIixcclxuICAgICdbY2xhc3MuY21hY3MtdmlkZW8tcGxheWVyLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd2aWRlbydcIixcclxuICAgICdbY2xhc3MuY21hY3MtdG9kby1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndG9kbydcIixcclxuICAgICdbY2xhc3MuY21hY3MtdG9kby1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAndG9kbycgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtdGVhbS1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAncHJvamVjdCcgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1maWxlcy1mb2xkZXJzLXdyYXBwZXJdJzogXCJjbWFjc1R5cGUgPT09ICdmb2xkZXInXCIsXHJcbiAgICAnW2NsYXNzLmZpbGUtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2ZvbGRlcicgJiYgc2VsZWN0ZWRcIlxyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY2FyZC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZvbGRlckljb24gPSAnJztcclxuICBpc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGVkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlzUmFkaW8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBob3ZlcmFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlRGVmYXVsdENvbnRlbnQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzb3VyY2VzOiBTb3VyY2VbXTtcclxuICBAT3V0cHV0KCkgcGxheWVyUmVhZHk6IEV2ZW50RW1pdHRlcjxWZ0FQST4gPSBuZXcgRXZlbnRFbWl0dGVyPFZnQVBJPigpO1xyXG4gIEBJbnB1dCgpIGJvZHlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBjb3ZlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYm9keTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XHJcbiAgQElucHV0KCkgdGVhbTogYW55ID0gW107XHJcbiAgQElucHV0KCkgZmlsZTogQmlnRmlsZSA9IG51bGw7XHJcbiAgQElucHV0KCkgcHJvamVjdDogYW55ID0gW107XHJcbiAgQElucHV0KCkgcHJvamVjdERhdGVMYWJlbCE6IHN0cmluZztcclxuICBASW5wdXQoKSB0b2RvOiBhbnk7XHJcbiAgQElucHV0KCkgd2VhdGhlcjogV2VhdGhlcjtcclxuICBASW5wdXQoKSBjZWxjaXVzID0gdHJ1ZTtcclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY21hY3NUeXBlOiBDbWFjc0NhcmRUeXBlID0gJ25vbmUnO1xyXG4gIEBJbnB1dCgpIGNtYWNzSWNvbjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY21hY3NJY29uT3BlbmVkRm9sZGVyOiBzdHJpbmcgPSAnaWNvblVJTGFyZ2UtRm9sZGVyJztcclxuICBASW5wdXQoKSBjbWFjc0ljb25DbG9zZWRGb2xkZXI6IHN0cmluZyA9ICdpY29uVUlMYXJnZS1Gb2xkZXInO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBsYWJlbFRpdGxlOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHRpdGxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAQ29udGVudENoaWxkKENtYWNzQ2FyZFRhYkNvbXBvbmVudCkgdGFiOiBDbWFjc0NhcmRUYWJDb21wb25lbnQ7XHJcbiAgQE91dHB1dCgpIG9uZGxjbGlja0NhcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmFsdWU6IGFueTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgZ29Ub01vZHVsZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBJbnB1dCgpIHRvZG9Vc2VyQXNzaWduZWQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAT3V0cHV0KCkgaWNvblRvRG9DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJkJyk7XHJcbiAgfVxyXG5cclxuICBvcGVuTWFpbCgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGxpbmsgPSBgbWFpbHRvOiAke3RoaXMucHJvamVjdC50ZWFtTGVhZC5lbWFpbH1gO1xyXG4gICAgbG9jYXRpb24uaHJlZiA9IGxpbms7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gJ2ZvbGRlcicpIHtcclxuICAgICAgdGhpcy5mb2xkZXJJY29uID0gdGhpcy5vcGVuZWQgPyB0aGlzLmNtYWNzSWNvbk9wZW5lZEZvbGRlciA6IHRoaXMuY21hY3NJY29uQ2xvc2VkRm9sZGVyO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9qZWN0RGF0ZUxhYmVsID09PSB1bmRlZmluZWQgfHwgdGhpcy5wcm9qZWN0RGF0ZUxhYmVsID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdERhdGVMYWJlbCA9ICdQcm9qZWN0IERhdGVzJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUGxheWVyUmVhZHkoYXBpOiBWZ0FQSSkge1xyXG4gICAgdGhpcy5wbGF5ZXJSZWFkeS5lbWl0KGFwaSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tSYWRpbygpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3RhcCcsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMudXNlRGVmYXVsdENvbnRlbnQgfHwgdGhpcy5jbWFjc1R5cGUgPT09ICdiaWctZmlsZScpIHtcclxuICAgICAgdGhpcy5zZWxlY3QoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG91YmxldGFwJywgWyckZXZlbnQnXSkgb25EYmxDbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gJ2ZvbGRlcicgJiYgIXRoaXMudXNlRGVmYXVsdENvbnRlbnQpIHtcclxuICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XHJcbiAgICAgIHRoaXMuZm9sZGVySWNvbiA9IHRoaXMub3BlbmVkID8gdGhpcy5jbWFjc0ljb25PcGVuZWRGb2xkZXIgOiB0aGlzLmNtYWNzSWNvbkNsb3NlZEZvbGRlcjtcclxuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuLmVtaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsb3NlLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY21hY3NUeXBlID09PSAncHJvamVjdCcpIHtcclxuICAgICAgdGhpcy5vbmRsY2xpY2tDYXJkLmVtaXQodGhpcy5wcm9qZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRhcFRpbWVvdXRIYW5kbGVyID0gbnVsbDtcclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSAhPT0gJ3RvZG8nKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSAgXHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzUmFkaW8pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQgPyB0aGlzLnNlbGVjdGVkIDogIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHRpdGxlQ29udGFpbmVyLCB0aXRsZVNwYW4pIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHRpdGxlQ29udGFpbmVyLnN0eWxlLnRleHRPdmVyZmxvdyA9ICdlbGxpcHNpcyc7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGl0bGVTcGFuLmlubmVyVGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKTtcclxuICAgIHRpdGxlU3Bhbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnRpdGxlQ2hhbmdlLmVtaXQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFZGl0KGV2ZW50OiBLZXlib2FyZEV2ZW50LCB0aXRsZVNwYW4pIHtcclxuICAgIGNvbnN0IHRleHQgPSB0aXRsZVNwYW4uaW5uZXJUZXh0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpO1xyXG4gICAgdGhpcy50aXRsZUNoYW5nZS5lbWl0KHRleHQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRWRpdCh0aXRsZUNvbnRhaW5lcikge1xyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuICAgIGlmICh0aGlzLmlzRWRpdGFibGUpIHtcclxuICAgICAgdGl0bGVDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbHMobmFtZTogYW55KSB7XHJcbiAgICBsZXQgaW5pdGlhbHMgPSBuYW1lLm1hdGNoKC9cXGJcXHcvZykgfHwgW107XHJcbiAgICBpbml0aWFscyA9ICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFja2dyb3VuZEltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdC5wcm9qZWN0SW1hZ2U7XHJcbiAgfVxyXG5cclxuICBvbkVycm9yKGVsZW0pIHtcclxuICAgIGVsZW0ucGljdHVyZUVycm9yID0gdHJ1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGljb25zVG9Eb0NsaWNrKGV2ZW50OiBhbnksIGljb246IHN0cmluZykge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuaWNvblRvRG9DbGljay5uZXh0KHsgaWNvbiwgaWQ6IHRoaXMudG9kby5VbmlxdWVJZCB9KTtcclxuICB9XHJcblxyXG4gIGdvVG9Nb2R1bGVUb0RvKGV2ZW50OiBhbnksIHVybDogc3RyaW5nKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5nb1RvTW9kdWxlLmVtaXQodXJsKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkTGFiZWwodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyZuYnNwOyc7XHJcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycpIHtcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gYCR7dmFsdWUuc2xpY2UoMCwgMjApfS4uLmA7XHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICB9ICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNjb250ZW50PlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJhbnQtY2FyZC1oZWFkXCJcclxuICAqbmdJZj1cIih0aXRsZSB8fCBleHRyYSB8fCB0YWIgKSAmJiAoY21hY3NUeXBlID09PSAnbm9uZScgfHwgY21hY3NUeXBlID09PSAndGVhbScgfHwgY21hY3NUeXBlID09PSAncHJvamVjdCcpXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWhlYWQtd3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWhlYWQtdGl0bGVcIiAqbmdJZj1cInRpdGxlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1leHRyYVwiICpuZ0lmPVwiZXh0cmFcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0YWJcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0YWIudGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuXHJcbjwhLS0gc2VsZWN0aW9uIGNhcmQgZm9yIHByb2plY3QgY3JlYXRpb24gLS0+XHJcbjxkaXYgY2xhc3M9XCJhbnQtY2FyZC1jb3ZlclwiICpuZ0lmPVwiY292ZXIgfHwgY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyB8fCBjbWFjc1R5cGUgPT09ICdhY3Rpb24nXCI+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvdmVyXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJ1wiPlxyXG4gICAgPGxhYmVsIGNtYWNzLXJhZGlvIFsobmdNb2RlbCldPVwic2VsZWN0ZWRcIiAobmdNb2RlbENoYW5nZSk9XCJjaGVja1JhZGlvKClcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj57e2xhYmVsVGl0bGV9fTwvbGFiZWw+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYm9keVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImFudC1jYXJkLWJvZHlcIiBbbmdTdHlsZV09XCJib2R5U3R5bGVcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvYWRpbmdcIj5cclxuXHJcbiAgICA8IS0tIHdlYXRoZXIgY2FyZCAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICd3ZWF0aGVyJ1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY2FyZC10ZW1wXCI+e3t3ZWF0aGVyLnRlbXAgKyAoKGNlbGNpdXMpID8gJ8KwQycgOiAnwrBGJyl9fTwvc3Bhbj5cclxuICAgICAgPGltZyBjbGFzcz1cImNtYWNzLXdlYXRoZXItY2FyZC1jbG91ZC1pbWdcIiBbc3JjXT1cIndlYXRoZXIuaWNvblwiIGFsdD1cInt7d2VhdGhlci5kZXNjcmlwdGlvbn19XCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jYXJkLWRlc2NyaXB0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY2FyZC1kZXNjcmlwdGlvblwiPnt7d2VhdGhlci5kZXNjcmlwdGlvbiB8IHRpdGxlY2FzZX19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jYXJkLXRlbXAtbWluLW1heFwiPlxyXG4gICAgICAgICAgPHNwYW4+e3t3ZWF0aGVyLnRlbXBfbWluICsgJ8KwIC8gJ319PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3t3ZWF0aGVyLnRlbXBfbWF4ICsgJ8KwJ319PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jb2wtMS0zXCI+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1SYWluXCI+PC9pPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jb2wtMS0zXCI+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1IdW1pZGl0eVwiPjwvaT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY29sLTEtM1wiPjxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtV2luZFwiPjwvaT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY29sLTEtM1wiPnt7d2VhdGhlci5jbG91ZHNfYWxsICsgJyUnfX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY29sLTEtM1wiPnt7d2VhdGhlci5odW1pZGl0eSArICclJ319PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNvbC0xLTNcIj57e3dlYXRoZXIud2luZF9zcGVlZCArICcgS20vSCd9fTwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSB0byBkbyBjYXJkIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ3RvZG8nXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWNhcmQtaGVhZGVyXCIgbnotcm93PlxyXG4gICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjEyXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidG9kby5VbmlxdWVJZFwiID5cclxuICAgICAgICAgICAgPHNwYW4+e3t0b2RvLlVuaXF1ZUlkfX08L3NwYW4+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2ICpuZ0lmPVwidG9kby5kYXRlXCIgbnotY29sIG56U3Bhbj1cIjEyXCIgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdG9kby1jYXJkLWRhdGVcIiBbY2xhc3MuY21hY3MtdG9kby1jYXJkLW92ZXJkdWVdPVwidG9kby5pc092ZXJkdWVcIj57e3RvZG8uZGF0ZX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRvZG8tY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgPHNwYW4gW2NsYXNzLmNtYWNzLXRvZG8tY2FyZC1vdmVyZHVlXT1cInRvZG8uaXNPdmVyZHVlXCIgdGl0bGU9XCJ7e3RvZG8udGl0bGV9fVwiIHBsYWNlbWVudD1cImJvdHRvbVwiIGNtYWNzLXRvb2x0aXA+e3t0b2RvLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInRvZG8ucHJvamVjdFwiIGNsYXNzPVwiY21hY3MtdG9kby1jYXJkLXByb2plY3RcIj5cclxuICAgICAgICAgIDxzcGFuPnt7dG9kby5wcm9qZWN0fX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBuei1yb3cgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgICA8IS0tIHVzZXIgaWNvbiAtLT5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjVcIiAqbmdJZj1cIiF0b2RvLmlzVGVhbVwiICBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC1wZXJzb25cIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdJZl09XCJ0b2RvVXNlckFzc2lnbmVkXCIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0b2RvVXNlckFzc2lnbmVkOyBjb250ZXh0OiB7aWQ6IHRvZG8udXNlckFzc2lnbmVkSWQsIG5hbWU6IHRvZG8udXNlckFzc2lnbmVkTmFtZSwgbG9nb1VybDogdG9kby51c2VyQXNzaWduZWRMb2dvVXJsfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8YSAqbmdJZj1cIiF0b2RvVXNlckFzc2lnbmVkXCI+PGkgY2xhc3M9XCJpY29uQ3JlYXRpb24tVXNlclwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gdGVhbSBpY29uIC0tPlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiNVwiICpuZ0lmPVwidG9kby5pc1RlYW1cIiBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC10ZWFtXCI+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtVGVhbVwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gZmxhZyBpY29uIC0tPlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiNVwiICpuZ0lmPVwidG9kby5oYXNQcmlvcml0eUZsYWdcIiBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC1wcmlvcml0eVwiPlxyXG4gICAgICAgICAgICA8YSBbc3R5bGUuY29sb3JdPVwidG9kby5zdGF0ZUNvbG9yXCI+PGkgbnotaWNvbiBbbnpUeXBlXT1cIidmbGFnJ1wiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gbGluayBpY29uIC0tPlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiNVwiICpuZ0lmPVwidG9kby5hc3NvY2lhdGlvblwiIGNsYXNzPVwiY21hY3MtdG9kby1jYXJkLWFzc29jaWF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJnb1RvTW9kdWxlVG9EbygkZXZlbnQsIHRvZG8ubGluaylcIj48aSBjbGFzcz1cImljb25VSUxhcmdlLUxpbmtcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIGF0dGFjaG1lbnRzIGljb24gLS0+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCI1XCIgKm5nSWY9XCJ0b2RvLmF0dGFjaG1lbnRzXCIgKHRhcCk9XCJpY29uc1RvRG9DbGljaygkZXZlbnQsICdhdHRhY2htZW50cycpXCIgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtYXR0YWNobWVudHNcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3t0b2RvLmF0dGFjaG1lbnRzfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtQXR0YWNoZWRcIj48L2k+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIGNvbW1lbnRzIGljb24gLS0+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCI0XCIgKm5nSWY9XCJ0b2RvLmNvbW1lbnRzXCIgKHRhcCk9XCJpY29uc1RvRG9DbGljaygkZXZlbnQsICdjb21tZW50cycpXCIgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtY29tbWVudHNcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3t0b2RvLmNvbW1lbnRzfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtQ29tbWVudHNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBmaWxlcyAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICdiaWctZmlsZSdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtbWV0YVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdXNlRGVmYXVsdENvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWljb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8YT48aSBjbGFzcz1cInt7Y21hY3NJY29ufX1cIj48L2k+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1iaWctZmlsZS1leHRlbnNpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2ZpbGUuZXh0ZW5zaW9ufX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidXNlRGVmYXVsdENvbnRlbnRcIj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtZGVzY3JpcHRpb24tbGVmdC1wYW5lbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtdGl0bGVcIiB0aXRsZT1cInt7ZmlsZS50aXRsZX19XCIgcGxhY2VtZW50PVwiYm90dG9tXCIgY21hY3MtdG9vbHRpcD5cclxuICAgICAgICAgICAgPHNwYW4+e3tmaWxlLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWRhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3tmaWxlLmNyZWF0ZWRfYXR9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWRlc2NyaXB0aW9uLXJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1iaWctZmlsZS1leHRyYVwiICpuZ0lmPVwiZXh0cmFcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS0gdmlkZW9zIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ3ZpZGVvJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC12aWRlby1wbGF5ZXItd3JhcHBlclwiPlxyXG4gICAgICAgIDxjbWFjcy12aWRlby1wbGF5ZXIgW3NvdXJjZXNdPVwic291cmNlc1wiIChwbGF5ZXJSZWFkeSk9XCJvblBsYXllclJlYWR5KCRldmVudClcIj48L2NtYWNzLXZpZGVvLXBsYXllcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLXZpZGVvLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtdmlkZW8tdGl0bGVcIiB0aXRsZT1cInt7dGl0bGV9fVwiIHBsYWNlbWVudD1cImJvdHRvbVwiIGNtYWNzLXRvb2x0aXA+XHJcbiAgICAgICAgICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBmaWxlcyBjYXJkIGZvciByZWNlbnQgcGFuZWwtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICdmaWxlJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1maWxlcy1pY29uLXdyYXBwZXJcIj5cclxuICAgICAgICA8YT48aSBjbGFzcz1cInt7Y21hY3NJY29ufX1cIj48L2k+PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtbGFiZWwtcmVjZW50XCIgdGl0bGU9XCJ7e3RpdGxlfX1cIiBwbGFjZW1lbnQ9XCJib3R0b21cIiBjbWFjcy10b29sdGlwPlxyXG4gICAgICAgIDxzcGFuPnt7dGl0bGV9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWZpbGUtZXh0cmFcIiAqbmdJZj1cImV4dHJhXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIHJhZGlvIGNhcmQgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAnbWVhc3VyZSdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtbWVhc3VyZS1pY29uLXdyYXBwZXJcIj5cclxuICAgICAgICA8YSBjbGFzcz1cImljb25zcGFuXCI+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1SdWxlclwiPjwvaT48L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1sYWJlbC1tZWFzdXJlXCI+XHJcbiAgICAgICAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAnbm9uZScgfHwgY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyB8fCBjbWFjc1R5cGUgPT09ICdhY3Rpb24nXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcbiAgICA8IS0tIHRlYW0gY2FyZCAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICd0ZWFtJ1wiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidXNlRGVmYXVsdENvbnRlbnRcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXVzZURlZmF1bHRDb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDIwcHg7IG1pbi1oZWlnaHQ6IDI1cHg7IGRpc3BsYXk6IGlubGluZS1mbGV4XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1wZXJzb24tY2FyZFwiICpuZ0Zvcj1cImxldCBwZXJzb24gb2YgdGVhbTsgaW5kZXggYXMgaVwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiKCFwZXJzb24uaW1hZ2UgfHwgcGVyc29uLnBpY3R1cmVFcnJvcikgPyAnIzUxMkRBOCcgOiAnI2M3ZjVmZidcIlxyXG4gICAgICAgICAgICBbc3R5bGUucGFkZGluZ109XCIoIXBlcnNvbi5pbWFnZSB8fCBwZXJzb24ucGljdHVyZUVycm9yKSA/ICc0cHgnIDogJzBweCdcIlxyXG4gICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCIoaSA+PSA0ICYmIHRlYW0ubGVuZ3RoID4gNSkgPyAnbm9uZScgOiAnaW5saW5lLWJsb2NrJyBcIj5cclxuICAgICAgICAgICAgPGltZyB3aWR0aD1cIjMwcHhcIiBoZWlnaHQ9XCIzMHB4XCIgKm5nSWY9XCJwZXJzb24uaW1hZ2UgJiYgIXBlcnNvbi5waWN0dXJlRXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgIFtzcmNdPVwicGVyc29uLmltYWdlXCIgYWx0PVwie3twZXJzb24ubmFtZX19XCIgKGVycm9yKT1cIm9uRXJyb3IocGVyc29uKVwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFwZXJzb24uaW1hZ2UgfHwgcGVyc29uLnBpY3R1cmVFcnJvclwiPnt7Z2V0SW5pdGlhbHMocGVyc29uLm5hbWUpfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGx1cy10ZWFtLWNhcmRcIiAqbmdJZj1cInRlYW0ubGVuZ3RoID4gNVwiPit7e3RlYW0ubGVuZ3RoIC0gNH19PC9kaXY+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NtYWNzLWFjdGlvbi1wYW5lbF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBwcm9qZWN0IC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0aW1hZ2Vjb250YWluZXJcIlxyXG4gICAgICAgICAgICpuZ0lmPVwicHJvamVjdC5wcm9qZWN0SW1hZ2UgIT09ICcnICYmICFwcm9qZWN0LnBpY3R1cmVFcnJvclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltYWdlXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cInt7Z2V0QmFja2dyb3VuZEltYWdlKCl9fVwiIGFsdD1cInt7cHJvamVjdC5uYW1lfX1cIiAoZXJyb3IpPVwib25FcnJvcihwcm9qZWN0KVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiAqbmdJZj1cInByb2plY3QucHJvamVjdEltYWdlID09PSAnJyB8fCBwcm9qZWN0LnBpY3R1cmVFcnJvclwiIGNsYXNzPVwiY21hY3MtcHJvai1jYXJkLWRpdi1Mb2dvXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy1wcm9qLWNhcmQtdGV4dC1Mb2dvXCI+e3tnZXRJbml0aWFscyhwcm9qZWN0Lm5hbWUpfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Y21hY3MtdGFnIGNsYXNzPVwicHJvamVjdC1zdGF0dXNcIiBbY21hY3NHcmlkVHlwZV09XCJwcm9qZWN0LnN0YXR1c1RhZ1wiPnt7cHJvamVjdC5zdGF0dXN9fTwvY21hY3MtdGFnPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kYXRlcy13cmFwcGVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWRhdGVzLXRpdGxlXCI+e3twcm9qZWN0RGF0ZUxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWRhdGVzIHByb2plY3QtZGF0ZXMtZGF0ZVwiPnt7cHJvamVjdC5zdGFydERhdGV9fTwvc3Bhbj5cclxuICAgICAgICA8YSBjbGFzcz1cImljb25zcGFuXCI+PGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1BcnJvdy1SaWdodCBwcm9qZWN0LWRhdGVzXCI+PC9pPjwvYT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtZGF0ZXMgcHJvamVjdC1kYXRlcy1kYXRlXCI+e3twcm9qZWN0LmVuZERhdGV9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNhcmQtcHJvZ3Jlc3MtYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtY2FyZC1wcm9ncmVzcy1iYXItaW5uZXJcIiBbc3R5bGUud2lkdGhdPVwicHJvamVjdC5jb21wbGV0aW9uXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1tYW5hZ2VyLWRldGFpbHNcIj5cclxuICAgICAgICA8aW1nICpuZ0lmPVwiIXByb2plY3QudGVhbUxlYWQucGljdHVyZUVycm9yXCIgY2xhc3M9XCJtYW5hZ2VyLWF2YXRhclwiIHdpZHRoPVwiMzBweFwiIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgICAgYWx0PVwie3twcm9qZWN0LnRlYW1MZWFkLm5hbWV9fVwiIChlcnJvcik9XCJvbkVycm9yKHByb2plY3QudGVhbUxlYWQpXCJcclxuICAgICAgICAgIFtzcmNdPVwicHJvamVjdC50ZWFtTGVhZC5hdmF0YXJcIj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFwcm9qZWN0LnRlYW1MZWFkLmF2YXRhciB8fCBwcm9qZWN0LnRlYW1MZWFkLmF2YXRhciA9PT0gJycgfHwgcHJvamVjdC50ZWFtTGVhZC5waWN0dXJlRXJyb3JcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1wcm9qLWF2YXRhci10ZXh0XCI+e3tnZXRJbml0aWFscyhwcm9qZWN0LnRlYW1MZWFkLm5hbWUpfX08L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbWFuYWdlci1tZXRhZGF0YVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1hbmFnZXItbmFtZVwiIFtpbm5lckh0bWxdPVwiYnVpbGRMYWJlbChwcm9qZWN0LnRlYW1MZWFkLm5hbWUpXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYW5hZ2VyLWNoYXJnZVwiIFtpbm5lckh0bWxdPVwiYnVpbGRMYWJlbChwcm9qZWN0LnRlYW1MZWFkLmNoYXJnZSlcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxhIChjbGljayk9XCJvcGVuTWFpbCgkZXZlbnQpXCIgY2xhc3M9XCJpY29uc3BhbiBwcm9qZWN0LWVtYWlsLWljb25cIj48aSBjbGFzcz1cImljb25VSUxhcmdlLU1lc3NhZ2VcIj48L2k+PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuPCEtLSBmb2xkZXJzIGRlZmF1bHQgIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ2ZvbGRlcidcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVzZURlZmF1bHRDb250ZW50XCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF1c2VEZWZhdWx0Q29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZpbGVzLWZvbGRlcnMtaWNvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cImljb25zcGFuXCI+PGkgW2NsYXNzXT1cImZvbGRlckljb25cIj48L2k+PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgI3RpdGxlQ29udGFpbmVyIChjbGljayk9XCJ0b2dnbGVFZGl0KHRpdGxlQ29udGFpbmVyKVwiIGNsYXNzPVwiY2FyZC1maWxlcy1mb2xkZXJzLWxhYmVsXCIgdGl0bGU9XCJ7e3RpdGxlfX1cIiBwbGFjZW1lbnQ9XCJib3R0b21cIiBjbWFjcy10b29sdGlwPlxyXG4gICAgICAgICAgPHNwYW4gI25hbWUgKGtleWRvd24uZW50ZXIpPVwiaGFuZGxlRW50ZXIoJGV2ZW50LCB0aXRsZUNvbnRhaW5lciwgbmFtZSlcIiAoa2V5dXApPVwiaGFuZGxlRWRpdCgkZXZlbnQsIG5hbWUpXCJcclxuICAgICAgICAgICAgW2F0dHIuY29udGVudEVkaXRhYmxlXT1cImlzRWRpdGFibGVcIj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZmlsZXMtZm9sZGVyLWV4dHJhIGljb25zcGFuXCIgKm5nSWY9XCJleHRyYVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPGNtYWNzLWNhcmQtbG9hZGluZyAqbmdJZj1cImxvYWRpbmdcIj48L2NtYWNzLWNhcmQtbG9hZGluZz5cclxuPC9kaXY+XHJcblxyXG5cclxuPHVsIGNsYXNzPVwiYW50LWNhcmQtYWN0aW9uc1wiICpuZ0lmPVwiYWN0aW9ucy5sZW5ndGhcIj5cclxuICA8bGkgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBhY3Rpb25zXCIgW3N0eWxlLndpZHRoLiVdPVwiMTAwIC8gYWN0aW9ucy5sZW5ndGhcIj5cclxuICAgIDxzcGFuPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWN0aW9uXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2xpPlxyXG48L3VsPlxyXG4iXX0=