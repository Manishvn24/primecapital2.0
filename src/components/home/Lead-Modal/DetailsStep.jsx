"use client"
import { useState } from "react";
import { detailsSchema } from "./validation";
import { createOrUpdateLead } from "@/lib/neodove";
import api from "@/lib/axios";

const DetailsStep = ({ leadData, setLeadData, setStep }) => {
  const [error, setError] = useState({
   name : ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
     const result = detailsSchema.safeParse({
       name: leadData.name,
     });
     
    if (!result.success) {
        setError(result.error.issues[0].message);
        return;
      }
      setError("");
      try{
        setLoading(true)
api.post("/api/telegram", leadData);
 await createOrUpdateLead({
       name: leadData.name,
       mobile: leadData.mobile,
       occupation: leadData.occupation,
     });
      }
      catch(error){
        console.error(error)
      }
      finally{
        setLoading(false)
      }
      setStep("success");
    };
  return (
    <div className="px-6 pb-6 pt-4">
      {/* Name */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Full Name</label>

        <input
          type="text"
          placeholder="Enter your full name"
          value={leadData.name}
          onChange={(e) =>
            setLeadData({
              ...leadData,
              name: e.target.value,
            })
          }
          className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition-all focus:border-[#D4AF37]"
        />
      </div>

      {/* Occupation */}
      <div className="mt-5 space-y-2">
        <label className="text-sm font-medium text-slate-700">Occupation</label>

        <select
          value={leadData.occupation}
          onChange={(e) =>
            setLeadData({
              ...leadData,
              occupation: e.target.value,
            })
          }
          className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition-all focus:border-[#D4AF37]"
        >
          <option value="">Select Occupation</option>
          <option>Doctor</option>
          <option>Chartered Accountant</option>
          <option>Business Owner</option>
          <option>Salaried</option>
          <option>Self Employed</option>
          <option>Student</option>
          <option>Others</option>
        </select>
      </div>

      {/* Phone */}
      <div className="mt-5 rounded-xl bg-slate-50 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Mobile Number
        </p>

        <p className="mt-1 text-base font-semibold text-[#0B2346]">
          {leadData.mobile}
        </p>
      </div>
      {error.name && (
        <p className="mt-2 text-sm text-red-500">{error.name}</p>
      )}
      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-[#0B2346] font-semibold text-white transition-colors hover:bg-[#143463]"
      >
        {loading ? "Plase wait..." : "Find My Best Offer"}
      </button>

      {/* Note */}
      {/* <p className="mt-4 text-center text-xs leading-5 text-slate-500 ">
        ⚡ Share your documents after submitting for a quicker eligibility
        check.
      </p> */}
    </div>
  );
};

export default DetailsStep;
