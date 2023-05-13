import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadGameComponent } from './download-game.component';

describe('DownloadGameComponent', () => {
  let component: DownloadGameComponent;
  let fixture: ComponentFixture<DownloadGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
