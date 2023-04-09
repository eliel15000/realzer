import Head from "next/head";
// import Image from "next/image";
// import { Image } from "@chakra-ui/react";
import OurImage from "@/components/OurImage";
import Link from "next/link";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import { baseUrl, fetchApi } from "@/utils/fetchApi";
import Property from "@/components/Property";

const Banner = ({ imageUrl, purpose, title1, title2, desc1, desc2, linkName, buttonText }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    {/* <Image src={imageUrl} width={500} height={300} alt="banner" /> */}
    <OurImage src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {

  return (
    <Box>
      <Banner 
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="and more"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        linkName="/search?purpose=for-rent"
        buttonText="Explore Renting"
      />

      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForRent.map((property) => <Property key={property.id} property={property} />)}
      </Flex>

      {/* <hr /> */}
      <Flex height="2px" bgColor="gray.300" width="90%" margin="0 5%" />

      <Banner 
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        linkName="/search?purpose=for-sale"
        buttonText="Explore Buying"
      />

      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForSale.map((property) => <Property key={property.id} property={property} />)}
      </Flex>
    </Box>
  );
};

// properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6
export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  }
}