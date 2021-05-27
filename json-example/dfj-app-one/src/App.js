import "./App.css";
import ItemListComponent from "./Components/Item/ItemListComponent/ItemListComponent";
import Data from "./data.json";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
// <AppBar position="static" style={{ background: "#222f3e" }}>

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static" style={{ background: "#222f3e" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              App One
            </Typography>
            <Button color="inherit" onClick={() => openInNewTab('http://localhost:8282/')}>Go to Second APP</Button>
          </Toolbar>
        </AppBar>
        <div>
          <Container>
            <ItemListComponent itemList={Data} />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
