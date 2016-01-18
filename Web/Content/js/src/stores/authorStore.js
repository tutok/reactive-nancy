'use strict';

import { Dispatcher } from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import { EventEmitter } from 'events';
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

Dispatcher.register(function(action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;

        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;

        case ActionTypes.UPDATE_AUTHOR:
            let existingAuthor = _authors.find(element => element.id === action.author.id);
            let existingAuthorIndex = _authors.indexOf(existingAuthor);
            _authors.splice(existingAuthorIndex, 1, action.author);

            AuthorStore.emitChange();
            break;

        case ActionTypes.DELETE_AUTHOR:

            let authorToDelete = _authors.find(element => element.id === action.id);
            let indexOfAuthorToDelete = _authors.indexOf(authorToDelete);
            _authors.splice(indexOfAuthorToDelete, 1);

            AuthorStore.emitChange();
            break;

        default:
            //no op
    }
});

export default AuthorStore;