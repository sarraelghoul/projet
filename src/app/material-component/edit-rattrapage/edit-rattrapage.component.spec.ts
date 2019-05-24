import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRattrapageComponent } from './edit-rattrapage.component';

describe('EditRattrapageComponent', () => {
  let component: EditRattrapageComponent;
  let fixture: ComponentFixture<EditRattrapageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRattrapageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRattrapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
