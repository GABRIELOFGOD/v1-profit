import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "../Logo"
import HeaderMenu from "../HeaderMenu"

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="cursor-pointer my-auto flex md:hidden" size={25} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle><Logo /></SheetTitle>
        </SheetHeader>
        <div className="px-3 mb-auto py-5">
          <HeaderMenu />
        </div>
      </SheetContent>
    </Sheet>
  )
}
export default Sidebar