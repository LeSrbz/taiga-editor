import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextditorComponent } from './textditor.component';

describe('TextditorComponent', () => {
  let component: TextditorComponent;
  let fixture: ComponentFixture<TextditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
