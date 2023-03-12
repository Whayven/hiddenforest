import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi culpa
          quo, harum dolore neque tempora at expedita magni, cum laborum quasi
          ipsam soluta repellendus dolorum iure placeat dolorem omnis adipisci?
        </p>
        <p>
          Ex itaque reiciendis modi optio quia. Enim porro asperiores provident.
          Blanditiis odit nemo voluptate. Debitis vel provident odit. Iusto sint
          dicta saepe deleniti culpa veritatis ipsa at quas, perspiciatis
          assumenda.
        </p>
        <p>
          Ut incidunt perspiciatis modi tempore in. Reiciendis eaque aut
          quibusdam minima laborum veritatis possimus accusamus hic, perferendis
          optio quo rem quam, recusandae ad? Dignissimos, obcaecati facere illo
          praesentium enim temporibus?
        </p>
        <p>
          Culpa ipsum voluptatum enim dicta earum, praesentium nobis distinctio
          perferendis aspernatur neque. Voluptatibus nisi numquam est magnam
          amet illum incidunt impedit, alias quis praesentium harum atque
          voluptatem, nobis adipisci consectetur.
        </p>
      </div>
    </main>
  );
}
