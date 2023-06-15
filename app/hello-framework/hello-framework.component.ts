import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello-framework',
  styleUrls: ['./hello-framework.component.scss'],
  templateUrl: './hello-framework.component.html',
})
export class HelloFrameworkComponent {
  items: string[] = [
    { name: 'Item 1', description: 'Description 1' },
    { name: 'Item 2', description: 'Description 2' },
    { name: 'Item 3', description: 'Description 3' },
  ];
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
  @Output() clickMe: EventEmitter<void> = new EventEmitter();
  handleReleaseClick(): void {
    console.log('Button clicked');
    this.clickMe.emit();
  }
}
