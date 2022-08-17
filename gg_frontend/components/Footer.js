import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div
      className={
        styles.footer +
        " flex flex-row bg-harryGreen bottom-0 w-100 z-50 relative items-center justify-between px-24 py-5 text-gold font-bold"
      }
    >
      <div>
        <hr />
        <h5>Contáctanos</h5>

        <a className="text-gold  hover:text-white" href="/about">
          <h6>Nosotros</h6>
        </a>
        <h5>greedygoblins.gg@gmail.com</h5>
        <h5>+34 666666666</h5>
        <hr />
      </div>
      <div>
        <hr />
        <h5>Nuestras redes sociales</h5>

        <a
          className="text-gold hover:text-white"
          href="https://www.instagram.com/greedygoblinsgg/"
          target="_"
        >
          <h6>Instagram</h6>
        </a>
        <a
          className="text-gold  hover:text-white"
          href="https://twitter.com/GreedyGoblinsGG"
          target="_"
        >
          <h6>Twitter</h6>
        </a>
        <a
          className="text-gold  hover:text-white"
          href="https://discord.gg/NNDqQkyQx8"
          target="_"
        >
          <h6>Discord</h6>
        </a>
        <a
          className="text-gold  hover:text-white"
          href="https://www.tiktok.com/@greedygoblinsgg"
          target="_"
        >
          <h6>Telegram</h6>
        </a>
        <a
          className="text-gold  hover:text-white"
          href="https://t.me/GreedyGoblinsGG"
          target="_"
        >
          <h6>Facebook</h6>
        </a>
        <hr />
      </div>
      <div>
        <hr />
        <h5>Legal</h5>
        <a className="text-gold  hover:text-white" href="/">
          <h5>Aviso Legal</h5>
        </a>
        <a className="text-gold  hover:text-white" href="/">
          <h5>Términos y condiciones</h5>
        </a>
        <hr />
      </div>
    </div>
  );
}
