/* @flow */
import Web3 from 'web3';
import contract from 'truffle-contract';
import abiSciFi from '../../../build/contracts/Scifi.json';
import type {
  MoviesService,
  MoviesServiceGetMoviesResponse,
  Movie,
  MoviesServiceVoteMovieResponse,
} from '../flowtypes/services';

export default function create(): MoviesService {
  let web3Provider;
  let myWeb3;

  if (typeof web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
    myWeb3 = new Web3(web3Provider);
  } else {
    // we try to use localhost
    web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    myWeb3 = new Web3(web3Provider);
  }

  const SciFiContract = contract(abiSciFi);
  SciFiContract.setProvider(web3Provider);

  return {
    getMovies: async (): Promise<MoviesServiceGetMoviesResponse> => {
      try {
        console.log(1);
        const instance = await SciFiContract.deployed();
        console.log(2);
        const [movies, votes] = await instance.getMovies.call();
        console.log(3, movies, votes);
        const parsedMovies = movies.map((movie, i) => ({
          title: myWeb3.toAscii(movie).replace(/\0/g, ''),
          score: myWeb3.fromWei(votes[i]).toString(),
        }));
        console.log('parsedMovies', parsedMovies);
        return parsedMovies;
      } catch (err) {
        console.log('Error getting movies', err);
        throw err;
      }
    },
    voteMovie: async ({ title }: Movie): Promise<MoviesServiceVoteMovieResponse> => {
      try {
        const instance = await SciFiContract.deployed();
        const transaction = await instance.vote(myWeb3.toHex(title), {
          from: myWeb3.eth.accounts[0],
          value: myWeb3.toWei(0.00002, 'ether'),
        });
        console.log('Vote succeeded. Transaction:', transaction);

        const newScore = await instance.bids.call(myWeb3.toHex(title));

        const result = {
          title,
          score: myWeb3.fromWei(newScore).toString(),
        };
        console.log('result', result);

        return result;
      } catch (err) {
        console.log('Error voring movie', err);
        throw err;
      }
    },
  };
}
