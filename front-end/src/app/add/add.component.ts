import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../cart';
import { Item } from './../cart';
import { stringify } from 'querystring';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  item_name: string;
  item_desc: string;
  item_price: string;
  item_quant: string;
  c_item_price: number; // casted item price to number
  c_item_quant: number; // casted item quantity to number
  product: Product;
  item: Item;

  constructor(private cartService: CartService) { }

  ngOnInit() {

  }

  submit() {
    console.log('the name:' + this.item_name);
    console.log('the description: ' + this.item_desc);
    console.log('the price: ' + this.item_price);
    console.log('the quantity' + this.item_quant);

    this.c_item_price = parseInt(this.item_price);
    this.c_item_quant = parseInt(this.item_quant);

    this.product = new Product(this.item_name, this.item_desc, this.c_item_price, this.c_item_quant);
    this.cartService.insertItem(this.product).subscribe(data => this.product = data);
  }
}
