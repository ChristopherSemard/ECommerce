import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useState, useRef, useEffect } from "react";

import style from "../../styles/Style";
import ButtonIconRounded from "../Button/ButtonIconRounded";
import ButtonIconRoundedSecondary from "../Button/ButtonIconRoundedSecondary";

import ProductList from "../Product/ProductList";
import { productList } from "../../datas/products";

const HomeScreen = ({ navigation }) => {
    const [listOfProducts, setListOfProducts] = useState(productList);

    useEffect(() => {}, [listOfProducts]);

    return (
        <View style={style.container}>
            <Search
                listOfProducts={listOfProducts}
                setListOfProducts={setListOfProducts}
            />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text style={style.titlePage}>Liste des produits</Text>
                <Text style={{ fontWeight: "600", marginBottom: 20 }}>
                    {listOfProducts.length} produit(s)
                </Text>
            </View>
            {listOfProducts.length > 0 ? (
                <ProductList
                    navigation={navigation}
                    products={listOfProducts}
                />
            ) : (
                <Text>Aucun produit trouvé</Text>
            )}
        </View>
    );
};

const Search = ({ listOfProducts, setListOfProducts }) => {
    const [search, setSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const removeSearch = () => {
        setSearch("");
        setIsSearching(false);
    };
    const updateListOfProducts = () => {
        setIsSearching(true);
        let toSearch = search.toLowerCase();
        const products = listOfProducts.filter((product) => {
            return product.title.toLowerCase().includes(toSearch) == true;
        });
        setListOfProducts(products);
    };

    useEffect(() => {
        if (!isSearching) {
            setListOfProducts(productList);
        }
    }, [isSearching]);

    useEffect(() => {}, [search, listOfProducts]);

    return (
        <View style={{ flexDirection: "row", width: "100%" }}>
            <TextInput
                style={style.searchInput}
                value={search}
                onChangeText={(text) => {
                    text.length == 0 ? removeSearch() : setSearch(text);
                }}
                placeholder="Rechercher un produit"
            ></TextInput>
            {isSearching ? (
                <ButtonIconRoundedSecondary
                    icon="trash"
                    onPress={() => {
                        setSearch("");
                        setIsSearching(false);
                        setListOfProducts(productList);
                    }}
                ></ButtonIconRoundedSecondary>
            ) : (
                <ButtonIconRounded
                    icon="search"
                    onPress={() => {
                        updateListOfProducts();
                    }}
                ></ButtonIconRounded>
            )}
        </View>
    );
};

export default HomeScreen;
