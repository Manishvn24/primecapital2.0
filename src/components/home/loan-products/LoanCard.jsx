"use client"
import GlareHover from "@/components/GlareHover";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"

const LoanCard = ({loan}) => {
 const { title, description, image, icon: Icon, href, badge } = loan;
  return (
    <Link href={href} className="block">
      <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            alt={title}
            src={image}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            fill
            className="object-cover bg-gradient-to-t from-black/40 to-transparent group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <div className="border border-[#D4AF37]" />
        <div className="relative flex flex-col p-6 ">
          <div className="absolute -top-6 left-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-200">
              <Icon className="h-7 w-7 text-[#0b2346]" />
            </div>
          </div>
          <h3 className="mt-5 text-2xl font-bold text-[#0B2346] group-hover:text-[#c1ae46]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
          <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B2346] group-hover:text-[#c1ae46]">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#c1ae46]" />
          </div>
        </div>
      </article>
    </Link>
  );
}
export default LoanCard