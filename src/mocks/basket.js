import LogoImage from '../../assets/logo.png';
import TomatoImage from '../../assets/frutas/Tomate.png';
import BroccoliImage from '../../assets/frutas/Brócolis.png';
import PotatoImage from '../../assets/frutas/Batata.png';
import CucumberImage from '../../assets/frutas/Pepino.png';
import PumpkinImage from '../../assets/frutas/Abóbora.png';

const basket = {
    top: {
        title: 'Detalhe da cesta'
    },
    details: {
        name: 'Cesta de verduras',
        farmLogo: LogoImage,
        farmName: 'Jenny Jack Farm',
        description: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
        price: 'R$ 40,00',
        button:'Comprar'
    },
    items: {
        title: 'Itens da cesta',
        list: [
            {
                name: 'Tomate',
                image: TomatoImage,
            },
            {
                name: 'Broccoli',
                image: BroccoliImage
            },
            {
                name: 'Potato',
                image: PotatoImage
            },
            {
                name: 'Cucumber',
                image: CucumberImage
            },
            {
                name: 'Pumpkin',
                image: PumpkinImage
            }
        ]
    }
};

export default basket;