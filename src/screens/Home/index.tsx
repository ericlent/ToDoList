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
                <Image
                    source={require("@/assets/images/ToDo.jpg")}
                    style={{ width: 60, height: 70 }}
                    resizeMode="stretch" />

                <Text style={styles.titleTo}>
                    To
                </Text>
                <Text style={styles.titleDo}>
                    Do
                </Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicionar uma nova tarefa"
                    placeholderTextColor={"#6b6b6b"}
                    keyboardType="default"
                    //onChangeText={text => setParticipantName(text)}
                    onChangeText={setChoreName}
                    value={choreName.trim()}
                />

                <TouchableOpacity style={styles.button} onPress={handleChoreAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>

                    {/*
                    <Image
                        source={require("@/assets/images/hoverfalsetypecreate.png")}
                        style={{ width: 56, height: 56, flex: 1 }}
                        resizeMode="contain"

                    />
                    */}
                </TouchableOpacity>
            </View>

            <View style={styles.form}>
                <Text style={styles.txtCriadas}>
                    Criadas
                </Text>

                <Text style={styles.txtConcluidas}>
                    Concluídas
                </Text>
            </View>

        </View>
    )
}