import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 6265118905",
    href: "tel:+916265118905",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "support@vnprimecapital.com",
    href: "mailto:support@vnprimecapital.com",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Jabalpur, Madhya Pradesh",
  },
];

const businessHours = [
  {
    day: "Monday - Saturday",
    time: "10:30 AM - 6:30 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* Contact Card */}
      <div className="rounded-2xl border border-[#0B2346]/10 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#0B2346]">Get in Touch</h2>

        <p className="mt-2 text-[#0B2346]/60">
          Have questions? Reach out to us through any of the following channels.
        </p>

        <div className="mt-8 space-y-6">
          {contactItems.map((item) => {
            const Icon = item.icon;

            const content = (
              <div className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-[#FAFAF8]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                  <Icon className="h-6 w-6 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-sm text-[#0B2346]/50">{item.title}</p>

                  <p className="mt-1 font-medium text-[#0B2346] group-hover:text-[#D4AF37] transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return item.href ? (
              <a key={item.title} href={item.href}>
                {content}
              </a>
            ) : (
              <div key={item.title}>{content}</div>
            );
          })}
        </div>
      </div>

      {/* Business Hours */}
      <div className="rounded-2xl border border-[#0B2346]/10 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10">
            <Clock className="h-6 w-6 text-[#D4AF37]" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0B2346]">
              Business Hours
            </h3>

            <p className="text-sm text-[#0B2346]/60">
              We&apos;re available during these hours.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {businessHours.map((item) => (
            <div
              key={item.day}
              className="flex items-center justify-between border-b border-[#0B2346]/10 pb-4 last:border-none"
            >
              <span className="text-[#0B2346]/70">{item.day}</span>

              <span
                className={`font-medium ${
                  item.time === "Closed" ? "text-red-500" : "text-[#0B2346]"
                }`}
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
