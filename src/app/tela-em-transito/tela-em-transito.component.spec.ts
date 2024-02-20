import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEmTransitoComponent } from './tela-em-transito.component';

describe('TelaEmTransitoComponent', () => {
  let component: TelaEmTransitoComponent;
  let fixture: ComponentFixture<TelaEmTransitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaEmTransitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEmTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
