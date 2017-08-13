import Web3 from 'web3';
import createMovies from './movies';

jest.mock('web3');

describe('services/movies', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('createMovies', () => {
    expect(typeof createMovies).toBe('function');
  });
  it('should create the Movies service', () => {
    const config = {
      web3Host: 'web3Host',
    };
    createMovies(config);

    expect(Web3.providers.HttpProvider).toHaveBeenCalledWith(config.web3Host);
  });

  it('should return the api', () => {
    const config = {
      web3Host: 'web3Host',
    };
    const moviesService = createMovies(config);

    ['getMovies', 'voteMovie'].forEach((method) => {
      expect(typeof moviesService[method]).toBe('function');
    });
  });
});
