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

    getAuthorBtId: function(id) {
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
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();

        default:
    }
});

export default AuthorStore;