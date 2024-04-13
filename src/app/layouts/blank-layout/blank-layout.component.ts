import { FooterComponent } from './../../components/footer/footer.component';
import { NavBlankComponent } from './../../components/nav-blank/nav-blank.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule,NavBlankComponent,RouterOutlet,FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {
  goToUp():void{
    scrollTo(0,0);
  }

}
