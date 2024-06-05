import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131016",
        padding: 24
    },
    title: {
        //backgroundColor: "gray",
        justifyContent: 'center',
        flexDirection: "row",
        width: "100%"
    },
    titleTo: {
        color: "#ADD8E6",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48,
    },
    titleDo: {
        color: "#0088BB",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
    },
    txtCriadas: {
        color: "#ADD8E6",
        fontSize: 14,
        fontWeight: "bold"
    },
    txtConcluidas: {
        color: "#0088BB",
        fontSize: 14,
        fontWeight: "bold"
    },
    eventDate: {
        color: "#fdfcfe",
        fontSize: 16
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#1f1e25",
        borderRadius: 5,
        color: "#fff",
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#1e6f9f",
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 42,
        justifyContent: "space-between"
    },
    listEmptyText: {
        color: "#fff",
        fontSize: 14,
        textAlign: "center"
    }
});