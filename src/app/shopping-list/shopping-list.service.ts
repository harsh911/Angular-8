import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
     new Ingredient('Apples',  5),
      new Ingredient('Tomatoes ', 10)
];
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditting = new Subject<number>();
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    console.log(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    /*for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
  }
  */
   }

   deleteIngredient(index: number) {
     this.ingredients.splice(index, 1);
     this.ingredientsChanged.next(this.ingredients.slice());
   }
}
