import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CandyAppView from './candy-app.view';
import {
    exampleAction,
    exampleAsyncAction
    /*
    Import all the actions you wish to expose to the view here.
    */
} from './candy-app.reducer';

export function mapStateToProps({ candyAppReducer }) {
    return {
        exampleVariable: candyAppReducer.exampleVariable
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

export default connect(mapStateToProps, mapDispatchToProps)(CandyAppView);
