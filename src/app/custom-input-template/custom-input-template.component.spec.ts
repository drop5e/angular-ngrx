import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputTemplateComponent } from './custom-input-template.component';

describe('CustomInputTemplateComponent', () => {
  let component: CustomInputTemplateComponent;
  let fixture: ComponentFixture<CustomInputTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomInputTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
