import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { IonicModule } from '@ionic/angular';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SpellPageComponent } from './spell-page/spell-page.component';



@NgModule({
  declarations: [
    SpellListComponent,
    SpellPageComponent
    ],
  imports: [
    CommonModule,
    IonicModule
    ],
  exports: [
    SpellListComponent
    ]
})
export class ComponentsModule { }
