import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public microReact: WebComponentWrapperOptions = {
    remoteEntry: 'http://localhost:4001/remoteEntry.js',
    exposedModule: './react-web-component',
    remoteName: 'reactMf',
    elementName: 'react-element',
  };
  public microAngular: WebComponentWrapperOptions = {
    type: 'module',
    remoteEntry: '/micro-angular/remoteEntry.js',
    exposedModule: './angular-web-component',
    elementName: 'angular-element',
  };

  public props: any = {
    props: {},
  };
  title = 'host-angular';
}
