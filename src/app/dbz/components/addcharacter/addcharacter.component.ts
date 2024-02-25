import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addcharacter.component.html',
  styleUrl: './addcharacter.component.css'
})
export class AddcharacterComponent {

  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter;

  public character : Character = {
    name:'',
    power:0
  };

  emitCharacter():void{
    console.log(this.character);

    if(this.character.name.length == 0 ) return;

    this.onNewCharacter.emit(this.character);

    //esta forma
    // this.character.name = '';
    // this.character.power = 0;

    //o esta forma
    this.character = { name:'', power : 0 };
  }
}
