import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div
      className={
        "text-black italic font-bold py-56 items-center px-5 " + styles.backg
      }
    >
      <div className={styles.oldsheet + " mx-5 py-10 text-xl"}>
        <h1 className="px-32">About the Greedy Goblins</h1>
        <p className="px-32 py-10">
          Los Greedy Goblins somos un grupo de personas que nos encanta la
          tecnologia y las inversiones. Nuestra misión es sencilla pero a la vez
          muy compleja, queremos hacer mucho más fácil y llevadero el
          aprendizaje de las personas de este sector. Nuestra herramienta va a
          unificar todas las plataformas de valor,así la comunidad puede
          desarrollar todo su aprendizaje sin tener que salir de una misma
          página. Nuestro gran afán de unión nos lleva hasta el siguiente nivel,
          y es, intentar hacer que las empresas tradicionales dejen de ver a las
          criptomonedas como una estafa y podamos unificar todos los mercados
          financieros en uno solo,para poder colaborar todos a una.
        </p>
        <p className="px-32 pt-0 pb-2">
          Apostamos por el contenido de calidad, sin vender humo, siendo
          totalmente honestos con nuestro público. Somos serios en ciertos
          aspectos pero también hay tiempo para el humor y la diversión. Somos
          humildes, no somos más que nadie. Nos consideramos estrategas,
          inquietos, la información y el conocimiento es lo más importante que
          hay. Tambien somos pícaros, quizá un poco chulescos, pero muy seguros
          de nosotros mismos. Venimos de la nada, sabemos lo que es no tener
          nada, y vamos a conseguirlo todo, nunca perdiendo la humildad y
          haciendo de nuestra comunidad una familia.
        </p>
        <p className="px-32 pt-0 pb-2">
          La visión que queremos dar a la gente es la visión de gente humilde,de
          que todos somos una família y nadie es más que nadie.Que aquí solo
          vale el trabajo duro,el sacrificio y la astucia,que aún viniendo de la
          nada se puede alcanzar la Luna.Así mismo con estos colores
          seleccionados, queremos que nos achaquen al color verde,al color de la
          esperanza,al color del dinero.El nombre seleccionado hace referencia a
          que por muy diminutos que seamos(como un duende) hemos venido a
          quedarnos con el oro de los poderosos,hemos venido a dar el
          cambio,como nuestro slogan dice “Lo que contenga brillo, al bolsillo”,
          nos quedaremos con los mercados financieros,les robaremos su tesoro
          más preciado y lo más importante enseñaremos a la gente a hacerlo.
          Queremos que nos vean cómo la empresa que va a unir todas las
          comunidades
        </p>
      </div>
      <img className="float-right" src="/favicon.ico" width={80} height={70} />
    </div>
  );
}
