'use strict';

import { Dispatcher } from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import { actionTypes as AuthorActionsTypes } from '../components/author/actions/actions';
import { EventEmitter } from 'events';
import { createStore } from 'redux';


const CHANGE_EVENT = 'change';
let _authors = [];
let AuthorStore = Object.assign({}, EventEmitter.prototype, {
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


function dispather(state = {a: 0}, action) {
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

    return state;
}
Dispatcher.register(action => dispather(0, action));

const store = createStore(dispather);

debugger;

export default AuthorStore;