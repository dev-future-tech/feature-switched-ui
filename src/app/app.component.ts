import { Component, OnInit } from '@angular/core';
import { FlagrService } from './_service/flagr.service';
import { tap } from 'rxjs/operators';
import { Flag, Segment } from './_service/flag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'feature-switched-ui';

  constructor(private service: FlagrService) { }


  ngOnInit() {
    /*
    let flag: Flag;

    const sample$ = this.service.validateFlag('log_welcomes').pipe(
      tap(value => {
        console.log(value.id);
      })
    );

    sample$
      .subscribe(data => {
        console.log(`data is : ${data}`);
        this.service.getFlag(data.id).subscribe(result => {
          flag = result;
          console.log(`Retrieved: ${flag.key}`);
          const evaluation$ = this.service.evaluateFlag(flag.id, flag.key).pipe(
            tap(value => {
              console.log(`Evaluation Response: ${JSON.stringify(value)}`);
            })
          );

          evaluation$.subscribe(data => {
            this.service.getVariants(data.flagID).subscribe(result => {
              console.log(`Data: ${JSON.stringify(result)}`);
            });
          });

          this.service.getSegments(flag.id).subscribe((data: Segment[]) =>{
            data.forEach(segment => console.log(`Segment: ${JSON.stringify(segment)}`));
          });

        });
      });
  */
  }
}

/*
{
  "constraints":[],
  "description":"people",
  "distributions":[
    {"id":3,"percent":50,"variantID":4,"variantKey":"on"},
    {"id":4,"percent":50,"variantID":5,"variantKey":"off"}
  ],
  "id":2,
  "rank":999,
  "rolloutPercent":50
}
*/
