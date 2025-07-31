import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CardComponent} from './card.component';
import {ActivatedRoute} from '@angular/router';

describe('Card', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
    let mockRoute: any;

    beforeEach(async () => {
        mockRoute = {
            snapshot: {
                data: {
                    accentColor: '#084D63',
                    headerSize: 'medium',
                    showHeader: true,
                    showImage: false,
                    showFooter: true
                }
            }
        };

        await TestBed.configureTestingModule({
            imports: [CardComponent],
            providers: [{provide: ActivatedRoute, useValue: mockRoute}]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties in ngOnInit', () => {
      expect(component.accentColor).toBe('#084D63');
      expect(component.headerSize).toBe('medium');
      expect(component.showHeader).toBeTrue();
      expect(component.showImage).toBeFalse();
      expect(component.showFooter).toBeTrue();
  });

    it('should default headerSize if an invalid value is provided', () => {
        mockRoute.snapshot.data.headerSize = 'invalid';
        component.ngOnInit();
        expect(component.headerSize).toBe('medium');
    });

    it('should coerce showHeader, showImage, and showFooter to booleans in ngOnInit', () => {
        mockRoute.snapshot.data.showHeader = 1; // truthy value
        mockRoute.snapshot.data.showImage = 0; // falsy value
        mockRoute.snapshot.data.showFooter = null; // falsy value
        component.ngOnInit();

        expect(component.showHeader).toBeTrue();
        expect(component.showImage).toBeFalse();
        expect(component.showFooter).toBeFalse();
    });
});
