import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "#01a3a4",
    color:"white"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function ItemComponent(props) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            style={{color:"#c8d6e5"}}
          >
            Information
          </Typography>
          <Typography variant="h5" component="h2">
            {props.item.id}
          </Typography>
          <Typography className={classes.pos} style={{color:"#c8d6e5"}}>
            ID
          </Typography>
          <Typography variant="body2" component="p">
            {props.item.name}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="sm" variant="contained"  color="primary" className={classes.margin} onClick={() => openInNewTab('http://localhost:8282/')}>View</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ItemComponent;
