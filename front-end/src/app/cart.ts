export interface Item {
  name: string;
  description: string;
  price: number;
  amount: number;
}

export class Product implements Item {
  name: string;
  description: string;
  price: number;
  amount: number;

  constructor(name: string, desc: string, price: number, amount: number) {
    this.name = name;
    this.description = desc;
    this.price = price;
    this.amount = amount;
  }
}
