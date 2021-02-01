import { DefaultDataServiceConfig } from '@ngrx/data';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/clientes/api',
  timeout: 3000
};
