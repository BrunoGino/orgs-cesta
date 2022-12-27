import Text from '../../../components/Text';
import { Image, View, StyleSheet } from 'react-native';

export default function Item({ item: { name, image } }) {
    return <View style={styles.item}>
        <Image source={image} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    image: {
        width: 48,
        height: 48
    },
    name: {
        fontSize: 16,
        lineHeight: 24,
        marginLeft: 8,
        color: "#464646"
    }
});