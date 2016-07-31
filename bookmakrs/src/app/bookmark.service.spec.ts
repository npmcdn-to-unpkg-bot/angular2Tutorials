/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BookmarkService } from './bookmark.service';

describe('Service: Bookmark', () => {
  beforeEach(() => {
    addProviders([BookmarkService]);
  });

  it('should ...',
    inject([BookmarkService],
      (service: BookmarkService) => {
        expect(service).toBeTruthy();
      }));
});
