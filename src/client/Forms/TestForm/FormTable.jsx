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
import { readData } from '../../../redux/mockReducer';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 600,
    maxWidth: 600
  }
});

class SimpleTable extends React.PureComponent {
  componentWillMount() {
    console.log('mounted');
    const { loadData } = this.props;
    loadData();
  }

  render() {
    const { classes, data } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>First name</TableCell>
              <TableCell>Hobbies</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(d => (
              <TableRow key={d.firstName}>
                <TableCell>{d.firstName}</TableCell>
                <TableCell>{d.hobbies}</TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  loadData: PropTypes.func.isRequired,
  data: PropTypes.array
};

SimpleTable.defaultProps = {
  data: []
};

const mapStateToProps = state => ({
  data: state.data.persons
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(readData('/mockdata'))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SimpleTable));
