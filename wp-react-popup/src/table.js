import React, { Component } from 'react';
import { Table, AutoSizer, Column, SortDirection } from 'react-virtualized';
import 'react-virtualized/styles.css';

export default class WPReTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      disableHeader: false,
      headerHeight: 30,
      height: this.props.customStyle ? this.props.customStyle.height : 270,
      hideIndexRow: false,
      overscanRowCount: 10,
      rowHeight: 40,
      scrollToIndex: undefined,
      sortBy: 'index',
      sortDirection: SortDirection.ASC,
      useDynamicRowHeight: false
    };

    this._noRowsRenderer = this._noRowsRenderer.bind(this);
    this._rowClassName = this._rowClassName.bind(this);
    this._getRowHeight = this._getRowHeight.bind(this);
    this._getDatum = this._getDatum.bind(this);
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
    } = this.state;

    const { list } = this.props;
    const sortedList = this._isSortEnabled()
      ? list
        .sortBy(item => item[sortBy])
        .update(list =>
          sortDirection === SortDirection.DESC
            ? list.reverse()
            : list
        )
      : list;
    const rowGetter = ({ index }) => this._getDatum(sortedList, index);
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
              {this.renderColumnFromConfig()}
            </Table>
          )}
        </AutoSizer>
      </div>
    )
  }

  _noRowsRenderer() {
    return (
      <div className="noRows">
        There's nothing here, yet.
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

  _isSortEnabled () {
    return true;
  }

  _getRowHeight({ index }) {
    const { list } = this.state;
    return this._getDatum(list, index).size;
  }

  _sort({ sortBy, sortDirection }) {
    this.setState(...this.state, { sortBy, sortDirection });
  }

  renderColumnFromConfig() {
    const { config } = this.props;
    return config.columnsConfig.map((c) => {
      if (c.cellRenderer) {
        return (
          <Column
            key={c.dataKey}
            label={c.label}
            dataKey={c.dataKey}
            disableSort={c.disableSort}
            width={c.width}
            cellRenderer={c.cellRenderer}
            {...c}
          />
        );
      } else {
        return (
          <Column
            key={c.dataKey}
            label={c.label}
            dataKey={c.dataKey}
            disableSort={c.disableSort}
            width={c.width}
          />
        );
      }

    });
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
