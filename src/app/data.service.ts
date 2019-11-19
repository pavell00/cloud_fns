import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore, 
    private fns: AngularFireFunctions) { }

  getMenuList() {
    return this.firestore.collection('menulist').snapshotChanges();
    //return this.firestore.collection('prgparams').doc('2').get();
  }

  call_fn() {
    const message = { message: 'Hello.' };
    return this.fns.httpsCallable('del2')(message).toPromise()
    .then(
      res => console.log(res)
    )
    .catch(
      error => console.log(error)
    )
  }

  call_fn2(): Observable<string> {
    const message = { message: 'Hello.' };
    return this.fns.httpsCallable('del2')(message)
  }
}
