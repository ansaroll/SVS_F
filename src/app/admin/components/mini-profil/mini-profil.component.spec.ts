import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProfilComponent } from './mini-profil.component';

describe('MiniProfilComponent', () => {
  let component: MiniProfilComponent;
  let fixture: ComponentFixture<MiniProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
