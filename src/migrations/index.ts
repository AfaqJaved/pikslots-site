import * as migration_20260817_081423 from './20260817_081423';
import * as migration_20260817_083545 from './20260817_083545';

export const migrations = [
  {
    up: migration_20260817_081423.up,
    down: migration_20260817_081423.down,
    name: '20260817_081423',
  },
  {
    up: migration_20260817_083545.up,
    down: migration_20260817_083545.down,
    name: '20260817_083545'
  },
];
