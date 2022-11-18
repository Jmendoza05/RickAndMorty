import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChararterComponent } from './detail-chararter.component';

describe('DetailChararterComponent', () => {
  let component: DetailChararterComponent;
  let fixture: ComponentFixture<DetailChararterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChararterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChararterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
