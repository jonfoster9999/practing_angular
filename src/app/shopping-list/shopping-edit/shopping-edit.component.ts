import { Component, 
	     OnInit, 
	     ViewChild, 
	     ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  addIngredient() {
  	var name = this.nameInput.nativeElement.value;
  	var amount = this.amountInput.nativeElement.value;
  	var ingredient = new Ingredient(name, amount);
  	this.shoppingService.ingredientEmitter.emit(ingredient)
  }

}
