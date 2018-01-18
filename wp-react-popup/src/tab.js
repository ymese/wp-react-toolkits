import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropTypes from 'prop-types';
import styles from 'react-tabs/style/react-tabs.css';

export default class WpTab extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          {this.renderTabs()}
        </TabList>
        {this.renderTabPanels()}
      </Tabs>
    );
  }

  renderTabs() {
    const { tabs } = this.props;
    return tabs
      .map(t => t.name)
      .map(name => <Tab key={name}>{name}</Tab>);
  }
  renderTabPanels() {
    const { tabs } = this.props;
    return tabs
      .map(t => t.panel)
      .map((panel, key) => <TabPanel key={`${key}_panel`}>{panel}</TabPanel>);
  }

}

WpTab.propTypes = {
 tabs: PropTypes.array.isRequired
};

