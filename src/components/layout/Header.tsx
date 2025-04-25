import HeaderMenu from "../HeaderMenu";
import Logo from "../Logo";
import Sidebar from "./Sidebar";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const Header = () => {
  return (
    <div className="flex py-2 px-3 md:px-20 bg-background shadow-sm w-full justify-between md:py-3 z-40">
      <Logo />
      <div className="hidden md:flex ml-auto"><HeaderMenu /></div>
      <Sidebar />
    </div>
  );
};

export default Header;