import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterwrapperComponent } from './centerwrapper.component';

describe('CenterwrapperComponent', () => {
  let component: CenterwrapperComponent;
  let fixture: ComponentFixture<CenterwrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterwrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
