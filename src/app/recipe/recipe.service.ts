import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'this is a simple description', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('Eggs', 5)
    ]),
    new Recipe('Another Test Recipe', 'this is a simple description', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg' , [
      new Ingredient('Burger', 1),
      new Ingredient('Eggs', 5)
    ]),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToList(ingredient: Ingredient[]) {
      this.slService.addIngredients(ingredient);
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
}

