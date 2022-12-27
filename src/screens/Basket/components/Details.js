import { View, Image, StyleSheet } from 'react-native';
import Button from '../../../components/Button';
import Text from '../../../components/Text';

export default function Details({ name, farmLogo, farmName, description, price, button }) {
    return <>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.farm}>
            <Image source={farmLogo} style={styles.farmImage} />
            <Text style={styles.farmName}>{farmName}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
        <Button>{button}</Button>
    </>
}

const styles = StyleSheet.create({
    name: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold"
    },
    farm: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    farmImage: {
        width: 32,
        height: 32
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});