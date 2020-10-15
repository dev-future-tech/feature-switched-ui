import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlagrOptions } from './flagroptions';
import { Flag, Variant, Segment } from './flag';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';
import { EvaluationRequest, EvaluationResponse } from './evaluation';

@Injectable({
  providedIn: 'root'
})
export class FlagrService {
  private readonly _entityId = new BehaviorSubject<string>('');
  readonly entityId$ = this._entityId.asObservable();

  flagrHost: string;


  constructor(private http: HttpClient) { }

  public async init(options: FlagrOptions = {}) {
    this.flagrHost = options.flagr_host;
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

  evaluateFlag(flagId: number, flagKey: string, userId: string) : Observable<EvaluationResponse> {
    console.log(`1. EntityId: ${this.entityId}`);
    const post = `${this.flagrHost}/evaluation`;
    if (userId === undefined && this.entityId !== '') {
      console.log(`Entity ID not supplied, setting to ${this.entityId}`);
      userId = this.entityId;
    }

    console.log(`2. EntityId: ${this.entityId}, loca var entityId: ${userId}`);

    const request: EvaluationRequest = {
      entityID: userId,
      entityType: 'people',
      flagKey: flagKey,
      flagID: flagId,
      entityContext: {
        "hello" : "world"
      },
      enableDebug: true
    };

    console.log(request);
    const evaluation$ = this.http.post<EvaluationResponse>(post, request).pipe(
      tap(result => {
        console.log(`Setting service entityId to ${result.evalContext.entityID}`);
        this._entityId.next(result.evalContext.entityID);
        return result;
      })
    );
    return evaluation$;
  }

  getVariants(flagId: number) : Observable<Variant[]> {
    const get = `${this.flagrHost}/flags/${flagId}/variants`;
    return this.http.get<Variant[]>(get);
  }

  get entityId(): string {
    return this._entityId.getValue();
  }

  set entityId(entityId: string) {
    this._entityId.next(entityId);
  }
}
