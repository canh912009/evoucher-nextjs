import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';

type TypeCurrentUser = {
    USERID: string;
    email: string;
    gender: string;
    description: string;
    fullname: string;
    status: string;
    profilepicture: string;
    permission: string;
}

type TypeInitState = {
    token?: string;
    currentUser: TypeCurrentUser | null
}

const initialState: TypeInitState = {
    token: '',
    currentUser: null
};

const { useGlobalState } = createGlobalState(initialState)

export { useGlobalState }