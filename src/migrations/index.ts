import * as migration_20260818_090700 from './20260818_090700';

export const migrations = [
  {
    up: migration_20260818_090700.up,
    down: migration_20260818_090700.down,
    name: '20260818_090700'
  },
];
