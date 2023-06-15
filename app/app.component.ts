import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly name: string = 'Angular';
  version: number = 7;
  hello: string = 'Hello everyone!!';

  onVersionRelease(): void {
    this.version += 1;
  }
}
