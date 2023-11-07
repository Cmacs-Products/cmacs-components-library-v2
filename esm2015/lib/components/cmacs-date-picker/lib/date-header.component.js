/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractPanelHeader } from './abstract-panel-header';
import { transCompatFormat } from './util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
function DateHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 9);
    i0.ɵɵlistener("click", function DateHeaderComponent_ng_container_6_Template_button_click_1_listener() { const selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(selector_r1.className);
    i0.ɵɵpropertyInterpolate("aria-label", selector_r1.label);
    i0.ɵɵpropertyInterpolate("title", selector_r1.title || null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", selector_r1.label, " ");
} }
export class DateHeaderComponent extends AbstractPanelHeader {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-month-btn`,
                title: this.locale.monthSelect,
                onClick: () => this.changeMode('month'),
                label: this.dateHelper.format(this.value.nativeDate, this.locale.monthFormat || 'MMM')
            },
            {
                className: `${this.prefixCls}-year-btn`,
                title: this.locale.yearSelect,
                onClick: () => this.changeMode('year'),
                label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
            }
        ];
    }
}
DateHeaderComponent.ɵfac = function DateHeaderComponent_Factory(t) { return new (t || DateHeaderComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); };
DateHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateHeaderComponent, selectors: [["date-header"]], exportAs: ["dateHeader"], features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["aria-label", "rewind", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], ["aria-label", "previous", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], ["aria-label", "next", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-next-icon"], ["aria-label", "fast forward", "role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "aria-label", "title", "click"]], template: function DateHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        i0.ɵɵelement(2, "span", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        i0.ɵɵelement(4, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵtemplate(6, DateHeaderComponent_ng_container_6_Template, 3, 6, "ng-container", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 5);
        i0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        i0.ɵɵelement(8, "span", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 7);
        i0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        i0.ɵɵelement(10, "span", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.prefixCls);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
        i0.ɵɵstyleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        i0.ɵɵpropertyInterpolate("title", ctx.superPreviousTitle());
        i0.ɵɵadvance(2);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-btn");
        i0.ɵɵstyleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
        i0.ɵɵpropertyInterpolate("title", ctx.previousTitle());
        i0.ɵɵadvance(2);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-view");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.selectors);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-btn");
        i0.ɵɵstyleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
        i0.ɵɵpropertyInterpolate("title", ctx.nextTitle());
        i0.ɵɵadvance(2);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
        i0.ɵɵstyleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        i0.ɵɵpropertyInterpolate("title", ctx.superNextTitle());
    } }, directives: [i2.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'date-header',
                exportAs: 'dateHeader',
                templateUrl: './abstract-panel-header.html'
            }]
    }], function () { return [{ type: i1.DateHelperService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9kYXRlLWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2Fic3RyYWN0LXBhbmVsLWhlYWRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztJQ2F2Qyw2QkFBaUQ7SUFDL0MsaUNBTUM7SUFEQyxrSkFBUyxxQkFBa0IsSUFBQztJQUU1QixZQUNGO0lBQUEsaUJBQVM7SUFDWCwwQkFBZTs7O0lBUlgsZUFBZ0M7SUFBaEMsb0NBQWdDO0lBRDFCLHlEQUFpQztJQUl2Qyw0REFBb0M7SUFHcEMsZUFDRjtJQURFLGtEQUNGOztBRGJOLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxtQkFBbUI7SUFDMUQsWUFBb0IsVUFBNkI7UUFDL0MsS0FBSyxFQUFFLENBQUM7UUFEVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUVqRCxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU87WUFDTDtnQkFDRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxZQUFZO2dCQUN4QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO2dCQUM5QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7YUFDdkY7WUFDRDtnQkFDRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXO2dCQUN2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO2dCQUM3QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3RDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2hHO1NBRUYsQ0FBQztJQUNKLENBQUM7O3NGQXJCVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQ25CaEMsMkJBQTZCO1FBQzNCLGlDQU9DO1FBREMsZ0dBQVMsbUJBQWUsSUFBQztRQUV6QiwwQkFBZ0Q7UUFDbEQsaUJBQVM7UUFDVCxpQ0FPQztRQURDLGdHQUFTLGNBQVUsSUFBQztRQUVwQiwwQkFBMEM7UUFDNUMsaUJBQVM7UUFFVCwyQkFBa0M7UUFDaEMsc0ZBVWU7UUFDakIsaUJBQU07UUFDTixpQ0FPQztRQURDLGdHQUFTLFVBQU0sSUFBQztRQUVoQiwwQkFBMEM7UUFDNUMsaUJBQVM7UUFDVCxpQ0FPQztRQURDLGdHQUFTLGVBQVcsSUFBQztRQUVyQiwyQkFBZ0Q7UUFDbEQsaUJBQVM7UUFDWCxpQkFBTTs7UUF2REQsNEJBQXVCO1FBR3hCLGVBQXNDO1FBQXRDLCtEQUFzQztRQUR0Qyx3RUFBMkQ7UUFJM0QsMkRBQWtDO1FBT2xDLGVBQWdDO1FBQWhDLHlEQUFnQztRQURoQyxtRUFBc0Q7UUFHdEQsc0RBQTZCO1FBTzFCLGVBQTRCO1FBQTVCLHFEQUE0QjtRQUNJLGVBQVk7UUFBWix1Q0FBWTtRQWMvQyxlQUFnQztRQUFoQyx5REFBZ0M7UUFEaEMsb0VBQXVEO1FBSXZELGtEQUF5QjtRQU96QixlQUFzQztRQUF0QywrREFBc0M7UUFEdEMseUVBQTREO1FBSTVELHVEQUE4Qjs7dUZEL0JyQixtQkFBbUI7Y0FQL0IsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsOEJBQThCO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IEFic3RyYWN0UGFuZWxIZWFkZXIgfSBmcm9tICcuL2Fic3RyYWN0LXBhbmVsLWhlYWRlcic7XHJcbmltcG9ydCB7IFBhbmVsU2VsZWN0b3IgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IHRyYW5zQ29tcGF0Rm9ybWF0IH0gZnJvbSAnLi91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICdkYXRlLWhlYWRlcicsIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgZXhwb3J0QXM6ICdkYXRlSGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWJzdHJhY3QtcGFuZWwtaGVhZGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQYW5lbEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdG9ycygpOiBQYW5lbFNlbGVjdG9yW10ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLWJ0bmAsXHJcbiAgICAgICAgdGl0bGU6IHRoaXMubG9jYWxlLm1vbnRoU2VsZWN0LFxyXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hhbmdlTW9kZSgnbW9udGgnKSxcclxuICAgICAgICBsYWJlbDogdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh0aGlzLnZhbHVlLm5hdGl2ZURhdGUsIHRoaXMubG9jYWxlLm1vbnRoRm9ybWF0IHx8ICdNTU0nKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30teWVhci1idG5gLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS55ZWFyU2VsZWN0LFxyXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hhbmdlTW9kZSgneWVhcicpLFxyXG4gICAgICAgIGxhYmVsOiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHRoaXMudmFsdWUubmF0aXZlRGF0ZSwgdHJhbnNDb21wYXRGb3JtYXQodGhpcy5sb2NhbGUueWVhckZvcm1hdCkpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19XCI+XHJcbiAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwicmV3aW5kXCJcclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dTdXBlclByZUJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXN1cGVyLXByZXYtYnRuXCJcclxuICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICB0aXRsZT1cInt7IHN1cGVyUHJldmlvdXNUaXRsZSgpIH19XCJcclxuICAgIChjbGljayk9XCJzdXBlclByZXZpb3VzKClcIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1zdXBlci1wcmV2LWljb25cIj48L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwicHJldmlvdXNcIlxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd1ByZUJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXByZXYtYnRuXCJcclxuICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgdGl0bGU9XCJ7eyBwcmV2aW91c1RpdGxlKCkgfX1cIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAoY2xpY2spPVwicHJldmlvdXMoKVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXByZXYtaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS12aWV3XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWxlY3RvciBvZiBzZWxlY3RvcnNcIj5cclxuICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwie3sgc2VsZWN0b3IubGFiZWwgfX1cIlxyXG4gICAgICAgIGNsYXNzPVwie3sgc2VsZWN0b3IuY2xhc3NOYW1lIH19XCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICB0aXRsZT1cInt7IHNlbGVjdG9yLnRpdGxlIHx8IG51bGwgfX1cIlxyXG4gICAgICAgIChjbGljayk9XCJzZWxlY3Rvci5vbkNsaWNrKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgc2VsZWN0b3IubGFiZWwgfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJuZXh0XCJcclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cInNob3dOZXh0QnRuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxyXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tbmV4dC1idG5cIlxyXG4gICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgIHRpdGxlPVwie3sgbmV4dFRpdGxlKCkgfX1cIlxyXG4gICAgKGNsaWNrKT1cIm5leHQoKVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLW5leHQtaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJmYXN0IGZvcndhcmRcIlxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwic2hvd1N1cGVyTmV4dEJ0biA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXN1cGVyLW5leHQtYnRuXCJcclxuICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICB0aXRsZT1cInt7IHN1cGVyTmV4dFRpdGxlKCkgfX1cIlxyXG4gICAgKGNsaWNrKT1cInN1cGVyTmV4dCgpXCJcclxuICA+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1waWNrZXItc3VwZXItbmV4dC1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19