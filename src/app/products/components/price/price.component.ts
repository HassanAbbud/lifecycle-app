import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{
  @Input()
  public price: number = 0;

  constructor(){}

  ngOnInit(): void {
    console.log("PRICE component: ngOnInit")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("PRICE component: ngOnChanges")
    console.log({changes})
  }
  ngOnDestroy(): void {
    console.log("PRICE component: ngOnDestroy")
  }
}
