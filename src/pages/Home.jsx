import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import TeamSelection from "../components/TeamSelection";
import VenueAndTime from "../components/VenueAndTime";
import PlayerSelection from "../components/PlayerSelection";
import TeamDisplay from "../components/TeamDisplay";
import indiaData from "../data/india.json";
import pakistanData from "../data/pakistan.json";
import australiaData from "../data/australia.json";
import englandData from "../data/england.json";

const Home = () => {
  const [homeTeam, setHomeTeam] = useState("India");
  const [opponentTeam, setOpponentTeam] = useState("Pakistan");
  const [venue, setVenue] = useState("Mumbai");
  const [matchTime, setMatchTime] = useState("Day");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [recommendedPlayers, setRecommendedPlayers] = useState([]);

  const teamData = {
    India: indiaData,
    Pakistan: pakistanData,
    Australia: australiaData,
    England: englandData,
  };

  const handleTeamSelection = (team) => {
    setHomeTeam(team);
    setOpponentTeam(team === "India" ? "Pakistan" : "India"); // Default opponent
    setSelectedPlayers([]);
  };

  const handleSubmit = () => {
    // Use home team data for recommendation
    const players = teamData[homeTeam] || [];

    // Get best 11 players based on selected criteria
    const best11 = players
      .filter((player) => player.type === "batsman")
      .sort((a, b) => b.strikeRate - a.strikeRate)
      .slice(0, 5)
      .concat(
        players
          .filter((player) => player.type === "bowler")
          .sort((a, b) => a.economyRate - b.economyRate)
          .slice(0, 6)
      );

    setRecommendedPlayers(best11);
  };

  return (
    <Box p={6} maxW="800px" mx="auto">
      <TeamSelection
        homeTeam={homeTeam}
        setHomeTeam={handleTeamSelection}
        opponentTeam={opponentTeam}
        setOpponentTeam={(team) => setOpponentTeam(team)}
      />
      <VenueAndTime
        venue={venue}
        setVenue={setVenue}
        matchTime={matchTime}
        setMatchTime={setMatchTime}
      />
      <PlayerSelection
        players={teamData[opponentTeam] || []} // Show players from opponent team for selection
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
      />
      <Button mt={6} colorScheme="teal" onClick={handleSubmit}>
        Submit Selection
      </Button>
      <TeamDisplay
        selectedPlayers={selectedPlayers}
        recommendedPlayers={recommendedPlayers}
      />
    </Box>
  );
};

export default Home;
