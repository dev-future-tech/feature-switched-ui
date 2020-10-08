import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyListingComponent } from './puppy-listing.component';

describe('PuppyListingComponent', () => {
  let component: PuppyListingComponent;
  let fixture: ComponentFixture<PuppyListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuppyListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
