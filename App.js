import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions,Image,TextInput,TouchableHighlight } from 'react-native';

var {height, width} = Dimensions.get('window');
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',password:'' };
  }
  render() {
    return (
      <ImageBackground style={styles.container}
  source={{
    uri: 'data:image/jpeg;base64,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'}}>
      <View style={styles.centerBox} elevation={5}>
          <Image style={styles.stretch} source={require("./images/logo.jpg")}></Image>
          <TextInput
            style={styles.textBox}
            onChangeText={(username) => this.setState({username})}
            placeholder="Username"
            value={this.state.username}
          />
          <TextInput
            style={styles.textBox}
            onChangeText={(password) => this.setState({password})}
            placeholder="Password"
            value={this.state.password}
          />
          
            <TouchableHighlight
               style={styles.button}
               onPress={()=>{}}
              >
               <Text style={styles.text}> Sign In </Text>
          </TouchableHighlight>
          <View style={styles.create}>
            <Text style={styles.textDecorationLine}>Create New Account</Text>
          </View>
          <View>
            <Text style={styles.font16}> Forgot your <Text style={styles.textDecorationLine}>Username</Text> or <Text style={styles.textDecorationLine}>Password</Text></Text>
          </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    width: undefined,
    height: undefined,
  backgroundColor:'transparent',
  alignItems: 'center',
    justifyContent: 'center',
  },
  centerBox: {
  backgroundColor:"#ffffff",
  flex: .60,
  width:width - 50,
  borderRadius:3,
  padding:20,
  alignItems: 'center',
    justifyContent: 'flex-start',
  },  
  stretch: {
    width: 200,
    height: 55,
    marginBottom:35
  },
  textBox:{height: 40, width:'100%',marginBottom:20},
  button:{width:'80%',backgroundColor:'#936c2c',padding:15,alignItems: 'center',marginBottom:20},
  textDecorationLine:{textDecorationLine:'underline',fontSize:16},
  text:{color:'white',fontWeight:'bold'},
  create:{marginBottom:20},
  font16:{ fontSize:16}
});
