import React from 'react'export const phones = (state= [], action) => {    switch (action.type) {        case 'ADD_PHONE':            return [                ...state,                {                    id: action.id,                    text: action.text                }            ]        default:            return state    }}