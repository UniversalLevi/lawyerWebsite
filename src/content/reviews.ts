/**
 * Client reviews are not published unless the chambers approve them.
 * Do not copy Google reviews onto this website without that approval.
 */
export type Review = {
  author: string;
  date?: string;
  text: string;
  source?: string;
};

export const reviews = {
  publish: false,
  verified: [] as Review[],
  note: "Testimonials are not reproduced on this website. Approved remarks may be added here later.",
};
