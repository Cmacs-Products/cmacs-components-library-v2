import { EventEmitter, OnChanges } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare type FloatingMenuType = 'top' | 'bottom' | 'left' | 'right';
export declare const FLOATING_MENU_LOCALIZATION: {
    'Dock To Left': string;
    'Dock To Right': string;
    'Dock To Top': string;
    'Dock To Bottom': string;
    'Minimize Toolbar': string;
};
export declare class CmacsFloatingMenuComponent implements OnChanges {
    _minimizeToolbar: boolean;
    _i18n: {
        'Dock To Left': string;
        'Dock To Right': string;
        'Dock To Top': string;
        'Dock To Bottom': string;
        'Minimize Toolbar': string;
    };
    cdkDrag: CdkDrag;
    position: FloatingMenuType;
    visible: boolean;
    showExtras: boolean;
    dragBoundary: string;
    positionChange: EventEmitter<FloatingMenuType>;
    carrot: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
    topBoundary: string;
    bottomBoundary: string;
    leftBoundary: string;
    rightBoundary: string;
    i18n: any;
    constructor();
    ngOnChanges(): void;
    minimizeToolbar(): void;
    expandToolbar(): void;
    dockToLeft(): void;
    dockToRight(): void;
    dockToTop(): void;
    dockToBottom(): void;
    getPlacement(): "left" | "right" | "bottom" | "top";
    resetDragDrop(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsFloatingMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsFloatingMenuComponent, "cmacs-floating-menu", ["cmacsFloatingMenu"], { "position": "position"; "visible": "visible"; "showExtras": "showExtras"; "dragBoundary": "dragBoundary"; "carrot": "carrot"; "top": "top"; "bottom": "bottom"; "left": "left"; "right": "right"; "topBoundary": "topBoundary"; "bottomBoundary": "bottomBoundary"; "leftBoundary": "leftBoundary"; "rightBoundary": "rightBoundary"; "i18n": "i18n"; }, { "positionChange": "positionChange"; }, never, ["*"]>;
}
//# sourceMappingURL=cmacs-floating-menu.component.d.ts.map