import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, filter, map, mapTo, mergeMap, takeUntil } from 'rxjs/operators';
import { CmacsIsMenuInsideDropDownToken } from './menu.token';
import * as i0 from "@angular/core";
import * as i1 from "./menu.service";
export class NzSubmenuService {
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
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(i0.ɵɵinject(NzSubmenuService, 12), i0.ɵɵinject(i1.MenuService), i0.ɵɵinject(CmacsIsMenuInsideDropDownToken)); };
NzSubmenuService.ɵprov = i0.ɵɵdefineInjectable({ token: NzSubmenuService, factory: NzSubmenuService.ɵfac });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvc3VibWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRixPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUk5RCxNQUFNLE9BQU8sZ0JBQWdCO0lBa0MzQixZQUNrQyxvQkFBc0MsRUFDL0QsYUFBMEIsRUFDYyxvQkFBNkI7UUFGNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFrQjtRQUMvRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUNjLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBUztRQXBDOUUsVUFBSyxHQUFrQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2xFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNULElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDckIsT0FBTyxRQUFRLENBQUM7Z0JBQ2hCLDJEQUEyRDthQUM1RDtpQkFBTSxJQUFJLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUMzRCxPQUFPLFVBQVUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxPQUFPLFlBQVks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QUFROztzQkFBSSxRQUFROztzQkFFcEIsTUFBTTt1QkFBQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIG1hcFRvLCBtZXJnZU1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4gfSBmcm9tICcuL21lbnUudG9rZW4nO1xuaW1wb3J0IHsgQ21hY3NNZW51TW9kZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpTdWJtZW51U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIG1vZGUkOiBPYnNlcnZhYmxlPENtYWNzTWVudU1vZGVUeXBlPiA9IHRoaXMubnpNZW51U2VydmljZS5tb2RlJC5waXBlKFxuICAgIG1hcChtb2RlID0+IHtcbiAgICAgIGlmIChtb2RlID09PSAnaW5saW5lJykge1xuICAgICAgICByZXR1cm4gJ2lubGluZSc7XG4gICAgICAgIC8qKiBpZiBpbnNpZGUgYW5vdGhlciBzdWJtZW51LCBzZXQgdGhlIG1vZGUgdG8gdmVydGljYWwgKiovXG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICd2ZXJ0aWNhbCcgfHwgdGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbiAgbGV2ZWwgPSAxO1xuICBpc0N1cnJlbnRTdWJNZW51T3BlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHJpdmF0ZSBpc0NoaWxkU3ViTWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIC8qKiBzdWJtZW51IHRpdGxlICYgb3ZlcmxheSBtb3VzZSBlbnRlciBzdGF0dXMgKiovXG4gIHByaXZhdGUgaXNNb3VzZUVudGVyVGl0bGVPck92ZXJsYXkkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBjaGlsZE1lbnVJdGVtQ2xpY2skID0gbmV3IFN1YmplY3Q8TnpTYWZlQW55PigpO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgLyoqXG4gICAqIG1lbnUgaXRlbSBpbnNpZGUgc3VibWVudSBjbGlja2VkXG4gICAqIEBwYXJhbSBtZW51XG4gICAqL1xuICBvbkNoaWxkTWVudUl0ZW1DbGljayhtZW51OiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoaWxkTWVudUl0ZW1DbGljayQubmV4dChtZW51KTtcbiAgfVxuICBzZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2UodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzQ3VycmVudFN1Yk1lbnVPcGVuJC5uZXh0KHZhbHVlKTtcbiAgfVxuICBzZXRNb3VzZUVudGVyVGl0bGVPck92ZXJsYXlTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNNb3VzZUVudGVyVGl0bGVPck92ZXJsYXkkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNraXBTZWxmKCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekhvc3RTdWJtZW51U2VydmljZTogTnpTdWJtZW51U2VydmljZSxcbiAgICBwdWJsaWMgbnpNZW51U2VydmljZTogTWVudVNlcnZpY2UsXG4gICAgQEluamVjdChDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4pIHB1YmxpYyBpc01lbnVJbnNpZGVEcm9wRG93bjogYm9vbGVhblxuICApIHtcbiAgICBpZiAodGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xuICAgICAgdGhpcy5sZXZlbCA9IHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2UubGV2ZWwgKyAxO1xuICAgIH1cbiAgICAvKiogY2xvc2UgaWYgbWVudSBpdGVtIGNsaWNrZWQgKiovXG4gICAgY29uc3QgaXNDbG9zZWRCeU1lbnVJdGVtQ2xpY2sgPSB0aGlzLmNoaWxkTWVudUl0ZW1DbGljayQucGlwZShcbiAgICAgIG1lcmdlTWFwKCgpID0+IHRoaXMubW9kZSQpLFxuICAgICAgZmlsdGVyKG1vZGUgPT4gbW9kZSAhPT0gJ2lubGluZScgfHwgdGhpcy5pc01lbnVJbnNpZGVEcm9wRG93biksXG4gICAgICBtYXBUbyhmYWxzZSlcbiAgICApO1xuICAgIGNvbnN0IGlzQ3VycmVudFN1Ym1lbnVPcGVuJCA9IG1lcmdlKHRoaXMuaXNNb3VzZUVudGVyVGl0bGVPck92ZXJsYXkkLCBpc0Nsb3NlZEJ5TWVudUl0ZW1DbGljayk7XG4gICAgLyoqIGNvbWJpbmUgdGhlIGNoaWxkIHN1Ym1lbnUgc3RhdHVzIHdpdGggY3VycmVudCBzdWJtZW51IHN0YXR1cyB0byBjYWxjdWxhdGUgaG9zdCBzdWJtZW51IG9wZW4gKiovXG4gICAgY29uc3QgaXNTdWJNZW51T3BlbldpdGhEZWJvdW5jZSQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLmlzQ2hpbGRTdWJNZW51T3BlbiQsIGlzQ3VycmVudFN1Ym1lbnVPcGVuJF0pLnBpcGUoXG4gICAgICBtYXAoKFtpc0NoaWxkU3ViTWVudU9wZW4sIGlzQ3VycmVudFN1Ym1lbnVPcGVuXSkgPT4gaXNDaGlsZFN1Yk1lbnVPcGVuIHx8IGlzQ3VycmVudFN1Ym1lbnVPcGVuKSxcbiAgICAgIGF1ZGl0VGltZSgxNTApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICk7XG4gICAgaXNTdWJNZW51T3BlbldpdGhEZWJvdW5jZSQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZShkYXRhKTtcbiAgICAgIGlmICh0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlKSB7XG4gICAgICAgIC8qKiBzZXQgcGFyZW50IHN1Ym1lbnUncyBjaGlsZCBzdWJtZW51IG9wZW4gc3RhdHVzICoqL1xuICAgICAgICB0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlLmlzQ2hpbGRTdWJNZW51T3BlbiQubmV4dChkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpNZW51U2VydmljZS5pc0NoaWxkU3ViTWVudU9wZW4kLm5leHQoZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==