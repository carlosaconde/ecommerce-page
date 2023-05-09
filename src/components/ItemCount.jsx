import * as React from "react";
import Box from "@mui/material/Box";

import { Button, Container, Typography } from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import RemoveCircleSharpIcon from "@mui/icons-material/RemoveCircleSharp";
import { useCounter } from "../hooks/useCounter";
import { theme } from "../ui/styles";

export const ItemCount = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // border: "1px solid gray",
        width: 200,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",

          width: 200,
        }}
      >
        <Button onClick={() => decrement()} variant="text">
          <RemoveCircleSharpIcon sx={theme.Icon} />
        </Button>
        <Typography variant="h6" component="h6">
          {counter}
        </Typography>

        <Button onClick={() => increment()} variant="text">
          <AddCircleSharpIcon sx={theme.Icon} />
        </Button>
      </Box>
      <Button sx={theme.buttonAddCart} variant="contained">
        {" "}
        Agregar al carrito{" "}
      </Button>
    </Box>
  );
};
