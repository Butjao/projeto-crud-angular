import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Telefone } from 'src/app/model/telefone';
import { TelefonesService } from 'src/app/services/telefones.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  editTelefoneForm !: FormGroup;
  telefoneId: number = 0;
  telefoneData: Telefone | null = null;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private formBuilder:FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute, 
    private telefoneService:TelefonesService, 
    private matSnackBar: MatSnackBar) {

      this.editTelefoneForm = this.formBuilder.group({
        id: [this.telefoneId],
        value: ['', Validators.required],
        monthlyPrice: ['', Validators.required],
        setupPrice: ['', Validators.required],
        currency: ['', Validators.required],
      });
    }

  ngOnInit(){
    const id = parseInt(this.route.snapshot.paramMap.get("id") || '');
    this.telefoneId = id;

    if(id !== 0) {
      this.telefoneService.getTelephoneById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.telefoneData = data;
        this.editTelefoneForm.patchValue(this.telefoneData);
      });
    }
  }

  onSubmit() {
    if(this.editTelefoneForm.valid) {
      const updatedFormData : Telefone = this.editTelefoneForm.value;
      this.telefoneService.updateTelephone(updatedFormData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data=>{
        this.showSuccessMessage('Telefone Atualizado com Sucesso.');
        this.router.navigate(['telefones']);
      })
    }
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
