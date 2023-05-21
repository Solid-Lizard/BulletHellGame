import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaggeSuccessComponent } from './mesagge-success.component';

describe('MesaggeSuccessComponent', () => {
  let component: MesaggeSuccessComponent;
  let fixture: ComponentFixture<MesaggeSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaggeSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesaggeSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
