import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { strict } from 'assert';

@Component({
  selector: 'app-orcamentos',
  templateUrl: 'orcamentos.page.html',
  styleUrls: ['orcamentos.page.scss']

})
export class OrcamentosPage {
  @ViewChild(IonModal)
  modal!: IonModal;

  orcamentoNome: string | undefined;

  orcamentos: Array<any> = [];

  orcamentoValor: string | undefined;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {

    this.orcamentos.push({
      orcamentoNome: this.orcamentoNome,
      orcamentoValor: this.orcamentoValor
    });

    this.modal.dismiss(this.orcamentoNome, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.orcamentoNome = ev.detail.data;
    }
  }
}