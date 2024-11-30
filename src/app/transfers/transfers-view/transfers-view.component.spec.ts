import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersViewComponent } from './transfers-view.component';

describe('TransfersViewComponent', () => {
  let component: TransfersViewComponent;
  let fixture: ComponentFixture<TransfersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransfersViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransfersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
