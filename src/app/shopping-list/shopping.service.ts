import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';

export class ShoppingService {
	
	ingredients: Ingredient[] = [
  	new Ingredient("salt", 4),
  	new Ingredient("tomatoes", 10)
  ];

  getIngredients() {
  	return this.ingredients.slice();
  }

  ingredientEmitter = new EventEmitter<Ingredient>();
}