import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";
import MenuIcon from "@material-ui/icons/Menu";
import BuildIcon from "@material-ui/icons/Build";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Link } from "react-scroll";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="menu-list">
        <ListItem button key="about" className="drawer-item">
          <ListItemIcon>
            <InfoIcon fontSize="large" className="section-icon" />
          </ListItemIcon>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={700}>
            About Me
          </Link>
        </ListItem>
        <ListItem button key="about" className="drawer-item">
          <ListItemIcon>
            <CodeIcon fontSize="large" className="section-icon" />
          </ListItemIcon>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            Projects
          </Link>
        </ListItem>
        <ListItem button key="about" className="drawer-item">
          <ListItemIcon>
            <BuildIcon fontSize="large" className="section-icon" />
          </ListItemIcon>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            Skills & Technologies
          </Link>
        </ListItem>
        <ListItem button key="about" className="drawer-item">
          <ListItemIcon>
            <MenuBookIcon fontSize="large" className="section-icon" />
          </ListItemIcon>
          <Link
            to="articles"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            Articles
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="menu-button">
            <MenuIcon className="menu-icon" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
