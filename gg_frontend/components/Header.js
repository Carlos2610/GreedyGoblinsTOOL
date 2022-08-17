import Link from "next/link";
import style from "../styles/Header.module.css";
import Web3Login from "./Web3Login";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    <div className={"px-20 bg-harryGreen " + style.nav}>
      <Navbar bg="bg-harryGreen" expand="lg">
        <Container>
          <img
            src="/favicon.ico"
            width={80}
            height={75}
            className={style.logo}
          />
          <Navbar.Brand href="/" className="flex flex-row mr-5">
            <h1 className="py-4 px-4 font-bold text-3xl text-gold">
              Greedy Goblins ®
            </h1>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" items-center justify-between text-gold">
              <Link href="/">
                <a
                  className={
                    "p-3 rounded-md text-gold font-bold no-underline hover:text-gold " +
                    style.item
                  }
                >
                  Cryptoplaces
                </a>
              </Link>
              <Link href="/">
                <a
                  className={
                    "p-3 rounded-md text-gold font-bold no-underline hover:text-gold " +
                    style.item
                  }
                >
                  Mundo Goblin
                </a>
              </Link>
              <Link href="/">
                <a
                  className={
                    "p-3 rounded-md text-gold font-bold no-underline hover:text-gold " +
                    style.item
                  }
                >
                  Asamblea Goblin
                </a>
              </Link>
            </Nav>
            <div className={style.logIns}>
              <div className=" flex flex-row items-center float-right text-gold ">
                <Web3Login />
                <Link href="/">
                  <a className="p-3 rounded-md bg-gold text-harryGreen no-underline">
                    <p>Log In</p>
                  </a>
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
  // <nav className="navbar navbar-expand-md p-5 border-b-2 flex flex-row justify-between items-center text-gold bg-harryGreen">

  //   <div className="flex flex-row">
  //     <h1 className="py-4 px-4 font-bold text-3xl">Greedy goblins ®</h1>
  //     <span>
  //       {" "}
  //       <Image src="/favicon.ico" height={75} width={80} />
  //     </span>
  //   </div>

  {
    /* <Link href="/">
      <a className="text-xl">Cryptoplaces</a>
    </Link>
    <Link href="/sell-nfts">
      <a className="text-xl">Mundo Goblin</a>
    </Link>
    <Link href="/sell-nfts">
      <a className="text-xl">Asamblea Goblin</a>
    </Link>
    <div className="flex flex-row ml-7 border-spacing-3 items-center">
      <Web3Login />
      <Link href="/">
        <a className="p-3 rounded-md bg-gold text-harryGreen">Log In</a>
      </Link>
    </div> */
  }
  // </nav>
}
