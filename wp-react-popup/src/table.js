import React, { Component } from 'react';
import {Table, AutoSizer, Column, SortDirection, SortIndicator} from 'react-virtualized';

class WPReTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      disableHeader: false,
      headerHeight: 30,
      height: 270,
      hideIndexRow: false,
      overscanRowCount: 10,
      rowHeight: 40,
      scrollToIndex: undefined,
      sortBy: 'index',
      sortDirection: SortDirection.ASC,
      useDynamicRowHeight: false,
      config: props.config
    };

    this._noRowsRenderer = this._noRowsRenderer.bind(this);
    this._rowClassName = this._rowClassName.bind(this);
    this._getRowHeight = this._getRowHeight.bind(this);
    this._sort = this._sort.bind(this);

  }

  render() {
    const {
      disableHeader,
      headerHeight,
      height,
      hideIndexRow,
      overscanRowCount,
      rowHeight,
      scrollToIndex,
      sortBy,
      sortDirection,
      useDynamicRowHeight,
      config
    } = this.state;

    const rowGetter = ({ index }) => this._getDatum(sortedList, index);
    const { list } = this.props;
    const rowCount = list.size;

    return(
      <div>
        <AutoSizer disableHeight>
          {({width}) => (
            <Table
            id="wpr_tbl"
            disableHeader={disableHeader}
            headerClassName='headerColumn'
            headerHeight={headerHeight}
            height={height}
            overscanRowCount={overscanRowCount}
            noRowsRenderer={this._noRowsRenderer}
            rowClassName={this._rowClassName}
            rowHeight={useDynamicRowHeight ? this._getRowHeight : rowHeight}
            rowGetter={rowGetter}
            rowCount={rowCount}
            scrollToIndex={scrollToIndex}
            sort={this._sort}
            sortBy={sortBy}
            sortDirection={sortDirection}
            width={width}
            >

            </Table>
          )}
        </AutoSizer>
      </div>
    )
  }

  _noRowsRenderer() {
    return (
      <div className="noRows">
        There is now rows to show
      </div>
    )
  }

  _rowClassName({ index }) {
    if (index < 0) {
      return 'headerRow'
    } else {
      return index % 2 === 0 ? 'evenRow' : 'oddRow'
    }
  }

  _getDatum(list, index) {
    return list.get(index)
  }

  _getRowHeight({ index }) {
    const { list } = this.state;
    return this._getDatum(list, index).size;
  }

  _sort({ sortBy, sortDirection }) {
    this.setState(...this.state, { sortBy, sortDirection });
  }
}

/**
 * Column configuration class
 */
export class ColumnConfig {
  constructor(label, dataKey, disableSort, width, cellRenderer, headerRenderer) {
    this.label = label;
    this.dataKey = dataKey;
    this.disableSort = disableSort;
    this.width = width;
    this.cellRenderer = cellRenderer;
    this.headerRenderer = headerRenderer;
  }
}
