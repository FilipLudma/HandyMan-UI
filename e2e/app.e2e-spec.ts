import { HandyManPage } from './app.po';

describe('handy-man App', function() {
  let page: HandyManPage;

  beforeEach(() => {
    page = new HandyManPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
