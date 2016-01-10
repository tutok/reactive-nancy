'use strict';

import { Dispatcher } from '../dispatcher/appDispatcher';
import AuthorsApi from '../api/authorsApi';
import ActionTypes from '../constants/actionTypes';

let InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorsApi.getAllAuthors()
            }
        });
    }
};

export default InitializeActions;