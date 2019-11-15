import { Injectable } from '@angular/core';
import { FirebaseDatabase } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: FirebaseDatabase) { }
}
