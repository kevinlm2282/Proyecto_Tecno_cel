import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DosComponent } from './dos/dos.component';
import { NavComponent } from './nav/nav.component';
import { Table1Component } from './table1/table1.component';
// import { Table1Component } from './table1/table1.component';
import { TresComponent } from './tres/tres.component';
import { UnoComponent } from './uno/uno.component';

const routes: Routes = [
  {path: '', component: NavComponent},
  {path: 'uno',component: UnoComponent},
  {path: 'dash',component: DashComponent},
  {path: 'dos',component: DosComponent},
  {path: 'tabla',component:Table1Component},
  {
    path:'tres',component: TresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
