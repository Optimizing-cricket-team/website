import React, { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, Text, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AnimatedPlayer = motion(Box);

const TeamDisplay = ({ selectedPlayers, recommendedPlayers }) => {
  const [visibleRecommendedPlayers, setVisibleRecommendedPlayers] = useState(
    []
  ); // Players shown so far

  useEffect(() => {
    setVisibleRecommendedPlayers([]); // Reset visible players when recommendedPlayers changes

    // Add players one by one with a delay
    recommendedPlayers.forEach((player, index) => {
      setTimeout(() => {
        setVisibleRecommendedPlayers((prev) => [...prev, player]);
      }, index * 1500); // 1.5 seconds delay for each player
    });
  }, [recommendedPlayers]);

  return (
    <SimpleGrid columns={2} spacing={10}>
      {/* Opponent Team Column */}
      <Box>
        <Heading size="md" mb={4}>
          Opponent Team
        </Heading>
        {selectedPlayers.length > 0 ? (
          selectedPlayers.map((player, index) => (
            <Box
              key={index}
              p={4}
              m={2}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="lg"
              bg="orange.100"
            >
              <Text fontWeight="bold">{player.name}</Text>
              <Text>Type: {player.type}</Text>
              <Text>Strike Rate: {player.strikeRate || "N/A"}</Text>
              <Text>Economy Rate: {player.economyRate || "N/A"}</Text>
            </Box>
          ))
        ) : (
          <>{/* <Spinner /> */}</>
        )}
      </Box>

      {/* Recommended Team Column */}
      <Box>
        <Heading size="md" mb={4}>
          Recommended Team
        </Heading>
        {visibleRecommendedPlayers.length > 0 ? (
          visibleRecommendedPlayers.map((player, index) => (
            <AnimatedPlayer
              key={index}
              p={4}
              m={2}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="lg"
              bg="teal.100"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1, // Slight stagger effect for smoothness
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <Text fontWeight="bold">{player.name}</Text>
              <Text>Type: {player.type}</Text>
              <Text>Strike Rate: {player.strikeRate || "N/A"}</Text>
              <Text>Economy Rate: {player.economyRate || "N/A"}</Text>
            </AnimatedPlayer>
          ))
        ) : (
          <>{/* <Spinner /> */}</>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default TeamDisplay;
