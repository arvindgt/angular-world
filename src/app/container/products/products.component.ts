import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle: string = 'This is Products List';
  constructor() { }

  ngOnInit() {
    console.log('this is init of products');
  }

  afterClick(): void {
    console.log('this is clicked');
  }
}
