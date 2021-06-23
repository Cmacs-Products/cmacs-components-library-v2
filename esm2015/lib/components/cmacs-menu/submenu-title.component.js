import { ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
const _c0 = ["cmacs-submenu-title", ""];
function NzSubMenuTitleComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r0.icon);
} }
function NzSubMenuTitleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.title);
} }
function NzSubMenuTitleComponent_span_3_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} }
function NzSubMenuTitleComponent_span_3_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} }
function NzSubMenuTitleComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtemplate(1, NzSubMenuTitleComponent_span_3_i_1_Template, 1, 0, "i", 6);
    i0.ɵɵtemplate(2, NzSubMenuTitleComponent_span_3_i_2_Template, 1, 0, "i", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r2.dir);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "rtl");
} }
function NzSubMenuTitleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} }
const _c1 = ["*"];
export class NzSubMenuTitleComponent {
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.icon = null;
        this.title = null;
        this.isMenuInsideDropDown = false;
        this.disabled = false;
        this.paddingLeft = null;
        this.mode = 'vertical';
        this.toggleSubMenu = new EventEmitter();
        this.subMenuMouseState = new EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setMouseState(state) {
        if (!this.disabled) {
            this.subMenuMouseState.next(state);
        }
    }
    clickTitle() {
        if (this.mode === 'inline' && !this.disabled) {
            this.toggleSubMenu.emit();
        }
    }
}
NzSubMenuTitleComponent.ɵfac = function NzSubMenuTitleComponent_Factory(t) { return new (t || NzSubMenuTitleComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); };
NzSubMenuTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSubMenuTitleComponent, selectors: [["", "cmacs-submenu-title", ""]], hostVars: 8, hostBindings: function NzSubMenuTitleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NzSubMenuTitleComponent_click_HostBindingHandler() { return ctx.clickTitle(); })("mouseenter", function NzSubMenuTitleComponent_mouseenter_HostBindingHandler() { return ctx.setMouseState(true); })("mouseleave", function NzSubMenuTitleComponent_mouseleave_HostBindingHandler() { return ctx.setMouseState(false); });
    } if (rf & 2) {
        i0.ɵɵstyleProp("padding-left", ctx.dir === "rtl" ? null : ctx.paddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.paddingLeft : null, "px");
        i0.ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.isMenuInsideDropDown)("ant-menu-submenu-title", !ctx.isMenuInsideDropDown);
    } }, inputs: { icon: "icon", title: "title", isMenuInsideDropDown: "isMenuInsideDropDown", disabled: "disabled", paddingLeft: "paddingLeft", mode: "mode" }, outputs: { toggleSubMenu: "toggleSubMenu", subMenuMouseState: "subMenuMouseState" }, exportAs: ["cmacsSubmenuTitle"], attrs: _c0, ngContentSelectors: _c1, decls: 6, vars: 4, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-dropdown-menu-submenu-expand-icon", 3, "ngSwitch", 4, "ngIf", "ngIfElse"], ["notDropdownTpl", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-dropdown-menu-submenu-expand-icon", 3, "ngSwitch"], ["class", "ant-dropdown-menu-submenu-arrow-icon iconArrowSmall-Solid-Left", 4, "ngSwitchCase"], ["class", "ant-dropdown-menu-submenu-arrow-icon iconArrowSmall-Solid-Right", 4, "ngSwitchDefault"], [1, "ant-dropdown-menu-submenu-arrow-icon", "iconArrowSmall-Solid-Left"], [1, "ant-dropdown-menu-submenu-arrow-icon", "iconArrowSmall-Solid-Right"], [1, "ant-menu-submenu-arrow"]], template: function NzSubMenuTitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzSubMenuTitleComponent_i_0_Template, 1, 1, "i", 0);
        i0.ɵɵtemplate(1, NzSubMenuTitleComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵtemplate(3, NzSubMenuTitleComponent_span_3_Template, 3, 2, "span", 2);
        i0.ɵɵtemplate(4, NzSubMenuTitleComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(5);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isMenuInsideDropDown)("ngIfElse", _r3);
    } }, directives: [i2.NgIf, i3.NzStringTemplateOutletDirective, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzSubMenuTitleComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-submenu-title]',
                exportAs: 'cmacsSubmenuTitle',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="title">
      <span>{{ title }}</span>
    </ng-container>
    <ng-content></ng-content>
    <span [ngSwitch]="dir" *ngIf="isMenuInsideDropDown; else notDropdownTpl" class="ant-dropdown-menu-submenu-expand-icon">
      <i *ngSwitchCase="'rtl'" class="ant-dropdown-menu-submenu-arrow-icon iconArrowSmall-Solid-Left"></i>
      <i *ngSwitchDefault class="ant-dropdown-menu-submenu-arrow-icon iconArrowSmall-Solid-Right"></i>
    </span>
    <ng-template #notDropdownTpl>
      <i class="ant-menu-submenu-arrow"></i>
    </ng-template>
  `,
                host: {
                    '[class.ant-dropdown-menu-submenu-title]': 'isMenuInsideDropDown',
                    '[class.ant-menu-submenu-title]': '!isMenuInsideDropDown',
                    '[style.paddingLeft.px]': `dir === 'rtl' ? null : paddingLeft `,
                    '[style.paddingRight.px]': `dir === 'rtl' ? paddingLeft : null`,
                    '(click)': 'clickTitle()',
                    '(mouseenter)': 'setMouseState(true)',
                    '(mouseleave)': 'setMouseState(false)'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { icon: [{
            type: Input
        }], title: [{
            type: Input
        }], isMenuInsideDropDown: [{
            type: Input
        }], disabled: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], mode: [{
            type: Input
        }], toggleSubMenu: [{
            type: Output
        }], subMenuMouseState: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9zdWJtZW51LXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUFTdkMsdUJBQTRDOzs7SUFBakMsb0NBQWU7OztJQUMxQiw2QkFBOEM7SUFDNUMsNEJBQU07SUFBQSxZQUFXO0lBQUEsaUJBQU87SUFDMUIsMEJBQWU7OztJQURQLGVBQVc7SUFBWCxrQ0FBVzs7O0lBSWpCLHVCQUFvRzs7O0lBQ3BHLHVCQUFnRzs7O0lBRmxHLCtCQUF1SDtJQUNySCwyRUFBb0c7SUFDcEcsMkVBQWdHO0lBQ2xHLGlCQUFPOzs7SUFIRCxxQ0FBZ0I7SUFDaEIsZUFBbUI7SUFBbkIsb0NBQW1COzs7SUFJdkIsd0JBQXNDOzs7QUFhNUMsTUFBTSxPQUFPLHVCQUF1QjtJQWFsQyxZQUFvQixHQUFzQixFQUFzQixjQUE4QjtRQUExRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFackYsU0FBSSxHQUFrQixJQUFJLENBQUM7UUFDM0IsVUFBSyxHQUFzQyxJQUFJLENBQUM7UUFDaEQseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO1FBQ2xDLFNBQUksR0FBc0IsVUFBVSxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRW5FLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUUwRCxDQUFDO0lBQ2xHLFFBQVE7O1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNyQyxNQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUU7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFDRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7OzhGQXBDVSx1QkFBdUI7NERBQXZCLHVCQUF1QjtvR0FBdkIsZ0JBQVksNkZBQVosa0JBQWMsSUFBSSxDQUFDLDZGQUFuQixrQkFBYyxLQUFLLENBQUM7Ozs7OztRQXZCN0Isb0VBQTRDO1FBQzVDLDBGQUVlO1FBQ2Ysa0JBQXlCO1FBQ3pCLDBFQUdPO1FBQ1AseUhBRWM7OztRQVhjLCtCQUFVO1FBQ3ZCLGVBQTZCO1FBQTdCLGtEQUE2QjtRQUlwQixlQUE0QjtRQUE1QiwrQ0FBNEIsaUJBQUE7O3VGQWtCM0MsdUJBQXVCO2NBN0JuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7R0FhVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0oseUNBQXlDLEVBQUUsc0JBQXNCO29CQUNqRSxnQ0FBZ0MsRUFBRSx1QkFBdUI7b0JBQ3pELHdCQUF3QixFQUFFLHFDQUFxQztvQkFDL0QseUJBQXlCLEVBQUUsb0NBQW9DO29CQUMvRCxTQUFTLEVBQUUsY0FBYztvQkFDekIsY0FBYyxFQUFFLHFCQUFxQjtvQkFDckMsY0FBYyxFQUFFLHNCQUFzQjtpQkFDdkM7YUFDRjs7c0JBYzhDLFFBQVE7d0JBWjVDLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ2EsYUFBYTtrQkFBL0IsTUFBTTtZQUNZLGlCQUFpQjtrQkFBbkMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtYWNzTWVudU1vZGVUeXBlIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2NtYWNzLXN1Ym1lbnUtdGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdjbWFjc1N1Ym1lbnVUaXRsZScsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uXCIgKm5nSWY9XCJpY29uXCI+PC9pPlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPlxuICAgICAgPHNwYW4+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxzcGFuIFtuZ1N3aXRjaF09XCJkaXJcIiAqbmdJZj1cImlzTWVudUluc2lkZURyb3BEb3duOyBlbHNlIG5vdERyb3Bkb3duVHBsXCIgY2xhc3M9XCJhbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWV4cGFuZC1pY29uXCI+XG4gICAgICA8aSAqbmdTd2l0Y2hDYXNlPVwiJ3J0bCdcIiBjbGFzcz1cImFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3ctaWNvbiBpY29uQXJyb3dTbWFsbC1Tb2xpZC1MZWZ0XCI+PC9pPlxuICAgICAgPGkgKm5nU3dpdGNoRGVmYXVsdCBjbGFzcz1cImFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3ctaWNvbiBpY29uQXJyb3dTbWFsbC1Tb2xpZC1SaWdodFwiPjwvaT5cbiAgICA8L3NwYW4+XG4gICAgPG5nLXRlbXBsYXRlICNub3REcm9wZG93blRwbD5cbiAgICAgIDxpIGNsYXNzPVwiYW50LW1lbnUtc3VibWVudS1hcnJvd1wiPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlXSc6ICdpc01lbnVJbnNpZGVEcm9wRG93bicsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXRpdGxlXSc6ICchaXNNZW51SW5zaWRlRHJvcERvd24nLFxuICAgICdbc3R5bGUucGFkZGluZ0xlZnQucHhdJzogYGRpciA9PT0gJ3J0bCcgPyBudWxsIDogcGFkZGluZ0xlZnQgYCxcbiAgICAnW3N0eWxlLnBhZGRpbmdSaWdodC5weF0nOiBgZGlyID09PSAncnRsJyA/IHBhZGRpbmdMZWZ0IDogbnVsbGAsXG4gICAgJyhjbGljayknOiAnY2xpY2tUaXRsZSgpJyxcbiAgICAnKG1vdXNlZW50ZXIpJzogJ3NldE1vdXNlU3RhdGUodHJ1ZSknLFxuICAgICcobW91c2VsZWF2ZSknOiAnc2V0TW91c2VTdGF0ZShmYWxzZSknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTdWJNZW51VGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgaXNNZW51SW5zaWRlRHJvcERvd24gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcGFkZGluZ0xlZnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtb2RlOiBDbWFjc01lbnVNb2RlVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIEBPdXRwdXQoKSByZWFkb25seSB0b2dnbGVTdWJNZW51ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3ViTWVudU1vdXNlU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBzZXRNb3VzZVN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnN1Yk1lbnVNb3VzZVN0YXRlLm5leHQoc3RhdGUpO1xuICAgIH1cbiAgfVxuICBjbGlja1RpdGxlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdpbmxpbmUnICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZVN1Yk1lbnUuZW1pdCgpO1xuICAgIH1cbiAgfVxufVxuIl19