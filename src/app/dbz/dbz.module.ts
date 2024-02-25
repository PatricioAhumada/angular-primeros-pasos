import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageomponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddcharacterComponent } from './components/addcharacter/addcharacter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations:[
    MainPageomponent,
    ListComponent,
    AddcharacterComponent
  ],
  exports:[
    MainPageomponent
  ]
})
export class DbzModule { }
