import { EventEmitter, OnInit, InjectionToken } from '@angular/core';
import { Item } from '../../models/item';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { ThumbnailsVisibilityAnimator } from '../../models/thumbnails/animations/thumbnails-visibility-animator';
import { ThumbnailsSliceAnimator } from '../../models/thumbnails/animations/thumbnails-slice-animator';
import * as i0 from "@angular/core";
export declare const WINDOW: InjectionToken<unknown>;
export declare function _window(): Window & typeof globalThis;
export declare class LightboxThumbnailsComponent implements OnInit {
    private readonly _lightboxConfigurationService;
    readonly _win: any;
    items: Item[];
    selectEvent: EventEmitter<any>;
    thumbnailsVisibilityAnimator: ThumbnailsVisibilityAnimator;
    thumbnailsSliceAnimator: ThumbnailsSliceAnimator;
    activeItem: Item;
    thumbnailsWidth: string;
    thumbnailsHeight: string;
    thickness: number;
    private _thumnailsContainerRef;
    private _thumnailsListRef;
    private _thumnailsRef;
    private _state;
    constructor(_lightboxConfigurationService: LightboxConfigurationService, _win: any);
    ngOnInit(): void;
    get direction(): 'vertical' | 'horizontal';
    get config(): LightboxConfigurationService;
    open(): void;
    close(): void;
    toggle(): void;
    resize(): void;
    onTap(item: Item): void;
    selectItem(item: Item): void;
    onWheel(event: any): void;
    onSwipe(event: any): void;
    getItemSrc(item: Item): string;
    checkDirection(): void;
    checkThumbnailsDimensions(): void;
    private _refreshThickness;
    private _animateSlice;
    private _getTop;
    private _getLeft;
    static ɵfac: i0.ɵɵFactoryDef<LightboxThumbnailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LightboxThumbnailsComponent, "lightbox-thumbnails", never, { "items": "items"; }, { "selectEvent": "selectEvent"; }, never, never>;
}
//# sourceMappingURL=lightbox-thumbnails.component.d.ts.map