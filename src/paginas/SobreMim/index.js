import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Lucas Cavalheiro!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Lucas Cavalheiro"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Sou um Dev Front-End apaixonado pela criação de interfaces bonitas e funcionais. 
            Tenho trabalhado em projetos desafiadores que me permitiram aprimorar minhas habilidades em HTML, CSS e JavaScript, Ui e React.
            Meu objetivo é sempre desenvolver soluções que proporcionem uma ótima experiência do usuário, enquanto adoto as melhores práticas de desenvolvimento. 
            Além disso, sou entusiasta de novas tecnologias e estou constantemente me atualizando para melhorar minha habilidades.
            </p>
        </PostModelo>
    )
}