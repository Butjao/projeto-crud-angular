import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelefonesRoutingModule } from './telefones-routing.module';
import { TelefonesComponent } from './telefones.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TelefonesComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    TelefonesRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class TelefonesModule { }
