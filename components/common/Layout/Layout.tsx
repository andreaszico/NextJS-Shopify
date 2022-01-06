import { FC } from "react";
import { Footer, Navbar } from "@components/common";
import style from "./Layout.module.css";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";

const Layout: FC = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();
  
  return (
    <div className={style.root}>
      <Navbar />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
        <CartSidebar />
      </Sidebar>
      <main className="fit">
          {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
