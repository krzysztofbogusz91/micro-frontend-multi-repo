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
  // public microReact: WebComponentWrapperOptions = {
  //   remoteEntry: '/micro-feed/remoteEntry.js',
  //   type: 'module',
  //   exposedModule: './web-component',
  //   elementName: 'feed-component',
  // };
  public microAngular: WebComponentWrapperOptions = {
    remoteName: 'angularMf',
    remoteEntry: '/micro-angular/remoteEntry.js',
    exposedModule: './web-component',
    elementName: 'angular-element',
  };

  public props: any = {
    props: {},
  };
  title = 'host-angular';
}
