import {
   
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Modal
  } from 'react-native';
const Loader = (props)=>{




    return (
        <>
            
            <Modal transparent={true}>
                <View style={styles.indicatorWrapper}>
                    <View style={styles.loader}>
                        <Text style={styles.sec1}>Loading..</Text>
                        <View style={styles.sec2}>
                            <ActivityIndicator size="large" />
                            <Text style={styles.indicatorText}>Please Wait...</Text>
                        </View>
                       
                    </View>
                  
                </View>
            </Modal>
            
        </>
    )
}

const styles = StyleSheet.create({
    indicatorWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: 'transparent',
     
      },
      sec1:{
        color:"black",
        fontSize: 24,
        fontWeight:'bold',
        flex:0.6,
        paddingTop:10
      },
      sec2:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        gap:20,
      },
      loader:{
        justifyContent:'center',
        width:"90%",
        height:110,
        backgroundColor:'white',
        paddingStart:30
      },
    indicatorText: {
        color:"gray",
        fontSize: 16,
        fontWeight:'300'
    },
  });
  
export default Loader;