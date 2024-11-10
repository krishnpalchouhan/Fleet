import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { HomeComponent } from './views/home/home.component';

export const appRoutes: Route[] = [
  {
    path: 'todo',
    loadChildren: () =>
      loadRemoteModule('todo', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
