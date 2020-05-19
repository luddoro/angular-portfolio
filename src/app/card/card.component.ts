import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.scss' ]
})
export class CardComponent implements OnInit {
	@Input() cardTitle: String;
	@Input() cardSubtitle: String;
	@Input() cardImage: String;
	@Input() cardContent: String;
	@Input() githubButtonText: String;
	@Input() githubButtonLink: String;
	@Input() websiteButtonText: String;
	@Input() websiteButtonLink: String;
	constructor() {}

	ngOnInit(): void {}
}
