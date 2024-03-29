import { AbstractPanelHeader } from './abstract-panel-header';
import { PanelSelector } from './interface';
import * as i0 from "@angular/core";
export declare class YearHeaderComponent extends AbstractPanelHeader {
    get startYear(): number;
    get endYear(): number;
    superPrevious(): void;
    superNext(): void;
    getSelectors(): PanelSelector[];
    static ɵfac: i0.ɵɵFactoryDeclaration<YearHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<YearHeaderComponent, "year-header", ["yearHeader"], {}, {}, never, never, false, never>;
}
//# sourceMappingURL=year-header.component.d.ts.map