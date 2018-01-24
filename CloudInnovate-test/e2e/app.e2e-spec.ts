import { ReleaseNoteWebSitePage } from './app.po';

describe('bps App', () => {
  let page: ReleaseNoteWebSitePage;

  beforeEach(() => {
    page = new ReleaseNoteWebSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
