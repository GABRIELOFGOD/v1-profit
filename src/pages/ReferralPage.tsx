import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { copyToClipboard } from "@/utils/copyToClipboard"

const ReferralPage = () => {
  return (
    <div>
      <div className="w-full h-[200px] bg-primary absolute left-0 top-0 -z-20"></div>
      <div className="rounded-md overflow-hidden h-[80vh]">
        <div className="bg-background p-3">
          <p className="font-bold text-xl">Referral History</p>
        </div>
        <div className="bg-secondary p-3 grid grid-cols-3 text-center font-bold">
          <p>S.No</p>
          <p>User ID</p>
          <p>Date</p>
        </div>
        <div className="bg-foreground p-3 h-full overflow-y-auto"></div>
      </div>

      <div className="w-full rounded-md p-3 my-5 flex flex-col gap-4 bg-primary/50">
        <p className="font-bold text-xl">Referral Link</p>
        <Input
          className="bg-background text-foreground font-bold"
          value="https://v1profit.com/referral/0x1234567890abcdef1234567890abcdef12345678"
          readOnly
          placeholder="https://v1profit.com/referral/0x1234567890abcdef1234567890abcdef12345678"
        />
        <Button
          className="cursor-pointer font-bold"
          onClick={() => {
            copyToClipboard({
              text: "https://v1profit.com/referral/0x1234567890abcdef1234567890abcdef12345678",
              message: "Referral link copied to clipboard!",
            })
          }}
        >Copy</Button>
      </div>
    </div>
  )
}
export default ReferralPage