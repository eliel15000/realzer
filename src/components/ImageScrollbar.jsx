import { useContext } from "react";
// import Image from "next/image";
// import { Image } from "@chakra-ui/react";
import OurImage from "./OurImage";
import { Box, Icon, Flex, chakra } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Flex justifyContent="center" alignItems="center" marginRight="1">
//       <Icon 
//         as={FaArrowAltCircleLeft}
//         onClick={() => scrollPrev()} 
//         fontSize="2xl"
//         cursor="pointer"
//       />
//     </Flex>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Flex justifyContent="center" alignItems="center" marginRight="1">
//         <Icon 
//           as={FaArrowCircleRight}
//           onClick={() => scrollNext()} 
//           fontSize="2xl"
//           cursor="pointer"
//         />
//     </Flex>
//   );
// };

const ImageScrollbar = ({ data }) => (
  // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: "hidden" }}>
  <ScrollMenu style={{ overflow: "hidden" }}>
    {data.map((item) => (
      <Box key={item.id} width="910px" itemID={item.id} overflow="hidden" p="1">
        <OurImage 
          blurDataURL={item.url} 
          placeholder="blur" 
          src={item.url} 
          alt="property" 
          width={1000} 
          height={500} 
          sizes="(max-width: 500px) 100px, (max-width: 1023) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollbar;


