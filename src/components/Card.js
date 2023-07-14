import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack align="start" spacing={4} background="#FFFFFF" borderRadius="0.5rem">
      <Image src={imageSrc} alt={title} boxSize="100%" objectFit="cover" borderRadius="0.5rem" />
      <VStack align="start" padding="1rem">
        <Heading as="h3" size="lg" color="#000" fontSize="xl">
          {title}
        </Heading>
        <Text color="#000">
          {description}
        </Text>
        <HStack spacing={2}>
          <Text color='#000' fontSize="sm">See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#000" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
