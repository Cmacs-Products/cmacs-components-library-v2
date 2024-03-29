import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { CmacsCheckboxComponent } from './cmacs-checkbox.component';
import * as i0 from "@angular/core";
export declare class CmacsCheckboxWrapperComponent {
    readonly nzOnChange: EventEmitter<string[]>;
    private checkboxList;
    addCheckbox(value: CmacsCheckboxComponent): void;
    removeCheckbox(value: CmacsCheckboxComponent): void;
    onChange(): void;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsCheckboxWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsCheckboxWrapperComponent, "cmacs-checkbox-wrapper", ["cmacsCheckboxWrapper"], {}, { "nzOnChange": "nzOnChange"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=cmacs-checkbox-wrapper.component.d.ts.map