import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ZoomAnimations } from '../../models/zoom/animations/zoom-animations';
import { ZoomVisibilityAnimator } from '../../models/zoom/animations/zoom-visibility-animator';
import * as i0 from "@angular/core";
import * as i1 from "../../services/lightbox-configuration.service";
import * as i2 from "@angular/common";
import * as i3 from "../lightbox-button/lightbox-button.component";
function LightboxZoomComponent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("tap", function LightboxZoomComponent_div_0_button_1_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.onZoomOut()); });
    i0.ɵɵelement(1, "span", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r1.disableZoomOut);
} }
function LightboxZoomComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("tap", function LightboxZoomComponent_div_0_button_2_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.onResetZoom()); });
    i0.ɵɵelementStart(1, "span", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r2.disableResetZoom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.config.controls.zoomOut.icon);
} }
function LightboxZoomComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("tap", function LightboxZoomComponent_div_0_button_3_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onFeetToWidth()); });
    i0.ɵɵelementStart(1, "span", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r3.disableFeetToWidth);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.config.controls.zoomIn.icon);
} }
function LightboxZoomComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("tap", function LightboxZoomComponent_div_0_button_4_Template_button_tap_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onZoomIn()); });
    i0.ɵɵelement(1, "span", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disable", ctx_r4.disableZoomIn);
} }
function LightboxZoomComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LightboxZoomComponent_div_0_button_1_Template, 2, 1, "button", 1);
    i0.ɵɵtemplate(2, LightboxZoomComponent_div_0_button_2_Template, 3, 2, "button", 2);
    i0.ɵɵtemplate(3, LightboxZoomComponent_div_0_button_3_Template, 3, 2, "button", 3);
    i0.ɵɵtemplate(4, LightboxZoomComponent_div_0_button_4_Template, 2, 1, "button", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.config.controls.zoomOut.disable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.config.controls.resetZoom.disable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.config.controls.feetToWidth.disable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.config.controls.zoomIn.disable);
} }
export class LightboxZoomComponent {
    get config() {
        return this._lightboxConfigurationService;
    }
    constructor(_lightboxConfigurationService) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this.zoomInEvent = new EventEmitter();
        this.zoomOutEvent = new EventEmitter();
        this.resetZoomEvent = new EventEmitter();
        this.feetToWidthEvent = new EventEmitter();
        this._state = 'closed';
    }
    ngOnInit() {
        this.zoomVisibilityAnimator = new ZoomVisibilityAnimator();
    }
    close() {
        if (!this.config.controls.zoom.disable && this._state !== 'closed') {
            this._state = 'closed';
            this.zoomVisibilityAnimator.hide(this.config.animations.toolbarHide.duration);
        }
    }
    open() {
        if (!this.config.controls.zoom.disable && this._state !== 'opened') {
            this._state = 'opened';
            this.zoomVisibilityAnimator.show(this.config.animations.zoomShow.duration);
        }
    }
    toggle() {
        if (!this.config.controls.zoom.disable) {
            if (this._state === 'opened') {
                this.close();
            }
            else {
                this.open();
            }
        }
    }
    onZoomIn() {
        if (!this.disableZoomIn) {
            this.zoomInEvent.emit();
        }
    }
    onZoomOut() {
        if (!this.disableZoomOut) {
            this.zoomOutEvent.emit();
        }
    }
    onResetZoom() {
        if (!this.disableResetZoom) {
            this.resetZoomEvent.emit();
        }
    }
    onFeetToWidth() {
        if (!this.disableFeetToWidth) {
            this.feetToWidthEvent.emit();
        }
    }
    static { this.ɵfac = function LightboxZoomComponent_Factory(t) { return new (t || LightboxZoomComponent)(i0.ɵɵdirectiveInject(i1.LightboxConfigurationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LightboxZoomComponent, selectors: [["lightbox-zoom"]], hostVars: 1, hostBindings: function LightboxZoomComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵsyntheticHostListener("@zoomVisibility.start", function LightboxZoomComponent_animation_zoomVisibility_start_HostBindingHandler($event) { return ctx.zoomVisibilityAnimator.animationStart($event); })("@zoomVisibility.done", function LightboxZoomComponent_animation_zoomVisibility_done_HostBindingHandler($event) { return ctx.zoomVisibilityAnimator.animationDone($event); });
        } if (rf & 2) {
            i0.ɵɵsyntheticHostProperty("@zoomVisibility", ctx.zoomVisibilityAnimator.animation);
        } }, inputs: { disableZoomIn: "disableZoomIn", disableZoomOut: "disableZoomOut", disableResetZoom: "disableResetZoom", disableFeetToWidth: "disableFeetToWidth" }, outputs: { zoomInEvent: "zoomInEvent", zoomOutEvent: "zoomOutEvent", resetZoomEvent: "resetZoomEvent", feetToWidthEvent: "feetToWidthEvent" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom out", "aria-label", "Zoom out", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Reset zoom", "aria-label", "Reset zoom", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Feet to width", "aria-label", "Feet to width", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom in", "aria-label", "Zoom in", 3, "disable", "tap", 4, "ngIf"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom out", "aria-label", "Zoom out", 3, "disable", "tap"], [1, "material-icons", "iconUILarge-Zoom-out"], ["role", "button", "lightbox-icon-button", "", "title", "Reset zoom", "aria-label", "Reset zoom", 3, "disable", "tap"], [1, "material-icons"], ["role", "button", "lightbox-icon-button", "", "title", "Feet to width", "aria-label", "Feet to width", 3, "disable", "tap"], ["role", "button", "lightbox-icon-button", "", "title", "Zoom in", "aria-label", "Zoom in", 3, "disable", "tap"], [1, "material-icons", "iconUILarge-Zoom-in"]], template: function LightboxZoomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LightboxZoomComponent_div_0_Template, 5, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.config.controls.zoom.disable);
        } }, dependencies: [i2.NgIf, i3.LightboxButtonComponent], styles: ["[_nghost-%COMP%]{color:#fff;height:64px;display:flex;align-items:center;align-content:center;justify-content:center;position:absolute;width:100%;z-index:2;pointer-events:none;overflow:hidden;bottom:12px}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{background-color:#0d1e3b;pointer-events:auto;padding:5px;height:35px;width:auto;border-radius:3px;display:flex}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{background-color:#0d1e3b;margin:0 6px}.lightbox-icon-button[_ngcontent-%COMP%]:not(.disable):hover   .material-icons[_ngcontent-%COMP%]{color:#fff}"], data: { animation: [ZoomAnimations.visibilityAnimation] } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxZoomComponent, [{
        type: Component,
        args: [{ selector: 'lightbox-zoom', animations: [ZoomAnimations.visibilityAnimation], host: {
                    '[@zoomVisibility]': 'zoomVisibilityAnimator.animation',
                    '(@zoomVisibility.start)': 'zoomVisibilityAnimator.animationStart($event)',
                    '(@zoomVisibility.done)': 'zoomVisibilityAnimator.animationDone($event)'
                }, template: "<div *ngIf=\"!config.controls.zoom.disable\">\r\n    <button role=\"button\" *ngIf=\"!config.controls.zoomOut.disable\" [disable]=\"disableZoomOut\" lightbox-icon-button (tap)=\"onZoomOut()\" title=\"Zoom out\" aria-label=\"Zoom out\">\r\n      <span class=\"material-icons iconUILarge-Zoom-out\"><!--{{config.controls.resetZoom.icon}}--></span>\r\n    </button>\r\n    <button role=\"button\" *ngIf=\"!config.controls.resetZoom.disable\" [disable]=\"disableResetZoom\" lightbox-icon-button (tap)=\"onResetZoom()\" title=\"Reset zoom\" aria-label=\"Reset zoom\">\r\n      <span class=\"material-icons\">{{config.controls.zoomOut.icon}}</span>\r\n    </button>\r\n    <button role=\"button\" *ngIf=\"!config.controls.feetToWidth.disable\" [disable]=\"disableFeetToWidth\" lightbox-icon-button (tap)=\"onFeetToWidth()\" title=\"Feet to width\" aria-label=\"Feet to width\">\r\n      <span class=\"material-icons\">{{config.controls.zoomIn.icon}}</span>\r\n    </button>\r\n    <button role=\"button\" *ngIf=\"!config.controls.zoomIn.disable\" [disable]=\"disableZoomIn\" lightbox-icon-button (tap)=\"onZoomIn()\" title=\"Zoom in\" aria-label=\"Zoom in\">\r\n      <span class=\"material-icons iconUILarge-Zoom-in\"><!--{{config.controls.feetToWidth.icon}}--></span>\r\n    </button>\r\n</div>\r\n\r\n", styles: [":host{color:#fff;height:64px;display:flex;align-items:center;align-content:center;justify-content:center;position:absolute;width:100%;z-index:2;pointer-events:none;overflow:hidden;bottom:12px}:host>div{background-color:#0d1e3b;pointer-events:auto;padding:5px;height:35px;width:auto;border-radius:3px;display:flex}:host button{background-color:#0d1e3b;margin:0 6px}.lightbox-icon-button:not(.disable):hover .material-icons{color:#fff}\n"] }]
    }], function () { return [{ type: i1.LightboxConfigurationService }]; }, { zoomInEvent: [{
            type: Output
        }], zoomOutEvent: [{
            type: Output
        }], resetZoomEvent: [{
            type: Output
        }], feetToWidthEvent: [{
            type: Output
        }], disableZoomIn: [{
            type: Input
        }], disableZoomOut: [{
            type: Input
        }], disableResetZoom: [{
            type: Input
        }], disableFeetToWidth: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvY29tcG9uZW50cy9saWdodGJveC16b29tL2xpZ2h0Ym94LXpvb20uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtem9vbS9saWdodGJveC16b29tLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDOzs7Ozs7O0lDSDNGLGlDQUEwSztJQUEzRCx3S0FBTyxlQUFBLGtCQUFXLENBQUEsSUFBQztJQUNoSSwwQkFBa0c7SUFDcEcsaUJBQVM7OztJQUZzRCwrQ0FBMEI7Ozs7SUFHekYsaUNBQW9MO0lBQWpFLHdLQUFPLGVBQUEsb0JBQWEsQ0FBQSxJQUFDO0lBQ3RJLCtCQUE2QjtJQUFBLFlBQWdDO0lBQUEsaUJBQU8sRUFBQTs7O0lBREwsaURBQTRCO0lBQzlELGVBQWdDO0lBQWhDLHlEQUFnQzs7OztJQUUvRCxpQ0FBZ007SUFBekUseUtBQU8sZUFBQSxzQkFBZSxDQUFBLElBQUM7SUFDNUksK0JBQTZCO0lBQUEsWUFBK0I7SUFBQSxpQkFBTyxFQUFBOzs7SUFERixtREFBOEI7SUFDbEUsZUFBK0I7SUFBL0Isd0RBQStCOzs7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QkFBcUI7a0tBQXJCLGlEQUVYLDhIQUZXLGdEQUVaOzs7O1lDbkJELHNFQWFNOztZQWJBLHdEQUFtQzt1b0JEVXpCLENBQUUsY0FBYyxDQUFDLG1CQUFtQixDQUFFOzt1RkFPekMscUJBQXFCO2NBWGpDLFNBQVM7MkJBQ0ksZUFBZSxjQUdiLENBQUUsY0FBYyxDQUFDLG1CQUFtQixDQUFFLFFBQzVDO29CQUNGLG1CQUFtQixFQUFFLGtDQUFrQztvQkFDdkQseUJBQXlCLEVBQUUsK0NBQStDO29CQUMxRSx3QkFBd0IsRUFBRSw4Q0FBOEM7aUJBQzNFOytFQUlnQixXQUFXO2tCQUEzQixNQUFNO1lBRVUsWUFBWTtrQkFBNUIsTUFBTTtZQUVVLGNBQWM7a0JBQTlCLE1BQU07WUFFVSxnQkFBZ0I7a0JBQWhDLE1BQU07WUFFUyxhQUFhO2tCQUE1QixLQUFLO1lBRVUsY0FBYztrQkFBN0IsS0FBSztZQUVVLGdCQUFnQjtrQkFBL0IsS0FBSztZQUVVLGtCQUFrQjtrQkFBakMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpZ2h0Ym94LWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBab29tQW5pbWF0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy96b29tL2FuaW1hdGlvbnMvem9vbS1hbmltYXRpb25zJztcbmltcG9ydCB7IFpvb21WaXNpYmlsaXR5QW5pbWF0b3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvem9vbS9hbmltYXRpb25zL3pvb20tdmlzaWJpbGl0eS1hbmltYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGlnaHRib3gtem9vbScsXG4gICAgdGVtcGxhdGVVcmw6ICdsaWdodGJveC16b29tLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbGlnaHRib3gtem9vbS5jb21wb25lbnQuc2NzcyddLFxuICAgIGFuaW1hdGlvbnM6IFsgWm9vbUFuaW1hdGlvbnMudmlzaWJpbGl0eUFuaW1hdGlvbiBdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tAem9vbVZpc2liaWxpdHldJzogJ3pvb21WaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uJyxcbiAgICAgICAgJyhAem9vbVZpc2liaWxpdHkuc3RhcnQpJzogJ3pvb21WaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXG4gICAgICAgICcoQHpvb21WaXNpYmlsaXR5LmRvbmUpJzogJ3pvb21WaXNpYmlsaXR5QW5pbWF0b3IuYW5pbWF0aW9uRG9uZSgkZXZlbnQpJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgTGlnaHRib3hab29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgem9vbUluRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIHpvb21PdXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcmVzZXRab29tRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIGZlZXRUb1dpZHRoRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZVpvb21JbjogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlWm9vbU91dDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlUmVzZXRab29tOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVGZWV0VG9XaWR0aDogYm9vbGVhbjtcblxuICAgIHB1YmxpYyB6b29tVmlzaWJpbGl0eUFuaW1hdG9yOiBab29tVmlzaWJpbGl0eUFuaW1hdG9yO1xuXG4gICAgcHJpdmF0ZSBfc3RhdGU6ICdvcGVuZWQnIHwgJ2Nsb3NlZCcgPSAnY2xvc2VkJztcblxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6IExpZ2h0Ym94Q29uZmlndXJhdGlvblNlcnZpY2Uge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9saWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9saWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMaWdodGJveENvbmZpZ3VyYXRpb25TZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnpvb21WaXNpYmlsaXR5QW5pbWF0b3IgPSBuZXcgWm9vbVZpc2liaWxpdHlBbmltYXRvcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmNvbnRyb2xzLnpvb20uZGlzYWJsZSAmJiB0aGlzLl9zdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAnY2xvc2VkJztcbiAgICAgICAgICAgIHRoaXMuem9vbVZpc2liaWxpdHlBbmltYXRvci5oaWRlKHRoaXMuY29uZmlnLmFuaW1hdGlvbnMudG9vbGJhckhpZGUuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy56b29tLmRpc2FibGUgJiYgdGhpcy5fc3RhdGUgIT09ICdvcGVuZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gJ29wZW5lZCc7XG4gICAgICAgICAgICB0aGlzLnpvb21WaXNpYmlsaXR5QW5pbWF0b3Iuc2hvdyh0aGlzLmNvbmZpZy5hbmltYXRpb25zLnpvb21TaG93LmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jb250cm9scy56b29tLmRpc2FibGUpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSAnb3BlbmVkJykge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uWm9vbUluKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlWm9vbUluKSB7XG5cbiAgICAgICAgICAgIHRoaXMuem9vbUluRXZlbnQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uWm9vbU91dCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZVpvb21PdXQpIHtcblxuICAgICAgICAgICAgdGhpcy56b29tT3V0RXZlbnQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVzZXRab29tKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlUmVzZXRab29tKSB7XG5cbiAgICAgICAgICAgIHRoaXMucmVzZXRab29tRXZlbnQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uRmVldFRvV2lkdGgoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVGZWV0VG9XaWR0aCkge1xuXG4gICAgICAgICAgICB0aGlzLmZlZXRUb1dpZHRoRXZlbnQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiPGRpdiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMuem9vbS5kaXNhYmxlXCI+XHJcbiAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFjb25maWcuY29udHJvbHMuem9vbU91dC5kaXNhYmxlXCIgW2Rpc2FibGVdPVwiZGlzYWJsZVpvb21PdXRcIiBsaWdodGJveC1pY29uLWJ1dHRvbiAodGFwKT1cIm9uWm9vbU91dCgpXCIgdGl0bGU9XCJab29tIG91dFwiIGFyaWEtbGFiZWw9XCJab29tIG91dFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGljb25VSUxhcmdlLVpvb20tb3V0XCI+PCEtLXt7Y29uZmlnLmNvbnRyb2xzLnJlc2V0Wm9vbS5pY29ufX0tLT48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwiIWNvbmZpZy5jb250cm9scy5yZXNldFpvb20uZGlzYWJsZVwiIFtkaXNhYmxlXT1cImRpc2FibGVSZXNldFpvb21cIiBsaWdodGJveC1pY29uLWJ1dHRvbiAodGFwKT1cIm9uUmVzZXRab29tKClcIiB0aXRsZT1cIlJlc2V0IHpvb21cIiBhcmlhLWxhYmVsPVwiUmVzZXQgem9vbVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3tjb25maWcuY29udHJvbHMuem9vbU91dC5pY29ufX08L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwiIWNvbmZpZy5jb250cm9scy5mZWV0VG9XaWR0aC5kaXNhYmxlXCIgW2Rpc2FibGVdPVwiZGlzYWJsZUZlZXRUb1dpZHRoXCIgbGlnaHRib3gtaWNvbi1idXR0b24gKHRhcCk9XCJvbkZlZXRUb1dpZHRoKClcIiB0aXRsZT1cIkZlZXQgdG8gd2lkdGhcIiBhcmlhLWxhYmVsPVwiRmVldCB0byB3aWR0aFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3tjb25maWcuY29udHJvbHMuem9vbUluLmljb259fTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCIhY29uZmlnLmNvbnRyb2xzLnpvb21Jbi5kaXNhYmxlXCIgW2Rpc2FibGVdPVwiZGlzYWJsZVpvb21JblwiIGxpZ2h0Ym94LWljb24tYnV0dG9uICh0YXApPVwib25ab29tSW4oKVwiIHRpdGxlPVwiWm9vbSBpblwiIGFyaWEtbGFiZWw9XCJab29tIGluXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvblVJTGFyZ2UtWm9vbS1pblwiPjwhLS17e2NvbmZpZy5jb250cm9scy5mZWV0VG9XaWR0aC5pY29ufX0tLT48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9kaXY+XHJcblxyXG4iXX0=