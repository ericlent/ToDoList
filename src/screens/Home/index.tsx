import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { Chore } from "@/src/components/Chore";

export default function Home() {
    const [chores, setChores] = useState<string[]>([]);
    const [choreName, setChoreName] = useState("");

    function handleChoreAdd() {
        if (chores.includes(choreName.trim())) {
            return Alert.alert("Tarefa Existe", "Já existe uma tarefa na lista com esse nome")
        }
        else if (choreName.trim() == "") {
            return Alert.alert("Tarefa Inválida", "Digite o nome da tarefa")
        }
        else {
            setChores(prevState => [...prevState, choreName.trim()]);
            setChoreName("");
        }
    }

    function handleChoreRemove(name: string) {
        Alert.alert("Remover", `Remover a tarefa ${name}?`, [
            {
                text: "Sim",
                onPress: () => setChores(prevState => prevState.filter(chore => chore !== name))
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
        console.log(`Remover a tarefa ${name}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Image
                    source={require("@/assets/images/ToDo.jpg")}
                    style={{ width: 24, height: 30, marginTop: 48 }}
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
                    onChangeText={setChoreName}
                    value={choreName.trim()}
                />

                <TouchableOpacity onPress={handleChoreAdd}>
                    <Image
                        source={require("@/assets/images/hoverfalsetypecreate.png")}
                        style={{ width: 56, height: 56, flex: 1 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.form}>
                <Text style={styles.txtCriadas}>
                    Criadas {chores.length}
                </Text>

                <Text style={styles.txtConcluidas}>
                    Concluídas
                </Text>
            </View>

            
            <FlatList
                data={chores}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Chore
                        key={item}
                        name={item}
                        onRemove={() => handleChoreRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <>
                        <Text style={styles.listEmptyText}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={{ color: "gray", fontSize: 13, textAlign: "center" }}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </>
                )}
            />
            
            
            {/*
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    chores.map(item => (
                        <Chore
                            key={item}
                            name={item}
                            onRemove={() => handleChoreRemove(item)} />
                    ))
                }
            </ScrollView>
            */}

        </View>
    )
}