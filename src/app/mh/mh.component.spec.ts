import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhComponent } from './mh.component';

describe('MhComponent', () => {
  let component: MhComponent;
  let fixture: ComponentFixture<MhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
