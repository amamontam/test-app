import { Directive, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Directive()
export class BaseModal<T> {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: T
  ) {}

  public submitModal(data: T): void {
    this.dialogRef.close(data);
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
