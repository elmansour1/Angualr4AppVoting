import { AngularVotingPage } from './app.po';

describe('angular-voting App', function() {
  let page: AngularVotingPage;

  beforeEach(() => {
    page = new AngularVotingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
