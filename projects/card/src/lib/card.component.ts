import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wpay-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    '[style.--card-accent]': 'accentColor || "#084D63"'
  }
})
export class CardComponent implements OnChanges, OnInit {
  /** Header text */
  @Input() headerText = 'Wpay';

  /** 'small' | 'medium' | 'large' */
  @Input() headerSize: 'small' | 'medium' | 'large' = 'medium';

  /** Any valid CSS color */
  @Input() accentColor = '#084D63';
  @Input() showHeader = true;
  @Input() showImage = true;
  @Input() showFooter = true;

  @Output() actionSave = new EventEmitter<void>();
  @Output() actionCancel = new EventEmitter<void>();

  private readonly defaultAccent = '#084D63';

  constructor(
    private el: ElementRef<HTMLElement>,
    private route: ActivatedRoute // Inject ActivatedRoute here
  ) {}

  // Handle input changes
  ngOnChanges(changes: SimpleChanges): void {
    const accent = this.accentColor || this.defaultAccent;
    this.el.nativeElement.style.setProperty('--card-accent', accent);
  }

  // Initialize component state
  ngOnInit(): void {
    const data = this.route.snapshot.data;

    if (data['accentColor']) {
      this.accentColor = data['accentColor'];
    }
    if (['small', 'medium', 'large'].includes(data['headerSize'])) {
      this.headerSize = data['headerSize'];
    }

    // Booleans: ensure they’re actually true/false
    this.showHeader = !!data['showHeader'];
    this.showImage  = !!data['showImage'];
    this.showFooter = !!data['showFooter'];

  }
}
