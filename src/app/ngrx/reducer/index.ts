import * as loading from './loading';

export interface State {
  loading: boolean;
}

export const reducer = {
  loading: loading.reducer
};


