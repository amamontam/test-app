import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { AddContactModalComponent } from './modals/add-contact-modal/add-contact-modal.component';
import { DeleteContactModalComponent } from './modals/delete-contact-modal/delete-contact-modal.component';
import { EditContactModalComponent } from './modals/edit-contact-modal/edit-contact-modal.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  declarations: [
    ContactsPageComponent,
    AddContactModalComponent,
    DeleteContactModalComponent,
    EditContactModalComponent,
    ContactComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    TranslateModule,
    MatDialogModule,
    ReactiveFormsModule,
    HeaderModule,
  ],
  exports: [],
  providers: [],
})
export class ContactsModule {}
