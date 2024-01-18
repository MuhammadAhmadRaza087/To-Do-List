import React, { useState, useEffect } from 'react';
import { Text, View, Keyboard, TextInput, TouchableOpacity, ScrollView, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme, useTheme
} from '@react-navigation/native';
const FrontEnd = () => {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);
    const [btnState, setBtnState] = useState(false);
    const [update, setUpdate] = useState('');
    const {colors} = useTheme();
    useEffect(() => {
        retrieveData();
    }, []);
    const addItemFunc = async () => {
        const newItem = {
            key: Math.random().toString(),
            data: item,
        };

        setList([...list, newItem]);
        saveData(newItem);
        setItem('');
        Keyboard.dismiss();
    };

    const saveData = async (newItem) => {
        try {
            await AsyncStorage.setItem(newItem.key, newItem.data);
            console.log('Data Saved...');
        } catch (error) {
            console.log(error);
        }
    };

    const retrieveData = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const savedItems = await AsyncStorage.multiGet(keys);

            const retrievedList = savedItems.map((item) => ({
                key: item[0],
                data: item[1],
            }));

            setList(retrievedList);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteItemFunc = (key) => {
        setList(list.filter((element) => key !== element.key));
        removeData(key);
    };

    const removeData = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            console.log('Data Removed...');
        } catch (error) {
            console.log(error);
        }
    };

    const updateItemFunc = (element) => {
        setBtnState(true);
        setUpdate(element);
        setItem(element.data);
    };

    const updateItemBtnFunc = () => {
        if (update !== '') {
            setList(
                list.map((element) => {
                    if (update.key === element.key) {
                        element.data = item;
                        updateData(element);
                    }
                    return element;
                })
            );
            setBtnState(false);
            setItem('');
            setUpdate('');
            Keyboard.dismiss();
        }
    };

    const updateData = async (updatedItem) => {
        try {
            await AsyncStorage.setItem(updatedItem.key, updatedItem.data);
            console.log('Data Updated...');
        } catch (error) {
            console.log(error);
        }
    };
    const styleSheet = {
        heading: {
            fontSize: 30,

        },
        inputItem: {
            margin: 10,
            alignItems: "center",
            flexDirection: 'row',
            
        },
        addItem: {
            backgroundColor: colors.primary,
            padding: 10,
        },
        showView: {
            flex: 1,
            alignItems: "center"
        }
    }
    return (
        
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={{ alignItems: "center", backgroundColor: colors.primary }}>
                <Text style={[{ color: colors.text }, styleSheet.heading]}>
                    To Do List
                </Text>
            </View>

            <View style={[styleSheet.inputItem ] }>
                <TextInput style={{ borderWidth: 1, width: "78%", borderRadius: 10, color:colors.text, backgroundColor:colors.primary }} placeholder='Enter your item' value={item} onChangeText={setItem}></TextInput>
                <TouchableOpacity style={[{ marginLeft: 2 }, styleSheet.addItem]}
                    onPress={btnState ? updateItemBtnFunc : addItemFunc}>
                    <Text style={{ fontSize: 15, color: colors.text }}>
                        {btnState ? "Update item" : "Add item"}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={[{ backgroundColor: colors.background },styleSheet.showView]}>
                <ScrollView >
                    {list.map((element, index) => (
                        <TouchableOpacity onPress={() => updateItemFunc(element)} style={{ justifyContent: "space-between", flexDirection: 'row', width: 280, borderWidth: 1, marginTop: 5, borderRadius: 20, padding: 5, backgroundColor: colors.primary }}>
                            <Text style={{ fontSize: 25, color: colors.text }}>{index + 1} : {element.data}
                            </Text>
                            <TouchableOpacity onPress={() => deleteItemFunc(element.key)} style={{ borderRadius: 30, backgroundColor: colors.background, padding: 5, }}>
                                <Text style={{ fontSize: 20, marginRight: 3, color: colors.text, }}>X</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}
const ListWithStorage = () => {

    return (
        <FrontEnd></FrontEnd>
    );
}

export default ListWithStorage;
