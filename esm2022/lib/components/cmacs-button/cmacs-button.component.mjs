import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, ViewChild, Optional, ViewEncapsulation } from '@angular/core';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
const _c0 = ["contentElement"];
const _c1 = ["cmacs-button", ""];
function CmacsButtonComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 1);
} }
const _c2 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'button';
export class CmacsButtonComponent {
    insertSpan(nodes, renderer) {
        nodes.forEach(node => {
            if (node.nodeName === '#text') {
                const span = renderer.createElement('span');
                const parent = renderer.parentNode(node);
                renderer.insertBefore(parent, span, node);
                renderer.appendChild(span, node);
            }
        });
    }
    assertIconOnly(element, renderer) {
        const listOfNode = Array.from(element.childNodes);
        const iconCount = listOfNode.filter(node => node.nodeName === 'I').length;
        const noText = listOfNode.every(node => node.nodeName !== '#text');
        const noSpan = listOfNode.every(node => node.nodeName !== 'SPAN');
        const isIconOnly = noSpan && noText && iconCount >= 1;
        if (isIconOnly) {
            renderer.addClass(element, 'ant-btn-icon-only');
        }
    }
    constructor(elementRef, cdr, renderer, nzConfigService, directionality) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.nzConfigService = nzConfigService;
        this.directionality = directionality;
        this.block = false;
        this.ghost = false;
        this.search = false;
        this.loading = false;
        this.danger = false;
        this.disabled = false;
        this.tabIndex = null;
        this.type = 'default';
        this.shape = null;
        this.size = 'default';
        this.action = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.loading$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngOnInit() {
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { loading, type } = changes;
        if (loading) {
            this.loading$.next(this.loading);
        }
    }
    ngAfterViewInit() {
        this.assertIconOnly(this.elementRef.nativeElement, this.renderer);
        this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
        this.imageWrapper();
    }
    imageWrapper() {
        const element = this.elementRef.nativeElement;
        const listOfNode = Array.from(element.childNodes);
        const iconList = listOfNode.filter(node => node.nodeName === 'I');
        iconList.forEach(icon => {
            this.renderer.addClass(icon, 'iconspan');
        });
    }
    ngAfterContentInit() {
        this.loading$
            .pipe(startWith(this.loading), filter(() => !!this.nzIconDirectiveElement), takeUntil(this.destroy$))
            .subscribe(loading => {
            const nativeElement = this.nzIconDirectiveElement.nativeElement;
            if (loading) {
                this.renderer.setStyle(nativeElement, 'display', 'none');
            }
            else {
                this.renderer.removeStyle(nativeElement, 'display');
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    hideBtn() {
        this.elementRef.nativeElement.style.display = 'none';
    }
    showBtn() {
        this.elementRef.nativeElement.style.display = 'inline-block';
    }
    disabledBtn() {
        this.elementRef.nativeElement.disabled = true;
    }
    static { this.ɵfac = function CmacsButtonComponent_Factory(t) { return new (t || CmacsButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i2.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsButtonComponent, selectors: [["button", "cmacs-button", ""], ["a", "cmacs-button", ""]], contentQueries: function CmacsButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzIconDirective, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzIconDirectiveElement = _t.first);
        } }, viewQuery: function CmacsButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
        } }, hostVars: 36, hostBindings: function CmacsButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("tabindex", ctx.disabled ? -1 : ctx.tabIndex === null ? null : ctx.tabIndex)("disabled", ctx.disabled || null);
            i0.ɵɵclassProp("ant-btn-primary", ctx.type === "primary")("ant-btn-default", ctx.type === "default")("ant-btn-dashed", ctx.type === "dashed")("ant-btn-link", ctx.type === "link")("ant-btn-text", ctx.type === "text")("ant-btn-danger", ctx.type === "danger")("ant-btn-circle", ctx.shape === "circle")("ant-btn-round", ctx.shape === "round")("ant-btn-lg", ctx.size === "large")("ant-btn-sm", ctx.size === "small")("ant-btn-dangerous", ctx.danger)("ant-btn-loading", ctx.loading)("ant-btn-background-ghost", ctx.ghost)("ant-btn-block", ctx.block)("ant-input-search-button", ctx.search)("cmacs-btn-action", ctx.action)("ant-btn-rtl", ctx.dir === "rtl");
        } }, inputs: { block: "block", ghost: "ghost", search: "search", loading: "loading", danger: "danger", disabled: "disabled", tabIndex: "tabIndex", type: "type", shape: "shape", size: "size", action: "action" }, exportAs: ["cmacsButton"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c1, ngContentSelectors: _c2, decls: 2, vars: 1, consts: [["nz-icon", "", "type", "loading", 4, "ngIf"], ["nz-icon", "", "type", "loading"]], template: function CmacsButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, CmacsButtonComponent_i_0_Template, 1, 0, "i", 0);
            i0.ɵɵprojection(1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.loading);
        } }, dependencies: [i3.NgIf, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective], styles: [".ant-btn{font-size:14px;line-height:20px;font-weight:400;height:34px;box-shadow:none;border-radius:3px;padding:0 14px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;text-shadow:none}.ant-btn-primary{background-color:#2a7cff;border:1px solid #2a7cff}.ant-btn-primary:hover,.ant-btn-primary:focus{background-color:#2164c9;border-color:#2164c9}.ant-btn-primary[disabled],.ant-btn-primary[disabled]:hover,.ant-btn-primary[disabled]:focus{border:none;color:#97a0ae;background-color:#f3f3f4;cursor:default}.ant-btn-default{border:solid 1px #bec4cd;color:#2a7cff}.ant-btn-default i,.ant-btn-primary i{font-size:16px;position:relative;height:16px;width:16px;vertical-align:middle;margin:2px}.ant-btn-default:not(.ant-btn-icon-only) i,.ant-btn-primary:not(.ant-btn-icon-only) i{margin-right:5px}.ant-btn-icon-only{vertical-align:unset!important}.ant-btn-default:hover,.ant-btn-default:focus{background-color:#f6f7fb;color:#2164c9;border:solid 1px #bec4cd}.ant-btn-default[disabled],.ant-btn-default[disabled]:hover,.ant-btn-default[disabled]:focus{color:#97a0ae;background-color:#fff;border-color:#dee0e5;cursor:default}.ant-btn-background-ghost.ant-btn-primary:enabled,.ant-btn-background-ghost.ant-btn-default:enabled{color:#2a7cff;border:none}.ant-btn-background-ghost:hover{border:none!important}.ant-btn-background-ghost.ant-btn-primary:enabled:hover,.ant-btn-background-ghost.ant-btn-default:enabled:hover,.ant-btn-background-ghost.ant-btn-primary:enabled:focus,.ant-btn-background-ghost.ant-btn-default:enabled:focus{background-color:#f6f7fb!important;color:#2a7cff}.ant-btn-background-ghost:disabled{background-color:transparent!important;border:none;color:#97a0ae!important}.ant-btn-icon-only i{color:#656c79}.ant-btn-background-ghost:disabled i{color:#97a0ae!important}.ant-btn-icon-only,.ant-btn-icon-only:hover,.ant-btn-icon-only:focus{border:solid 1px #DEE0E5}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.ant-btn-icon-only:enabled:hover i,.ant-btn-icon-only:enabled:focus i{color:#2a7cff}.ant-btn-icon-only:not(.ant-btn-background-ghost),.ant-btn-icon-only:not(.ant-btn-background-ghost):hover,.ant-btn-icon-only:not(.ant-btn-background-ghost):focus{background-color:#fff}.ant-btn-icon-only:disabled{background-color:#f3f3f4!important;cursor:default}.ant-btn-icon-only:disabled span i{color:#97a0ae}.cmacs-btn-action{height:30px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only.cmacs-btn-action{padding-right:4px;padding-left:4px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only{padding-right:6px;padding-left:6px}.ant-btn-danger{color:#fff;background-color:#ff4d4f;border-color:#ff4d4f}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "block", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "ghost", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "search", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "danger", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "disabled", void 0);
__decorate([
    WithConfig()
], CmacsButtonComponent.prototype, "size", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "action", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsButtonComponent, [{
        type: Component,
        args: [{ selector: 'button[cmacs-button], a[cmacs-button]', exportAs: 'cmacsButton', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                    '[class.ant-btn-primary]': `type === 'primary'`,
                    '[class.ant-btn-default]': `type === 'default'`,
                    '[class.ant-btn-dashed]': `type === 'dashed'`,
                    '[class.ant-btn-link]': `type === 'link'`,
                    '[class.ant-btn-text]': `type === 'text'`,
                    '[class.ant-btn-danger]': `type === 'danger'`,
                    '[class.ant-btn-circle]': `shape === 'circle'`,
                    '[class.ant-btn-round]': `shape === 'round'`,
                    '[class.ant-btn-lg]': `size === 'large'`,
                    '[class.ant-btn-sm]': `size === 'small'`,
                    '[class.ant-btn-dangerous]': `danger`,
                    '[class.ant-btn-loading]': `loading`,
                    '[class.ant-btn-background-ghost]': `ghost`,
                    '[class.ant-btn-block]': `block`,
                    '[class.ant-input-search-button]': `search`,
                    '[class.cmacs-btn-action]': `action`,
                    '[class.ant-btn-rtl]': `dir === 'rtl'`,
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex === null ? null : tabIndex)',
                    '[attr.disabled]': 'disabled || null'
                }, template: "<i nz-icon type=\"loading\" *ngIf=\"loading\"></i>\r\n<ng-content></ng-content>\r\n", styles: [".ant-btn{font-size:14px;line-height:20px;font-weight:400;height:34px;box-shadow:none;border-radius:3px;padding:0 14px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;text-shadow:none}.ant-btn-primary{background-color:#2a7cff;border:1px solid #2a7cff}.ant-btn-primary:hover,.ant-btn-primary:focus{background-color:#2164c9;border-color:#2164c9}.ant-btn-primary[disabled],.ant-btn-primary[disabled]:hover,.ant-btn-primary[disabled]:focus{border:none;color:#97a0ae;background-color:#f3f3f4;cursor:default}.ant-btn-default{border:solid 1px #bec4cd;color:#2a7cff}.ant-btn-default i,.ant-btn-primary i{font-size:16px;position:relative;height:16px;width:16px;vertical-align:middle;margin:2px}.ant-btn-default:not(.ant-btn-icon-only) i,.ant-btn-primary:not(.ant-btn-icon-only) i{margin-right:5px}.ant-btn-icon-only{vertical-align:unset!important}.ant-btn-default:hover,.ant-btn-default:focus{background-color:#f6f7fb;color:#2164c9;border:solid 1px #bec4cd}.ant-btn-default[disabled],.ant-btn-default[disabled]:hover,.ant-btn-default[disabled]:focus{color:#97a0ae;background-color:#fff;border-color:#dee0e5;cursor:default}.ant-btn-background-ghost.ant-btn-primary:enabled,.ant-btn-background-ghost.ant-btn-default:enabled{color:#2a7cff;border:none}.ant-btn-background-ghost:hover{border:none!important}.ant-btn-background-ghost.ant-btn-primary:enabled:hover,.ant-btn-background-ghost.ant-btn-default:enabled:hover,.ant-btn-background-ghost.ant-btn-primary:enabled:focus,.ant-btn-background-ghost.ant-btn-default:enabled:focus{background-color:#f6f7fb!important;color:#2a7cff}.ant-btn-background-ghost:disabled{background-color:transparent!important;border:none;color:#97a0ae!important}.ant-btn-icon-only i{color:#656c79}.ant-btn-background-ghost:disabled i{color:#97a0ae!important}.ant-btn-icon-only,.ant-btn-icon-only:hover,.ant-btn-icon-only:focus{border:solid 1px #DEE0E5}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.ant-btn-icon-only:enabled:hover i,.ant-btn-icon-only:enabled:focus i{color:#2a7cff}.ant-btn-icon-only:not(.ant-btn-background-ghost),.ant-btn-icon-only:not(.ant-btn-background-ghost):hover,.ant-btn-icon-only:not(.ant-btn-background-ghost):focus{background-color:#fff}.ant-btn-icon-only:disabled{background-color:#f3f3f4!important;cursor:default}.ant-btn-icon-only:disabled span i{color:#97a0ae}.cmacs-btn-action{height:30px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only.cmacs-btn-action{padding-right:4px;padding-left:4px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only{padding-right:6px;padding-left:6px}.ant-btn-danger{color:#fff;background-color:#ff4d4f;border-color:#ff4d4f}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.NzConfigService }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzIconDirectiveElement: [{
            type: ContentChild,
            args: [NzIconDirective, { read: ElementRef }]
        }], block: [{
            type: Input
        }], ghost: [{
            type: Input
        }], search: [{
            type: Input
        }], loading: [{
            type: Input
        }], danger: [{
            type: Input
        }], disabled: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], type: [{
            type: Input
        }], shape: [{
            type: Input
        }], size: [{
            type: Input
        }], action: [{
            type: Input
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24vY21hY3MtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24vY21hY3MtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBR0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsUUFBUSxFQUdSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3JGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQzFCOUQsdUJBQThDOzs7QURzQzlDLE1BQU0scUJBQXFCLEdBQWdCLFFBQVEsQ0FBQztBQWlDcEQsTUFBTSxPQUFPLG9CQUFvQjtJQW1CL0IsVUFBVSxDQUFDLEtBQWUsRUFBRSxRQUFtQjtRQUM3QyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSxHQUFHLFFBQVEs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QUFFO1lBQzFCLEtBQUs7a0JBQTdCLEtBQUs7WUFDbUIsS0FBSztrQkFBN0IsS0FBSztZQUNtQixNQUFNO2tCQUE5QixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDbUIsTUFBTTtrQkFBOUIsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNpQixJQUFJO2tCQUExQixLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFJdUIsY0FBYztrQkFBMUMsU0FBUzttQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IE56SWNvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBkYW5nZXJgIG5vdCBzdXBwb3J0ZWQsIHVzZSBgbnpEYW5nZXJgIGluc3RlYWRcbiAqIEBicmVha2luZy1jaGFuZ2UgMTIuMC4wXG4gKi9cbnR5cGUgTnpMZWdhY3lCdXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ2RlZmF1bHQnIHwgJ2Rhc2hlZCcgfCAnZGFuZ2VyJyB8ICdsaW5rJyB8ICd0ZXh0JyB8IG51bGw7XG5cbmV4cG9ydCB0eXBlIE56QnV0dG9uVHlwZSA9IE56TGVnYWN5QnV0dG9uVHlwZTtcbmV4cG9ydCB0eXBlIE56QnV0dG9uU2hhcGUgPSAnY2lyY2xlJyB8ICdyb3VuZCcgfCBudWxsO1xuZXhwb3J0IHR5cGUgTnpCdXR0b25TaXplID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnYnV0dG9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnYnV0dG9uW2NtYWNzLWJ1dHRvbl0sIGFbY21hY3MtYnV0dG9uXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0J1dHRvbicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1idXR0b24uY29tcG9uZW50LmNzcyddLFxyXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1idG4tcHJpbWFyeV0nOiBgdHlwZSA9PT0gJ3ByaW1hcnknYCxcbiAgICAnW2NsYXNzLmFudC1idG4tZGVmYXVsdF0nOiBgdHlwZSA9PT0gJ2RlZmF1bHQnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tZGFzaGVkXSc6IGB0eXBlID09PSAnZGFzaGVkJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWxpbmtdJzogYHR5cGUgPT09ICdsaW5rJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLXRleHRdJzogYHR5cGUgPT09ICd0ZXh0J2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWRhbmdlcl0nOiBgdHlwZSA9PT0gJ2RhbmdlcidgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1jaXJjbGVdJzogYHNoYXBlID09PSAnY2lyY2xlJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLXJvdW5kXSc6IGBzaGFwZSA9PT0gJ3JvdW5kJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWxnXSc6IGBzaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tc21dJzogYHNpemUgPT09ICdzbWFsbCdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1kYW5nZXJvdXNdJzogYGRhbmdlcmAsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWxvYWRpbmddJzogYGxvYWRpbmdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0XSc6IGBnaG9zdGAsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWJsb2NrXSc6IGBibG9ja2AsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWJ1dHRvbl0nOiBgc2VhcmNoYCxcbiAgICAnW2NsYXNzLmNtYWNzLWJ0bi1hY3Rpb25dJzogYGFjdGlvbmAsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdkaXNhYmxlZCA/IC0xIDogKHRhYkluZGV4ID09PSBudWxsID8gbnVsbCA6IHRhYkluZGV4KScsXG4gICAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZCB8fCBudWxsJ1xuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG5cclxuICBAQ29udGVudENoaWxkKE56SWNvbkRpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pIG56SWNvbkRpcmVjdGl2ZUVsZW1lbnQhOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYmxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGdob3N0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhbmdlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlciB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB0eXBlOiBOekJ1dHRvblR5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHNoYXBlOiBOekJ1dHRvblNoYXBlID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBzaXplOiBOekJ1dHRvblNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhY3Rpb24gPSBmYWxzZTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgbG9hZGluZyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JykgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGluc2VydFNwYW4obm9kZXM6IE5vZGVMaXN0LCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnI3RleHQnKSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSByZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHJlbmRlcmVyLnBhcmVudE5vZGUobm9kZSk7XG4gICAgICAgIHJlbmRlcmVyLmluc2VydEJlZm9yZShwYXJlbnQsIHNwYW4sIG5vZGUpO1xuICAgICAgICByZW5kZXJlci5hcHBlbmRDaGlsZChzcGFuLCBub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxyXG5cclxuICBhc3NlcnRJY29uT25seShlbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudCwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RPZk5vZGUgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgY29uc3QgaWNvbkNvdW50ID0gbGlzdE9mTm9kZS5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVOYW1lID09PSAnSScpLmxlbmd0aDtcbiAgICBjb25zdCBub1RleHQgPSBsaXN0T2ZOb2RlLmV2ZXJ5KG5vZGUgPT4gbm9kZS5ub2RlTmFtZSAhPT0gJyN0ZXh0Jyk7XG4gICAgY29uc3Qgbm9TcGFuID0gbGlzdE9mTm9kZS5ldmVyeShub2RlID0+IG5vZGUubm9kZU5hbWUgIT09ICdTUEFOJyk7XG4gICAgY29uc3QgaXNJY29uT25seSA9IG5vU3BhbiAmJiBub1RleHQgJiYgaWNvbkNvdW50ID49IDE7XG4gICAgaWYgKGlzSWNvbk9ubHkpIHtcbiAgICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsICdhbnQtYnRuLWljb24tb25seScpO1xuICAgIH1cbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnRuJyk7XHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19NT0RVTEVfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIHR5cGUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHRoaXMubG9hZGluZyQubmV4dCh0aGlzLmxvYWRpbmcpO1xuICAgIH1cbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hc3NlcnRJY29uT25seSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlcik7XG4gICAgdGhpcy5pbnNlcnRTcGFuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMsIHRoaXMucmVuZGVyZXIpO1xuICAgIHRoaXMuaW1hZ2VXcmFwcGVyKCk7XG4gIH1cblxuICBpbWFnZVdyYXBwZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBsaXN0T2ZOb2RlID0gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgIGNvbnN0IGljb25MaXN0ID0gbGlzdE9mTm9kZS5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVOYW1lID09PSAnSScpO1xyXG5cclxuICAgIGljb25MaXN0LmZvckVhY2goaWNvbiA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoaWNvbiwgJ2ljb25zcGFuJyk7XHJcbiAgICB9KTtcclxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyRcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodGhpcy5sb2FkaW5nKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5uekljb25EaXJlY3RpdmVFbGVtZW50KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGxvYWRpbmcgPT4ge1xuICAgICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5uekljb25EaXJlY3RpdmVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShuYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxyXG5cclxuICBoaWRlQnRuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcblxyXG4gIHNob3dCdG4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlZEJ0bigpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbn1cclxuIiwiPGkgbnotaWNvbiB0eXBlPVwibG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZ1wiPjwvaT5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=