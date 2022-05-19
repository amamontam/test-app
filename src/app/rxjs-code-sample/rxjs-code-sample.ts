// public updateVirtualSensor(virtualSensor: VirtualSensor): Observable<VirtualSensor> {
//   return this.selectedAssetService.getSelectedAsset().pipe( // getting selected asset from subject.asObservable()
//     filter((selectedAsset) => Boolean(selectedAsset)), // filtering empty values
//     first(), // getting only first non empty value
//     switchMap(({ Id }) => {
//       return this.virtualSensorsApiService.updateVirtualSensor(Id, virtualSensor).pipe( // request on update virtualSensor in current asset and return it to subscriber
//         tap((updatedVirtualSensor) => { // after getting successful response show toast message
//           const toastConfig = buildEditVirtualSensorToastConfig(updatedVirtualSensor);
//           this.toastService.showMessage(toastConfig);
//         }),
//         catchError((error: HttpErrorResponse) => { // after getting failed response show toast message and throwError to next handler
//           const toastConfig = buildErrorEditVirtualSensorToastConfig(virtualSensor);
//           this.toastService.showMessage(toastConfig);
//           return throwError(error);
//         }),
//       );
//     }),
//   );
// }
