import { StyleSheet } from "react-native";

const styles  = StyleSheet.create({
  appcontainer: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    borderColor:'white',
    flexDirection:'column',
    borderWidth:1,
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:60,
    paddingTop:20,
    paddingBottom:10,
    backgroundColor: '#161716'
  },
  inputContainer:{
    gap: 20,
    width:'80%',
    alignItems:'center',
    flexDirection:'column',
    borderColor:'black',
    borderWidth:1,
  }
});

export default styles