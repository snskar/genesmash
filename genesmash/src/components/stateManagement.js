
const [player1Id, setPlayer1Id] = useState(2);
const [player2Id, setPlayer2Id] = useState(2);

const boardProps = {
  player1Id: player1Id,
  player2Id: player2Id,
  setPlayer1: setPlayer1Id,
  setPlayer2: setPlayer2Id,
};

const [winnerId, setWinnerId] = useState(2);
const [loserId, setLoserId] = useState(2);
const [isDraw, setIsDraw] = useState(false);

const resultProps = {
  winnerId: winnerId, 
  loserId: loserId,
  isDraw: isDraw,
}