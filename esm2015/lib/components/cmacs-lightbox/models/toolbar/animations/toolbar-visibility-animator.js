import { Animator } from '../../Animator';
export class ToolbarVisibilityAnimator extends Animator {
    constructor() {
        super();
    }
    show(duration, startCb, doneCb) {
        const params = {
            height: 64,
            duration
        };
        this.animate(params, () => {
            if (startCb) {
                startCb();
            }
        }, () => {
            if (doneCb) {
                doneCb();
            }
        });
    }
    hide(duration, startCb, doneCb) {
        const params = {
            height: 0,
            duration
        };
        this.animate(params, () => {
            if (startCb) {
                startCb();
            }
        }, () => {
            if (doneCb) {
                doneCb();
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci12aXNpYmlsaXR5LWFuaW1hdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L21vZGVscy90b29sYmFyL2FuaW1hdGlvbnMvdG9vbGJhci12aXNpYmlsaXR5LWFuaW1hdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsUUFBb0M7SUFFL0U7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTSxJQUFJLENBQUMsUUFBZ0IsRUFBRSxPQUFvQixFQUFFLE1BQW1CO1FBRW5FLE1BQU0sTUFBTSxHQUFHO1lBQ1gsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRO1NBQ1gsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUV0QixJQUFJLE9BQU8sRUFBRTtnQkFFVCxPQUFPLEVBQUUsQ0FBQzthQUNiO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUVKLElBQUksTUFBTSxFQUFFO2dCQUVSLE1BQU0sRUFBRSxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxJQUFJLENBQUMsUUFBZ0IsRUFBRSxPQUFvQixFQUFFLE1BQW1CO1FBRW5FLE1BQU0sTUFBTSxHQUFHO1lBQ1gsTUFBTSxFQUFFLENBQUM7WUFDVCxRQUFRO1NBQ1gsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUV0QixJQUFJLE9BQU8sRUFBRTtnQkFFVCxPQUFPLEVBQUUsQ0FBQzthQUNiO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUVKLElBQUksTUFBTSxFQUFFO2dCQUVSLE1BQU0sRUFBRSxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFRvb2xiYXJWaXNpYmlsaXR5QW5pbWF0aW9uIH0gZnJvbSAnLi90b29sYmFyLXZpc2liaWxpdHktYW5pbWF0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBbmltYXRvciB9IGZyb20gJy4uLy4uL0FuaW1hdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyVmlzaWJpbGl0eUFuaW1hdG9yIGV4dGVuZHMgQW5pbWF0b3I8VG9vbGJhclZpc2liaWxpdHlBbmltYXRpb24+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KGR1cmF0aW9uOiBudW1iZXIsIHN0YXJ0Q2I/OiAoKSA9PiB2b2lkLCBkb25lQ2I/OiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2NCxcclxuICAgICAgICAgICAgZHVyYXRpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGUocGFyYW1zLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhcnRDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0Q2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb25lQ2IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lQ2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlKGR1cmF0aW9uOiBudW1iZXIsIHN0YXJ0Q2I/OiAoKSA9PiB2b2lkLCBkb25lQ2I/OiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZShwYXJhbXMsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydENiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhcnRDYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGRvbmVDYikge1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmVDYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19