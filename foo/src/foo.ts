import type { CreateDependencies } from '@nx/devkit'

export const foo = 'foo';

export const createDependencies: CreateDependencies = () => {
  console.log('>>> foo createDependencies');
  return [];
};

