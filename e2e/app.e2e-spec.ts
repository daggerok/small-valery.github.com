import { SmallValeryPage } from './app.po';

describe('small-valery App', function() {
  let page: SmallValeryPage;

  beforeEach(() => {
    page = new SmallValeryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sv works!');
  });
});
