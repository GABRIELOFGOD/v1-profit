import { toast } from "sonner"

export const copyToClipboard = ({text, message}: {
  text: string;
  message?: string;
}) => {
  navigator.clipboard.writeText(text).then(() => {
    {message && toast.message(message)}
    console.log("Text copied to clipboard: ", text)
  })
}