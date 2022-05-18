import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { IContact } from 'src/app/shared/interfaces/contacts.interface';

@Component({
  selector: 'am-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnChanges {
  @Input() public contactData: IContact;

  @Output() public formSaved = new EventEmitter<IContact>();
  @Output() public formCanceled = new EventEmitter<void>();

  public contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['contactData'].currentValue) {
      const { firstName, lastName, email } =
        changes['contactData'].currentValue;
      this.contactForm.patchValue({ firstName, lastName, email });
    }
  }

  public saveContact(): void {
    let contact: IContact;
    if (this.contactData) {
      contact = {
        ...this.contactData,
        ...this.contactForm.getRawValue(),
      };
    } else {
      contact = <IContact>{
        ...this.contactForm.getRawValue(),
        id: UUID.UUID(),
      };
    }

    this.formSaved.emit(contact);
  }

  public cancelForm(): void {
    this.formCanceled.emit();
  }
}
