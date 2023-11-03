import { productList } from "../datas/products";

import AsyncStorage from "@react-native-async-storage/async-storage";

export async function addToCart(newProduct) {
    let actualCart = await getCart();

    const alreadyIn = actualCart.find(
        (product) => product.id === newProduct.id
    );

    if (alreadyIn) {
        await updateProduct(newProduct, "increment");
    } else {
        actualCart.push(newProduct);
        await saveCart(actualCart);
    }

    let cartToStore = await getCartToStore();
    return cartToStore;
}

export async function getCartToStore() {
    let cart = await getCart();
    let cartToStore = {
        cart,
        numberOfDifferentProducts: cart.length,
        totalNumberOfProducts: await getCountOfProducts(cart),
        totalAmount: await getTotalAmount(await getCartWithInfos()),
    };
    return cartToStore;
}
export async function getTotalAmount(cartWithInfos) {
    let totalAmount = 0;
    for (const item of cartWithInfos) {
        totalAmount = totalAmount + item.quantity * item.product.price;
    }
    return totalAmount;
}
export async function getCountOfProducts(cart) {
    let totalNumberOfProducts = 0;
    for (const item of cart) {
        totalNumberOfProducts = totalNumberOfProducts + item.quantity;
    }
    return totalNumberOfProducts;
}

export async function getCart() {
    let actualCart = await AsyncStorage.getItem("cart");
    cartToReturn = JSON.parse(actualCart);
    if (cartToReturn == null) {
        cartToReturn = [];
    }
    return cartToReturn;
}

export async function deleteProduct(id) {
    let actualCart = await getCart();
    const newCart = actualCart.filter((product) => product.id !== id);
    await saveCart(newCart);
    let cartToStore = await getCartToStore();
    return cartToStore;
}

export async function updateProduct(productToUpdate, increment = null) {
    let actualCart = await getCart();
    if (productToUpdate["id"] !== undefined) {
        const alreadyIn = actualCart.find(
            (product) => product.id === productToUpdate.id
        );
        if (increment != null) {
            alreadyIn.quantity = alreadyIn.quantity + 1;
        } else {
            alreadyIn.quantity = productToUpdate.quantity;
        }
        await saveCart(actualCart);
    }
    let cartToStore = await getCartToStore();
    return cartToStore;
}

export async function saveCart(cart) {
    await AsyncStorage.setItem("cart", JSON.stringify(cart));
}

export async function getCartWithInfos() {
    let cart = await getCart();
    let cartWithInfos = [];
    for (const item of cart) {
        let itemWithInfos = {
            id: item.id,
            quantity: item.quantity,
            product: getProduct(item.id),
        };
        cartWithInfos.push(itemWithInfos);
    }
    return cartWithInfos;
}

function getProduct(id) {
    let product = productList.find((product) => product.id === id);
    if (product) {
        return product;
    } else {
        return null;
    }
}
