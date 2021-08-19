import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, Input, Optional, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { merge, Subject } from 'rxjs';
import { map, mergeMap, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { CmacsInputDirective } from './cmacs-input.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "./input-group-slot.component";
function CmacsInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r7.cmacsAddOnBeforeIcon)("template", ctx_r7.cmacsAddOnBefore);
} }
function CmacsInputGroupComponent_span_0_span_2_ng_template_1_Template(rf, ctx) { }
function CmacsInputGroupComponent_span_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtemplate(1, CmacsInputGroupComponent_span_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵclassProp("ant-input-affix-wrapper-sm", ctx_r8.isSmall)("ant-input-affix-wrapper-lg", ctx_r8.isLarge);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function CmacsInputGroupComponent_span_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r9.cmacsAddOnAfterIcon)("template", ctx_r9.cmacsAddOnAfter);
} }
function CmacsInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtemplate(1, CmacsInputGroupComponent_span_0_span_1_Template, 1, 2, "span", 5);
    i0.ɵɵtemplate(2, CmacsInputGroupComponent_span_0_span_2_Template, 2, 5, "span", 6);
    i0.ɵɵtemplate(3, CmacsInputGroupComponent_span_0_span_3_Template, 1, 2, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.cmacsAddOnBefore || ctx_r0.cmacsAddOnBeforeIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isAffix)("ngIfElse", _r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.cmacsAddOnAfter || ctx_r0.cmacsAddOnAfterIcon);
} }
function CmacsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) { }
function CmacsInputGroupComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function CmacsInputGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 10);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngIf", ctx_r2.isAffix)("ngIfElse", _r5);
} }
function CmacsInputGroupComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r13.cmacsPrefixIcon)("template", ctx_r13.cmacsPrefix);
} }
function CmacsInputGroupComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function CmacsInputGroupComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r15.cmacsSuffixIcon)("template", ctx_r15.cmacsSuffix);
} }
function CmacsInputGroupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_3_span_0_Template, 1, 2, "span", 11);
    i0.ɵɵtemplate(1, CmacsInputGroupComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵtemplate(2, CmacsInputGroupComponent_ng_template_3_span_2_Template, 1, 2, "span", 12);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsPrefix || ctx_r4.cmacsPrefixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsSuffix || ctx_r4.cmacsSuffixIcon);
} }
function CmacsInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
export class CmacsInputGroupComponent {
    constructor(focusMonitor, elementRef, cdr, directionality) {
        this.focusMonitor = focusMonitor;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.directionality = directionality;
        this.cmacsAddOnBeforeIcon = null;
        this.cmacsAddOnAfterIcon = null;
        this.cmacsPrefixIcon = null;
        this.cmacsSuffixIcon = null;
        this.cmacsSize = 'default';
        this.search = false;
        this.compact = false;
        this.isLarge = false;
        this.isSmall = false;
        this.isAffix = false;
        this.isAddOn = false;
        this.focused = false;
        this.disabled = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(item => (item.size = this.cmacsSize));
        }
    }
    ngOnInit() {
        var _a;
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            this.focused = !!focusOrigin;
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngAfterContentInit() {
        this.updateChildrenInputSize();
        const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(startWith(this.listOfNzInputDirective));
        listOfInputChange$
            .pipe(switchMap(list => {
            return merge(...[listOfInputChange$, ...list.map((input) => input.disabled$)]);
        }), mergeMap(() => listOfInputChange$), map(list => list.some((input) => input.disabled)), takeUntil(this.destroy$))
            .subscribe(disabled => {
            this.disabled = disabled;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { cmacsSize, cmacsSuffix, cmacsPrefix, cmacsPrefixIcon, cmacsSuffixIcon, cmacsAddOnAfter, cmacsAddOnBefore, cmacsAddOnAfterIcon, cmacsAddOnBeforeIcon } = changes;
        if (cmacsSize) {
            this.updateChildrenInputSize();
            this.isLarge = this.cmacsSize === 'large';
            this.isSmall = this.cmacsSize === 'small';
        }
        if (cmacsSuffix || cmacsPrefix || cmacsPrefixIcon || cmacsSuffixIcon) {
            this.isAffix = !!(this.cmacsSuffix || this.cmacsPrefix || this.cmacsPrefixIcon || this.cmacsSuffixIcon);
        }
        if (cmacsAddOnAfter || cmacsAddOnBefore || cmacsAddOnAfterIcon || cmacsAddOnBeforeIcon) {
            this.isAddOn = !!(this.cmacsAddOnAfter || this.cmacsAddOnBefore || this.cmacsAddOnAfterIcon || this.cmacsAddOnBeforeIcon);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsInputGroupComponent.ɵfac = function CmacsInputGroupComponent_Factory(t) { return new (t || CmacsInputGroupComponent)(i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
CmacsInputGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsInputGroupComponent, selectors: [["cmacs-input-group"]], contentQueries: function CmacsInputGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsInputDirective, 0);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
    } }, hostVars: 40, hostBindings: function CmacsInputGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-input-group-compact", ctx.compact)("ant-input-search-enter-button", ctx.search)("ant-input-search", ctx.search)("ant-input-search-rtl", ctx.dir === "rtl")("ant-input-search-sm", ctx.search && ctx.isSmall)("ant-input-search-large", ctx.search && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-rtl", ctx.dir === "rtl")("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-rtl", ctx.dir === "rtl")("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-rtl", ctx.dir === "rtl")("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
    } }, inputs: { cmacsAddOnBeforeIcon: "cmacsAddOnBeforeIcon", cmacsAddOnAfterIcon: "cmacsAddOnAfterIcon", cmacsPrefixIcon: "cmacsPrefixIcon", cmacsSuffixIcon: "cmacsSuffixIcon", cmacsAddOnBefore: "cmacsAddOnBefore", cmacsAddOnAfter: "cmacsAddOnAfter", cmacsPrefix: "cmacsPrefix", cmacsSuffix: "cmacsSuffix", cmacsSize: "cmacsSize", search: "search", compact: "compact" }, exportAs: ["cmacsInputGroup"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 7, vars: 2, consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf", "ngIfElse"], ["noAddOnTemplate", ""], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["cmacs-input-group-slot", "", "type", "addon", 3, "icon", "template", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", 4, "ngIf", "ngIfElse"], ["cmacs-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper"], [3, "ngTemplateOutlet"], [3, "ngIf", "ngIfElse"], ["cmacs-input-group-slot", "", "type", "prefix", 3, "icon", "template", 4, "ngIf"], ["cmacs-input-group-slot", "", "type", "suffix", 3, "icon", "template", 4, "ngIf"], ["cmacs-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["cmacs-input-group-slot", "", "type", "suffix", 3, "icon", "template"]], template: function CmacsInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsInputGroupComponent_span_0_Template, 4, 4, "span", 0);
        i0.ɵɵtemplate(1, CmacsInputGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, CmacsInputGroupComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, CmacsInputGroupComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.isAddOn)("ngIfElse", _r1);
    } }, directives: [i3.NgIf, i4.CmacsInputGroupSlotComponent, i3.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsInputGroupComponent.prototype, "search", void 0);
__decorate([
    InputBoolean()
], CmacsInputGroupComponent.prototype, "compact", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsInputGroupComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-input-group',
                exportAs: 'cmacsInputGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './cmacs-input-group.component.html',
                // tslint:disable-next-line: use-host-property-decorator
                host: {
                    '[class.ant-input-group-compact]': `compact`,
                    '[class.ant-input-search-enter-button]': `search`,
                    '[class.ant-input-search]': `search`,
                    '[class.ant-input-search-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-search-sm]': `search && isSmall`,
                    '[class.ant-input-search-large]': `search && isLarge`,
                    '[class.ant-input-group-wrapper]': `isAddOn`,
                    '[class.ant-input-group-wrapper-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-group-wrapper-lg]': `isAddOn && isLarge`,
                    '[class.ant-input-group-wrapper-sm]': `isAddOn && isSmall`,
                    '[class.ant-input-affix-wrapper]': `isAffix && !isAddOn`,
                    '[class.ant-input-affix-wrapper-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-affix-wrapper-focused]': `isAffix && focused`,
                    '[class.ant-input-affix-wrapper-disabled]': `isAffix && disabled`,
                    '[class.ant-input-affix-wrapper-lg]': `isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-affix-wrapper-sm]': `isAffix && !isAddOn && isSmall`,
                    '[class.ant-input-group]': `!isAffix && !isAddOn`,
                    '[class.ant-input-group-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-group-lg]': `!isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-group-sm]': `!isAffix && !isAddOn && isSmall`
                }
            }]
    }], function () { return [{ type: i1.FocusMonitor }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { listOfNzInputDirective: [{
            type: ContentChildren,
            args: [CmacsInputDirective]
        }], cmacsAddOnBeforeIcon: [{
            type: Input
        }], cmacsAddOnAfterIcon: [{
            type: Input
        }], cmacsPrefixIcon: [{
            type: Input
        }], cmacsSuffixIcon: [{
            type: Input
        }], cmacsAddOnBefore: [{
            type: Input
        }], cmacsAddOnAfter: [{
            type: Input
        }], cmacsPrefix: [{
            type: Input
        }], cmacsSuffix: [{
            type: Input
        }], cmacsSize: [{
            type: Input
        }], search: [{
            type: Input
        }], compact: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWlucHV0L2NtYWNzLWlucHV0LWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1pbnB1dC9jbWFjcy1pbnB1dC1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUdmLEtBQUssRUFJTCxRQUFRLEVBSVIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0lDdkI1RCwwQkFJMkM7OztJQURyQyxrREFBNkIscUNBQUE7Ozs7SUFFbkMsK0JBR21EO0lBQ2pELHVHQUE4RDtJQUNoRSxpQkFBTzs7OztJQUhELDREQUE0Qyw4Q0FBQTtJQUVuQyxlQUFrQztJQUFsQyxzQ0FBa0M7OztJQUVqRCwwQkFJMEM7OztJQURwQyxpREFBNEIsb0NBQUE7OztJQWZwQywrQkFBc0Y7SUFDcEYsa0ZBSTJDO0lBQzNDLGtGQUtPO0lBQ1Asa0ZBSTBDO0lBQzVDLGlCQUFPOzs7O0lBaEJFLGVBQThDO0lB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QWU7b0JBQy9DLDZCQUE2QixFQUFFLG1CQUFtQjtvQkFDbEQsZ0NBQWdDLEVBQUUsbUJBQW1CO29CQUNyRCxpQ0FBaUMsRUFBRSxTQUFTO29CQUM1QyxxQ0FBcUMsRUFBRSxlQUFlO29CQUN0RCxvQ0FBb0MsRUFBRSxvQkFBb0I7b0JBQzFELG9DQUFvQyxFQUFFLG9CQUFvQjtvQkFDMUQsaUNBQWlDLEVBQUUscUJBQXFCO29CQUN4RCxxQ0FBcUMsRUFBRSxlQUFlO29CQUN0RCx5Q0FBeUMsRUFBRSxvQkFBb0I7b0JBQy9ELDBDQUEwQyxFQUFFLHFCQUFxQjtvQkFDakUsb0NBQW9DLEVBQUUsZ0NBQWdDO29CQUN0RSxvQ0FBb0MsRUFBRSxnQ0FBZ0M7b0JBQ3RFLHlCQUF5QixFQUFFLHNCQUFzQjtvQkFDakQsNkJBQTZCLEVBQUUsZUFBZTtvQkFDOUMsNEJBQTRCLEVBQUUsaUNBQWlDO29CQUMvRCw0QkFBNEIsRUFBRSxpQ0FBaUM7aUJBQ2hFO2FBQ0Y7O3NCQTRCSSxRQUFRO3dCQXpCMkIsc0JBQXNCO2tCQUEzRCxlQUFlO21CQUFDLG1CQUFtQjtZQUMzQixvQkFBb0I7a0JBQTVCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDbUIsTUFBTTtrQkFBOUIsS0FBSztZQUNtQixPQUFPO2tCQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgbWVyZ2VNYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2NtYWNzLWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWlucHV0LWdyb3VwJyxcclxuICBleHBvcnRBczogJ2NtYWNzSW5wdXRHcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtaW5wdXQtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RdJzogYGNvbXBhY3RgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWVudGVyLWJ1dHRvbl0nOiBgc2VhcmNoYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaF0nOiBgc2VhcmNoYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLXNtXSc6IGBzZWFyY2ggJiYgaXNTbWFsbGAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtbGFyZ2VdJzogYHNlYXJjaCAmJiBpc0xhcmdlYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXJdJzogYGlzQWRkT25gLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlci1sZ10nOiBgaXNBZGRPbiAmJiBpc0xhcmdlYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItc21dJzogYGlzQWRkT24gJiYgaXNTbWFsbGAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyXSc6IGBpc0FmZml4ICYmICFpc0FkZE9uYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItZm9jdXNlZF0nOiBgaXNBZmZpeCAmJiBmb2N1c2VkYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItZGlzYWJsZWRdJzogYGlzQWZmaXggJiYgZGlzYWJsZWRgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1sZ10nOiBgaXNBZmZpeCAmJiAhaXNBZGRPbiAmJiBpc0xhcmdlYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItc21dJzogYGlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNTbWFsbGAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cF0nOiBgIWlzQWZmaXggJiYgIWlzQWRkT25gLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWxnXSc6IGAhaXNBZmZpeCAmJiAhaXNBZGRPbiAmJiBpc0xhcmdlYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXNtXSc6IGAhaXNBZmZpeCAmJiAhaXNBZGRPbiAmJiBpc1NtYWxsYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzSW5wdXRHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzSW5wdXREaXJlY3RpdmUpIGxpc3RPZk56SW5wdXREaXJlY3RpdmUhOiBRdWVyeUxpc3Q8Q21hY3NJbnB1dERpcmVjdGl2ZT47XHJcbiAgQElucHV0KCkgY21hY3NBZGRPbkJlZm9yZUljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBjbWFjc0FkZE9uQWZ0ZXJJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgY21hY3NQcmVmaXhJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgY21hY3NTdWZmaXhJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgY21hY3NBZGRPbkJlZm9yZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGNtYWNzQWRkT25BZnRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGNtYWNzUHJlZml4Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgY21hY3NTdWZmaXg/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBjbWFjc1NpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjb21wYWN0ID0gZmFsc2U7XHJcbiAgaXNMYXJnZSA9IGZhbHNlO1xyXG4gIGlzU21hbGwgPSBmYWxzZTtcclxuICBpc0FmZml4ID0gZmFsc2U7XHJcbiAgaXNBZGRPbiA9IGZhbHNlO1xyXG4gIGZvY3VzZWQgPSBmYWxzZTtcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XHJcbiAgKSB7IH1cclxuXHJcbiAgdXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubGlzdE9mTnpJbnB1dERpcmVjdGl2ZS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uc2l6ZSA9IHRoaXMuY21hY3NTaXplKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yXHJcbiAgICAgIC5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgICB0aGlzLmZvY3VzZWQgPSAhIWZvY3VzT3JpZ2luO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcclxuICAgIGNvbnN0IGxpc3RPZklucHV0Q2hhbmdlJCA9IHRoaXMubGlzdE9mTnpJbnB1dERpcmVjdGl2ZS5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKHRoaXMubGlzdE9mTnpJbnB1dERpcmVjdGl2ZSkpO1xyXG4gICAgbGlzdE9mSW5wdXRDaGFuZ2UkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN3aXRjaE1hcChsaXN0ID0+IHtcclxuICAgICAgICAgIHJldHVybiBtZXJnZSguLi5bbGlzdE9mSW5wdXRDaGFuZ2UkLCAuLi5saXN0Lm1hcCgoaW5wdXQ6IENtYWNzSW5wdXREaXJlY3RpdmUpID0+IGlucHV0LmRpc2FibGVkJCldKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBtZXJnZU1hcCgoKSA9PiBsaXN0T2ZJbnB1dENoYW5nZSQpLFxyXG4gICAgICAgIG1hcChsaXN0ID0+IGxpc3Quc29tZSgoaW5wdXQ6IENtYWNzSW5wdXREaXJlY3RpdmUpID0+IGlucHV0LmRpc2FibGVkKSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShkaXNhYmxlZCA9PiB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjbWFjc1NpemUsXHJcbiAgICAgIGNtYWNzU3VmZml4LFxyXG4gICAgICBjbWFjc1ByZWZpeCxcclxuICAgICAgY21hY3NQcmVmaXhJY29uLFxyXG4gICAgICBjbWFjc1N1ZmZpeEljb24sXHJcbiAgICAgIGNtYWNzQWRkT25BZnRlcixcclxuICAgICAgY21hY3NBZGRPbkJlZm9yZSxcclxuICAgICAgY21hY3NBZGRPbkFmdGVySWNvbixcclxuICAgICAgY21hY3NBZGRPbkJlZm9yZUljb25cclxuICAgIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKGNtYWNzU2l6ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk7XHJcbiAgICAgIHRoaXMuaXNMYXJnZSA9IHRoaXMuY21hY3NTaXplID09PSAnbGFyZ2UnO1xyXG4gICAgICB0aGlzLmlzU21hbGwgPSB0aGlzLmNtYWNzU2l6ZSA9PT0gJ3NtYWxsJztcclxuICAgIH1cclxuICAgIGlmIChjbWFjc1N1ZmZpeCB8fCBjbWFjc1ByZWZpeCB8fCBjbWFjc1ByZWZpeEljb24gfHwgY21hY3NTdWZmaXhJY29uKSB7XHJcbiAgICAgIHRoaXMuaXNBZmZpeCA9ICEhKHRoaXMuY21hY3NTdWZmaXggfHwgdGhpcy5jbWFjc1ByZWZpeCB8fCB0aGlzLmNtYWNzUHJlZml4SWNvbiB8fCB0aGlzLmNtYWNzU3VmZml4SWNvbik7XHJcbiAgICB9XHJcbiAgICBpZiAoY21hY3NBZGRPbkFmdGVyIHx8IGNtYWNzQWRkT25CZWZvcmUgfHwgY21hY3NBZGRPbkFmdGVySWNvbiB8fCBjbWFjc0FkZE9uQmVmb3JlSWNvbikge1xyXG4gICAgICB0aGlzLmlzQWRkT24gPSAhISh0aGlzLmNtYWNzQWRkT25BZnRlciB8fCB0aGlzLmNtYWNzQWRkT25CZWZvcmUgfHwgdGhpcy5jbWFjc0FkZE9uQWZ0ZXJJY29uIHx8IHRoaXMuY21hY3NBZGRPbkJlZm9yZUljb24pO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8c3BhbiBjbGFzcz1cImFudC1pbnB1dC13cmFwcGVyIGFudC1pbnB1dC1ncm91cFwiICpuZ0lmPVwiaXNBZGRPbjsgZWxzZSBub0FkZE9uVGVtcGxhdGVcIj5cclxuICA8c3BhbiAqbmdJZj1cImNtYWNzQWRkT25CZWZvcmUgfHwgY21hY3NBZGRPbkJlZm9yZUljb25cIlxyXG4gICAgICAgIGNtYWNzLWlucHV0LWdyb3VwLXNsb3RcclxuICAgICAgICB0eXBlPVwiYWRkb25cIlxyXG4gICAgICAgIFtpY29uXT1cImNtYWNzQWRkT25CZWZvcmVJY29uXCJcclxuICAgICAgICBbdGVtcGxhdGVdPVwiY21hY3NBZGRPbkJlZm9yZVwiPjwvc3Bhbj5cclxuICA8c3BhbiAqbmdJZj1cImlzQWZmaXg7IGVsc2UgY29udGVudFRlbXBsYXRlXCJcclxuICAgICAgICBjbGFzcz1cImFudC1pbnB1dC1hZmZpeC13cmFwcGVyXCJcclxuICAgICAgICBbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItc21dPVwiaXNTbWFsbFwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXT1cImlzTGFyZ2VcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhZmZpeFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L3NwYW4+XHJcbiAgPHNwYW4gKm5nSWY9XCJjbWFjc0FkZE9uQWZ0ZXIgfHwgY21hY3NBZGRPbkFmdGVySWNvblwiXHJcbiAgICAgICAgY21hY3MtaW5wdXQtZ3JvdXAtc2xvdFxyXG4gICAgICAgIHR5cGU9XCJhZGRvblwiXHJcbiAgICAgICAgW2ljb25dPVwiY21hY3NBZGRPbkFmdGVySWNvblwiXHJcbiAgICAgICAgW3RlbXBsYXRlXT1cImNtYWNzQWRkT25BZnRlclwiPjwvc3Bhbj5cclxuPC9zcGFuPlxyXG48bmctdGVtcGxhdGUgI25vQWRkT25UZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgW25nSWZdPVwiaXNBZmZpeFwiIFtuZ0lmRWxzZV09XCJjb250ZW50VGVtcGxhdGVcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhZmZpeFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI2FmZml4VGVtcGxhdGU+XHJcbiAgPHNwYW4gKm5nSWY9XCJjbWFjc1ByZWZpeCB8fCBjbWFjc1ByZWZpeEljb25cIiBjbWFjcy1pbnB1dC1ncm91cC1zbG90IHR5cGU9XCJwcmVmaXhcIiBbaWNvbl09XCJjbWFjc1ByZWZpeEljb25cIiBbdGVtcGxhdGVdPVwiY21hY3NQcmVmaXhcIj48L3NwYW4+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPHNwYW4gKm5nSWY9XCJjbWFjc1N1ZmZpeCB8fCBjbWFjc1N1ZmZpeEljb25cIiBjbWFjcy1pbnB1dC1ncm91cC1zbG90IHR5cGU9XCJzdWZmaXhcIiBbaWNvbl09XCJjbWFjc1N1ZmZpeEljb25cIiBbdGVtcGxhdGVdPVwiY21hY3NTdWZmaXhcIj48L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19