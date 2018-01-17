import React from 'react';
import renderer from 'react-test-renderer';
import Tab from '../dist-modules';

describe('Boilerplate', function () {
  it('should render correctly', function () {
    // TODO: test something now
    const tabs = [{
      name: 'Test 1',
      panel: (
        <div>This is panel 1</div>
      )
    }, {
      name: 'Test 2',

    }];
    const component = renderer
      .create(<Tab tabs={tabs}>Ymese 123</Tab>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
