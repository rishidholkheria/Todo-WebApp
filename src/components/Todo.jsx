import React from "react";
import { List, ListItem, ListItemText} from "@material-ui/core";

const Todo = (props) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.text} secondary="Deadline Time" />
      </ListItem>
     
    </List>
  );
};

export default Todo;
