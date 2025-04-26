import { useEffect, useState } from "react"
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Investment = () => {
  const [accountActive, setAccountActive] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<'activate' | 'invest'>('activate');

  const [investmentAmount, setInvestmentAmount] = useState<number>(0);

  useEffect(() => {
    if (accountActive) setSelectedTab("invest");
    setAccountActive(false);
  }, [accountActive]);
  
  return (
    <div className="bg-secondary rounded-md p-5 flex flex-col gap-5">
      <p className="text-lg font-bold md:text-xl">Make your Mark</p>

      <div className="flex flex-col md:flex-row gap-2 w-full">
        <div className={`bg-background rounded-md p-3 w-full ${accountActive ? "text-secondary" : "text-foreground border border-primary"}`}>
          <p className="text-sm text-gray-300 text-center">{accountActive ? "Account is Active" : "Account not activated"}</p>
          <div className="flex flex-col w-full gap-3 items-center justify-center mt-3">
            <p className="text-2xl font-extrabold">$6</p>
            <p>Activate Your account</p>
          </div>
        </div>
        <div className={`bg-background rounded-md p-3 w-full ${accountActive ? "text-foreground border border-primary" : "text-secondary"}`}>
          <div className="flex flex-col w-full gap-3 items-center justify-center mt-3">
            <p className="text-2xl font-extrabold">0</p>
            <p>Top-up wallet</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Input
          placeholder="Investment amount"
          type="number"
          value={investmentAmount}
          disabled={!accountActive}
          onChange={(e) => setInvestmentAmount(Number(e.target.value))}
        />
        <Button
          size={"lg"}
          className="w-full font-bold"
        >
          {selectedTab === "activate" ? "Approve $6" : `Approve $${investmentAmount}`}
        </Button>
      </div>
    </div>
  )
}
export default Investment
