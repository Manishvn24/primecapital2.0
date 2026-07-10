import {ShieldCheckIcon} from "lucide-react"
import { InfoItem, } from "../common/InfoItem"
import { topBarItems } from "@/data/TopBarData";

const Topbar = () => {
  return (
    <div className="bg-[#0B2346] text-[#FEFEFE]">
      {/* Mobile */}
      <div className="flex h-10 items-center justify-center px-4 md:hidden">
        <ShieldCheckIcon className="mr-2 h-3.5 w-3.5 text-[#D4AF37]" />

        <p className="truncate text-xs font-medium">
          Trusted by 1000+ Customers Across India
        </p>
      </div>
      <div className="hidden mx-auto md:flex justify-between items-center h-10 max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span>
            <ShieldCheckIcon className="h-3.5 w-3.5 text-[#D4AF37]" />
          </span>
          <span className="text-xs font-medium">
            Trusted by 1000+ customer across India
          </span>
        </div>
        <div className="flex items-center gap-6">
          {topBarItems.map((item, idx) => (
            <InfoItem
              key={idx}
              icon={<item.icon size={14} className=" text-[#D4AF37]" />}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Topbar