import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onNew : EventEmitter<Character> = new EventEmitter;

  @Input()
  public characterList : Character[] =[{

    name:'Trunk',
    power:10
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{

    if(!id) return;
    console.info(id)
    this.onDelete.emit( id );
  }
}
