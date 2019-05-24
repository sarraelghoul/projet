import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { RattrapageService } from '../services/rattrapage.service';
@Component({
  selector: 'app-add-rattrapage',
  templateUrl: './add-rattrapage.component.html',
  styleUrls: ['./add-rattrapage.component.css']
})
export class AddRattrapageComponent implements OnInit {

  exampleForm: FormGroup;

  validation_messages = {
    'date': [
      { type: 'required', message: 'date is required.' }
    ],
    'heure_debut': [
      { type: 'required', message: 'Surname is required.' }
    ],
    'duree': [
      { type: 'required', message: 'Age is required.' },
    ],
    'salle': [
      { type: 'required', message: 'date is required.' }
    ],
    'matiere': [
      { type: 'required', message: 'Surname is required.' }
    ],
    'enseignant': [
      { type: 'required', message: 'Age is required.' },
    ],
    'id_section': [
      { type: 'required', message: 'Age is required.' },
    ]
  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: RattrapageService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      date: ['', Validators.required],
      heure_debut: ['', Validators.required],
      duree: ['', Validators.required],
      salle: ['', Validators.required],
      matiere: ['', Validators.required],
      enseignant: ['', Validators.required],
      id_section: ['', Validators.required]
    });
  }

  resetFields() {
    this.exampleForm = this.fb.group({
      date: new FormControl('', Validators.required),
      heure_debut: new FormControl('', Validators.required),
      duree: new FormControl('', Validators.required),
      salle: new FormControl('', Validators.required),
      matiere: new FormControl('', Validators.required),
      enseignant: new FormControl('', Validators.required),
      id_section: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    this.firebaseService.createUser(value)
      .then(
        res => {
          this.resetFields();
          this.router.navigate(['/rattrapage']);
        }
      );
  }

}
