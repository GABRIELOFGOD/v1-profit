import InfoPage from "./InfoPage"
import Investment from "./Investment"

const WalletConnectedPage = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <Investment />
      <InfoPage />
    </div>
  )
}
export default WalletConnectedPage