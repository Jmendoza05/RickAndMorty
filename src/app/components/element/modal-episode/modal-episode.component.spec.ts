import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEpisodeComponent } from './modal-episode.component';

describe('ModalEpisodeComponent', () => {
  let component: ModalEpisodeComponent;
  let fixture: ComponentFixture<ModalEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEpisodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
