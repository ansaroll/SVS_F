import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDoctorantComponent } from './create-doctorant.component';

describe('CreateDoctorantComponent', () => {
  let component: CreateDoctorantComponent;
  let fixture: ComponentFixture<CreateDoctorantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDoctorantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDoctorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
