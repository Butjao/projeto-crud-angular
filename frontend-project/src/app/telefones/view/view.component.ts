import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Telefone } from 'src/app/model/telefone';
import { TelefonesService } from 'src/app/services/telefones.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  telefoneDetails!: Telefone;
  telefoneId !: Number;
  private destroy$ :Subject<void> = new Subject<void>();

  constructor(private telefoneService:TelefonesService, private router: ActivatedRoute) {
    this.telefoneId = parseInt(this.router.snapshot.paramMap.get("id") || '');
    
    this.telefoneService.getTelephoneById(this.telefoneId)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data:Telefone) => { 
      this.telefoneDetails = data;
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
