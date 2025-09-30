import logements from "../data/logements.json";

export const fetchLogements = async () => {
  return logements;
};

export const getLogementById = async (id) => {
  return logements.find((logement) => logement.id === id);
};
