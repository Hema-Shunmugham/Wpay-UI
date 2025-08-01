import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wpay-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  /** Header text */
  @Input() headerText = 'Wpay';
  @Input() headerSize = '';
  @Input() accentColor = '';
  @Input() showHeader = true;
  @Input() showImage = true;
  @Input() showFooter = true;

  @Output() actionSave = new EventEmitter<void>();
  @Output() actionCancel = new EventEmitter<void>();

  private readonly defaultAccent = '#084D63';

  constructor(private route: ActivatedRoute) {}

  @HostBinding('style.--card-accent')
  get cardAccent() {
    return this.accentColor || this.defaultAccent;
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
