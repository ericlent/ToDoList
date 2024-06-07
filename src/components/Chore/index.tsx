import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

type Props = {
    name: string;
    onCheck: () => void;
    onRemove: () => void;
}

export function Chore({ name, onCheck, onRemove }: Props) {
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={onCheck}>
                <Image
                    source={require("@/assets/images/CheckedfalseHoverfalse.png")}
                    style={{ width: 25, height: 25 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity onPress={onRemove}>
                <Image
                    source={require("@/assets/images/hoverfalsetypeDelete.png")}
                    style={{ width: 40, height: 40 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>

        </View>
    )
}