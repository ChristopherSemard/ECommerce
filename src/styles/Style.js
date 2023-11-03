import { StyleSheet } from "react-native";

let primary = "#737bec";
let secondary = "#d8466d";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7F7F7",
        padding: "5%",
    },
    titlePage: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    boxShadow: {},
    buttonIconRoundedSecondary: {
        backgroundColor: secondary,
        padding: 13,
        paddingRight: 15,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        zIndex: 20,
    },
    buttonIconRoundedPrimary: {
        backgroundColor: primary,
        padding: 13,
        paddingRight: 15,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        zIndex: 20,
    },
    buttonIconPrimary: {
        backgroundColor: primary,
        padding: 6,
        borderRadius: 10,
    },
    buttonIconSecondary: {
        backgroundColor: secondary,
        padding: 6,
        borderRadius: 10,
    },
    buttonPrimaryLarge: {
        backgroundColor: primary,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        width: "100%",
    },
    buttonPrimaryLargeText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        textAlign: "center",
    },
    buttonPrimary: {
        backgroundColor: primary,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
    },
    buttonPrimaryText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        textTransform: "uppercase",
    },
    buttonSecondary: {
        backgroundColor: secondary,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
    },
    buttonSecondaryText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        textTransform: "uppercase",
    },

    productList: {
        flex: 1,
        gap: 15,
    },
    productContainer: {
        backgroundColor: "#fff",
        marginVertical: 10,
        padding: 20,
        marginHorizontal: 0,
        borderRadius: 20,
    },
    productTitle: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
    },
    productPrice: {
        fontSize: 20,
        fontWeight: "bold",
    },
    productDescription: {
        fontSize: 16,
    },
    productThumbnail: {
        width: "100%",
        height: 150,
        marginBottom: 10,
    },
    productScreenContainer: {
        flex: 1,
        padding: "0%",
        backgroundColor: "#fcfcfc",
    },
    productScreenThumbnailContainer: {
        flex: 3,
        marginBottom: 0,
        backgroundColor: "#fcfcfc",
    },
    productScreenThumbnail: {
        backgroundColor: "#fcfcfc",
        resizeMode: "cover",
        width: "100%",
        height: "100%",
    },
    productScreenContent: {
        flex: 2,
        justifyContent: "space-between",
        padding: "5%",
    },
    productScreenTitle: {
        fontSize: 25,
        fontWeight: "bold",
    },
    productScreenBrand: {
        fontSize: 18,
        color: "#7a7A7A",
        marginBottom: 10,
        fontWeight: "bold",
    },
    productScreenPrice: {
        fontSize: 25,
        fontWeight: "bold",
    },
    productScreenDescription: {
        fontSize: 16,
    },
    homeLogoContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    homeLogo: {
        height: 50,
        width: 100,
        resizeMode: "contain",
    },
    countCart: {
        position: "absolute",
        backgroundColor: secondary,
        top: -5,
        left: -5,
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 3,
        zIndex: 2,
        fontSize: 10,
        color: "#fff",
    },
    quantityManager: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 10,
        backgroundColor: "rgba(115, 123, 236, 0.1)",
        padding: 5,
        borderRadius: 10,
    },
    quantityManagerQuantity: {
        fontWeight: "bold",
        fontSize: 20,
        marginHorizontal: 10,
        marginBottom: 2,
    },
    cartFooter: {},
    cartTotalLabel: {
        fontSize: 18,
        marginVertical: 15,
    },
    cartTotal: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 15,
    },
    cartProductContainer: {
        backgroundColor: "#fff",
        marginVertical: 10,
        padding: 20,
        marginHorizontal: 0,
        borderRadius: 20,
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 20,
    },

    cartProductScreenThumbnailContainer: {
        flex: 1,
        marginBottom: 0,
        backgroundColor: "#fcfcfc",
    },
    cartProductThumbnail: {
        backgroundColor: "#fcfcfc",
        resizeMode: "contain",
        width: 80,
        height: 50,
    },
    searchInput: {
        backgroundColor: "rgba(115, 123, 236, 0.1)",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        marginBottom: 20,
        width: "88%",
    },
});

export default style;
