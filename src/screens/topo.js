import { Image, StyleSheet, Dimensions } from 'react-native';
import Texto from '../components/Texto';
import topobg from '../../assets/topo.png';

const widht = Dimensions.get('screen').width;


export default function topo({titulo}) {
    return <>
        <Image source={topobg} style={styles.topo} />
        <Texto style={styles.tittle}>{ titulo }</Texto>
    </>
}

const styles = StyleSheet.create ({
    topo: {
        width: "100%",
        height: 578 / 768 * widht,
    },
    tittle: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        marginTop: 60,
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})