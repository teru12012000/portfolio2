import Color from "@/shared/Color";
import { style } from "@vanilla-extract/css";

const styles={
  containar:style({
    width:"75%",
    margin:"20px auto",
  }),
  titlebox:style({
    textAlign:"center",
    fontWeight:"bold",
    fontSize:40,
  }),
  titleSpan:style({
    backgroundColor:Color.background.white,
  }),
  detaialBox:style({
    backgroundColor:Color.background.white,
  }),
}

export default styles;