import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseModal } from 'src/app/shared/classes/base-modal.class';
import { IContact } from 'src/app/shared/interfaces/contacts.interface';

@Component({
  selector: 'am-delete-contact-modal',
  templateUrl: './delete-contact-modal.component.html',
  styleUrls: ['./delete-contact-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteContactModalComponent extends BaseModal<IContact> {
  constructor(
    public dialogRef: MatDialogRef<DeleteContactModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IContact
  ) {
    super(dialogRef, data);
  }
}
