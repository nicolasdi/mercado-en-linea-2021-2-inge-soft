import { Component, Input, OnInit } from '@angular/core';
import { Opinion } from '../../interfaces/opinion';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
  @Input() opinion: Opinion;

  constructor() {}

  ngOnInit() {}
}
