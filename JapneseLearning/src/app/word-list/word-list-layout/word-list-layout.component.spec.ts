import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordListLayoutComponent } from './word-list-layout.component';

describe('WordListLayoutComponent', () => {
  let component: WordListLayoutComponent;
  let fixture: ComponentFixture<WordListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordListLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
