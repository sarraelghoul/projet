import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ActualiteService } from '../services/actualite.service';

@Component({
  selector: 'app-add-actualite',
  templateUrl: './add-actualite.component.html',
  styleUrls: ['./add-actualite.component.css']
})
export class AddActualiteComponent implements OnInit {

  exampleForm: FormGroup;

  validation_messages = {
    'titre': [
      { type: 'required', message: 'date is required.' }
    ],
    'texte': [
      { type: 'required', message: 'Surname is required.' }
    ],
    'lien': [
      { type: 'required', message: 'Age is required.' },
    ],
    'type': [
      { type: 'required', message: 'date is required.' }
    ],
  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: ActualiteService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      titre: ['', Validators.required],
      texte: ['', Validators.required],
      lien: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  resetFields() {
    this.exampleForm = this.fb.group({
      titre: new FormControl('', Validators.required),
      texte: new FormControl('', Validators.required),
      lien: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    this.firebaseService.createUser(value)
      .then(
        res => {
          this.resetFields();
          this.router.navigate(['/actualite']);
        }
      );
  }

}
