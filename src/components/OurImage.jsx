import Image from "next/image";
import { chakra } from "@chakra-ui/react";

const OurImage = chakra(Image, {
  shouldForwardProp: (prop) => ["src", "alt", "width", "height", "blurDataURL", "placeholder", "sizes"].includes(prop)
});

export default OurImage;