import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { TelefonesService } from 'src/app/services/telefones.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  telefoneId !: Number;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private router:ActivatedRoute, private route: Router, private telefoneService:TelefonesService, private matSnackBar: MatSnackBar) {
    this.telefoneId = parseInt(this.router.snapshot.paramMap.get("id") || "");
    
    this.telefoneService.deleteTelephone(this.telefoneId)
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      this.showSuccessMessage('Telefone Deletado com Sucesso.');
      this.route.navigate(['telefones']);
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
    this.destroy$.next();
    this.destroy$.complete();
  }
}
