/* eslint-disable import/prefer-default-export */
export const iowaData = {
  won: "Won Rs.",
  lost: "Lost Rs.",
  practiceLastPage: "Practice Completed, Click To Play Game",
  lastPage:
    "Thank you for participating in the task. Please click here for the next task.",
  initialLoan: 225000,
  finalLimit: 225000 * 3,
};

// create data for cards here
const trialsCount = 40;
const cardsData: { [key: string]: { won: number; lost: number }[] } = {
  a: [
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 11250 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 22500 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 15000 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 18750 },
    { won: 7500, lost: 26250 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 26250 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 18750 },
    { won: 7500, lost: 15000 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 22500 },
    { won: 7500, lost: 11250 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 22500 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 26250 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 15000 },
    { won: 7500, lost: 18750 },
    { won: 7500, lost: 11250 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 26250 },
    { won: 7500, lost: 15000 },
    { won: 7500, lost: 18750 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 11250 },
    { won: 7500, lost: 22500 },
    { won: 7500, lost: 0 },
  ],
  b: [
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 93750 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 93750 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 93750 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 93750 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
  ],
  c: [
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 3750 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 3750 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 3750 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 3750 },
    { won: 3750, lost: 3750 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 1875 },
    { won: 3750, lost: 5625 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 1875 },
    { won: 3750, lost: 5625 },
    { won: 3750, lost: 3750 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 3750 },
    { won: 3750, lost: 1875 },
    { won: 3750, lost: 3750 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 5625 },
    { won: 3750, lost: 3750 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 1875 },
    { won: 3750, lost: 1875 },
    { won: 3750, lost: 5625 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 3750 },
    { won: 3750, lost: 5625 },
    { won: 3750, lost: 0 },
  ],
  d: [
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 18750 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 18750 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 18750 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 18750 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
    { won: 3750, lost: 0 },
  ],
};

export const iowaGameData = {
  trialsCount,
  cardsData,
};

const practiceCount = 5;
const practiceData: { [key: string]: { won: number; lost: number }[] } = {
  a: [
    { won: 7500, lost: 5000 },
    { won: 1500, lost: 2000 },
    { won: 7500, lost: 3000 },
    { won: 1000, lost: 3000 },
    { won: 1500, lost: 3500 },
  ],
  b: [
    { won: 7500, lost: 3000 },
    { won: 1000, lost: 3000 },
    { won: 1500, lost: 3500 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 5000 },
  ],
  c: [
    { won: 1500, lost: 3500 },
    { won: 7500, lost: 0 },
    { won: 1000, lost: 2000 },
    { won: 3500, lost: 1000 },
    { won: 7500, lost: 5000 },
  ],
  d: [
    { won: 1000, lost: 2000 },
    { won: 3500, lost: 1000 },
    { won: 7500, lost: 5000 },
    { won: 1500, lost: 2000 },
    { won: 7500, lost: 5000 },
  ],
};

export const iowaPractceData = {
  trialsCount: practiceCount,
  cardsData: practiceData,
};
