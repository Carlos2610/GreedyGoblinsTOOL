import CardGroup from "react-bootstrap/CardGroup";
import Profile from "./Profile";
import styles from "../styles/Profile.module.css";

export function Team() {
  return (
    <div className={styles.background + " p-10  text-black"}>
      <h1
        className={
          "text-gold relative py-3 text-center font-bold " + styles.profile
        }
      >
        Equipo duende
      </h1>
      <CardGroup className={"my-20 mx-1 " + styles.cards}>
        <Profile
          name={"Juan José Mena"}
          fun={"CEO"}
          description={"Gestión general"}
          img={"/artu.jpg"}
          twitter={""}
          instagram={""}
          linkedin={""}
        />
        <Profile
          name={"Carlos Rocamora"}
          fun={"CTO"}
          description={"Desarrollo"}
          img={"/artu.jpg"}
          twitter={""}
          instagram={""}
          linkedin={""}
        />
        <Profile
          name={"Nicolás Fernandez"}
          fun={"COO"}
          description={"Inversiones"}
          img={"/artu.jpg"}
          twitter={""}
          instagram={""}
          linkedin={""}
        />
        <Profile
          name={"Arturo Mena"}
          fun={"CMO"}
          description={"Marketing y redes sociales"}
          img={"/artu.jpg"}
          twitter={""}
          instagram={""}
          linkedin={""}
        />
      </CardGroup>
    </div>
  );
}
