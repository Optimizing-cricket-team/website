// src/components/PlayerCard.js
import React from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";

const PlayerCard = ({ player, onSelect, isSelected }) => (
  <Box
    p={4}
    borderWidth="1px"
    borderRadius="md"
    boxShadow="sm"
    bg={isSelected ? "green.200" : "white"}
    textAlign="center"
  >
    <VStack spacing={2}>
      <Text fontWeight="bold">{player.name}</Text>
      <Text>Type: {player.type}</Text>
      <Text>Strike Rate: {player.strikeRate || "N/A"}</Text>
      <Text>Economy Rate: {player.economyRate || "N/A"}</Text>
      <Button
        colorScheme={isSelected ? "red" : "blue"}
        onClick={onSelect}
        size="sm"
      >
        {isSelected ? "Deselect" : "Select"}
      </Button>
    </VStack>
  </Box>
);

export default PlayerCard;
