import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  info = "";
  @Output() doSomething = new EventEmitter<{name: string}>();
  @Input("beans") rice;

  ingredients: Ingredient[] = [
  	new Ingredient("salt", 4),
  	new Ingredient("tomatoes", 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  doEmit() {
    alert(this.info)
    this.doSomething.emit({
      name: this.info
    })
    this.doInput();
  }

  doInput() {
    alert(this.rice)
  }
}
