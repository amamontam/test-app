import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { IMessage } from 'src/app/shared/interfaces/messages.interface';
import { MessagesApiService } from 'src/app/shared/services/messages.api.service';
import { AddMessageModalComponent } from '../../modals/add-message-modal/add-message-modal.component';
import { DeleteMessageModalComponent } from '../../modals/delete-message-modal/delete-message-modal.component';
import { EditMessageModalComponent } from '../../modals/edit-message-modal/edit-message-modal.component';

@UntilDestroy()
@Component({
  selector: 'am-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesPageComponent implements OnInit {
  public messages: IMessage[];

  constructor(
    private messagesApi: MessagesApiService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.messagesApi
      .getMessages()
      .pipe(untilDestroyed(this))
      .subscribe((messages) => {
        this.messages = messages;
        this.cdr.markForCheck();
      });
  }

  public showCreateModal(): void {
    const createModalRef = this.dialog.open(AddMessageModalComponent, {
      width: '250px',
      height: '250px',
    });

    this.afterModalClose(createModalRef, this.messagesApi.createEditMessage);
  }

  showEditModal(message: IMessage): void {
    const editModalRef = this.dialog.open(EditMessageModalComponent, {
      width: '250px',
      height: '250px',
      data: message,
    });

    this.afterModalClose(editModalRef, this.messagesApi.createEditMessage);
  }

  showDeleteModal(message: IMessage): void {
    const deleteModalRef = this.dialog.open(DeleteMessageModalComponent, {
      width: '250px',
      height: '250px',
      data: message,
    });

    this.afterModalClose(deleteModalRef, this.messagesApi.deleteMessage);
  }

  private afterModalClose(
    modalRef: MatDialogRef<any, IMessage>,
    afterClosedFunc: (c: IMessage) => Observable<IMessage[]>
  ): void {
    modalRef
      .afterClosed()
      .pipe(
        filter((message) => Boolean(message)),
        switchMap((message: IMessage) =>
          afterClosedFunc.call(this.messagesApi, message)
        ),
        untilDestroyed(this)
      )
      .subscribe((newMessages) => {
        this.messages = newMessages;
        this.cdr.markForCheck();
      });
  }
}
