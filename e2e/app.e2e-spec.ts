import { Angular2WorldEventsPage } from './app.po';

describe('angular2-world-events App', function() {
  let page: Angular2WorldEventsPage;

  beforeEach(() => {
    page = new Angular2WorldEventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
