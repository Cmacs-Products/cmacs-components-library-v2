import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, filter, map, mapTo, mergeMap, takeUntil } from 'rxjs/operators';
import { CmacsIsMenuInsideDropDownToken } from './menu.token';
import * as i0 from "@angular/core";
import * as i1 from "./menu.service";
export class NzSubmenuService {
    /**
     * menu item inside submenu clicked
     * @param menu
     */
    onChildMenuItemClick(menu) {
        this.childMenuItemClick$.next(menu);
    }
    setOpenStateWithoutDebounce(value) {
        this.isCurrentSubMenuOpen$.next(value);
    }
    setMouseEnterTitleOrOverlayState(value) {
        this.isMouseEnterTitleOrOverlay$.next(value);
    }
    constructor(nzHostSubmenuService, nzMenuService, isMenuInsideDropDown) {
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.mode$ = this.nzMenuService.mode$.pipe(map(mode => {
            if (mode === 'inline') {
                return 'inline';
                /** if inside another submenu, set the mode to vertical **/
            }
            else if (mode === 'vertical' || this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        }));
        this.level = 1;
        this.isCurrentSubMenuOpen$ = new BehaviorSubject(false);
        this.isChildSubMenuOpen$ = new BehaviorSubject(false);
        /** submenu title & overlay mouse enter status **/
        this.isMouseEnterTitleOrOverlay$ = new Subject();
        this.childMenuItemClick$ = new Subject();
        this.destroy$ = new Subject();
        if (this.nzHostSubmenuService) {
            this.level = this.nzHostSubmenuService.level + 1;
        }
        /** close if menu item clicked **/
        const isClosedByMenuItemClick = this.childMenuItemClick$.pipe(mergeMap(() => this.mode$), filter(mode => mode !== 'inline' || this.isMenuInsideDropDown), mapTo(false));
        const isCurrentSubmenuOpen$ = merge(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
        /** combine the child submenu status with current submenu status to calculate host submenu open **/
        const isSubMenuOpenWithDebounce$ = combineLatest([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(map(([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen), auditTime(150), distinctUntilChanged(), takeUntil(this.destroy$));
        isSubMenuOpenWithDebounce$.pipe(distinctUntilChanged()).subscribe(data => {
            this.setOpenStateWithoutDebounce(data);
            if (this.nzHostSubmenuService) {
                /** set parent submenu's child submenu open status **/
                this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
            }
            else {
                this.nzMenuService.isChildSubMenuOpen$.next(data);
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(i0.ɵɵinject(NzSubmenuService, 12), i0.ɵɵinject(i1.MenuService), i0.ɵɵinject(CmacsIsMenuInsideDropDownToken)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NzSubmenuService, factory: NzSubmenuService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzSubmenuService, [{
        type: Injectable
    }], function () { return [{ type: NzSubmenuService, decorators: [{
                type: SkipSelf
            }, {
                type: Optional
            }] }, { type: i1.MenuService }, { type: undefined, decorators: [{
                type: Inject,
                args: [CmacsIsMenuInsideDropDownToken]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvc3VibWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRixPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUk5RCxNQUFNLE9BQU8sZ0JBQWdCO0lBb0IzQjs7O09BR0c7SUFDSCxvQkFBb0IsQ0FBQyxJQUFlO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELDJCQUEyQixDQUFDLEtBQWM7UUFDeEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsZ0NBQWdDLENBQUMsS0FBYztRQUM3QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxZQUNrQyxvQkFBc0MsRUFDL0QsYUFBMEIsRUFDYyxvQkFBNkI7UUFGNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFrQjtRQUMvRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUNjLHlCQUFvQixHQUFwQixv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dUJBQUMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBtYXBUbywgbWVyZ2VNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9tZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuIH0gZnJvbSAnLi9tZW51LnRva2VuJztcbmltcG9ydCB7IENtYWNzTWVudU1vZGVUeXBlIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56U3VibWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBtb2RlJDogT2JzZXJ2YWJsZTxDbWFjc01lbnVNb2RlVHlwZT4gPSB0aGlzLm56TWVudVNlcnZpY2UubW9kZSQucGlwZShcbiAgICBtYXAobW9kZSA9PiB7XG4gICAgICBpZiAobW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgcmV0dXJuICdpbmxpbmUnO1xuICAgICAgICAvKiogaWYgaW5zaWRlIGFub3RoZXIgc3VibWVudSwgc2V0IHRoZSBtb2RlIHRvIHZlcnRpY2FsICoqL1xuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAndmVydGljYWwnIHx8IHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2UpIHtcbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG4gIGxldmVsID0gMTtcbiAgaXNDdXJyZW50U3ViTWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHByaXZhdGUgaXNDaGlsZFN1Yk1lbnVPcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAvKiogc3VibWVudSB0aXRsZSAmIG92ZXJsYXkgbW91c2UgZW50ZXIgc3RhdHVzICoqL1xuICBwcml2YXRlIGlzTW91c2VFbnRlclRpdGxlT3JPdmVybGF5JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgY2hpbGRNZW51SXRlbUNsaWNrJCA9IG5ldyBTdWJqZWN0PE56U2FmZUFueT4oKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIC8qKlxuICAgKiBtZW51IGl0ZW0gaW5zaWRlIHN1Ym1lbnUgY2xpY2tlZFxuICAgKiBAcGFyYW0gbWVudVxuICAgKi9cbiAgb25DaGlsZE1lbnVJdGVtQ2xpY2sobWVudTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGlsZE1lbnVJdGVtQ2xpY2skLm5leHQobWVudSk7XG4gIH1cbiAgc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0N1cnJlbnRTdWJNZW51T3BlbiQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgc2V0TW91c2VFbnRlclRpdGxlT3JPdmVybGF5U3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzTW91c2VFbnRlclRpdGxlT3JPdmVybGF5JC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTa2lwU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpIb3N0U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsXG4gICAgcHVibGljIG56TWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxuICAgIEBJbmplY3QoQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuKSBwdWJsaWMgaXNNZW51SW5zaWRlRHJvcERvd246IGJvb2xlYW5cbiAgKSB7XG4gICAgaWYgKHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2UpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlLmxldmVsICsgMTtcbiAgICB9XG4gICAgLyoqIGNsb3NlIGlmIG1lbnUgaXRlbSBjbGlja2VkICoqL1xuICAgIGNvbnN0IGlzQ2xvc2VkQnlNZW51SXRlbUNsaWNrID0gdGhpcy5jaGlsZE1lbnVJdGVtQ2xpY2skLnBpcGUoXG4gICAgICBtZXJnZU1hcCgoKSA9PiB0aGlzLm1vZGUkKSxcbiAgICAgIGZpbHRlcihtb2RlID0+IG1vZGUgIT09ICdpbmxpbmUnIHx8IHRoaXMuaXNNZW51SW5zaWRlRHJvcERvd24pLFxuICAgICAgbWFwVG8oZmFsc2UpXG4gICAgKTtcbiAgICBjb25zdCBpc0N1cnJlbnRTdWJtZW51T3BlbiQgPSBtZXJnZSh0aGlzLmlzTW91c2VFbnRlclRpdGxlT3JPdmVybGF5JCwgaXNDbG9zZWRCeU1lbnVJdGVtQ2xpY2spO1xuICAgIC8qKiBjb21iaW5lIHRoZSBjaGlsZCBzdWJtZW51IHN0YXR1cyB3aXRoIGN1cnJlbnQgc3VibWVudSBzdGF0dXMgdG8gY2FsY3VsYXRlIGhvc3Qgc3VibWVudSBvcGVuICoqL1xuICAgIGNvbnN0IGlzU3ViTWVudU9wZW5XaXRoRGVib3VuY2UkID0gY29tYmluZUxhdGVzdChbdGhpcy5pc0NoaWxkU3ViTWVudU9wZW4kLCBpc0N1cnJlbnRTdWJtZW51T3BlbiRdKS5waXBlKFxuICAgICAgbWFwKChbaXNDaGlsZFN1Yk1lbnVPcGVuLCBpc0N1cnJlbnRTdWJtZW51T3Blbl0pID0+IGlzQ2hpbGRTdWJNZW51T3BlbiB8fCBpc0N1cnJlbnRTdWJtZW51T3BlbiksXG4gICAgICBhdWRpdFRpbWUoMTUwKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICApO1xuICAgIGlzU3ViTWVudU9wZW5XaXRoRGVib3VuY2UkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5zZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2UoZGF0YSk7XG4gICAgICBpZiAodGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xuICAgICAgICAvKiogc2V0IHBhcmVudCBzdWJtZW51J3MgY2hpbGQgc3VibWVudSBvcGVuIHN0YXR1cyAqKi9cbiAgICAgICAgdGhpcy5uekhvc3RTdWJtZW51U2VydmljZS5pc0NoaWxkU3ViTWVudU9wZW4kLm5leHQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56TWVudVNlcnZpY2UuaXNDaGlsZFN1Yk1lbnVPcGVuJC5uZXh0KGRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=