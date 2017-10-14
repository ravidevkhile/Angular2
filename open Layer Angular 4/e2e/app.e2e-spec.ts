import { ANG2OLJSPage } from './app.po';

describe('ang2-oljs App', () => {
  let page: ANG2OLJSPage;

  beforeEach(() => {
    page = new ANG2OLJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
