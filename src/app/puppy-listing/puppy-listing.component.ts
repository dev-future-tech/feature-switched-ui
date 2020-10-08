import { Component, Input, OnInit } from '@angular/core';
import { Puppy } from './puppy.model';

@Component({
  selector: 'app-puppy-listing',
  templateUrl: './puppy-listing.component.html',
  styleUrls: ['./puppy-listing.component.css']
})
export class PuppyListingComponent implements OnInit {

  @Input()
  dataSource: Puppy[];

  columnNames: ['name', 'species', 'age'];

  constructor() { }

  ngOnInit(): void {
  }

}
