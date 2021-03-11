import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Classdnd } from 'src/app/interfaces/interfaces';
import { TheSpell } from '../../interfaces/interfaces';
import { SpellPageComponent } from '../spell-page/spell-page.component';

@Component({
  selector: 'app-spellcard',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss'],
})

export class SpellListComponent implements OnInit {

  @Input() spell: Classdnd;
  @Input() spellObtained: TheSpell;

  api2: string = 'https://www.dnd5eapi.co'

  constructor(private http: HttpClient,
              private modalCtrl: ModalController) { }

  ngOnInit() {}

  

  linkSpell(spell: Classdnd){
    this.api2 = 'https://www.dnd5eapi.co';
    this.api2 = this.api2 + spell.url;
    console.log(this.api2);
    this.GoSpell()
      
  }
  
  GoSpell(){
    return this.http.get<TheSpell>(this.api2).subscribe(spellOb => {
      console.log(spellOb)
      this.spellObtained = spellOb;
      this.mostrarModal();
    })
  }

  
  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: SpellPageComponent,
      componentProps:{
        'spellObtained': this.spellObtained
      }
    });
    await modal.present();
}

}
