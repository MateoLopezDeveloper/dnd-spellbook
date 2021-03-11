import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TheSpell } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-spell-page',
  templateUrl: './spell-page.component.html',
  styleUrls: ['./spell-page.component.scss'],
})
export class SpellPageComponent implements OnInit {

  @Input() spellObtained: TheSpell;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
