import { Component, Input } from '@angular/core';
import { Creators } from '../../creators';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input() creators: Creators[] = []

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.fetchCreators().then((cr) => {
      this.creators = cr
    })
  }

  showMore(index: number) {
    this.creators[index].isExpanded = !this.creators[index].isExpanded
  }
}
