import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng6-bootstrap-modal";
export interface ConfirmModel {
  title:string;
  message:string;
  exception:string;
}
@Component({  
    selector: 'alert',
    template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                   <h4 class="modal-title">{{title || 'Alert'}}</h4>
                     <button type="button" class="close float-right" (click)="close()" >&times;</button>
                   </div>
                   <div class="modal-body">

                   <div class="row">

                   <div class="col-md-12">{{ message }}
                      <button *ngIf="exception" class="btn btn-primary float-right" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Exception
                      </button>
                     </div>

                   </div>
                     
                    
                     <div class="row" *ngIf="exception">
                     <div class="col-md-12">
                      <div class="collapse " id="collapseExample">
                        <div class="alert alert-danger mt-2" role="alert">
                          {{ exception }}
                        </div>
                      </div>
                     </div>
                     </div>
                     
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
                   </div>
                 </div>
              </div>`
})
export class AlertComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  exception:string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }
}
