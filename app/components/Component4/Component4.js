import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList } from 'react-native';
import {List, ListItem} from 'react-native-elements';

const users =[
    {name: "Aru"},
    {name: "Suman"},
    {name: "Susmita"},
]

export default class RApp extends Component { 
    constructor(){
        super();
        this.state = {
            data:[
                {name: "Aru"},
                {name: "Suman"},
                {name: "Susmita"},
            ]
        }
    }
    render() {
        return(
            <List>
                <FlatList
                    data={this.state.data}
                    renderItem={({item})=> {
                        <ListItem title={`${this.item.name}`} />
                    }}
                />
            </List>
        );
    }
} 

AppRegistry.registerComponent('RApp', () => RApp);