import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';

export default function Button({ children }) {
    return <TouchableOpacity style={styles.button} onPress={() => { }}>
        <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 8
    },
    buttonText: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
});