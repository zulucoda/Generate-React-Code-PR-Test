import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CandyApp2View from './candy-app-2.view';
import {
    exampleAction,
    exampleAsyncAction
    /*
    Import all the actions you wish to expose to the view here.
    */
} from './candy-app-2.reducer';

export function mapStateToProps({ candyApp2Reducer }) {
    return {
        exampleVariable: candyApp2Reducer.exampleVariable
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

export default connect(mapStateToProps, mapDispatchToProps)(CandyApp2View);
