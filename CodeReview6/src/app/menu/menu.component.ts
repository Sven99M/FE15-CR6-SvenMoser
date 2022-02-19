import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { dishes } from '../dishes';
import { IDishes } from '../IDishes';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes:IDishes[] = dishes;
  dish: IDishes = {} as IDishes;
  id: number = 0;

  constructor( 
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }
    addToCart() {
      window.alert('Your dish has been added to the cart!');
      this.cartService.addToCart(this.dish);
    }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      this.dish = dishes[this.id];
    });
  }
  }
  