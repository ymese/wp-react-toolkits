import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import { WPReTable, ColumnConfig } from '../dist-modules';
import Immutable from 'immutable';

describe('Table', function () {
  it('should render correctly', function () {
    const data = Immutable.List([{
      name: 'Thinh',
      age: 18
    }]);
    const configs = {
      columnsConfig: [
        new ColumnConfig('Name', 'name', false, 300),
        new ColumnConfig('Age', 'age', false, 400)
      ]
    };

    const component = renderer
      .create(<div>
        <WPReTable list={data} config={configs} />
      </div>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
})
