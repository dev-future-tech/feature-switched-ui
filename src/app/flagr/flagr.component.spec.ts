import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlagrService } from '../_service/flagr.service';

import { FlagrComponent } from './flagr.component';

describe('FlagrComponent', () => {
  let component: FlagrComponent;
  let fixture: ComponentFixture<FlagrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ FlagrComponent ],
      providers: [FlagrService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
