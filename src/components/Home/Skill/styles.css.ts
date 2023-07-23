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
  sectionTitle:style({
    fontSize:30,
    fontWeight:"bold",
  }),
  imgZone:style({
    width:"380px",
    margin:"10px auto",
    '@media':{
      'screen and (max-width:553px)':{
        width:"100px",
        margin:"10px auto"
      }
    }
  }),
  imgBox:style({
    width:"100px",
    display:"inline-block",
    margin:"10px"
  }),
  buttonZone:style({
    textAlign:"center",
    marginTop:"10px",
    marginBottom:"10px",
  }),
}

export default styles;