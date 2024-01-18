import React, { useState } from 'react';
import { Text, View, Keyboard, TextInput, TouchableOpacity, ScrollView } from 'react-native';
const ListWithoutStorage = () => {
    const [item, setItem] = React.useState("");
    const [list, setList] = React.useState([]);
    const [btnState, setBtnState] = React.useState(false);
    const [update, setUpdate] = React.useState("");
    const addItemFunc = () => {
        setList([...list, {
            key: Math.random().toString(),
            data: item
        }])
        setItem("");
        Keyboard.dismiss();
    }
    const deleteItemFunc = (key) => {
        setList(list.filter((element) => {
            return key !== element.key;
        }));
    }
    const updateItemFunc = (element) => {
        setBtnState(true);
        setUpdate(element);
        setItem(element.data);

    }
    const updateItemBtnFunc = () => {
        if (update !== "") {
            setList(list.map((element) => {
                if (update.key === element.key) {
                    element.data = item;
                }
                return element;
            }))
            setBtnState(false);
            setItem("");
            setUpdate("");
            Keyboard.dismiss();
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ alignItems: "center", backgroundColor: "lightblue" }}>
                <Text style={[{ color: "white" }, styleSheet.heading]}>
                    To Do List
                </Text>
            </View>

            <View style={styleSheet.inputItem}>
                <TextInput style={{ borderWidth: 1, width: "78%", borderRadius: 10, color: "black" }} placeholder='Enter your item' value={item} onChangeText={setItem}></TextInput>
                <TouchableOpacity style={[{ marginLeft: 2 }, styleSheet.addItem]}
                    onPress={btnState ? updateItemBtnFunc : addItemFunc}>
                    <Text style={{ fontSize: 15, color: "white" }}>
                        {btnState ? "Update item" : "Add item"}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styleSheet.showView}>
                <ScrollView >
                    {list.map((element, index) => (
                        <TouchableOpacity onPress={() => updateItemFunc(element)} style={{ justifyContent: "space-between", flexDirection: 'row', width: 280, borderWidth: 1, marginTop: 5, borderRadius: 20, padding: 5 }}>
                            <Text style={{ fontSize: 25, color: "black" }}>{index + 1} : {element.data}
                            </Text>
                            <TouchableOpacity onPress={() => deleteItemFunc(element.key)} style={{ borderRadius: 30, backgroundColor: "lightblue", padding: 5, }}>
                                <Text style={{ fontSize: 20, marginRight: 3, color: "white", }}>X</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>

    );
}
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
        backgroundColor: "lightblue",
        padding: 10,
    },
    showView: {
        flex: 1,
        alignItems: "center"
    }
}
export default ListWithoutStorage;
