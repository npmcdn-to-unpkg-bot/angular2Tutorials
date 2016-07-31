import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http'
import { BookmarkService } from './bookmark.service'
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component'
import { BookmarkEditComponent } from './bookmark-edit/bookmark-edit.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives:[ BookmarkListComponent, BookmarkEditComponent ],
  providers: [ HTTP_PROVIDERS, BookmarkService ],
  template: `
    <bookmark-edit></bookmark-edit>
    <bookmark-list [bookmarks]="bookmarks"></bookmark-list>
`
})
export class AppComponent {

	bookmarks = [];

  constructor(private bookmarkService: BookmarkService) {
  	this.bookmarkService.getBookmarks()
  	.then(bookmarks => this.bookmarks = bookmarks);
  }
}
