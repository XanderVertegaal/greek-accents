import { Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy {
  @Input() tooltip = '';
  @Input() delay: undefined | number = 190;
  private tooltipPopup: HTMLDivElement | null = null;
  private timer: number | null = null;

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.timer = setTimeout(() => {
      const x = this.el.nativeElement.getBoundingClientRect().left + this.el.nativeElement.offsetWidth / 2; // Get the middle of the element
      const y = this.el.nativeElement.getBoundingClientRect().top + this.el.nativeElement.offsetHeight + 6;
      this.createTooltipPopup(x, y);
    }, this.delay);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.tooltipPopup) {
      this.tooltipPopup.remove();
    }
  }

  ngOnDestroy(): void {
    if (this.tooltipPopup) {
      this.tooltipPopup.remove();
    }
  }



  private createTooltipPopup(x: number, y: number) {
    const popup = document.createElement('div');
    popup.innerHTML = this.tooltip;
    popup.setAttribute('class', 'tooltip-container');
    popup.style.top = y.toString() + 'px';
    popup.style.left = x.toString() + 'px';
    document.body.appendChild(popup);
    this.tooltipPopup = popup;
    setTimeout(() => {
      if (this.tooltipPopup) {
        this.tooltipPopup.remove();
      }
    }, 5000); // Remove tooltip after 5 seconds
  }


}
