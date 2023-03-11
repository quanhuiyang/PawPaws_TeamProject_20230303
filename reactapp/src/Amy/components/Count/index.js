import { IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from "@mui/icons-material/Remove"
// import { useState } from "react";
// import { clamp } from "./Clamp";
import { shades } from "../../../styles/theme"
import { useCart } from '../../hooks/useCart'

export default function Count({id, quantity}){
    // const clampValue = clamp(1, 10);
    // const [value, setValue] = useState(1);

    const {plusOne, minusOne} = useCart();

    return (
      <>
      <Box display="flex">
        <IconButton
          size="small"
          sx={{
            borderRadius: 0,
            background: `${shades.primary[500]}`,
          }}
          onClick={() => {
            minusOne(id)
            // setValue(clampValue(value - 1))
          }
          }
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          variant="body2"
          sx={{
            border: `1px solid ${shades.primary[500]}`,
            p: 2,
            background: `${shades.beige_light[100]}`,
          }}
        >
          {quantity}
        </Typography>
        <IconButton
          size="small"
          sx={{
            borderRadius: 0,
            background: `${shades.primary[500]}`,
          }}
          onClick={() => {
            plusOne(id)
            //setValue(clampValue(value + 1))
            }}
        >
          <AddIcon />
        </IconButton>
      </Box>
      </>
    );
}