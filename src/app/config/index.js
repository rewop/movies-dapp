/* @flow */
import type { AppConfig } from '../flowtypes/app';

export default function createConfig(): AppConfig {
  // you can add your configuration here.
  // you can load different configuration for different envs
  return {
    services: {
      web3Host: 'http://localhost:8545',
    },
  };
}
