import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonBarComponent } from './json-bar.component';

describe('JsonBarComponent', () => {
  let component: JsonBarComponent;
  let fixture: ComponentFixture<JsonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
