import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import styles from "../styles/Presentation.module.css";

import Button from "react-bootstrap/Button";

function ReadMore() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="readmore-text"
        aria-expanded={open}
        className={styles.readmore + " text-white p-3 m-1"}
      >
        Lee nuestra historia
      </a>
      <div>
        <Collapse
          in={open}
          className={styles.readmore1 + " text-xl text-black"}
        >
          <div id="readmore-text">
            <h1 className=" text-black underline">LOS GREEDY GOBLINS</h1>
            Había una vez, una aldea perdida en el bosque encantado, en la que
            reinaba la felicidad, la amistad y el respeto. Los duendes vivíamos
            en paz, ayudándonos unos a otros para prosperar como pueblo.
            Logramos dominar la tecnología, incluso hicimos nuestras propias
            naves alimentadas por elemento 116, los verdaderos duendes sabrán
            que material es este. Pero un día, todo cambió. Nuestro departamento
            económico y de inversión se cegó por la codicia, y quiso robarle el
            dinero a las tribus más poderosas del mundo. Como es natural, su
            control y su influencia en la economía global hizo que la nuestra se
            fuera a pique. Poco a poco, todo iba cambiando, el poco oro que
            quedaba, nos lo robabamos unos a otros, la comida no se compartía, y
            quien tenía, se lo guardaba todo para él. Como entenderéis, nuestra
            aldea se volvió un poblado maldito y fuimos desterrados a lo más
            profundo del bosque, escondidos en nuestra codicia eterna por el
            resto de los años. Pasaron miles de años, sumidos en la oscuridad,
            hasta que un día todo cambió. Un grupo de duendes investigadores que
            nunca perdió la fe, llamado Greedy Goblins, se pasaban la penitencia
            desarrollando una herramienta, para poder sacar a la tribu de allí.
            Horas inacabables, noches sin dormir, miles de años de desarrollo,
            hasta que por fin, un día consiguieron desarrollar el instrumento
            que conseguiría salvarnos a todos. Aún no lo sabíamos, pero
            estábamos apunto de conocer la herramienta que cambiaría el mundo. Y
            no solo eso, también ahora conocían como acabar con los grandes
            poderosos de la economía que nos maldijeron.Hemos pasado muchos años
            en la oscuridad, desolados, nos quitaron todo. Nos ha costado mucho
            trabajo, pero después de miles de años de desarrollo, hemos
            conseguido construir la herramienta perfecta. Ahora que ¡SE
            PREPAREN! Su economía será nuestra…¿QUERÉIS formar parte?
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default ReadMore;
