import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import {ArrendatarioComponent} from './arrendatario/arrendatario.component'
import { CentroComponent} from './centro/centro.component'
import {ContratoComponent} from './contrato/contrato.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'tables'
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Concentrado Centros Recreativos'
        }
      },
      {
        path: 'centro',
        component: CentroComponent,
        data: {
          title: 'Centro'
        }
      },
      {
      path: 'arrendatario',
      component: ArrendatarioComponent,
      data: {
        title: 'Arrendatario'
        }
      },
      {
        path: 'contrato',
        component: ContratoComponent,
        data: {
          title: 'Contrato'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
