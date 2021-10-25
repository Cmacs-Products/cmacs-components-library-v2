import { CeldType } from '../enums/CeldType.enum';
import { TemplateType } from '../enums/TemplateType.enum';
import { ButtonStyle } from '../enums/ButtonStyle.enum';
import { TemplateRef } from "@angular/core";
export interface GridConfig {
    fields: Field[];
    fieldId: string;
    fieldRate: string;
}
export interface Field {
    celdType: CeldType;
    display: string;
    property?: string;
    width?: string;
    minWidth?: string;
    showTooltip?: boolean;
    ngClass?: string;
    hidden?: boolean;
    useCommaMarker?: boolean;
    select?: SelectConfig;
    button?: ButtonConfig;
    tag?: TagConfig;
    sortOrder?: string | null;
    editTemplate?: TemplateType;
    showSort?: boolean;
    showFilter?: boolean;
    customFilter?: CmacsGridFilterTemplateRef;
    dateFormat?: string;
    timeFormat?: string;
    readonly?: boolean;
    default?: any;
    left?: string;
    right?: string;
    template?: CmacsGridTemplateRef;
    editable?: boolean;
    filterMultiple?: boolean;
    validators?: any[];
    filters?: any[];
    placeholder?: string;
    cmacsStep?: number;
    min?: number;
    max?: number;
    showCmacsSearch?: boolean;
    mode?: string;
    resizable?: boolean;
}
export interface SelectConfig {
    selectData: any[];
    label: string;
    value: string;
}
export interface ButtonConfig {
    style: ButtonStyle;
    icon?: string;
}
export interface TagConfig {
    color?: string;
    cmacsGridType?: string;
    cmacsStatusType?: boolean;
    cmacsPriorityType?: string;
}
export declare type CmacsGridType = 'active' | 'created' | 'pre-bid' | 'archive' | 'inactive' | 'warranty';
export declare type CmacsPriorityType = 'high' | 'low' | 'medium';
export declare type SortOrder = 'ascend' | 'descend' | null;
export interface CmacsGridTemplateRef {
    ref: TemplateRef<any>;
    context: CmacsGridTemplateRefContext;
}
export interface CmacsGridTemplateRefContext {
    index: number;
    title: string;
    exportValue?: string;
}
export interface CmacsGridFilterTemplateRef {
    ref: TemplateRef<any>;
    context: any;
}
//# sourceMappingURL=grid-config.d.ts.map