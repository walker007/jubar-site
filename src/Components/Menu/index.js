import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Link
} from "@material-ui/core";

import Logo from "./logo.svg";

import MoreIcon from "@material-ui/icons/MoreVert";

const MenuItems = [
  { label: "Eventos", route: "/eventos" },
  { label: "Agenda", route: "/agenda" },
  { label: "Noticias", route: "/noticias" },
  { label: "Início", route: "/" }
];

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const MenuTopBar = props => {
  let history = useHistory();
  console.log(props);
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMenu = () => {
    return MenuItems.map((item, index) => {
      return (
        <MenuItem
          onClick={() => {
            history.push(item.route);
          }}
          key={index}
        >
          {item.label}
        </MenuItem>
      );
    });
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {renderMenu()}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="relative">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link href="/">
              <img src={Logo} alt="JubarABCNG" height="40px" />
            </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>{renderMenu()}</div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default MenuTopBar;
