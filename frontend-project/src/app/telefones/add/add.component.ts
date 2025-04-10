import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Telefone } from 'src/app/model/telefone';
import { TelefonesService } from 'src/app/services/telefones.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  phone: string = '';
  private subscription: Subscription | undefined;

  constructor(private telefoneService:TelefonesService, private router:Router, private matSnackBar: MatSnackBar) {}
  
  newTelefone: Telefone = {
    id: undefined,
    value: "",
    monthlyPrice: 0,
    setupPrice: 0,
    currency: "",
  }

  saveTelefone() {
    this.subscription = this.telefoneService.createTelephone(this.newTelefone).subscribe(data => {
      this.showSuccessMessage("Telefone adicionado com sucesso.");
      this.router.navigate(["telefones"]);
    })
  }

  showSuccessMessage(message: string) {
    this.matSnackBar.open(message, 'Close', {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
