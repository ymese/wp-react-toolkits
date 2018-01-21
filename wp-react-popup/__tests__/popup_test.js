import React from 'react';
import renderer from 'react-test-renderer';
import {Popup} from '../dist-modules';

describe('Popup', function () {
  it('should render correctly', function () {
    const closeBtn = (
      <span><i></i></span>
    );
    const insideElement = (
      <div>Hello inside</div>
    );
    const component = renderer
      .create(<div><Popup
        label={'Test popup'}
        closeTitle={'Close popup'}
        insideElement={insideElement}
        onRef={ref => {this.child = ref}}
        closeBtn={closeBtn}/></div>)
      .toJSON();
    expect(component).toMatchSnapshot();
    expect(true).toBeTruthy();
  })
});
