import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CALENDAR_ROUTE_CONFIG,
  CONTACTS_ROUTE_CONFIG,
  HOME_ROUTE_CONFIG,
  MESSAGES_ROUTE_CONFIG,
} from './shared/constants/routing-path.consts';

const routes: Routes = [
  {
    path: HOME_ROUTE_CONFIG.path,
    loadChildren: () =>
      import('./modules/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: MESSAGES_ROUTE_CONFIG.path,
    loadChildren: () =>
      import('./modules/messages/messages.module').then(
        (module) => module.MessagesModule
      ),
  },
  {
    path: CONTACTS_ROUTE_CONFIG.path,
    loadChildren: () =>
      import('./modules/contacts/contacts.module').then(
        (module) => module.ContactsModule
      ),
  },
  {
    path: CALENDAR_ROUTE_CONFIG.path,
    loadChildren: () =>
      import('./modules/calendar/calendar.module').then(
        (module) => module.CalendarModule
      ),
  },
  { path: '**', redirectTo: HOME_ROUTE_CONFIG.path },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
