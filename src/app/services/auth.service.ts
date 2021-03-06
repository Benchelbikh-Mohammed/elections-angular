import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model'; // optional
import firebase from 'firebase'
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user)
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();

        return of(null);
      })
    );
  }


  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  updateUserData({ uid, email, displayName, photoURL }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL,
      roles: {
        subscriber: true,
      }
    };

    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  canRead(user: User): boolean {
    let allowedRoles = ['subscriber', 'admin'];
    return this.checkAuthorization(user, allowedRoles);
  }

  canCrud(user: User): boolean {
    let allowedRoles = ['admin'];
    return this.checkAuthorization(user, allowedRoles);
  }


  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false;

    for (const role of allowedRoles)
      if (user.roles[role])
        return true;


    return false;
  }

}