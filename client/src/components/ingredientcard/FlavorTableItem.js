import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import FlavorChip from '../ingredientcard/FlavorChip';
import ButtonGroup from '../ingredientcard/FlavorChip';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  badges: {
    color: 'Green',
  },
}));
export default function FlavorTableItem(props) {
  const { flavorDescription, matches, dislikes, handler, addItem } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <List component="label" className={classes.root}>
        <ListItem disableGutters={true}>
          <ListItemText component="span" secondary={flavorDescription} />
        </ListItem>
        <FlavorChip matches={matches} dislikes={dislikes} handler={handler} addItem={addItem} />
      </List>
    </React.Fragment>
  );
}
