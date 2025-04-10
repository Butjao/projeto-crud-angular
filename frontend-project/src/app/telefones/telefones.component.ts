import { Component, ViewChild } from '@angular/core';
import { Telefone } from '../model/telefone';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TelefonesService } from '../services/telefones.service';

@Component({
  selector: 'app-telefones',
  templateUrl: './telefones.component.html',
  styleUrls: ['./telefones.component.scss']
})
export class TelefonesComponent {

  telefones: Telefone[] = [];

  constructor(private telefonesService: TelefonesService) {
    this.telefonesService.getTelephone().subscribe((data:Telefone[]) => {
      this.telefones = data;
      this.dataSource = new MatTableDataSource(this.telefones);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  dataSource = new MatTableDataSource(this.telefones);
  
  displayColumns = ["select", "id", "value", "monthlyPrice", "setupPrice", "currency", "actions"];

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  selectHandler(row: Telefone) {
    this.selection.toggle(row as never);
  }
  
}
