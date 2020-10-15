import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PetFood } from './pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetFoodService {

  constructor(private http: HttpClient) { }

  getPetFood(): Observable<PetFood[]> {
    return null;
  }

}
