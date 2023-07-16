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
  imageBox:style({
    display:"block",
    margin:"auto",
    borderRadius:"50%",
  }),
  textBox:style({
    width:"230px",
    margin:"10px auto",
    '@media':{
      'screen and (max-width:1230px)':{
        width:"75%",
      },
      'screen and (max-width:400px)':{
        width:"100%",
      }
    },
  }),
  text:style({
    fontSize:20,
  }),

}

export default styles;