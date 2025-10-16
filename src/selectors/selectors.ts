import type { IStore } from '../types/types.ts';

export const currentPlayerSelector = (state: IStore) => state.currentPlayerStore;
export const isDrawSelector = (state: IStore) => state.isDrawStore;
export const isGameEndedSelector = (state: IStore) => state.isGameEndedStore;
export const fieldSelector = (state: IStore) => state.fieldStore;
