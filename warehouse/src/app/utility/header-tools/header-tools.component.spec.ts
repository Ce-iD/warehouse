import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToolsComponent } from './header-tools.component';

describe('HeaderToolsComponent', () => {
  let component: HeaderToolsComponent;
  let fixture: ComponentFixture<HeaderToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
