import { Direction } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { NgStyleInterface } from 'ng-zorro-antd/core/types';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzSliderService } from './slider.service';
import { NzSliderShowTooltip } from './typings';
import * as i0 from "@angular/core";
export declare class CmacsSliderHandleComponent implements OnChanges {
    private sliderService;
    private cdr;
    handleEl?: ElementRef;
    tooltip?: NzTooltipDirective;
    vertical?: boolean;
    reverse?: boolean;
    offset?: number;
    value?: number;
    tooltipVisible: NzSliderShowTooltip;
    tooltipPlacement?: string;
    tooltipFormatter?: null | ((value: number) => string);
    active: boolean;
    dir: Direction;
    tooltipTitle?: string;
    style: NgStyleInterface;
    constructor(sliderService: NzSliderService, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    enterHandle: () => void;
    leaveHandle: () => void;
    focus(): void;
    private toggleTooltip;
    private updateTooltipTitle;
    private updateTooltipPosition;
    private updateStyle;
    private getHorizontalStylePosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsSliderHandleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsSliderHandleComponent, "cmacs-slider-handle", ["cmacsSliderHandle"], { "vertical": { "alias": "vertical"; "required": false; }; "reverse": { "alias": "reverse"; "required": false; }; "offset": { "alias": "offset"; "required": false; }; "value": { "alias": "value"; "required": false; }; "tooltipVisible": { "alias": "tooltipVisible"; "required": false; }; "tooltipPlacement": { "alias": "tooltipPlacement"; "required": false; }; "tooltipFormatter": { "alias": "tooltipFormatter"; "required": false; }; "active": { "alias": "active"; "required": false; }; "dir": { "alias": "dir"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-slider-handle.component.d.ts.map