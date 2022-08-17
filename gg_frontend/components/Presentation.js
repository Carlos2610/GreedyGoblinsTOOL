import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Presentation.module.css";
import ReadMore from "./ReadMore";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

export default function PresentationVideo(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.text + " " + styles.back}>
      <video muted loop playsInline className={"fixed " + styles.photo}>
        <source src="/tunel.mp4" type="video/mp4" />
      </video>

      <div className={"pt-5 pb-3" + styles.main}>
        <div className={"flex flex-row " + styles.mobile}>
          <div
            className={
              styles.centerItems +
              " relative m-11 top-20 p-10 flex flex-col items-center"
            }
          >
            <h1 className="font-bold text-white p-2 text-2xl">
              ¿Quienes somos?
            </h1>
            <Collapse in={!open}>
              <div id="logo_collapse">
                <Image
                  src="/favicon.ico"
                  width={9000}
                  height={9000}
                  className={"absolute " + styles.icono}
                />
              </div>
            </Collapse>

            <div>
              <button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <ReadMore />
              </button>
            </div>

            <Link href="/">
              <a
                className={
                  styles.go + " bg-gold rounded p-3 text-black no-underline"
                }
              >
                ¡Conviértete en un duende!
              </a>
            </Link>
            <p className={"text-white font-bold mt-2 text-center" + styles.go}>
              ¡Adentrate en nuestra aldea goblin!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
