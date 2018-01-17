import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../dist-modules';

describe('Boilerplate', function () {
  it('should render correctly', function () {
    // TODO: test something now
    const component = renderer
      .create(<Link page="https://ymese.com">Ymese 123</Link>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
