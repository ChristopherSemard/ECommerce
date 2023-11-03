import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/components/Home/HomeScreen";
import ProductScreen from "./src/components/Product/ProductScreen";
import CartScreen from "./src/components/Cart/CartScreen";
import { getCart, getCartToStore, saveCart } from "./src/services/CartService";
import { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import useCartStore from "./src/Store/CartStore";
import style from "./src/styles/Style";

const Stack = createNativeStackNavigator();

export default function App() {
    const { cartStore, updateCartStore } = useCartStore();

    useEffect(() => {
        // async function deleteCart() {
        //     await AsyncStorage.removeItem("cart");
        // }
        // deleteCart();

        async function handleCart() {
            try {
                const cart = await getCartToStore();

                updateCartStore(cart);
            } catch (error) {
                console.log("ERROR" + error);
            }
        }
        if (cartStore == null) {
            handleCart();
        }
    }, []);

    useEffect(() => {}, [cartStore]);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={({ navigation, route }) => ({
                    headerStyle: {
                        backgroundColor: "#fcfcfc",
                    },
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "#737bec",
                    },
                    headerRight: () => (
                        <CartIcon
                            title="title"
                            navigation={navigation}
                            route={route}
                            total={
                                cartStore ? cartStore.totalNumberOfProducts : 0
                            }
                        />
                    ),
                })}
            >
                <Stack.Screen
                    name="Home"
                    options={{
                        title: "",
                        headerLeft: () => <LogoHeader />,
                    }}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Product"
                    component={ProductScreen}
                    options={{ title: "" }}
                />
                <Stack.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{ title: "Votre panier" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const LogoHeader = ({ navigation, route }) => {
    return (
        <>
            <View style={style.homeLogoContainer}>
                <Image
                    source={require("./assets/logo-site.png")}
                    style={style.homeLogo}
                />
            </View>
        </>
    );
};

const CartIcon = ({ navigation, route, total }) => {
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <View>
                    {total > 0 ? (
                        <Text style={style.countCart}>{total}</Text>
                    ) : null}
                    <Text>
                        <Ionicons name="cart" size={30} color="#737bec" />
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
