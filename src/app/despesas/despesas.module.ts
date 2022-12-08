import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DespesasPage } from './despesas.page';
import { DespesasRoutingModule } from './despesas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DespesasRoutingModule
  ],
  declarations: [    
    DespesasPage
  ]

})
export class DespesasModule {}
