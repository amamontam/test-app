import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseModal } from 'src/app/shared/classes/base-modal.class';
import { IMessage } from 'src/app/shared/interfaces/messages.interface';

@Component({
  selector: 'am-add-message-modal',
  templateUrl: './add-message-modal.component.html',
  styleUrls: ['./add-message-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMessageModalComponent extends BaseModal<IMessage> {
  constructor(
    public dialogRef: MatDialogRef<AddMessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMessage
  ) {
    super(dialogRef, data);
  }
}
