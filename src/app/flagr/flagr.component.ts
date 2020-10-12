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
  entityId: string;

  @Input()
  variantValue: string;

  @Input()
  segmentId: number;

  flagValue: string;

  constructor(private service: FlagrService) { }

  ngOnInit(): void {
    console.log(`EntityID is ${this.entityId} service entityId is: ${this.service.entityId}`);
    const evaluation$ = this.service.evaluateFlag(this.flagId, this.flagKey, this.entityId).pipe(
      tap(value => {
        console.log(`Evaluation Response: ${JSON.stringify(value)}`);
        console.log(`Flag status: ${value.variantKey}`);
        this.flagValue = value.variantKey;
        if (this.service.entityId === '') {
          console.log(`Setting service entityId to ${value.evalContext.entityID}`);
          this.service.entityId =value.evalContext.entityID;
        } else {
          console.log('Not setting entityId');
        }
        console.log(`Service entityId is: ${this.service.entityId}`);

      })
    );

    evaluation$.subscribe(data => {
      this.service.getVariants(data.flagID).subscribe(result => {
        console.log(`Data: ${JSON.stringify(result)}`);

      });
    });

}

}
