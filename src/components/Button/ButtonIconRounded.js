import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "../../styles/Style";
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonIconRounded = ({ onPress, icon }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.buttonIconRoundedPrimary}>
                <Ionicons name={icon} size={20} color="white" />
            </View>
        </TouchableOpacity>
    );
};

export default ButtonIconRounded;
