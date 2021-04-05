import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { ModalConfig } from './cmacs-modal-config';
import { ModalControlService } from './cmacs-modal-control.service';
import { CmacsModalRef } from './cmacs-modal-ref.class';
import { ModalButtonOptions, ModalOptions, ModalType, OnClickCallback } from './cmacs-modal.type';
import * as i0 from "@angular/core";
export declare const MODAL_ANIMATE_DURATION = 200;
export declare class CmacsModalComponent<T = any, R = any> extends CmacsModalRef<T, R> implements OnInit, OnChanges, AfterViewInit, OnDestroy, ModalOptions<T> {
    private overlay;
    private i18n;
    private cfr;
    private elementRef;
    private viewContainer;
    private modalControl;
    private focusTrapFactory;
    private cdr;
    private modalGlobalConfig;
    private document;
    visible: boolean;
    closable: boolean;
    okLoading: boolean;
    okDisabled: boolean;
    cancelDisabled: boolean;
    cancelLoading: boolean;
    keyboard: boolean;
    noAnimation: boolean;
    cmacsMask: boolean;
    cmacsMaskClosable: boolean;
    showHelpfulTips: boolean;
    useCmacsDefaultSizes: boolean;
    content: string | TemplateRef<{}> | Type<T>;
    componentParams: T;
    footer: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null;
    getContainer: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    zIndex: number;
    leftPanelCols: number;
    centerPanelCols: number;
    rightPanelCols: number;
    width: number | string;
    wrapClassName: string;
    className: string;
    cmacsStyle: object;
    title: string | TemplateRef<{}>;
    cmacsTitle: string | TemplateRef<{}>;
    maskStyle: object;
    bodyStyle: object;
    cmacsOkText: string | null;
    cmacsCancelText: string | null;
    okType: string;
    iconType: string;
    modalType: ModalType;
    readonly onOk: EventEmitter<T> | OnClickCallback<T>;
    readonly onCancel: EventEmitter<T> | OnClickCallback<T>;
    readonly cmacsAfterOpen: EventEmitter<void>;
    readonly cmacsAfterClose: EventEmitter<R>;
    readonly visibleChange: EventEmitter<boolean>;
    modalContainer: ElementRef;
    bodyContainer: ViewContainerRef;
    autoFocusButtonOk: ElementRef;
    tipsCreationWizard: QueryList<any>;
    getClass(): string;
    get afterOpen(): Observable<void>;
    get afterClose(): Observable<R>;
    get cancelText(): string;
    get okText(): string;
    get hidden(): boolean;
    /**
     * @description
     * The calculated highest weight of mask value
     *
     * Weight of different mask input:
     * component default value < global configuration < component input value
     */
    get mask(): boolean;
    /**
     * @description
     * The calculated highest weight of maskClosable value
     *
     * Weight of different maskClosable input:
     * component default value < global configuration < component input value
     */
    get maskClosable(): boolean;
    locale: {
        okText?: string;
        cancelText?: string;
    };
    maskAnimationClassMap: object | null;
    modalAnimationClassMap: object | null;
    transformOrigin: string;
    private contentComponentRef;
    private animationState;
    private container;
    private unsubscribe$;
    private previouslyFocusedElement;
    private focusTrap;
    private scrollStrategy;
    [key: string]: any;
    constructor(overlay: Overlay, i18n: NzI18nService, cfr: ComponentFactoryResolver, elementRef: ElementRef, viewContainer: ViewContainerRef, modalControl: ModalControlService, focusTrapFactory: FocusTrapFactory, cdr: ChangeDetectorRef, modalGlobalConfig: ModalConfig, document: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    transformToDefaultSizes(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    destroyModal(): void;
    keydownListener(event: KeyboardEvent): void;
    open(): void;
    close(result?: R): void;
    destroy(result?: R): void;
    triggerOk(): void;
    triggerCancel(): void;
    getInstance(): CmacsModalComponent;
    getContentComponentRef(): ComponentRef<T>;
    getContentComponent(): T;
    getElement(): HTMLElement;
    onClickMask($event: MouseEvent): void;
    isModalType(type: ModalType): boolean;
    onClickCloseBtn(): void;
    closeInteraction(): void;
    onClickOkCancel(type: 'ok' | 'cancel'): void;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    isComponent(value: {}): boolean;
    isModalButtons(value: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null): boolean;
    private handleVisibleStateChange;
    getButtonCallableProp(options: ModalButtonOptions<T>, prop: string): {};
    onButtonClick(button: ModalButtonOptions<T>): void;
    private changeVisibleFromInside;
    private changeAnimationState;
    private animateTo;
    private formatModalButtons;
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    private createDynamicComponent;
    private updateTransformOrigin;
    private savePreviouslyFocusedElement;
    private trapFocus;
    private restoreFocus;
    static ɵfac: i0.ɵɵFactoryDef<CmacsModalComponent<any, any>, [null, null, null, null, null, null, null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsModalComponent<any, any>, "cmacs-modal", ["cmacsModal"], { "visible": "visible"; "closable": "closable"; "okLoading": "okLoading"; "okDisabled": "okDisabled"; "cancelDisabled": "cancelDisabled"; "cancelLoading": "cancelLoading"; "keyboard": "keyboard"; "noAnimation": "noAnimation"; "cmacsMask": "cmacsMask"; "cmacsMaskClosable": "cmacsMaskClosable"; "showHelpfulTips": "showHelpfulTips"; "useCmacsDefaultSizes": "useCmacsDefaultSizes"; "content": "content"; "componentParams": "componentParams"; "footer": "footer"; "getContainer": "getContainer"; "zIndex": "zIndex"; "leftPanelCols": "leftPanelCols"; "centerPanelCols": "centerPanelCols"; "rightPanelCols": "rightPanelCols"; "width": "width"; "wrapClassName": "wrapClassName"; "className": "className"; "cmacsStyle": "cmacsStyle"; "title": "title"; "cmacsTitle": "cmacsTitle"; "maskStyle": "maskStyle"; "bodyStyle": "bodyStyle"; "cmacsOkText": "cmacsOkText"; "cmacsCancelText": "cmacsCancelText"; "okType": "okType"; "iconType": "iconType"; "modalType": "modalType"; "onOk": "onOk"; "onCancel": "onCancel"; }, { "onOk": "onOk"; "onCancel": "onCancel"; "cmacsAfterOpen": "cmacsAfterOpen"; "cmacsAfterClose": "cmacsAfterClose"; "visibleChange": "visibleChange"; }, never, ["*", "[cmacs-modal-creation-left-panel]", "[cmacs-modal-creation-center-panel]", "[cmacs-modal-creation-right-panel]", "[cmacs-modal-helpful-center-panel]", "[cmacs-modal-helpful-right-panel]", "[cmacs-modal-helpfulTips-no-panel-center]"]>;
}
//# sourceMappingURL=cmacs-modal.component.d.ts.map