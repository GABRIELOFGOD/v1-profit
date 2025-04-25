import WalletConnectedPage from "@/components/home/WalletConnectedPage";
import { useWallet } from "../context/WalletContext";
import ConnectButton from "@/components/ui/ConnectButton";

const HomePage = () => {
  const { account } = useWallet();

  return (
    <div className="">
      {account ? (
        <WalletConnectedPage />
      ) : (
        <div className="h-[70vh] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-5 bg-secondary rounded-md md:p-20 p-5">
            <p className="text-4xl text-center font-extrabold md:text-5xl ">Welcome to <span className="text-primary">V1 Profit</span></p>
            <p className="text-xl text-gray-400 text-center">Experience a fully decentralized platform with no admin control, where all income is automatically distributed through smart contracts. Transparent, secure, and fair – our system empowers you to grow your network and earn in real time without intermediaries.</p>
            <ConnectButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;