import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoctorantComponent } from './list-doctorant.component';

describe('ListDoctorantComponent', () => {
  let component: ListDoctorantComponent;
  let fixture: ComponentFixture<ListDoctorantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDoctorantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoctorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
