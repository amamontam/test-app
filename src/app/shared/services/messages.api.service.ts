import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IMessage } from '../interfaces/messages.interface';

@Injectable({
  providedIn: 'root',
})
export class MessagesApiService {
  public messages = new Map<string, IMessage>();

  constructor(private http: HttpClient) {}

  public getMessages(): Observable<IMessage[]> {
    let messageList: IMessage[] = JSON.parse(localStorage.getItem('messages'));
    if (!messageList || !messageList.length) {
      return this.http.get<IMessage[]>('assets/mocks/messages.mock.json').pipe(
        tap((messages) => {
          messages.forEach((message) => {
            this.messages.set(message.id, message);
          });
          localStorage.setItem('messages', JSON.stringify(messages));
        })
      );
    }
    messageList.forEach((message) => {
      this.messages.set(message.id, message);
    });
    return of(messageList);
  }

  public createEditMessage(message: IMessage): Observable<IMessage[]> {
    this.messages.set(message.id, message);
    return this.updateMessageList();
  }

  public deleteMessage(message: IMessage): Observable<IMessage[]> {
    this.messages.delete(message.id);
    return this.updateMessageList();
  }

  private updateMessageList(): Observable<IMessage[]> {
    const newMessageList = [...this.messages.values()];
    localStorage.setItem('messages', JSON.stringify(newMessageList));
    return of(newMessageList);
  }
}
