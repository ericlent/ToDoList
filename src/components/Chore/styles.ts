import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        backgroundColor: "#404040",
        borderColor: "red",
        borderRadius: 5,
        opacity: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: "#fff",
        marginLeft: 16
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#e23c44",
        alignItems: "center",
        justifyContent: "center",
    },
});