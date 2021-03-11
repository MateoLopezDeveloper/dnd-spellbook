import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../services/spells.service';
import { Classdnd, TheSpell } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  classes: Classdnd[];

  classParams: TheSpell;
  
  Api2 = 'https://www.dnd5eapi.co';

  spByClass: string = '';
  url: string = '';

  constructor(private spellsService: SpellsService,
              private http: HttpClient) {}

   ngOnInit() {
     this.spellsService.getClasses().subscribe(classesfromApi=>
     {
      this.classes = classesfromApi.results;
      console.log(this.classes);
     })
   }

   

  getSpells(value: string){
    this.http.get<Classdnd>(this.spByClass = this.Api2+value+'/spells')
    console.log(this.spByClass)

    return this.spByClass;
  }

  

  }
   

   





  

  


