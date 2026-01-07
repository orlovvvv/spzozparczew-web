import * as migration_20260107_091118 from './20260107_091118';

export const migrations = [
  {
    up: migration_20260107_091118.up,
    down: migration_20260107_091118.down,
    name: '20260107_091118'
  },
];
