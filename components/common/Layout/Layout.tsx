import { FC } from "react";
import style from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={style.root}>
      <main className="fit">
          {children}
      </main>
    </div>
  );
};

export default Layout;
