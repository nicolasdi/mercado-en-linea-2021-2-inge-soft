import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto: Producto;
  @Input() preview: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}