import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareEditComponent } from './ware-edit.component';

describe('WareEditComponent', () => {
  let component: WareEditComponent;
  let fixture: ComponentFixture<WareEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WareEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WareEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
