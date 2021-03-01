import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, DoCheck, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import * as i0 from "@angular/core";
export interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}
export declare class CmacsAutosizeDirective implements AfterViewInit, OnDestroy, DoCheck {
    private elementRef;
    private ngZone;
    private platform;
    private resizeService;
    private autosize;
    private el;
    private cachedLineHeight;
    private previousValue;
    private previousMinRows;
    private minRows;
    private maxRows;
    private maxHeight;
    private minHeight;
    private destroy$;
    private inputGap;
    set cmacsAutosize(value: string | boolean | AutoSizeType);
    resizeToFitContent(force?: boolean): void;
    private cacheTextareaLineHeight;
    setMinHeight(): number | null;
    setMaxHeight(): number | null;
    noopInputHandler(): void;
    constructor(elementRef: ElementRef, ngZone: NgZone, platform: Platform, resizeService: NzResizeService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsAutosizeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsAutosizeDirective, "textarea[cmacsAutosize]", ["cmacsAutosize"], { "cmacsAutosize": "cmacsAutosize"; }, {}, never>;
}
//# sourceMappingURL=autosize.directive.d.ts.map