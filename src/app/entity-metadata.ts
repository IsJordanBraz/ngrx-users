import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  user: {}
};

const pluralNames = { user: 'users' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
