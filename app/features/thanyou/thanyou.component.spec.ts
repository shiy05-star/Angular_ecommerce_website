import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanyouComponent } from './thanyou.component';

describe('ThanyouComponent', () => {
  let component: ThanyouComponent;
  let fixture: ComponentFixture<ThanyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThanyouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThanyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
