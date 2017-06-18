import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  testing: string = ""
  recipes: Recipe[] = [
  	new Recipe("Meat and Potato Pie", "My favorite meal", "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/10/28/3/tm1c19_shepherds_pie.jpg.rend.hgtvcom.616.462.jpeg"),
    new Recipe("Tacos", "Good Meal", "https://www.tacobueno.com/assets/food/tacos/Taco_Soft_Beef_990x725.jpg")
  ];

  @Output() onRecipeChange = new EventEmitter<Recipe>();

  handleSelection(selectedRecipe) {
    this.onRecipeChange.emit(selectedRecipe)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
