import { AnimationEvent } from '@angular/animations';
import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, Injector, OnDestroy, OnInit } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzSingletonService } from 'ng-zorro-antd/core/services';
import { Subject } from 'rxjs';
import { MessageConfig, NzMessageData, NzMessageDataOptions } from './typings';
import * as i0 from "@angular/core";
export declare abstract class NzMNService {
    protected nzSingletonService: NzSingletonService;
    protected overlay: Overlay;
    private injector;
    protected abstract componentPrefix: string;
    protected container?: NzMNContainerComponent;
    constructor(nzSingletonService: NzSingletonService, overlay: Overlay, injector: Injector);
    remove(id?: string): void;
    protected getInstanceId(): string;
    protected withContainer<T extends NzMNContainerComponent>(ctor: ComponentType<T>): T;
}
export declare abstract class NzMNContainerComponent implements OnInit, OnDestroy {
    protected cdr: ChangeDetectorRef;
    protected nzConfigService: NzConfigService;
    config?: Required<MessageConfig>;
    instances: Array<Required<NzMessageData>>;
    protected readonly destroy$: Subject<void>;
    constructor(cdr: ChangeDetectorRef, nzConfigService: NzConfigService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    create(data: NzMessageData): Required<NzMessageData>;
    remove(id: string, userAction?: boolean): void;
    removeAll(): void;
    protected onCreate(instance: NzMessageData): Required<NzMessageData>;
    protected onRemove(instance: Required<NzMessageData>, userAction: boolean): void;
    protected readyInstances(): void;
    protected abstract updateConfig(): void;
    protected abstract subscribeConfigChange(): void;
    protected mergeOptions(options?: NzMessageDataOptions): NzMessageDataOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzMNContainerComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzMNContainerComponent, never, never, {}, {}, never, never, false, never>;
}
export declare abstract class NzMNComponent implements OnInit, OnDestroy {
    protected cdr: ChangeDetectorRef;
    instance: Required<NzMessageData>;
    index?: number;
    readonly destroyed: EventEmitter<{
        id: string;
        userAction: boolean;
    }>;
    readonly animationStateChanged: Subject<AnimationEvent>;
    protected options: Required<NzMessageDataOptions>;
    protected autoClose?: boolean;
    protected closeTimer?: number;
    protected userAction: boolean;
    protected eraseTimer: number | null;
    protected eraseTimingStart?: number;
    protected eraseTTL: number;
    protected constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onEnter(): void;
    onLeave(): void;
    protected destroy(userAction?: boolean): void;
    private initErase;
    private updateTTL;
    private startEraseTimeout;
    private clearEraseTimeout;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzMNComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzMNComponent, never, never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=base.d.ts.map