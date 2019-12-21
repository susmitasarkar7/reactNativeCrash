import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component2 extends Component {
    onPress() {
        console.log('Area Pressed');
    }
    onPress2() {
        console.log('Area 2 Pressed');
    }
    render() {
        return(
        <View>
            <View style={styles.myView}>
                <Text style={styles.myText}>Hello SUSMITA</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.v1} 
                    onPress={this.onPress2}
                    >
                    <View>
                        <Text>View 1</Text>
                    </View>                    
                </TouchableOpacity>
                <TouchableHighlight 
                    style={styles.v2} 
                    onPress={this.onPress}
                    underlayColor="blue"
                    >
                    <View>
                        <Text style={styles.vText}>View 2</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.v3}>
                    <Text>View 3</Text>
                </View>
            </View>
        </View>
        );
    }
} 

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue'
    },
    myText: {
        color: 'white'
    },
    container: {
        flexDirection: 'row',
        height: 100
    },
    v1: {
        flex: 1,
        backgroundColor: 'wheat',
        padding: 10
    },
    v2: {
        flex: 1,
        backgroundColor: 'teal',
        padding: 10
    },
    v3: {
        flex: 1,
        backgroundColor: 'cyan',
        padding: 10
    },
    vText: {
        color: 'white'
    }
})

AppRegistry.registerComponent('Component2', () => Component2);