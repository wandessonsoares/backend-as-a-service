import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoDataComponent } from './contato-data.component';

describe('ContatoDataComponent', () => {
  let component: ContatoDataComponent;
  let fixture: ComponentFixture<ContatoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
