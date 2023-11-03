import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { productList } from "../../datas/products";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import ButtonSecondary from "../Button/ButtonSecondary";
import ButtonLarge from "../Button/ButtonLarge";
import Ionicons from "@expo/vector-icons/Ionicons";

import useCartStore from "../../Store/CartStore";

import style from "../../styles/Style";
import { addToCart } from "../../services/CartService";

const ProductScreen = ({ navigation, route }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        let productId = route.params.productId;
        let productFound = productList.find((product) => {
            return product.id === productId;
        });
        setProduct(productFound);
    }, []);

    return (
        <View style={[style.productScreenContainer]}>
            <View style={style.productScreenThumbnailContainer}>
                <Image
                    style={style.productScreenThumbnail}
                    source={{ uri: product.thumbnail }}
                />
            </View>
            <View style={style.productScreenContent}>
                <View
                    style={{
                        justifyContent: "flex-start",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 10,
                        }}
                    >
                        <Text style={style.productScreenTitle}>
                            {product.title}
                        </Text>
                        <Text style={style.productScreenBrand}>
                            4.2
                            <Ionicons
                                style={{ marginLeft: 5 }}
                                name="star"
                                size={20}
                                color="orange"
                            />
                        </Text>
                    </View>
                    <Text style={style.productScreenBrand}>
                        {product.brand}
                    </Text>
                    <ScrollView>
                        <Text style={style.productScreenDescription}>
                            {product.description}
                        </Text>
                    </ScrollView>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        marginTop: 20,
                    }}
                >
                    <Text style={style.productScreenPrice}>
                        {product.price}€
                    </Text>
                </View>
                <AddToCart productId={product.id} />
            </View>
        </View>
    );
};

const AddToCart = ({ productId }) => {
    const item = { id: productId, quantity: 1 };
    const { cartStore, updateCartStore } = useCartStore();

    return (
        <>
            {item?.id ? (
                <>
                    <ButtonLarge
                        onPress={async () => {
                            let cartToStore = await addToCart(item);
                            updateCartStore(cartToStore);
                            alert("Le produit a été ajouté au panier ! ");
                        }}
                        text="Ajouter au panier"
                    ></ButtonLarge>
                </>
            ) : null}
        </>
    );
};

export default ProductScreen;
