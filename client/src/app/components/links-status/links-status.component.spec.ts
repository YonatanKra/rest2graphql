import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksStatusComponent } from './links-status.component';

describe('LinksStatusComponent', () => {
  let component: LinksStatusComponent;
  let fixture: ComponentFixture<LinksStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
