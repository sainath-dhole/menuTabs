import { Injectable } from '@angular/core';


// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

//Offer Interface
export interface IOffer {
  id: number;
  image: string;
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Womens',
      image: '../../assets/categories/Womens-wear.jpg'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Mens',
      image: '../../assets/categories/Mens-wear-2.jpg'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Kids',
      image: '../../assets/categories/Kids-wear.jpg'
    }
    

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getOffers() {
    let offers = [];

    let ofr1: IOffer = {
      id: 1,
      image: '../../assets/offers/offers-1.jpg'
    }
    let ofr2: IOffer = {
      id: 2,
      image: '../../assets/offers/offers-2.jpg'
    }
    let ofr3: IOffer = {
      id: 3,
      image: '../../assets/offers/offers-3.jpg'
    }
    

    offers.push(ofr1, ofr2, ofr3);

    return offers;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../assets/products/prod-1.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../assets/products/prod-2.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../assets/products/prod-3.png'
    }
    let prod4: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 550,
      image: '../../assets/products/prod-4.png'
    }
    let prod5: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 340,
      image: '../../assets/products/prod-5.png'
    }
    let prod6: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 400,
      image: '../../assets/products/prod-6.png'
    }

    products.push(prod1, prod2, prod3, prod4, prod5, prod6);

    return products;
  }
}
