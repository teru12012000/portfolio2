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
    width:200,
    margin:"10px auto",
    '@media':{
      'screen and (min-width:628px)':{
        width:"100%",
        margin:0,
        display:"flex",
        justifyContent:"center",
      }
    }
  }),
  sectionTitle:style({
    fontSize:30,
    fontWeight:"bold",
  })
}

export default styles;