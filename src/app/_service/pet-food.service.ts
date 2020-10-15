import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetFoodService {

  constructor(private http: HttpClient) { }

  getPetFood(): Observable<PetFood[]> {
    return new Observable(()

    )
  }

}
