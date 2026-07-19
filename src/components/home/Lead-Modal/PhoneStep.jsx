import { useState } from "react";
import { phoneSchema } from "./validation";
import { createOrUpdateLead } from "@/lib/neodove";
import api from "@/lib/axios";

const PhoneStep = ({ leadData, setLeadData, setStep }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleContinue = async () => {
    const result = phoneSchema.safeParse({
      phone: leadData.mobile,
    });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    setError("");
    try {
       setLoading(true);
      api.post("/api/telegram", leadData);
      await createOrUpdateLead({
        mobile: leadData.mobile,
      });
      setStep("details");
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false)
    }

  };
  return (
    <div className="px-6 pb-6 pt-4">
      {/* Mobile Number */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">
          Mobile Number
        </label>
        <div className=" mt-2 flex items-center rounded-xl border border-slate-200 bg-white shadow-sm focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/30 transition overflow-hidden">
          {/* Country prefix */}
          <div className="flex items-center gap-1.5 border-r border-gray-200 px-3 py-3 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap select-none">
            🇮🇳 +91
          </div>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={leadData.mobile}
            onChange={(e) => {
              setLeadData({
                ...leadData,
                mobile: e.target.value,
              });
              if (error) {
                setError("");
              }
            }}
            className="flex-1 bg-white px-3 py-3 text-sm text-[#0B2346] placeholder-gray-300 focus:outline-none"
          />
        </div>
{/* 
        <input
          type="tel"
          placeholder="Enter your mobile number"
          value={leadData.phone}
          onChange={(e) => {
            setLeadData({
              ...leadData,
              phone: e.target.value,
            });
            if (error) {
              setError("");
            }
          }}
          className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition-all focus:border-[#D4AF37]"
        /> */}
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

      {/* Continue */}
      <button
        disabled={loading}
        onClick={handleContinue}
        className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-[#0B2346] font-semibold text-white transition-colors hover:bg-[#143463]"
      >
        {loading ? "Please wait..." : "Continue"}
      </button>

      {/* Trust Line */}
      <p className="mt-4 text-center text-xs text-slate-500">
        🔒 Your information is secure and confidential.
      </p>
    </div>
  );
};

export default PhoneStep;
