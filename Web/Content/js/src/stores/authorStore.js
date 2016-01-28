'use strict';

import { Dispatcher } from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import { actionTypes as AuthorActionsTypes } from '../components/author/actions/actions';
import { EventEmitter } from 'events';
import { createStore } from 'redux';


const CHANGE_EVENT = 'change';
let _authors = [];

export let AuthorStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function() {
        return _authors;
    },

    getAuthorById: function(id) {
        return _authors.find(function(element) {
            if (element.id === id) {
                return true;
            }

            return false;
        });

    }
});

function dispather(action) {
    debugger;

    switch (action.type) {
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;

        case AuthorActionsTypes.CREATE_AUTHOR:
            _authors.push(action.payload.author);
            AuthorStore.emitChange();
            break;

        case AuthorActionsTypes.UPDATE_AUTHOR:
            let existingAuthor = _authors.find(element => element.id === action.payload.author.id);
            let existingAuthorIndex = _authors.indexOf(existingAuthor);
            _authors.splice(existingAuthorIndex, 1, action.payload.author);

            AuthorStore.emitChange();
            break;

        case AuthorActionsTypes.DELETE_AUTHOR:

            let authorToDelete = _authors.find(element => element.id === action.payload.id);
            let indexOfAuthorToDelete = _authors.indexOf(authorToDelete);
            _authors.splice(indexOfAuthorToDelete, 1);

            AuthorStore.emitChange();
            break;

        default:
            //no op
    }
}
Dispatcher.register(action => dispather(action));







const initialState = {
    authors: []
};

export let appStore = function(state, action) {

    debugger;

    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        //case ActionTypes.INITIALIZE:

        //    //_authors = action.initialData.authors;
        //    //AuthorStore.emitChange();
        //    break;

        case AuthorActionsTypes.CREATE_AUTHOR:
            return Object.assign({}, state, {
                authors: [
                    ...state.authors,
                    Object.assign({}, action.payload.author)
                ]
            });

        case AuthorActionsTypes.UPDATE_AUTHOR:
            let existingAuthor = state.authors.find(x => x.id === action.payload.author.id);
            let existingAuthorIndex = state.authors.indexOf(existingAuthor);

            return Object.assign({}, state, {
                authors: [
                    ...state.authors.slice(0, existingAuthorIndex),
                    Object.assign({}, state.authors[existingAuthorIndex], {
                        firstName: action.payload.author.firstName,
                        lastName: action.payload.author.lastName,
                    }),
                    ...state.authors.slice(existingAuthorIndex + 1)
                ]
            });

        case AuthorActionsTypes.DELETE_AUTHOR:
            debugger;
            let authorToDelete = state.authors.find(x => x.id === action.payload.id);
            let authors = state.authors.filter(x => x !== authorToDelete);

            return Object.assign({}, state, {
                authors: [...authors]
            });

        default:
            return state;
    }
}