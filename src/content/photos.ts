/**
 * Authentic photographs of Advocate Manoj Kumar Singh, S&M Law Firm, Howrah.
 *
 * Files live in public/images/. To replace a picture, overwrite the matching
 * file there (keep the filename) or change `src` below.
 *
 * Outdoor pictures taken at the Supreme Court of India, New Delhi, record a
 * visit. They must not be captioned as a Supreme Court practice or added to
 * the associated-courts list.
 */

export type SitePhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const photos = {
  chambers: {
    id: "chambers",
    src: "/images/advocate-manoj-kumar-singh-chambers.jpg",
    alt: "Advocate Manoj Kumar Singh at his desk at S&M Law Firm, Howrah",
    caption: "At the chambers, S&M Law Firm, Howrah",
    width: 1200,
    height: 1200,
  },
  portrait: {
    id: "portrait",
    src: "/images/advocate-manoj-kumar-singh-portrait.jpg",
    alt: "Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, at his chambers",
    caption: "Advocate Manoj Kumar Singh at S&M Law Firm, Howrah",
    width: 1200,
    height: 1200,
  },
  supremeCourt: {
    id: "supreme-court",
    src: "/images/advocate-manoj-kumar-singh-supreme-court.jpg",
    alt: "Advocate Manoj Kumar Singh photographed at the Supreme Court of India, New Delhi",
    caption: "At the Supreme Court of India, New Delhi",
    width: 960,
    height: 1200,
  },
  supremeCourtCall: {
    id: "supreme-court-call",
    src: "/images/advocate-manoj-kumar-singh-supreme-court-call.jpg",
    alt: "Advocate Manoj Kumar Singh at the Supreme Court of India, New Delhi",
    caption: "At the Supreme Court of India, New Delhi",
    width: 960,
    height: 1200,
  },
  supremeCourtSteps: {
    id: "supreme-court-steps",
    src: "/images/advocate-manoj-kumar-singh-supreme-court-steps.jpg",
    alt: "Advocate Manoj Kumar Singh on the steps of the Supreme Court of India, New Delhi",
    caption: "On the steps of the Supreme Court of India, New Delhi",
    width: 960,
    height: 1200,
  },
  ambedkar: {
    id: "ambedkar",
    src: "/images/advocate-manoj-kumar-singh-ambedkar.jpg",
    alt: "Advocate Manoj Kumar Singh beside the statue of Dr B.R. Ambedkar at the Supreme Court of India, New Delhi",
    caption: "Beside the statue of Dr B.R. Ambedkar, New Delhi",
    width: 960,
    height: 1200,
  },
} as const satisfies Record<string, SitePhoto>;

export const galleryPhotos: SitePhoto[] = [
  photos.portrait,
  photos.chambers,
  photos.supremeCourt,
  photos.supremeCourtCall,
  photos.supremeCourtSteps,
  photos.ambedkar,
];

export const homeStripPhotos: SitePhoto[] = [
  photos.supremeCourt,
  photos.supremeCourtCall,
  photos.supremeCourtSteps,
  photos.ambedkar,
];

export const photoNote =
  "These photographs are of Advocate Manoj Kumar Singh of S&M Law Firm, Howrah. Pictures taken in New Delhi record a visit to the Supreme Court of India. They do not add that Court to the forums associated with the Howrah practice, which remain those listed on the Courts page.";
