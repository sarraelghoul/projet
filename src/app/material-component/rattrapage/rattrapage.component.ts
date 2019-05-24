import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { RattrapageService } from '../services/rattrapage.service';

@Component({
  selector: 'app-rattrapage',
  templateUrl: './rattrapage.component.html',
  styleUrls: ['./rattrapage.component.css']
})
export class RattrapageComponent implements OnInit {



  date = '';
  heure_debut = '';
  duree = '';
  salle = '';
  matiere = '';
  enseignant = '';
  id_section = '';
  items: Array<any>;

  constructor(
    public rattrapage: RattrapageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.rattrapage.getUsers()
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
    let result = [];

    a.filter(x => {
      return b.filter(x2 => {
        if (x2.payload.doc.id == x.payload.doc.id) {
          result.push(x2);
        }
      });
    });
    return result;
  }


}
