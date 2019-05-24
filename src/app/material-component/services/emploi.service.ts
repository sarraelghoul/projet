import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  constructor(public db: AngularFirestore) {}

  getAvatars() {
      return this.db.collection('/avatar').valueChanges();
  }

  getUser(userKey) {
    return this.db.collection('emplois').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('emplois').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('emplois').doc(userKey).delete();
  }

  getUsers() {
    return this.db.collection('emplois').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db.collection('emplois', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }

  searchUsersByAge(value) {
    return this.db.collection('emplois', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value) {
    return this.db.collection('emplois').add({
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
