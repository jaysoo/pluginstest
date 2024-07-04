import type { CreateDependencies } from '@nx/devkit'

export const bar = 'bar';

export const createDependencies: CreateDependencies = () => {
  console.log('>>> bar createDependencies');
  return [];
};

