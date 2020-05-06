import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'HomeIcon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/moon.svg'));
    iconRegistry.addSvgIcon(
      'WebdevIcon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/alien.svg'));
    iconRegistry.addSvgIcon(
      'DevopsIcon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/space.svg'));
    iconRegistry.addSvgIcon(
      'ContactIcon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/shuttle.svg'));
  }


  ngOnInit(): void {
  }

}
