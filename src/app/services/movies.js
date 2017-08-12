import Web3 from "web3";

export default function create({ web3Host }) {
  const web3 = new Web3.providers.HttpProvider(web3Host);
  return {
    getMovies: () => {},
    voteMovie: () => {}
  };
}
