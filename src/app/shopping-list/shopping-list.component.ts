import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private idChangeSub: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.idChangeSub = this.slService.ingredientsChanged
    .subscribe(
      (ingredient: Ingredient[]) => {
      this.ingredients = ingredient;
    });
  }
  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }
}
