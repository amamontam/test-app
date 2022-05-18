import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseModal } from 'src/app/shared/classes/base-modal.class';
import { IMessage } from 'src/app/shared/interfaces/messages.interface';

@Component({
  selector: 'am-delete-message-modal',
  templateUrl: './delete-message-modal.component.html',
  styleUrls: ['./delete-message-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteMessageModalComponent extends BaseModal<IMessage> {
  constructor(
    public dialogRef: MatDialogRef<DeleteMessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMessage
  ) {
    super(dialogRef, data);
  }
}
