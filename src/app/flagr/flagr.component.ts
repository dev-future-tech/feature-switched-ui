import { Component, Input, OnInit } from '@angular/core';
import { FlagrService } from '../_service/flagr.service';

@Component({
  selector: 'app-flagr',
  templateUrl: './flagr.component.html',
  styleUrls: ['./flagr.component.css']
})
export class FlagrComponent implements OnInit {

  @Input()
  flagId: number;

  @Input()
  flagKey: string;

  @Input()
  entityId: string;


  constructor(private service: FlagrService) { }

  ngOnInit(): void {
  }

}
