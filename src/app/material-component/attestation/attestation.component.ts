import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { AttestationService } from '../services/attestation.service';

@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.css']
})
export class AttestationComponent implements OnInit {



  date = '';
  heure_debut = '';
  duree = '';
  salle = '';
  matiere = '';
  enseignant = '';
  id_section = '';
  items: Array<any>;

  constructor(
    public attestation: AttestationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.attestation.getUsers()
      .subscribe(result => {
        this.items = result;
      });

  }

  viewDetails(item) {
    this.router.navigate(['/details/' + item.payload.doc.id]);
  }

  capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }



  combineLists(a, b) {
    const result = [];

    a.filter(x => {
      return b.filter(x2 => {
        if (x2.payload.doc.id === x.payload.doc.id) {
          result.push(x2);
        }
      });
    });
    return result;
  }


}
