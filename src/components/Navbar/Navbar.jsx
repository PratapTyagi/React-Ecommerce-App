import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";
import logo from "../../assets/logo.jfif";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appbar} color="inherit">
        <Toolbar>
          <Typography varient="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Commerse.js"
              height="25px"
              className={classes.image}
            />
            Ecommerse Site
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show Cart Items" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
