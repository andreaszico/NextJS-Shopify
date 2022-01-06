import { FC } from "react";
import style from "./Usernav.module.css";
import Link from "next/link";
import { Bag as Cart, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";

const Usernav: FC = () => {
  const { openSidebar } = useUI();
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Cart onClick={openSidebar}/>
        </li>
        <li className={style.item}>
          <Link href={"/wishlist"}>
            <Heart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
