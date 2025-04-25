import { useWallet } from "@/context/WalletContext";
import { Button } from "./button"

const ConnectButton = () => {
  const { setAccount } = useWallet();
  
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask to connect your wallet.");
    }
  };

  return (
    <Button
      size={"lg"}
      className="cursor-pointer font-semibold"
      onClick={connectWallet}
    >
      Connect wallet
    </Button>
  )
}
export default ConnectButton