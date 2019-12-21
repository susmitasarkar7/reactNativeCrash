import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList, Button } from 'react-native';

class Component4 extends Component { 
    constructor(){
        super();
        this.state = {
            data:[
                {name: "Aru", age: 24,},
                {name: "Suman", age: 23},
                {name: "Susmita", age: 22},
            ]
        }
    }
    redderItems(item) {
        return (
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'wheat', justifyContent: 'space-around', padding: 5}}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
                <Button title="Delete" />
            </View>
        );
    }
    emptyList() {
        this.setState((prev) => {
            return {
                data: [],
            }
        })
    }
    render() {
        return(
            <>
                <Button title="Empty List" onPress={() => this.emptyList()} />
                <FlatList
                    data={this.state.data}
                    renderItem={({item})=> this.redderItems(item)}
                    ListEmptyComponent={() => (<Text>Sorry! No items found!</Text>)}
                />
            </>
        );
    }
} 

// AppRegistry.registerComponent('Component4', () => Component4);

export default Component4;