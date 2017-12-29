import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  items:Array<any>;

  constructor() { 
    this.items = [
      {
        "id": 1,
        "name": "Donut",
        "desc": "A doughnut or donut is a type of fried dough confectionery or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.",
        "price": "2",
        "rating": 3.2,
        "imageFolder": "donut",
        "details":"Fancy donut",
        "type": [
          "chocolate",
          "vanilla",
          "strawberry"
        ],
        "category": [
          "",
          "",
          ""
        ],
        "ingredients": [
          "Dry yeast",
          "Whole milk",
          "Bread flour",
          "Egg",
          "Sugar",
          "Salt",
          "Butter"
        ]
      },{
        "id": 2,
        "name": "Cake",
        "desc": "Cake is a form of sweet dessert that is typically baked. In its oldest forms, cakes were modifications of breads, but cakes now cover a wide range of preparations that can be simple or elaborate, and that share features with other desserts such as pastries, meringues, custards, and pies.",
        "price": "7",
        "rating": 4.5,
        "imageFolder": "cake",
        "details":"Fancy cakes",
        "type": [
          "chocolate",
          "vanilla",
          "strawberry"
        ],
        "ingredients": [
          "Sugar",
          "Flour",
          "Baking powder",
          "Butter",
          "Milk",
          "Eggs"
        ]
      },{
        "id": 3,
        "name": "Pie",
        "desc": "A pie is a baked dish which is usually made of a pastry dough casing that covers or completely contains a filling of various sweet or savoury ingredients.",
        "price": "5",
        "rating": 4,
        "imageFolder": "pie",
        "details":"Fancy pies",
        "type": [
          "chocolate",
          "vanilla",
          "strawberry"
        ],
        "category": [
          "",
          "",
          ""
        ],
        "ingredients": [
          "All-purpose flour",
          "Sugar",
          "Salt",
          "Butter",
          "Egg",
          "Lemon",
          "Cinnamon",
          "Nutmeg"
        ]
      },{
        "id": 4,
        "name": "Cream Puff",
        "desc": "A cream puff is a filled French choux pastry ball with a typically sweet and moist filling of whipped cream, custard, pastry cream, ice cream, or (particularly in the US)[citation needed] sour cream. The puffs may be decorated or left plain or garnished with chocolate sauce, caramel, or a dusting of powdered sugar. Savory profiterole are also made, filled with pureed meats, cheese, and so on. These were formerly common garnishes for soups.",
        "price": "2",
        "rating": 5,
        "imageFolder": "creampuff",
        "details":"Fancy creampuffs",
        "type": [
          "chocolate",
          "vanilla",
          "strawberry"
        ],
        "category": [
          "",
          "",
          ""
        ],
        "ingredients": [
          "Vanilla pudding",
          "Heavy cream",
          "Milk",
          "All-purpose flour",
          "Eggs",
          "Butter",
          "Water"
        ]
      },{
        "id": 5,
        "name": "Cookie",
        "desc": "A cookie is a baked or cooked food that is small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts, etc.",
        "price": "2",
        "rating": 3,
        "imageFolder": "cookie",
        "details":"Fancy cookies",
        "type": [
          "Chocolate",
          "Oatmeal"
        ],
        "category": [
          "",
          "",
          ""
        ],
        "ingredients": [
          "Granulated sugar",
          "Brown sugar",
          "Butter",
          "Vanilla",
          "Egg",
          "All-purpose flour",
          "Baking soda",
          "Salt"
        ]
      },{
        "id": 6,
        "name": "Bread",
        "desc": "Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been popular around the world and is one of the oldest artificial foods, having been of importance since the dawn of agriculture.",
        "price": "2",
        "rating": 4,
        "imageFolder": "bread",
        "details":"Fancy bread",
        "type": [
          "",
          "",
          ""
        ],
        "category": [
          "",
          "",
          ""
        ],
        "ingredients": [
          "Active dry yeast",
          "Water",
          "Sugar",
          "Salt",
          "All-purpose flour"
        ]
      },{
        "id": 7,
        "name": "Bagel",
        "desc": "A bagel is a bread product originating in the Jewish communities of Poland. It is traditionally shaped by hand into the form of a ring from yeasted wheat dough, roughly hand-sized, that is first boiled for a short time in water and then baked. The result is a dense, chewy, doughy interior with a browned and sometimes crisp exterior. Bagels are often topped with seeds baked on the outer crust, with the traditional ones being poppy or sesame seeds. Some may have salt sprinkled on their surface, and there are different dough types, such as whole-grain or rye.",
        "price": "2",
        "rating": 2.3,
        "imageFolder": "bagel",
        "details":"Freshly baked fancy bagels",
        "type": [
          "",
          "",
          ""
        ],
        "category": [
          "",
          "",
          ""
        ],
        "ingredients": [
          "Bread flour",
          "Active dry yeast",
          "White sugar",
          "Salt",
          "Water"
        ]
      },{
        "id": 8,
        "name": "Custard",
        "desc": "Custard is a variety of culinary preparations based on a cooked mixture of milk or cream and egg yolk. Depending on how much egg or thickener is used, custard may vary in consistency from a thin pouring sauce (crème anglaise) to a thick pastry cream (French: crème pâtissière) used to fill éclairs. Most common custards are used as desserts or dessert sauces and typically include sugar and vanilla. Sometimes flour, corn starch, or gelatin is added as in pastry cream or crème pâtissière.",
        "price": "2",
        "rating": 1,
        "imageFolder": "custard",
        "details": "Fancy custard topped with fruits",
        "type": [
          "Chocolate",
          "Vanilla",
          "Strawberry"
        ],
        "category": [
          "",
          "",
          ""
        ],
        "ingredients": [
          "Milk",
          "Cornstarch",
          "Sugar",
          "Eggs"
        ]
      }
    ];
  }

  getItems() {
    return this.items;
  }

  getItem(id) {
    //Array starts at 0 so we need to subtract 1
    return this.items[id - 1];
  }

}

