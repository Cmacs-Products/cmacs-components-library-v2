import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { LightboxItemZoomAnimator } from '../../models/lightbox-item/animations/lightbox-item-zoom-animator';
import { Dimensions } from '../../models/dimensions.interface';
import * as i0 from "@angular/core";
export declare class LightboxItemComponent implements OnInit {
    private readonly _elementRef;
    config: LightboxConfigurationService;
    item: Item;
    toggleEvent: EventEmitter<any>;
    lightboxItemZoomAnimator: LightboxItemZoomAnimator;
    private _dragPosition;
    private _dragging;
    private _zoomMin;
    private _zoomMax;
    private _currentZoom;
    private _img;
    constructor(_elementRef: ElementRef, config: LightboxConfigurationService);
    ngOnInit(): void;
    open(containerDimensions: Dimensions, startCb?: () => void, doneCb?: () => void): void;
    resetZoom(duration: number, containerDimensions?: Dimensions, startCb?: () => void, doneCb?: () => void): void;
    zoomIn(startCb?: () => void, doneCb?: () => void): void;
    zoomOut(startCb?: () => void, doneCb?: () => void): void;
    feetToWidth(startCb?: () => void, doneCb?: () => void): void;
    onClick(event: any): void;
    isFeetToWidth(): boolean;
    isZoomMin(): boolean;
    isZoomMax(): boolean;
    onDrag(event: any): void;
    onLoad(event: Event): void;
    getDefaultSrc(): string;
    resize(): void;
    private _getContainerDimensions;
    private _getItemDimensions;
    static ɵfac: i0.ɵɵFactoryDeclaration<LightboxItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LightboxItemComponent, "lightbox-item", never, { "item": { "alias": "item"; "required": false; }; }, { "toggleEvent": "toggleEvent"; }, never, never, false, never>;
}
//# sourceMappingURL=lightbox-item.component.d.ts.map