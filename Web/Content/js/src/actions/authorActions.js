'use strict';

import { Dispatcher } from '../dispatcher/appDispatcher';
import AuthorsApi from '../api/authorsApi';
import ActionTypes from '../constants/actionTypes';

let AuthorActions = {
    createAuthor: function(author) {
        let newAuthor = AuthorsApi.saveAuthor(author);


        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    }
};

export default AuthorActions;