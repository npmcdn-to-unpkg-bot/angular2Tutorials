import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bookmark-list',
  template: `
	  <table class="table table-striped">
			<tr *ngFor= "let bookmark of bookmarks">
				<td>
					<a [href]="bookmark.url" target="_blank">{{bookmark.title}}</a>
				</td>
			</tr>
	  </table>`,
})
export class BookmarkListComponent implements OnInit {
  ngOnInit() { }
}
