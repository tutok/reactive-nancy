'use strict';

import { Dispatcher } from '../../../dispatcher/appDispatcher';
import AuthorsApi from '../../../api/authorsApi';
import ActionTypes from '../../../constants/actionTypes';

let AuthorActions = {
    createAuthor: function(author) {
        let newAuthor = AuthorsApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function(author) {
        let updatedAuthor = AuthorsApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },

    deleteAuthor: function(id) {
        AuthorsApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

export default AuthorActions;