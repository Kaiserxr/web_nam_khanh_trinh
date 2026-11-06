import React from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import ContactInfo from "./_components/ContactInformation";

const ContactPage: React.FC = () => {
  return (
    <PageShell>
      <PageHeader
        title="Contact"
        lede="Email is the best way to reach me. You can also find me on the profiles below."
      />
      <ContactInfo />
    </PageShell>
  );
};

export default ContactPage;
