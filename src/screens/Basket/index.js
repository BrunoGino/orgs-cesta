import { StyleSheet, View, FlatList } from 'react-native';
import Top from './components/Top'
import Details from './components/Details';
import Item from './components/Item';
import Text from '../../components/Text';

export default function Basket({ top, details, items }) {
    return (
        <>
            <FlatList
                data={items.list}
                renderItem={Item}
                keyExtractor={({ name }) => name}
                ListHeaderComponent={() => (
                    <>
                        <Top {...top} />
                        <View style={styles.basket}>
                            <Details {...details} />
                            <Text style={styles.title}>{items.title}</Text>
                        </View>
                    </>
                )}
            />
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 24,
        lineHeight: 32
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});