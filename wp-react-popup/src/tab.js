import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropTypes from 'prop-types';
import styles from 'react-tabs/style/react-tabs.css';

export default class WpTab extends Component {

  constructor(props) {
    super(props);
    const { defaultTab } = this.props;
    this.state = {
      activeTab: defaultTab || 0
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  render() {
    return (
      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={this.state.activeTab}
      >
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

  handleSelect(index) {
    const { tabs } = this.props;
    const activeTab = index > tabs.length - 1 ? tabs.length - 1 : index;
    this.setState(...this.state, { activeTab });
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillMount() {
    this.props.onRef(undefined);
  }
}

WpTab.propTypes = {
  tabs: PropTypes.array.isRequired,
  onRef: PropTypes.func.isRequired,
  defaultTab: PropTypes.number
};

