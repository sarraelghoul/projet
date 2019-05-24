import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRattrapageComponent } from './add-rattrapage.component';

describe('AddRattrapageComponent', () => {
  let component: AddRattrapageComponent;
  let fixture: ComponentFixture<AddRattrapageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRattrapageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRattrapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
