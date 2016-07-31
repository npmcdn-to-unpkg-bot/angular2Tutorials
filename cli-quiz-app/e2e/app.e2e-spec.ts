import { CliQuizAppPage } from './app.po';

describe('cli-quiz-app App', function() {
  let page: CliQuizAppPage;

  beforeEach(() => {
    page = new CliQuizAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
