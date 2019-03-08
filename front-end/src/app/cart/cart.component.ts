import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Item } from './../cart';


@Component({
  selector: 'app-cart',
 // templateUrl: './cart.component.html',
  template: `
    <h2 align="center"> Items </h2>
    <ul align="center">
      <li *ngFor="let item of items">
        <label> Item Name: </label> {{item.name}}  <label> Item Description: </label> {{item.description}}
      </li>
    </ul>
  `,
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public items = [];
  public name: string;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // Gets data we received from the subscribed variable
    // and then puts it into the items array
    this.cartService.getAllItems().subscribe(data => this.items = data);
    // this.cartService.getItem("Laptop").subscribe(data => this)
    // alert(this.items);
  }
}
