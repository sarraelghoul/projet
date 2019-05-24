import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {

  constructor(public db: AngularFirestore) {}

  getAvatars() {
      return this.db.collection('/avatar').valueChanges();
  }

  getUser(userKey) {
    return this.db.collection('calendriers').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('calendriers').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('calendriers').doc(userKey).delete();
  }

  getUsers() {
    return this.db.collection('calendriers').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db.collection('calendriers', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }

  searchUsersByAge(value) {
    return this.db.collection('calendriers', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value) {
    return this.db.collection('calendriers').add({
      date: value.date,
      heure_debut: value.date,
      duree: value.date,
      salle: value.salle,
      matiere: value.matiere,
      // tslint:disable-next-line:radix
      enseignant: value.enseignant,
      id_section: value.id_section,
    });
  }
}
