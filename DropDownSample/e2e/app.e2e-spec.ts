import { DropDownSamplePage } from './app.po';

describe('drop-down-sample App', function() {
  let page: DropDownSamplePage;

  beforeEach(() => {
    page = new DropDownSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
