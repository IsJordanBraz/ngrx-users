import { DefaultDataServiceConfig } from '@ngrx/data';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:8081/clientes/api',
  timeout: 3000
};
