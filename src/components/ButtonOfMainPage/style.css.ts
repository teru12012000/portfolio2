import Color from "@/shared/Color";
import { style } from "@vanilla-extract/css";

const styles={
  link:style({
    textDecoration:"none",
  }),
  button:style({
    backgroundColor:Color.background.black,
    color:Color.text.white,
    padding:"5px",
    fontWeight:"bold",
    ':hover':{
      backgroundColor:Color.background.aqua,
      transition:"0.7s",
    }
  })
}

export default styles;