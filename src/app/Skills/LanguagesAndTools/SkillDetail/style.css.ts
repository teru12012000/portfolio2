import { style } from "@vanilla-extract/css";

const styles={
  containar:style({
    margin:"10px",
    '@media':{
      'screen and (max-width:300px)':{
        margin:0,
        marginTop:"10px"
      }
    }
  }),
  cardZone:style({
    width:"450px",
    margin:"10px auto",
    '@media':{
      'screen and (max-width:617px)':{
        width:"200px",
        margin:"10px auto"
      }
    }
  }),
}
export default styles;