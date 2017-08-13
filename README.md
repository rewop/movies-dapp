# Scifi movie reviews

This simple Dapp is built after inspiration of the contract described in [this reddit comment](https://www.reddit.com/r/ethereum/comments/3g7lx6/are_you_tired_of_best_scifi_movies_of_all_time/).

It shows the list of best scifi movie according to the user. The reiew value is given by paying ethers.

### Notice
This is has been quite a learning experience during my free time. The learning curve for an absolute beginner with ethereum and dapps was quite steep.

However this has been, and will be a great playground to get more familiar with Ethereum and Dapps.

## Tools and framework used

### Ethereum
- [web3.js@0.20.1](https://github.com/ethereum/web3.js)
- [truffle and truffle-contract](http://truffleframework.com/)

### Dapp

#### Build
- [yarn](https://yarnpkg.com/lang/en/)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)

#### Code linting and tests
- [eslint](http://eslint.org/)
- [prettify](https://github.com/prettier/prettier)
- [flow](https://flow.org/)
- [jest](https://facebook.github.io/jest/)

### UI Development
- [react](https://facebook.github.io/react/)
- [redux](http://redux.js.org/)
- [redux-form](http://redux-form.com/7.0.3/)
- [react-redux](https://github.com/reactjs/react-redux)

## Install
```
yarn
```

## Build and deploy contracts to test network
To start the test network with testrpc you can run
```
yarn run testrpc
```

Once the the network is running we can compile the contracts and deploy them:
```
yarn run truffle:compile
yarn run truffle:deploy
```

You test the contracts with:
```
yarn run truffle:test
```

If you need to migrate to contract after updates you can run:
```
yarn run truffle:migrate
```

## Build the frontend
To build the frontend first make sure that the contracts are compiled. We need that because webpack will include in the bundle the abi json definition of the contracts.

You can build the frontend with:

```
yarn run app:build
```

Then you can start a local static server with:
```
yarn run app:start
```

## Develop the app
To start developing, you can run

```
yarn run app:dev
```

This will start a webpack dev server.

## Todo
This application is not completed at all. There is still a lot that can be implemented. The following is what I would like to still do:

- [ ] add styles with [styled-components](styled-components)
- [ ] add tests
- [ ] Consolidate ui with flow type
- [ ] add deployment script to firebase
- [ ] add possibility to choose how much to vote
- [ ] create iedntity contract to store information about user that voted maybe by using [smartid-contract](https://github.com/SmartIdentity/smartId-contracts)
- [ ] Use third party apis to load meta information of movies
- [ ] Add autocompletion for when chosing a movie
- [ ] Add comments to reviews
- [ ] Add transactions overview to list the users that voted

This is it ;)
