// import React from 'react';
// import {
//   renderIntoDocument,
//   findRenderedDOMComponentWithClass,
//   findRenderedDOMComponentWithTag,
//   Simulate
// } from 'react-addons-test-utils';
import { expect } from 'chai';
import { demo } from '../dist-modules';

describe('Boilerplate', function () {
  it('should do boilerplate things', function () {
    // TODO: test something now
    expect(true).to.equal(true);
  });

  it('should return three', function () {
    expect(demo()).to.equal(3);
  });
});
