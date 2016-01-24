'use strict';

import { Dispatcher } from '../../../dispatcher/appDispatcher';
import AuthorsApi from '../../../api/authorsApi';

export const actionTypes = {
    CREATE_AUTHOR: 'CREATE_AUTHOR',
    UPDATE_AUTHOR: 'UPDATE_AUTHOR',
    DELETE_AUTHOR: 'DELETE_AUTHOR',
};

export function createAuthor(author) {
    let newAuthor = AuthorsApi.saveAuthor(author);

    return {
        type: actionTypes.CREATE_AUTHOR,
        payload: {
            author: newAuthor
        }
    };
};

export function updateAuthor(author) {
    let updatedAuthor = AuthorsApi.saveAuthor(author);

    return {
        type: actionTypes.UPDATE_AUTHOR,
        payload: {
            author: updatedAuthor
        }
    };
};

export function deleteAuthor(id) {
    AuthorsApi.deleteAuthor(id);

    return {
        type: actionTypes.DELETE_AUTHOR,
        payload: {
            id: id
        }
    };
};
