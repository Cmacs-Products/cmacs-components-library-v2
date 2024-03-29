import { Observable } from 'rxjs';
import { CmacsModalComponent } from './cmacs-modal.component';
/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 */
export declare abstract class CmacsModalRef<T = any, R = any> {
    abstract afterOpen: Observable<void>;
    abstract afterClose: Observable<R>;
    abstract open(): void;
    abstract close(result?: R): void;
    abstract destroy(result?: R): void;
    /**
     * Trigger the nzOnOk/nzOnCancel by manual
     */
    abstract triggerOk(): void;
    abstract triggerCancel(): void;
    /**
     * Return the component instance of nzContent when specify nzContent as a Component
     * Note: this method may return undefined if the Component has not ready yet. (it only available after Modal's ngOnInit)
     */
    abstract getContentComponent(): T;
    /**
     * Get the dom element of this Modal
     */
    abstract getElement(): HTMLElement;
    /**
     * Get the instance of the Modal itself
     */
    abstract getInstance(): CmacsModalComponent;
}
//# sourceMappingURL=cmacs-modal-ref.class.d.ts.map