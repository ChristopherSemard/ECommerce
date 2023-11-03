import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import style from "../../styles/Style";
import useCartStore from "../../Store/CartStore";
import {
    getCartWithInfos,
    updateProduct,
    deleteProduct,
} from "../../services/CartService";
import Button from "../Button/Button";
import ButtonSecondary from "../Button/ButtonSecondary";
import ButtonIcon from "../Button/ButtonIcon";
import ButtonIconSecondary from "../Button/ButtonIconSecondary";
import ButtonLarge from "../Button/ButtonLarge";

const CartScreen = () => {
    const [cartWithInfos, setCartWithInfos] = useState([]);
    const { cartStore, updateCartStore } = useCartStore();

    useEffect(() => {
        const fetchData = async () => {
            setCartWithInfos(await getCartWithInfos());
        };
        fetchData();
    }, [cartStore]);

    return (
        <View style={style.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>
                {cartStore.totalNumberOfProducts} article(s) dans le panier
            </Text>

            {cartWithInfos.length > 0 ? (
                <>
                    <CartProductList products={cartWithInfos} />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <Text style={style.cartTotalLabel}>Total : </Text>
                        <Text style={style.cartTotal}>
                            {cartStore.totalAmount}€
                        </Text>
                    </View>
                    <ButtonLarge
                        onPress={() => {}}
                        text="Finaliser la commande"
                    ></ButtonLarge>
                </>
            ) : (
                <Text>Aucun produit dans votre panier</Text>
            )}
        </View>
    );
};

const CartProductList = ({ navigation, products }) => {
    return (
        <View style={{ flex: 7 }}>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <CartProductItem item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const CartProductItem = ({ item, navigation }) => {
    const product = item.product;
    return (
        <View style={[style.cartProductContainer, style.boxShadow]}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                <Text style={style.productTitle}>{product.title}</Text>
                <Image
                    style={style.cartProductThumbnail}
                    source={{ uri: product.thumbnail }}
                />
            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 0,
                    gap: 10,
                }}
            >
                <Text style={style.productPrice}>
                    {/* {product.price * item.quantity}€ */}
                    {product.price}€
                </Text>
                <QuantityManager item={item}></QuantityManager>
            </View>
        </View>
    );
};

function QuantityManager({ item }) {
    const { cartStore, updateCartStore } = useCartStore();
    const [productQuantity, setProductQuantity] = useState(item.quantity);

    useEffect(() => {
        const updateCart = async () => {
            let cartToStore = await updateProduct({
                id: item.id,
                quantity: productQuantity,
            });
            updateCartStore(cartToStore);
        };
        updateCart();
    }, [productQuantity]);

    const deleteItem = (id) => {
        const updateCartDeleteItem = async () => {
            let cartToStore = await deleteProduct(id);
            updateCartStore(cartToStore);
        };
        updateCartDeleteItem();
    };

    return (
        <View style={style.quantityManager}>
            <ButtonIcon
                onPress={() =>
                    setProductQuantity(
                        productQuantity - 1 > 0 ? productQuantity - 1 : 1
                    )
                }
                icon="remove"
            ></ButtonIcon>
            <Text style={style.quantityManagerQuantity}>{productQuantity}</Text>
            <ButtonIcon
                onPress={() => setProductQuantity(productQuantity + 1)}
                icon="add"
            ></ButtonIcon>
            <ButtonIconSecondary
                onPress={() => deleteItem(item.id)}
                icon="trash"
            ></ButtonIconSecondary>
        </View>
    );
}

export default CartScreen;
