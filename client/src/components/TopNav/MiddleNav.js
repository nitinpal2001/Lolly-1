import React from "react";
import { grey, blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, InputBase, Button, Tooltip, Hidden } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  searchButton: {
    color: grey[700],
    backgroundColor: grey[200],
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: grey[200],
    },
    "&:focus": {
      outline: "none",
    },
    borderLeftStyle: "solid",
    borderLeftWidth: "1px",
    borderLeftColor: grey[300],

    borderRadius: 0,
  },
  border: {
    borderColor: grey[300],
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: 0,
  },
  searchForm: {
    backgroundColor: "white",
    width: "100%",
  },
  input: {
    padding: theme.spacing(0, 1),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  signButton: {
    color: blue[800],
    borderColor: blue[800],
    borderRadius: "3px",
  },
}));

const MiddleNav = () => {
  const classes = useStyles();

  return (
    <Hidden xsDown>
      <Toolbar className={classes.root} disableGutters>
        <div className={classes.searchForm}>
          <InputBase
            fullWidth
            className={classes.border}
            classes={{
              input: classes.input,
            }}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            endAdornment={
              <Tooltip title="Search">
                <Button
                  disableRipple
                  size="small"
                  type="submit"
                  className={classes.searchButton}
                  aria-label="search"
                >
                  <SearchIcon fontSize="small" />
                </Button>
              </Tooltip>
            }
          />
        </div>
      </Toolbar>{" "}
    </Hidden>
  );
};

export default MiddleNav;