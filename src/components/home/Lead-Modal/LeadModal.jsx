"use client";

import { useState } from "react";
import LeadDialog from "./LeadDialog";
import PhoneStep from "./PhoneStep";
import DetailsStep from "./DetailsStep";
import SuccessStep from "./SuccessStep";
import ModalHeader from "./ModalHeader";

const initialLeadData = {
  mobile: "",
  name: "",
  occupation: "",
};

const LeadModal = ({ trigger }) => {
  const [open, setOpen] = useState(false);

  const [step, setStep] = useState("phone");

  const [leadData, setLeadData] = useState(initialLeadData);

  const resetModal = () => {
    setStep("phone");
    setLeadData(initialLeadData);
  };

const handleOpenChange = (isOpen) => {
  if (!isOpen) {
    resetModal();
  }
  setOpen(isOpen);
};

  const renderStep = () => {
    switch (step) {
      case "phone":
        return (
          <PhoneStep
            leadData={leadData}
            setLeadData={setLeadData}
            setStep={setStep}
          />
        );

      case "details":
        return (
          <DetailsStep
            leadData={leadData}
            setLeadData={setLeadData}
            setStep={setStep}
          />
        );

      case "success":
        return <SuccessStep onClose={() => handleOpenChange(false)} />;
      default:
        return null;
    }
  };

  return (
    <LeadDialog trigger={trigger} open={open} onOpenChange={handleOpenChange}>
      {step !== "success" && <ModalHeader />}
      {renderStep()}
    </LeadDialog>
  );
};

export default LeadModal;
