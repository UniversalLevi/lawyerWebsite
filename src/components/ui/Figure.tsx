import Image from "next/image";
import type { SitePhoto } from "@/content/photos";

export function Figure({
  photo,
  className,
  priority = false,
  sizes = "(max-width: 980px) 92vw, 28rem",
}: {
  photo: SitePhoto;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={className ? `figure ${className}` : "figure"}>
      <div className="photo-frame photo-square">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
        />
      </div>
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

export function PhotoGallery({
  photos,
  note,
}: {
  photos: SitePhoto[];
  note?: string;
}) {
  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <Figure key={photo.id} photo={photo} sizes="(max-width: 980px) 92vw, 22rem" />
      ))}
      {note ? <p className="note photo-gallery-note">{note}</p> : null}
    </div>
  );
}
