const SciFi = artifacts.require('SciFi');

function getTransactionCount(address) {
  return new Promise((resolve) => {
    web3.eth.getTransactionCount(address, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function logTransactionCount(address) {
  return getTransactionCount(address).then((count) => {
    console.log('transactionCount', count);
  });
}

contract('SciFi', (accounts) => {
  const movieAddedInTheContract = 'a_movie';
  const movieNotAddedInTheContract = 'not_a_movie';
  const notVotedMovie = 'not_used';
  it('should not add the vote to the bid if the value is 0', async () => {
    const movieName = web3.toHex(movieNotAddedInTheContract);
    const value = web3.toWei(0, 'ether');
    const sciFi = await SciFi.deployed();
    const initialReviewValue = parseFloat(await sciFi.bids.call(movieName));
    await sciFi.vote(movieName, {
      from: accounts[0],
      value,
    });
    const movieReviewValue = parseFloat(await sciFi.bids.call(movieName));
    assert.equal(movieReviewValue - initialReviewValue, 0, 'Value should be 0');
  });
  it("should add the vote to the bids if the movie doesn't exist", async () => {
    const movieName = web3.toHex(movieAddedInTheContract);
    const value = web3.toWei(0.002, 'ether');
    const sciFi = await SciFi.deployed();
    const initialReviewValue = parseFloat(await sciFi.bids.call(movieName));
    await sciFi.vote(movieName, {
      from: accounts[0],
      value,
    });
    const updatedReviewValue = parseFloat(await sciFi.bids.call(movieName));
    assert.equal(
      updatedReviewValue - initialReviewValue,
      value,
      'Updated value does not increase of transaction value',
    );
  });
  it('should have review value 0 if the movie was never voted', async () => {
    const sciFi = await SciFi.deployed();
    const movieName = notVotedMovie;
    const notExistingMovieValue = parseFloat(await sciFi.bids.call(movieName));
    const numberOfBiddedMovies = parseInt(await sciFi.movie_num.call());
    assert.equal(notExistingMovieValue, 0, "Never voted menu doesn't have 0 as value");
    assert.equal(numberOfBiddedMovies, 1, 'The num_value should not include the movie number');
  });
  it('should return the list of all the voted movies', async () => {
    const sciFi = await SciFi.deployed();
    const [movies, votes] = await sciFi.getMovies.call();
    movies.forEach((movie, index) => {
      console.log(typeof web3.fromWei(votes[index]).toString());
      console.log({
        name: web3.toAscii(movie).replace(/\0/g, ''),
        vote: web3.fromWei(votes[index]).toString(),
      });
    });
    assert.equal(movies.length, 1);
    assert.equal(votes.length, 1);
    const storedMovie = web3.toAscii(movies[0]).replace(/\0/g, '');
    assert.equal(
      storedMovie,
      movieAddedInTheContract,
      'We should be able to retrieve only the added movies',
    );
    assert(votes[0] > 0, 'the movie should have positive vote');
  });
});
