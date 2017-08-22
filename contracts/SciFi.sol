pragma solidity ^0.4.4;

contract SciFi {
  mapping(bytes32 => uint) public bids;
  bytes32[1000000] public movies;
  uint public movie_num;

  function vote(bytes32 name) payable {
    if (msg.value == 0) {
      return;
    }
    uint val = bids[name];
    if (val == 0) {
      movies[movie_num++] = name;
    }
    bids[name] += msg.value;
  }

  function getMovies() returns (bytes32[], uint[]) {
    bytes32[] memory resultMovies = new bytes32[](movie_num);
    uint[] memory resultScores = new uint[](movie_num);

    for (uint i = 0; i < movie_num; i++) {
      resultMovies[i] = movies[i];
      resultScores[i] = bids[movies[i]];
    }
    return (resultMovies, resultScores);
  }
}
