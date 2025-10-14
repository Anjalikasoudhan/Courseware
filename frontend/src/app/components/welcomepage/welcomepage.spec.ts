import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcomepage } from './welcomepage';
import { before } from 'node:test';

describe('Welcomepage', () => {
  let component: Welcomepage;
  let fixture: ComponentFixture<Welcomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welcomepage]
    })
    .compileComponents();
  });
beforeEach(() => {
    fixture = TestBed.createComponent(Welcomepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
