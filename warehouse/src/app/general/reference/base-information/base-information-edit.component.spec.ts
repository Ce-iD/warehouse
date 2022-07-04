import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInformationEditComponent } from './base-information-edit.component';

describe('BaseInformationEditComponent', () => {
  let component: BaseInformationEditComponent;
  let fixture: ComponentFixture<BaseInformationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseInformationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInformationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
