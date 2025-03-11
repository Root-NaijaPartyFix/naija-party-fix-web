import Image from "next/image";
interface Props {
  src: string;
  alt: string;
  className?: string;
  text: string;
}
const HoverImage = ({ src, alt, className = "", text }: Props) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        sizes="100%"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-lg font-semibold text-white">{text}</p>
      </div>
    </div>
  );
};

export default HoverImage;
