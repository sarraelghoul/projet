import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(public db: AngularFirestore) {}

  getAvatars() {
      return this.db.collection('/avatar').valueChanges();
  }

  getUser(userKey) {
    return this.db.collection('actualites').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('actualites').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('actualites').doc(userKey).delete();
  }

  getUsers() {
    return this.db.collection('actualites').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db.collection('actualites', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }

  searchUsersByAge(value) {
    return this.db.collection('actualites', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value) {
    return this.db.collection('actualites').add({
      titre: value.titre,
      texte: value.texte,
      lien: value.lien,
      type: value.type,
    });
  }
}
