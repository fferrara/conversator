import { ConversatorPage } from './app.po';

describe('conversator App', () => {
  let page: ConversatorPage;

  beforeEach(() => {
    page = new ConversatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
