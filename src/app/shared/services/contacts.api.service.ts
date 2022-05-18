import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IContact } from '../interfaces/contacts.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactsApiService {
  public contacts = new Map<string, IContact>();

  constructor(private http: HttpClient) {}

  public getContacts(): Observable<IContact[]> {
    let contactList: IContact[] = JSON.parse(localStorage.getItem('contacts'));
    if (!contactList || !contactList.length) {
      return this.http.get<IContact[]>('assets/mocks/contacts.mock.json').pipe(
        tap((contacts) => {
          contacts.forEach((contact) => {
            this.contacts.set(contact.id, contact);
          });
          localStorage.setItem('contacts', JSON.stringify(contacts));
        })
      );
    }
    contactList.forEach((contact) => {
      this.contacts.set(contact.id, contact);
    });
    return of(contactList);
  }

  public createEditContact(contact: IContact): Observable<IContact[]> {
    this.contacts.set(contact.id, contact);
    return this.updateContactList();
  }

  public deleteContact(contact: IContact): Observable<IContact[]> {
    this.contacts.delete(contact.id);
    return this.updateContactList();
  }

  private updateContactList(): Observable<IContact[]> {
    const newContactList = [...this.contacts.values()];
    localStorage.setItem('contacts', JSON.stringify(newContactList));
    return of(newContactList);
  }
}
