import { Image, StyleSheet, Dimensions } from 'react-native';
import Text from "../../../components/Text";
import TopImage from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Top({ title }) {
    return <>
        <Image source={TopImage} style={styles.top} />
        <Text style={styles.title}>{title}</Text>
    </>
}

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    }
});