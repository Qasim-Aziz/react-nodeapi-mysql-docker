import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import WcIcon from '@material-ui/icons/Wc';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  icon:{
    color:"#74b9ff",
    marginRight:"2px",
    opacity: 0.8
  }
}));

function ItemComponent(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              U
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.item.name}
          subheader={"ID :" + props.item.id}
        />
        <CardContent>
          <table>
            <tr>
              <td>
                <AssignmentIndIcon className={classes.icon}/>
              </td>
              <td>
                <Typography variant="body2" component="p">
                  ID card
                </Typography>
              </td>
              <td>
                <Typography variant="body2"  component="p">
                  {": "+props.item.idcard}
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <PhonelinkRingIcon className={classes.icon}/>
              </td>
              <td>
                <Typography variant="body2"  component="p">
                  Phone
                </Typography>
              </td>
              <td>
                <Typography variant="body2" component="p">
                  {": "+props.item.phone}
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <WcIcon className={classes.icon}/>
              </td>
              <td>
                <Typography variant="body2"  component="p">
                  Gender
                </Typography>
              </td>
              <td>
                <Typography variant="body2"  component="p">
                  {": "+props.item.gender}
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <LocationOnIcon className={classes.icon}/>
              </td>
              <td>
                <Typography variant="body2"  component="p">
                  Place of birth
                </Typography>
              </td>
              <td>
                <Typography variant="body2"  component="p">
                  {": "+props.item.placeofbirth}
                </Typography>
              </td>
            </tr>
          </table>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Address:</Typography>
            <Typography paragraph>{props.item.address}</Typography>
            <Typography paragraph>content:</Typography>
            <Typography paragraph>{props.item.content}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default ItemComponent;
