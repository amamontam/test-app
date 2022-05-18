import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { TranslateModule } from '@ngx-translate/core';
import { MessageComponent } from './components/message/message.component';
import { AddMessageModalComponent } from './modals/add-message-modal/add-message-modal.component';
import { EditMessageModalComponent } from './modals/edit-message-modal/edit-message-modal.component';
import { DeleteMessageModalComponent } from './modals/delete-message-modal/delete-message-modal.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MessagesPageComponent,
    MessageComponent,
    AddMessageModalComponent,
    EditMessageModalComponent,
    DeleteMessageModalComponent,
    MessageFormComponent,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    HeaderModule,
    TranslateModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [],
  providers: [],
})
export class MessagesModule {}
