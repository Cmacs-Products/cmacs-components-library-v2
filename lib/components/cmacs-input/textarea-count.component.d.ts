import { AfterContentInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { CmacsInputDirective } from './cmacs-input.directive';
import * as i0 from "@angular/core";
export declare class CmacsTextareaCountComponent implements AfterContentInit, OnDestroy {
    private renderer;
    private elementRef;
    nzInputDirective: CmacsInputDirective;
    maxCharacterCount: number;
    computeCharacterCount: (v: string) => number;
    formatter: (cur: number, max: number) => string;
    private configChange$;
    private destroy$;
    constructor(renderer: Renderer2, elementRef: ElementRef<HTMLElement>);
    ngAfterContentInit(): void;
    setDataCount(value: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTextareaCountComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsTextareaCountComponent, "cmacs-textarea-count", never, { "maxCharacterCount": { "alias": "maxCharacterCount"; "required": false; }; "computeCharacterCount": { "alias": "computeCharacterCount"; "required": false; }; "formatter": { "alias": "formatter"; "required": false; }; }, {}, ["nzInputDirective"], ["textarea[cmacs-input]"], false, never>;
}
//# sourceMappingURL=textarea-count.component.d.ts.map