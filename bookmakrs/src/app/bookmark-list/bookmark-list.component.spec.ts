/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BookmarkListComponent } from './bookmark-list.component';

describe('Component: BookmarkList', () => {
  it('should create an instance', () => {
    let component = new BookmarkListComponent();
    expect(component).toBeTruthy();
  });
});
