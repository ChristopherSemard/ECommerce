import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "../../styles/Style";

const ButtonLarge = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.buttonPrimaryLarge}>
                <Text style={style.buttonPrimaryLargeText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonLarge;
