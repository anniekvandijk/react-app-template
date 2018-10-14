import React from 'react';
import AddEditShow from './AddEditShow';
import ShowsTable from './ShowsTable';

class ShowsContainer extends React.PureComponent {
  state = {
    showFormIsOpen: false
  };

  render() {
    const { showFormIsOpen } = this.state;
    const isShowFormOpen = (bool) => {
      this.setState({ showFormIsOpen: bool });
    };
    return (
      <div id="showscontainer">
        <AddEditShow
          setShowFormOpen={isShowFormOpen}
          showFormIsOpen={showFormIsOpen}
        />
        <ShowsTable
          setShowFormOpen={isShowFormOpen}
        />
      </div>
    );
  }
}

export default ShowsContainer;
