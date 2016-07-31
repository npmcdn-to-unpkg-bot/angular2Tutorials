import { BookmakrsPage } from './app.po';

describe('bookmakrs App', function() {
  let page: BookmakrsPage;

  beforeEach(() => {
    page = new BookmakrsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
