import { LojaPage } from './app.po';

describe('loja App', function() {
  let page: LojaPage;

  beforeEach(() => {
    page = new LojaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
