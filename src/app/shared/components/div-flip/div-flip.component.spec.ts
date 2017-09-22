import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivFlipComponent } from './div-flip.component';

describe('DivFlipComponent', () => {
  let component: DivFlipComponent;
  let fixture: ComponentFixture<DivFlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivFlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
