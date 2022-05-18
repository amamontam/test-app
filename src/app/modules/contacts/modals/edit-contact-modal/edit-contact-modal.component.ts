import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseModal } from 'src/app/shared/classes/base-modal.class';
import { IContact } from 'src/app/shared/interfaces/contacts.interface';

@Component({
  selector: 'am-edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styleUrls: ['./edit-contact-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditContactModalComponent extends BaseModal<IContact> {
  constructor(
    public dialogRef: MatDialogRef<EditContactModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IContact
  ) {
    super(dialogRef, data);
  }
}
