import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrcamentosRoutingModule } from './orcamentos-routing.module';
import { OrcamentosPage } from './orcamentos.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OrcamentosRoutingModule
  ],
  declarations: [    
    OrcamentosPage
  ]

})
export class OrcamentosModule {}
