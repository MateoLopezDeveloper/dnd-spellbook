import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpellPageComponent } from '../components/spell-page/spell-page.component';
import { Classdnd } from '../interfaces/interfaces';
import { SpellsService } from '../services/spells.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  AllSpells: Classdnd[];


  constructor(private spellsService: SpellsService) {}


  ngOnInit() {
    this.spellsService.getAllSpells().subscribe(Spells=>
    {
     this.AllSpells = Spells.results;
     console.log(this.AllSpells);
    })
  }


}

