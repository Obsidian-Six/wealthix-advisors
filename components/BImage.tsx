import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & { src: ImageProps["src"]; alt: string };

function resolveSrc(src: ImageProps["src"]): ImageProps["src"] {
  if (typeof src === "string" && src.startsWith("/")) {
    const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    return `${bp}${src}`;
  }
  return src;
}

export default function BImage({ src, alt, ...rest }: Props) {
  return <Image src={resolveSrc(src)} alt={alt} {...rest} />;
}
