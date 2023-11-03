import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "../../styles/Style";
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonSecondary = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.buttonSecondary}>
                <Text style={style.buttonSecondaryText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonSecondary;
