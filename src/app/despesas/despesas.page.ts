import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-despesas',
  templateUrl: 'despesas.page.html',
  styleUrls: ['despesas.page.scss']

})
export class DespesasPage {
  @ViewChild(IonModal)
  modal!: IonModal;

  tipoDespesa: string | undefined;

  despesas: Array<any> = [];

  
  

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.despesas.push({
      tipoDespesa: this.tipoDespesa

    });
    this.modal.dismiss(this.tipoDespesa, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.tipoDespesa = ev.detail.data;
    }
  }
}