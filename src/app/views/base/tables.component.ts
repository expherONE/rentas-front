import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../crud.service';


@Component({
  selector: 'tables',
  templateUrl: 'tables.component.html'

})
export class TablesComponent implements OnInit{

  constructor(public crudservice: CrudService ) { }

  ngOnInit() {
    //INICIA SERVICIO DE ADQUISICION DE DATOS
    this.crudservice.getCrud()
    .subscribe(
      photos=> console.log(photos),
      err => console.log(err)
      )
  }
}
