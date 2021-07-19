import { CitasService } from './../servicios/service.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {
  citar: Array<any> = []
  search: any;
  displayedColumns: string[] = ['imagen', 'nombre','frase'];
  pelota: MatTableDataSource<any>=new MatTableDataSource();

  constructor(private datos: CitasService) { 
    this.search="";
    this.datos.getcitas().then(data => {
      this.pelota = data
      console.log(this.citar)
    });
  }

  ngOnInit(): void {
    this.search="";
    this.datos.getcitas()
    .then(data => {
      this.citar = data
      console.log(this.citar)
    });
    }

}
