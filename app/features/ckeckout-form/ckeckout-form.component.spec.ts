import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeckoutFormComponent } from './ckeckout-form.component';

describe('CkeckoutFormComponent', () => {
  let component: CkeckoutFormComponent;
  let fixture: ComponentFixture<CkeckoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CkeckoutFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CkeckoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
