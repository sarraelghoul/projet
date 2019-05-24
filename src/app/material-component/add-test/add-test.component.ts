import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  exampleForm: FormGroup;

  validation_messages = {
    'matiere': [
      { type: 'required', message: 'matiere is required.' }
    ],
    'jour': [
      { type: 'required', message: 'jour is required.' }
    ],
    'salle': [
      { type: 'required', message: 'salle is required.' },
    ],
    'heure': [
      { type: 'required', message: 'heure is required.' }
    ],
  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: TestService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      matiere: ['', Validators.required],
      jour: ['', Validators.required],
      salle: ['', Validators.required],
      heure: ['', Validators.required],
    });
  }

  resetFields() {
    this.exampleForm = this.fb.group({
      matiere: new FormControl('', Validators.required),
      jour: new FormControl('', Validators.required),
      salle: new FormControl('', Validators.required),
      heure: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    this.firebaseService.createUser(value)
      .then(
        res => {
          this.resetFields();
          this.router.navigate(['/test']);
        }
      );
  }

}
