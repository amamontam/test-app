import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contacts.interface';

@Component({
  selector: 'am-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  @Input() public contactData: IContact;

  @Output() public contactEdit = new EventEmitter<IContact>();
  @Output() public contactDelete = new EventEmitter<void>();

  constructor() {}

  public editContact(): void {
    this.contactEdit.emit();
  }

  public deleteContact(): void {
    this.contactDelete.emit();
  }
}
