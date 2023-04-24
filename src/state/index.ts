import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
    token: '',
    currentUser: null,
};

const { useGlobalState } = createGlobalState(initialState)

export { useGlobalState }