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
    '@media':{
      'screen and (max-width:300px)':{
        margin:0,
        marginTop:"10px"
      }
    }
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
  }),
  detail:style({
    overflow:"auto",
    marginBottom:"2px",
    height:200,
    '::-webkit-scrollbar':{
      display:"none",
    }
  })
}

export default styles;