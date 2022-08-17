import Card from "react-bootstrap/Card";
import styles from "../styles/Profile.module.css";

export default function Profile({
  name,
  fun,
  description,
  img,
  twitter,
  instagram,
  linkedin,
}) {
  return (
    <Card className={"m-1 rounded text-center " + styles.profile}>
      <img src="marcoGold.png" className={styles.borderGold} />
      <img src={img} className={"mx-32 my-4 " + styles.profileFoto}></img>
      <div className={styles.inbox}>
        <Card.Body>
          <Card.Title>{fun}</Card.Title>
          <hr className="mx-20 align-middle" />
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>

        <div
          className={
            "flex flex-row items-center justify-between mx-40 py-10 " +
            styles.links
          }
        >
          <a>
            <img src="/twlogo.png" width={50} height={50} />
          </a>
          <a>
            <img src="/linkedin1.png" width={50} height={50} />
          </a>
        </div>
      </div>
    </Card>
  );
}
