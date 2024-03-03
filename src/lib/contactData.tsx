import { ContactData } from "@/types";

// draft: false

const contactData: ContactData = {
  title: "Contact Me",
  description: "meta description",
  phone: "+256709299755",
  mail: "info@doctorkivumbi.com",
  location: "Kampala, Uganda",
  form_action: "#",
  layout: "contact",
  addresses: [
    { icon: "FaUserAlt", content: "+256709299755", link: "tel:+256709299755" },
    {
      icon: "FaMapMarkerAlt",
      content: "info@doctorkivumbi.com",
      link: "mailto:info@doctorkivumbi.com",
    },
    { icon: "FaLocation", content: "Kampala, Uganda" },
  ],
};

export default contactData;
