import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "../../styles/Style";

const Button = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.buttonPrimary}>
                <Text style={style.buttonPrimaryText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
