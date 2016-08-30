import React, { Component } from 'react';
import { AutoSizer, VirtualScroll } from 'react-virtualized';

export default class List extends Component {
  render() {
    const people = [{ firstName: 'dave' }, { firstName: 'dan' }];
    return (
      <AutoSizer>
        {({ height, width }) => (
          <VirtualScroll
            height={height}
            width={width}
            rowCount={people.length}
            rowHeight={20}
            rowRenderer={
              ({ index }) => {
                console.log('Got to rowRenderer');
                return people[index].firstName;
              }
            }
          />
        )}
      </AutoSizer>
    );
  }
}
