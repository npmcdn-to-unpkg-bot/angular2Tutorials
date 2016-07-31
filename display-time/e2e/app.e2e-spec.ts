import { DisplayTimePage } from './app.po';

describe('display-time App', function() {
  let page: DisplayTimePage;

  beforeEach(() => {
    page = new DisplayTimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
