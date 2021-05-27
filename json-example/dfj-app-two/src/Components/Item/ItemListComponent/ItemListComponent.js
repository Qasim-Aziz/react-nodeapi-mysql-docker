import React from "react";
import Box from "@material-ui/core/Box";
import ItemComponent from "../ItemComponent/ItemComponent";

function ItemListComponent(props) {
  return (
    <div>
      <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-start"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        {props.itemList.map((item) => 
          <Box p={1}  key={item.id}>
            <ItemComponent item={item}/>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default ItemListComponent;
