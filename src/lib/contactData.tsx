import { ContactData } from "@/types";

// draft: false

const contactData: ContactData = {
  title: "Contact Me",
  description: "meta description",
  phone: "+256709299755",
  mail: "iamkivumbi@gmail.com",
  location: "Kampala, Uganda",
  form_action: "#",
  layout: "contact",
  addresses: [
    { icon: "FaUserAlt", content: "+256709299755", link: "tel:+256709299755" },
    {
      icon: "FaMapMarkerAlt",
      content: "iamkivumbi@gmail.com",
      link: "mailto:iamkivumbi@gmail.com",
    },
    { icon: "FaLocation", content: "Kampala, Uganda" },
  ],
};

export default contactData;
