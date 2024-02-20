import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRecepcaoComponent } from './tela-recepcao.component';

describe('TelaRecepcaoComponent', () => {
  let component: TelaRecepcaoComponent;
  let fixture: ComponentFixture<TelaRecepcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaRecepcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaRecepcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
