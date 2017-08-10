import { Simanaitis.Github.IoPage } from './app.po';

describe('simanaitis.github.io App', () => {
  let page: Simanaitis.Github.IoPage;

  beforeEach(() => {
    page = new Simanaitis.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
