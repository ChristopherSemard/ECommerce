import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "../../styles/Style";
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonIcon = ({ onPress, icon }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.buttonIconPrimary}>
                <Ionicons name={icon} size={20} color="white" />
            </View>
        </TouchableOpacity>
    );
};

export default ButtonIcon;
