import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RattrapageService {

  constructor(public db: AngularFirestore) {}

  getAvatars() {
      return this.db.collection('/avatar').valueChanges();
  }

  getUser(userKey) {
    return this.db.collection('rattrapages').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('rattrapages').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('rattrapages').doc(userKey).delete();
  }

  getUsers() {
    return this.db.collection('rattrapages').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db.collection('rattrapages', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }

  searchUsersByAge(value) {
    return this.db.collection('rattrapages', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value) {
    return this.db.collection('rattrapages').add({
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
