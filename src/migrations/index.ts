import * as migration_20260817_081423 from './20260817_081423';
import * as migration_20260817_083545 from './20260817_083545';
import * as migration_20260817_090000 from './20260817_090000';
import * as migration_20260817_091500 from './20260817_091500';
import * as migration_20260817_154200 from './20260817_154200';

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
  {
    up: migration_20260817_090000.up,
    down: migration_20260817_090000.down,
    name: '20260817_090000'
  },
  {
    up: migration_20260817_091500.up,
    down: migration_20260817_091500.down,
    name: '20260817_091500'
  },
  {
    up: migration_20260817_154200.up,
    down: migration_20260817_154200.down,
    name: '20260817_154200'
  },
];
