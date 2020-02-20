import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
