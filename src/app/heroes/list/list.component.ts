import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName : string[] = ['SguarenMan','Spiderman', 'Hulk', 'IronMan','Thor','Vision']
  public deletedHero? :string;
    removeLatHeroe():void{
        this.deletedHero = this.heroesName.pop();
    }
}
