import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { productList } from "../../datas/products";
import style from "../../styles/Style";
import Button from "../Button/Button";
import ButtonSecondary from "../Button/ButtonSecondary";

const ProductList = ({ navigation, products }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ProductItem product={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const ProductItem = ({ product, navigation }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
                navigation.navigate("Product", {
                    productId: product.id,
                })
            }
        >
            <View style={[style.productContainer, style.boxShadow]}>
                <Image
                    style={style.productThumbnail}
                    source={{ uri: product.thumbnail }}
                />
                <Text style={style.productTitle}>{product.title}</Text>
                <Text style={style.productDescription}>
                    {product.description}
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10,
                    }}
                >
                    <Text style={style.productPrice}>{product.price}€</Text>
                    <Button
                        onPress={() =>
                            navigation.navigate("Product", {
                                productId: product.id,
                            })
                        }
                        text="Voir"
                    ></Button>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductList;
