import { BaconIpsumAppPage } from './app.po';

describe('bacon-ipsum-app App', () => {
  let page: BaconIpsumAppPage;

  beforeEach(() => {
    page = new BaconIpsumAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
