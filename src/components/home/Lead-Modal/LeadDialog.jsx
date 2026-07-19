"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";


const LeadDialog = ({ trigger, children, open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="w-[95%] max-w-md rounded-3xl p-0 overflow-hidden"
      >
        
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default LeadDialog;

