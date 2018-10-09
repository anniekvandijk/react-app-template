import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { readRecords, setUpdateRecord, showformOpen } from '../../../redux/showsReducer';
import UpdateButton from '../../components/Buttons/UpdateButton';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    padding: '5px'
  },
  table: {
    width: '100%'
  }
});

class ShowsTable extends React.PureComponent {
  componentWillMount() {
    console.log('mounted');
    const { loadData } = this.props;
    loadData();
  }

  render() {
    const {
      classes, shows, setRecordToUpdate, setShowformOpen
    } = this.props;
    if (shows === null) {
      return (
        <Paper>
          <div className="loading">Loading ... </div>
        </Paper>
      );
    }
    const editShow = (id) => {
      setRecordToUpdate(id);
      setShowformOpen(true);
    };
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell name="tableheader name">Name</TableCell>
              <TableCell name="tableheader location">Location</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {shows.map(show => (
              <TableRow key={show.id} name={show.id}>
                <TableCell name={show.name}>{show.name}</TableCell>
                <TableCell name={show.location}>{show.location}</TableCell>
                <TableCell>
                  <UpdateButton onClick={() => editShow(show.id)} />
                </TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

ShowsTable.propTypes = {
  classes: PropTypes.object.isRequired,
  loadData: PropTypes.func.isRequired,
  setRecordToUpdate: PropTypes.func.isRequired,
  shows: PropTypes.array,
  setShowformOpen: PropTypes.func.isRequired
};

ShowsTable.defaultProps = {
  shows: null
};

const mapStateToProps = state => ({
  shows: state.shows.shows
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(readRecords('/api/shows')),
  setRecordToUpdate: id => dispatch(setUpdateRecord(id)),
  setShowformOpen: open => dispatch(showformOpen(open))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ShowsTable));
