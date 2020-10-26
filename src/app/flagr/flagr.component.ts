import { Component, Input, OnInit } from '@angular/core';
import { FlagrService } from '../_service/flagr.service';
import { tap } from 'rxjs/operators';

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
  variantValue: string;

  @Input()
  segmentId: number;

  flagValue: string;

  constructor(private service: FlagrService) { }

  ngOnInit(): void {
    let localEntityId;

    if (localStorage.getItem('flagr-entity-id') !== undefined) {
      localEntityId = localStorage.getItem('flagr-entity-id');
    }

    console.log(`Service entityId is: ${this.service.entityId}, local entityId is: ${localEntityId}`);

    const evaluation$ = this.service.evaluateFlag(this.flagId, this.flagKey, localEntityId).pipe(
      tap(value => {
        console.log(`Evaluation Response: ${JSON.stringify(value)}`);
        console.log(`Flag status: ${value.variantKey}`);
        this.flagValue = value.variantKey;
        console.log(`Service entityId is: ${this.service.entityId}`);
        localStorage.setItem('flagr-entity-id', value.evalContext.entityID);

      })
    );

    evaluation$.subscribe(data => {
      this.service.getVariants(data.flagID).subscribe(result => {
        console.log(`Data: ${JSON.stringify(result)}`);

      });
    });

}

}
