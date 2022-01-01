import React from "react"
import Popover from '@material-ui/core/Popover'
import Tabs from '../components/tabs.js'
import { css } from "@emotion/core"
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/material/styles';
import { collapseClasses } from "@mui/material"

export default function SimplePopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  /*
  const useStyles = makeStyles(({
    paper: {
      backgroundColor: "navy",
    }
  }));
  

  const classes = useStyles();
  */
  return (
    <React.Fragment>
      <span
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
        className='pops'
      >
        {props.children}
      </span>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        PaperProps={{
          style: { minWidth: `300px`, maxWidth: `40%`, maxHeight: `300px` }
        }}
        //classes={classes.paper}
        sx={{
          color: 'navy'
        }}
      >
        <Tabs edits={props.edits} notes={props.notes} />

      </Popover>

    </React.Fragment >
  );
}
