export const matterTypes = [
  { value: "criminal", label: "Criminal law" },
  { value: "bail", label: "Bail" },
  { value: "civil", label: "Civil litigation" },
  { value: "family", label: "Family / matrimonial" },
  { value: "divorce", label: "Divorce / maintenance" },
  { value: "property", label: "Property" },
  { value: "cyber", label: "Cyber crime" },
  { value: "commercial", label: "Commercial / business" },
  { value: "arbitration", label: "Arbitration / ADR" },
  { value: "other", label: "Other" },
] as const;

export const contactMethods = [
  { value: "phone", label: "Telephone" },
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;
