import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ItemDirectiveBase } from '../models/item-directive-base';
import { LightboxService } from '../services/lightbox.service';
import { VideoSources } from '../models/video';
import * as i0 from "@angular/core";
export declare class LightboxVideoDirective extends ItemDirectiveBase implements OnInit, OnDestroy {
    private readonly _lightboxService;
    private readonly _elementRef;
    sources: VideoSources[];
    constructor(_lightboxService: LightboxService, _elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LightboxVideoDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LightboxVideoDirective, "img[lightbox-video]", never, { "sources": { "alias": "sources"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=lightbox-video.directive.d.ts.map