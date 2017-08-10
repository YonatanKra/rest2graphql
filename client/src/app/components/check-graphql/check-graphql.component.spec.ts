import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckGraphqlComponent } from './check-graphql.component';

describe('CheckGraphqlComponent', () => {
  let component: CheckGraphqlComponent;
  let fixture: ComponentFixture<CheckGraphqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckGraphqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckGraphqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
