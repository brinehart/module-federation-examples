import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../characters/main/main.component';
import { DetailsComponent } from '../characters/details/details.component';



@NgModule({
  declarations: [MainComponent, DetailsComponent],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }
