import { lawyerProfile } from "./lawyer";

export const contactInfo = {
  displayName: lawyerProfile.displayName,
  firm: lawyerProfile.firm.name,
  address: {
    building: "T.S.S. Tower, 1st Floor",
    street: "21/1 Dobson Road",
    landmark: "Near Howrah A.C. Market",
    locality: "Babudanga",
    city: "Howrah",
    region: "West Bengal",
    postalCode: "711101",
    country: "India",
    countryCode: "IN",
    /** Publicly listed coordinates for the Dobson Road / Howrah A.C. Market office. */
    latitude: 22.591274,
    longitude: 88.341233,
  },
  phone: {
    display: "+91 90622 21111",
    tel: "+919062221111",
    e164: "+919062221111",
  },
  landline: {
    display: "+91 33 553 5903",
    tel: "+91335535903",
    e164: "+91335535903",
  },
  email: {
    display: "manoj@smlegalservice.com",
    href: "mailto:manoj@smlegalservice.com",
  },
  whatsApp: {
    /**
     * Public listings for this Howrah practice already publish WhatsApp
     * on the office mobile number. Set enabled to false if that is withdrawn.
     */
    enabled: true,
    href: "https://wa.me/919062221111",
    label: "WhatsApp",
  },
  maps: {
    query:
      "T.S.S. Tower, 21/1 Dobson Road, Near Howrah A.C. Market, Babudanga, Howrah, West Bengal 711101",
    searchUrl:
      "https://www.google.com/maps/search/?api=1&query=T.S.S.+Tower+21%2F1+Dobson+Road+Howrah+A.C.+Market+Babudanga+711101",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=22.591274,88.341233",
  },
  hours: {
    verified: false,
    summary:
      "Consultations are arranged by appointment. Please telephone the office to fix a time.",
  },
  social: {
    facebook: "https://www.facebook.com/AdvocateManojSingh1/",
    linkedin: "https://in.linkedin.com/in/advocate-manoj-singh-27131b272",
  },
  gbp: {
    /**
     * Keep these fields consistent with the Google Business Profile.
     * Hours are not published here until confirmed, because public listings disagree.
     */
    businessName: "Advocate Manoj Kumar Singh",
    categories: ["Lawyer", "Law Firm", "Criminal Justice Attorney"],
  },
} as const;

export function formatAddressLines(): string[] {
  const a = contactInfo.address;
  return [
    a.building,
    a.street,
    a.landmark,
    a.locality,
    `${a.city}, ${a.region} – ${a.postalCode}`,
    a.country,
  ];
}

export function formatAddressOneLine(): string {
  const a = contactInfo.address;
  return `${a.building}, ${a.street}, ${a.landmark}, ${a.locality}, ${a.city}, ${a.region} ${a.postalCode}, ${a.country}`;
}
