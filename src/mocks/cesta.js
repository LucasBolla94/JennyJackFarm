import logo from '../../assets/logo.png'
import Tomate from "../../assets/frutas/Tomate.png";
import Brocolis from "../../assets/frutas/brocolis.png";
import Batata from "../../assets/frutas/batata.png";
import Pepino from "../../assets/frutas/pepino.png";
import Abobora from "../../assets/frutas/abobora.png";

const cesta = {
    topo: {
        titulo: 'Detalaahes da Cesta',
    },
    detalhes: {
        nome: 'Cesta de Verduras',
        logoFazenda: logo,
        nomeFazenda: 'JennyJack Farm',
        desc: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
        preco: 'R$40,00',
        btn: 'Comprar',
    },
    itens: {
        titulo: 'Itens da Cesta',
        lista: [
            {
                nome: "Tomate",
                image: Tomate,
            },
            {
                nome: "Brocolis",
                image: Brocolis,
            },
            {
                nome: "Batata",
                image: Batata,
            },
            {
                nome: "Pepino",
                image: Pepino,
            },
            {
                nome: "Abóbora",
                image: Abobora,
            },
        ]
    }
}

export default cesta;