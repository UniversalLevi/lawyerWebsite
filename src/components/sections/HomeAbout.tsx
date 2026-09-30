import Image from "next/image";
import Link from "next/link";
import { lawyerProfile } from "@/content/lawyer";
import { homeStripPhotos, photoNote, photos } from "@/content/photos";
import { PhotoGallery } from "@/components/ui/Figure";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HomeAbout() {
  return (
    <section className="section section-ivory" id="about">
      <div className="wrap split">
        <div>
          <SectionLabel number="01">The Practice</SectionLabel>
          <h2>About {lawyerProfile.displayName}</h2>
          <hr className="gold-rule" />
          <p>{lawyerProfile.homeAbout}</p>
          <p>
            <Link className="text-link" href="/about">
              View Full Profile →
            </Link>
          </p>
        </div>
        <div className="photo-frame photo-square">
          <Image
            src={photos.chambers.src}
            alt={photos.chambers.alt}
            fill
            sizes="(max-width: 980px) 100vw, 50vw"
          />
          <p className="photo-caption">{photos.chambers.caption}</p>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: "2.4rem" }}>
        <PhotoGallery photos={homeStripPhotos} note={photoNote} />
      </div>
    </section>
  );
}
