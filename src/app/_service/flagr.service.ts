import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlagrOptions } from './flagroptions';
import { Flag, Variant, Segment } from './flag';
import { Observable } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';
import { EvaluationRequest, EvaluationResponse } from './evaluation';

@Injectable({
  providedIn: 'root'
})
export class FlagrService {

  flagrHost: string;

  constructor(private http: HttpClient) { }

  public async init(options: FlagrOptions = {}) {
    this.flagrHost = options.flagr_host;

    //ping the server.
    const healthCheck = `${this.flagrHost}/health`;

  }

  public validateFlag(flag_key: string): Observable<Flag> {
    return this.findFlag(flag_key);
  }

  findFlag(flagKey: string): Observable<Flag> {
    const find = `${this.flagrHost}/flags?key=${flagKey}`;
    return this.http.get<Flag>(find)
    .pipe(
      tap(result => {
        console.log(`Flag Id for ${flagKey} is ${result[0]['id']}`);
      }),
      map(result => result[0]),
      mergeMap(result => {
        const get = `${this.flagrHost}/flags/${result.id}`;
        console.log(result);
        return this.http.get<Flag>(get);
      }),

    );
  }

  getSegments(flagId: number) : Observable<Segment[]> {
    const get = `${this.flagrHost}/flags/${flagId}/segments`;
    return this.http.get<Segment[]>(get);
  }

  getFlag(flagId: number): Observable<Flag> {
    const get = `${this.flagrHost}/flags/${flagId}`;
    return this.http.get<Flag>(get);
  }

  evaluateFlag(flagId: number, flagKey: string) : Observable<EvaluationResponse> {

    const post = `${this.flagrHost}/evaluation`;

    const request: EvaluationRequest = {
      entityID: 'user1234',
      entityType: 'people',
      flagKey: flagKey,
      flagID: flagId,
      entityContext: {
        "hello" : "world"
      },
      enableDebug: true
    };

    console.log(request);
    return this.http.post<EvaluationResponse>(post, request);
  }

  getVariants(flagId: number) : Observable<Variant[]> {
    const get = `${this.flagrHost}/flags/${flagId}/variants`;
    return this.http.get<Variant[]>(get);
  }
}
