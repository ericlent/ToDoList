import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from "react-native";
import { styles } from "./styles";

export default function Home() {
    const [chores, setChores] = useState<string[]>([]);
    const [choreName, setChoreName] = useState("");

    function handleChoreAdd() {

        if (chores.includes(choreName.trim())) {

        }
        else if (choreName.trim() == "") {

        }
        else {
            setChores(prevState => [...prevState, choreName.trim()]);
            setChoreName("");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.nameTo}>
                    To
                </Text>
                <Text style={styles.nameDo}>
                    Do
                </Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicionar"
                    placeholderTextColor={"#6b6b6b"}
                    keyboardType="default"
                    //onChangeText={text => setParticipantName(text)}
                    onChangeText={setChoreName}
                    value={choreName.trim()}
                />

                <Image />

                <TouchableOpacity style={styles.button} onPress={handleChoreAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}