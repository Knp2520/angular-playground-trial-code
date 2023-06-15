import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'hello-framework',
  styleUrls: ['./hello-framework.component.scss'],
  templateUrl: './hello-framework.component.html',
})
@Directive({
  selector: '[showToolTip]',
})
export class HelloFrameworkComponent {
  @Input()
  name: string;
  @Input() hello: string;
  @Input()
  version: number;
  @Output()
  readonly release: EventEmitter<void> = new EventEmitter();
  handleReleaseVersion(): void {
    console.log('Button clicked Release');
    this.release.emit();
  }
  @Input('showToolTip') toolTipText: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.showToolTip();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hideToolTip();
  }

  private showToolTip() {
    // Logic to display tooltip, e.g., using a tooltip library or custom implementation
    console.log(this.toolTipText);
  }
  private hideToolTip() {
    // Logic to hide tooltip
  }
}
