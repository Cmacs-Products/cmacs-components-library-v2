import { ElementRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { DropdownPanel } from './cmacs-dropdown-panel';
import * as i0 from "@angular/core";
export declare class CmacsDropdownTriggerDirective implements OnDestroy {
    private overlay;
    private elementRef;
    private viewContainerRef;
    private isDropdownOpen;
    private overlayRef;
    private dropdownClosingActionsSub;
    isOpenPane: boolean;
    dropdownPanel: DropdownPanel;
    constructor(overlay: Overlay, elementRef: ElementRef<HTMLElement>, viewContainerRef: ViewContainerRef);
    toggleDropdown(): void;
    openDropdown(): void;
    private dropdownClosingActions;
    private destroyDropdown;
    clickout(event: any): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsDropdownTriggerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsDropdownTriggerDirective, "[dropdownTrigger]", never, { "dropdownPanel": { "alias": "dropdownTrigger"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-dropdown-trigger.directive.d.ts.map