import { style } from "@vanilla-extract/css";

const headerStyles={
  containar:style({
    width:"100%",
    backgroundColor:"black",
    color:"white",
    height:"100px",
    position:"relative", 
    "@media":{
      'screen and (max-width:1000px)':{
        textAlign:"center",
      }
    } 
  }),
  headerText:style({
    width:"100%",
    fontSize:"40px",
    fontWeight:"bold",
    position:"absolute",
    top:"15px",
    

  })

}

export default headerStyles;