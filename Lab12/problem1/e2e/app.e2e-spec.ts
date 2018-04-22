import { Problem1Page } from './app.po';

describe('problem1 App', () => {
  let page: Problem1Page;

  beforeEach(() => {
    page = new Problem1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
