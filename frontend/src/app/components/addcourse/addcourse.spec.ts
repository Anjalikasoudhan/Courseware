import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addcourse } from './addcourse';
import { before } from 'node:test';

describe('Addcourse', () => {
  let component: Addcourse;
  let fixture: ComponentFixture<Addcourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addcourse]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(Addcourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
