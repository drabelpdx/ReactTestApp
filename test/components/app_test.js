
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});

/*
//Use describe to group similat tests
describe('App', () => {

  //Use it to test a single attribute of target
  it('shows the correct text', () => {

    //create an instance of App
    const component = renderComponent(App);

    //Use 'expect' to make an 'assertion' about target
    expect(component).to.contain('React simple starter');

  });

});
*/

/*
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
*/
