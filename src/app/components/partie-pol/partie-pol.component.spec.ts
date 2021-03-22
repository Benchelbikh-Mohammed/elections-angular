import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiePolComponent } from './partie-pol.component';

describe('PartiePolComponent', () => {
  let component: PartiePolComponent;
  let fixture: ComponentFixture<PartiePolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartiePolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiePolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
