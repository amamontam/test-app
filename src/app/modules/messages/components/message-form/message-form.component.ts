import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { IMessage } from '../../../../shared/interfaces/messages.interface';

@Component({
  selector: 'am-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageFormComponent implements OnChanges {
  @Input() public messageData: IMessage;

  @Output() public formSaved = new EventEmitter<IMessage>();
  @Output() public formCanceled = new EventEmitter<void>();

  public messageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      to: ['', [Validators.required]],
      messageText: ['', [Validators.required]],
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['messageData'].currentValue) {
      const { to, messageText } = changes['messageData'].currentValue;
      this.messageForm.patchValue({ to, messageText });
    }
  }

  public sendMessage(): void {
    let message: IMessage;
    if (this.messageData) {
      message = {
        ...this.messageData,
        ...this.messageForm.getRawValue(),
        sendingDate: new Date().toISOString(),
      };
    } else {
      message = <IMessage>{
        ...this.messageForm.getRawValue(),
        id: UUID.UUID(),
        sendingDate: new Date().toISOString(),
      };
    }

    this.formSaved.emit(message);
  }

  public cancelForm(): void {
    this.formCanceled.emit();
  }
}
