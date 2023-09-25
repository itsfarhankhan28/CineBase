import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import  Divider  from '@mui/material/Divider';
import  Typography  from '@mui/material/Typography';

const Actors = (props) => {
  return (
    <div>
      <List style={{bgcolor: 'background.paper',}} component="nav" aria-label="mailbox folders">
        <ListItem style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
            <Typography style={{fontWeight:'bold'}}>
                Director
            </Typography>
            <Typography>
                {props.director}
            </Typography>
        </ListItem>
        <Divider />
        <ListItem style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
            <Typography style={{fontWeight:'bold'}}>
                Writer
            </Typography>
            <Typography>
                {props.writer}
            </Typography>
        </ListItem>
        <Divider/>
        <ListItem style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
            <Typography style={{fontWeight:'bold'}}>
                Actors
            </Typography>
            <Typography>
                {props.actors}
            </Typography>
        </ListItem>
      </List>
    </div>
  )
}

export default Actors
