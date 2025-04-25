import { useWallet } from "@/context/WalletContext";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";
import ConnectButton from "./ui/ConnectButton";

const HeaderMenu = () => {
  const { account, setAccount } = useWallet();

  const disconnectWallet = () => {
    setAccount(null);
  };

  const handleChainChanged = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        setAccount(accounts.length > 0 ? accounts[0] : null);
      });
      window.ethereum.on("chainChanged", handleChainChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", (accounts: string[]) => {
          setAccount(accounts.length > 0 ? accounts[0] : null);
        });
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, [setAccount]);

  const menuItems = [
    { name: "Dashboard", link: "/" },
    { name: "Referral", link: "/referral" },
    { name: "Transaction", link: "/transaction" },
  ]

  return (
    <div className="my-auto gap-3 flex ml-auto flex-col md:flex-row w-full">
      {account ? (
        <>
          <div className="flex md:gap-3 md:mr-5 my-auto flex-col md:flex-row gap-5">
            {menuItems.map((item) => (
              <NavLink to={item.link} key={item.name} className="text-sm font-medium cursor-pointer hover:text-primary">{item.name}</NavLink>
            ))}
          </div>
          <span className="text-sm font-medium mt-10 md:mt-auto my-auto">{`${account.slice(0, 6)}...${account.slice(-4)}`}</span>
          <Button
            size={"lg"}
            className="cursor-pointer font-semibold"
            onClick={disconnectWallet}
          >
            Disconnect
          </Button>
        </>
      ) : (
        <ConnectButton />
      )}
    </div>
  )
}
export default HeaderMenu