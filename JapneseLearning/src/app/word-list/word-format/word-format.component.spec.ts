import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFormatComponent } from './word-format.component';

describe('WordFormatComponent', () => {
  let component: WordFormatComponent;
  let fixture: ComponentFixture<WordFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
