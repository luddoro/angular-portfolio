import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'infoblock',
  templateUrl: './infoblock.component.html',
  styleUrls: ['./infoblock.component.scss']
})
export class InfoblockComponent implements OnInit {

  @Input() title: String;
  @Input() paragraph: String;
  @Input() secondParagraph: String;
  @Input() image: String;

  constructor() { }

  ngOnInit(): void {
  }

}
