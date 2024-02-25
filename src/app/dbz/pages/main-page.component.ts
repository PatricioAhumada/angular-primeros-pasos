import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageomponent {

  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
    //forma 1
    //return this.dbzService.characters ;
    //forma 2
    return [...this.dbzService.characters] ;
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character:Character):void{
    this.dbzService.addCharacter(character);
  }

}
