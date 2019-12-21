import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList, Button } from 'react-native';

class Component4 extends Component { 
    constructor(){
        super();
        this.state = {
            data: [
                {name: "Aru", age: 24,},
                {name: "Suman", age: 23},
                {name: "Susmita", age: 22},
            ]
        }
    }
    removeItem(item) {
        const indexTODelete = this.state.data.findIndex((i) => i.name === item.name);
        const newArray = [...this.state.data];
        newArray.splice(indexTODelete, 1);
        
        // Method 1
        this.setState({data: newArray});

        // Method 2
        // this.setState(() => {
        //     return {
        //         data: newArray
        //     };
        // })

        // Method 3
        // this.setState(() => ({ data: newArray }))
    }
    renderItems({item}) {        
        return (
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'wheat', justifyContent: 'space-around', padding: 5}}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
                <Button title="Delete" onPress={()=> this.removeItem(item)} />
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
                    keyExtractor={item => item.name}
                    data={this.state.data}
                    renderItem={({item})=> this.renderItems({item})}
                    ListEmptyComponent={() => (<Text>Sorry! No items found!</Text>)}
                />
            </>
        );
    }
} 

// AppRegistry.registerComponent('Component4', () => Component4);

export default Component4;