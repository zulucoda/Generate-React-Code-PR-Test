import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TestViewView from './test-view.view';
import {
    exampleAction,
    exampleAsyncAction
    /*
    Import all the actions you wish to expose to the view here.
    */
} from './test-view.reducer';

export function mapStateToProps({ testViewReducer }) {
    return {
        exampleVariable: testViewReducer.exampleVariable
        /*
        Add all the state variables you wish to expose to the view here.
        */
    };
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            exampleAction,
            exampleAsyncAction
            /*
            Add all the actions you wish to expose to the view here.
            */
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(TestViewView);
