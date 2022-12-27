import { Text as ReactText, StyleSheet } from 'react-native';

export default function Text({ children, style }) {
    let localStyle = styles.text;
    if (style?.fontWeight === 'bold') {
        localStyle = styles.boldText;
    }
    return (
        <ReactText style={[style, localStyle]}>
            {children}
        </ReactText>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    boldText: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
});