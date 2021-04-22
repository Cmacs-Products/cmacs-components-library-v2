import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { CmacsCardTabComponent } from './cmacs-card-tab.component';
import { VgAPI } from 'ngx-videogular';
import { Source } from "../cmacs-video-player/cmacs-video-player.component";
import { DomSanitizer } from "@angular/platform-browser";
import * as i0 from "@angular/core";
export declare type CmacsCardType = 'file' | 'selection' | 'action' | 'team' | 'project' | 'folder' | 'measure' | 'weather' | 'big-file' | 'none' | 'video' | 'todo';
export interface BigFile {
    title?: string;
    extension?: string;
    created_at?: string;
}
export interface Weather {
    temp?: number;
    temp_min?: number;
    temp_max?: number;
    humidity?: number;
    description?: string;
    icon?: string;
    clouds_all?: number;
    wind_speed?: number;
}
export declare class CmacsCardComponent implements OnInit {
    private cdr;
    private sanitizer;
    folderIcon: string;
    isEditable: boolean;
    bordered: boolean;
    opened: boolean;
    editable: boolean;
    isRadio: boolean;
    loading: boolean;
    disabled: boolean;
    hoverable: boolean;
    useDefaultContent: boolean;
    sources: Source[];
    playerReady: EventEmitter<VgAPI>;
    bodyStyle: {
        [key: string]: string;
    };
    cover: TemplateRef<void>;
    body: TemplateRef<void>;
    actions: Array<TemplateRef<void>>;
    team: any;
    file: BigFile;
    project: any;
    projectDateLabel: string;
    todo: any;
    weather: Weather;
    celcius: boolean;
    type: string;
    cmacsType: CmacsCardType;
    cmacsIcon: string;
    cmacsIconOpenedFolder: string;
    cmacsIconClosedFolder: string;
    title: string | TemplateRef<void>;
    labelTitle: string;
    titleChange: EventEmitter<string>;
    extra: string | TemplateRef<void>;
    tab: CmacsCardTabComponent;
    ondlclickCard: EventEmitter<any>;
    open: EventEmitter<any>;
    close: EventEmitter<any>;
    selected: boolean;
    value: any;
    selectedChange: EventEmitter<boolean>;
    goToModule: EventEmitter<string>;
    todoUserAssigned: TemplateRef<void>;
    iconToDoClick: EventEmitter<any>;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, sanitizer: DomSanitizer, elementRef: ElementRef);
    openMail($event: Event): void;
    ngOnInit(): void;
    onPlayerReady(api: VgAPI): void;
    checkRadio(): void;
    onClick(event: Event): void;
    onDblClick(event: Event): void;
    tapTimeoutHandler: any;
    onTouchStart($event: Event): void;
    markForCheck(): void;
    select(event: Event): void;
    handleEnter(event: KeyboardEvent, titleContainer: any, titleSpan: any): void;
    handleEdit(event: KeyboardEvent, titleSpan: any): void;
    toggleEdit(titleContainer: any): void;
    getInitials(name: any): any;
    getBackgroundImage(): import("@angular/platform-browser").SafeStyle;
    iconsToDoClick(icon: string): void;
    goToModuleToDo(event: any, url: string): void;
    buildLabel(value: string): string;
    static ɵfac: i0.ɵɵFactoryDef<CmacsCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsCardComponent, "cmacs-card", ["cmacsCard"], { "bordered": "bordered"; "opened": "opened"; "editable": "editable"; "isRadio": "isRadio"; "loading": "loading"; "disabled": "disabled"; "hoverable": "hoverable"; "useDefaultContent": "useDefaultContent"; "sources": "sources"; "bodyStyle": "bodyStyle"; "cover": "cover"; "body": "body"; "actions": "actions"; "team": "team"; "file": "file"; "project": "project"; "projectDateLabel": "projectDateLabel"; "todo": "todo"; "weather": "weather"; "celcius": "celcius"; "type": "type"; "cmacsType": "cmacsType"; "cmacsIcon": "cmacsIcon"; "cmacsIconOpenedFolder": "cmacsIconOpenedFolder"; "cmacsIconClosedFolder": "cmacsIconClosedFolder"; "title": "title"; "labelTitle": "labelTitle"; "extra": "extra"; "selected": "selected"; "value": "value"; "todoUserAssigned": "todoUserAssigned"; }, { "playerReady": "playerReady"; "titleChange": "titleChange"; "ondlclickCard": "ondlclickCard"; "open": "open"; "close": "close"; "selectedChange": "selectedChange"; "goToModule": "goToModule"; "iconToDoClick": "iconToDoClick"; }, ["tab"], ["*", "[cmacs-action-panel]"]>;
}
//# sourceMappingURL=cmacs-card.component.d.ts.map