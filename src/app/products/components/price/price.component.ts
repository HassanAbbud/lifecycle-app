import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{
  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  constructor(){}

  ngOnInit(): void {
    console.log("PRICE component: ngOnInit")

    this.interval$ = interval(1000).subscribe(value => console.log(value))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("PRICE component: ngOnChanges")
    console.log({changes})
  }
  ngOnDestroy(): void {
    console.log("PRICE component: ngOnDestroy")

    this.interval$?.unsubscribe();
  }
}
