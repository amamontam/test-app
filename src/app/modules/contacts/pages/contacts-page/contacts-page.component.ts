import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { IContact } from 'src/app/shared/interfaces/contacts.interface';
import { ContactsApiService } from 'src/app/shared/services/contacts.api.service';
import { AddContactModalComponent } from '../../modals/add-contact-modal/add-contact-modal.component';
import { DeleteContactModalComponent } from '../../modals/delete-contact-modal/delete-contact-modal.component';
import { EditContactModalComponent } from '../../modals/edit-contact-modal/edit-contact-modal.component';

@UntilDestroy()
@Component({
  selector: 'am-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsPageComponent implements OnInit {
  public contacts: IContact[];

  constructor(
    private contactsApi: ContactsApiService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.contactsApi
      .getContacts()
      .pipe(untilDestroyed(this))
      .subscribe((contacts) => {
        this.contacts = contacts;
        this.cdr.markForCheck();
      });
  }

  public showCreateModal(): void {
    const createModalRef = this.dialog.open(AddContactModalComponent, {
      width: '250px',
      height: '250px',
    });

    this.afterModalClose(createModalRef, this.contactsApi.createEditContact);
  }

  showEditModal(contact: IContact): void {
    const editModalRef = this.dialog.open(EditContactModalComponent, {
      width: '250px',
      height: '250px',
      data: contact,
    });

    this.afterModalClose(editModalRef, this.contactsApi.createEditContact);
  }

  showDeleteModal(contact: IContact): void {
    const deleteModalRef = this.dialog.open(DeleteContactModalComponent, {
      width: '250px',
      height: '250px',
      data: contact,
    });

    this.afterModalClose(deleteModalRef, this.contactsApi.deleteContact);
  }

  private afterModalClose(
    modalRef: MatDialogRef<any, IContact>,
    afterClosedFunc: (c: IContact) => Observable<IContact[]>
  ): void {
    modalRef
      .afterClosed()
      .pipe(
        filter((contact) => Boolean(contact)),
        switchMap((contact: IContact) =>
          afterClosedFunc.call(this.contactsApi, contact)
        ),
        untilDestroyed(this)
      )
      .subscribe((newContacts) => {
        this.contacts = newContacts;
        this.cdr.markForCheck();
      });
  }
}
