import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://via.placeholder.com/150',
      ingredients: ['French Fries', 'Portk Meat', 'Salad'] ,
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://via.placeholder.com/150',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'] ,
    },
    {
      id: 'r2',
      title: 'gfdgda',
      imageUrl: 'https://via.placeholder.com/150',
      ingredients: ['sadasdaa', 'asadasd', 'sadsada'] ,
    },
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
      })
    };
  }
}
