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

const SimpleTable = ({ classes, data }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>First name</TableCell>
          <TableCell>Hobbies</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(person => (
          <TableRow key={person.firstName}>
            <TableCell>{person.firstName}</TableCell>
            <TableCell>{person.hobbies}</TableCell>
          </TableRow>
        ))
        }
      </TableBody>
    </Table>
  </Paper>
);

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  data: state.mock.persons
});

export default connect(mapStateToProps)(withStyles(styles)(SimpleTable));
