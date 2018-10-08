import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../PageWrapper';
import AddEditShow from './AddEditShow';
import ShowsTable from './ShowsTable';
import AddButton from '../../components/Buttons/AddButton';
import { showformOpen } from '../../../redux/showsReducer';

const Shows = (props) => {
  const { setOpen } = props;
  return (
    <PageWrapper>
      <div id="showcontainer">
        <Typography variant="display1" gutterBottom>
          Shows
        </Typography>
        <AddEditShow />
        <ShowsTable />
        <AddButton onClick={() => setOpen()} />
      </div>
    </PageWrapper>
  );
};

Shows.propTypes = {
  setOpen: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setOpen: () => dispatch(showformOpen(true))
});

export default connect(null, mapDispatchToProps)(Shows);
