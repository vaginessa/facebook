import React, { Component } from 'react';
import { Text, TextInput, View ,Button,StyleSheet,Image,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './Home.style'

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';


export default class Header extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
       <View>
            {/* Search */}
            <View style={{ backgroundColor:'#4167b2',width:'100%', height:50}} >
            <View style={{flex:1,flexDirection:'row',paddingHorizontal:6}} >
                <View style={{flex:1}} >
                  <IconE style={{marginTop:10,left:2}} name="camera" size={26} color="#ffffff" />
                </View>
                <View style={{flex:8,backgroundColor:"#4167b2"}} >
                <SearchBar
                  placeholder="Cari..."
                  onChangeText={this.updateSearch}
                  value={search}
                  searchIcon={{color:'#ffffff'}}
                  cancelIcon={{color:'#ffffff'}}
                  containerStyle={{backgroundColor: '#4167b2'}}
                  leftIconContainerStyle={{backgroundColor: '#4167b2'}}
                  rightIconContainerStyle={{backgroundColor: '#4167b2'}}
                  inputContainerStyle={{backgroundColor: '#4167b2'}}
                  placeholderTextColor={'#ffffff'}
                  underlineColorAndroid='#ffffff'
                  inputStyle={{backgroundColor:"#4167b2",color:'white'}}
                  
                />
                </View>
                <View style={{flex:1}} >
                  <Icon style={{marginTop:10,right:-5}} name="facebook-messenger" size={30} color="#ffffff" />
                </View>
            </View>
            </View>
       </View>
    )
  }
}