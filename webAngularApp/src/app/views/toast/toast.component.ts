import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  public textoToast: string = '';
  public radioToast: string = 'success';
  public isToastActive: boolean = false;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  public showToast(): void {
    let toastConfig = {
      closeButton: true,
      progressBar: true,
      timeOut: 3000
    };

    if (this.textoToast.length > 0) {
      switch (this.radioToast) {
        case 'success':
          this.toastr.success(this.textoToast, null, toastConfig);
          break;
        case 'error':
          this.toastr.error(this.textoToast, null, toastConfig);
          break;
        case 'warning':
          this.toastr.warning(this.textoToast, null, toastConfig);
          break;
        case 'info':
          this.toastr.info(this.textoToast, null, toastConfig);
          break;
        default:
          this.toastr.success(this.textoToast, null, toastConfig);
          break;
      }
  
      this.textoToast = '';
    } else {
      this.toastr.error('Nenhum texto do Toast informado', null, toastConfig);
    }
  };

}
