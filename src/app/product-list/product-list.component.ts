import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() productData: any[];
  constructor() { }
  p: any = 0;
  ngOnInit() {
  }

}
