import Color from "@/shared/Color";
import { style } from "@vanilla-extract/css";

const styles={
  containar:style({
    width:200,
    border:`1.5px solid ${Color.background.silver}`,
    borderRadius:"5%",
    padding:20,
    height:460,
    margin:10,
    display:"inline-block",
    verticalAlign: "top",
  }),
  imgZone:style({
    width:"100%",
    height:200,
  }),
  titleText:style({
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    paddingTop:"5px",
    paddingBottom:"5px",
  })
}

export default styles;