import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IMessage } from 'src/app/shared/interfaces/messages.interface';

@Component({
  selector: 'am-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  @Input() public messageData: IMessage;

  @Output() public messageEdit = new EventEmitter<IMessage>();
  @Output() public messageDelete = new EventEmitter<void>();

  constructor() {}

  public editMessage(): void {
    this.messageEdit.emit();
  }

  public deleteMessage(): void {
    this.messageDelete.emit();
  }
}
