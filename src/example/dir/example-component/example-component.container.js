import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExampleComponentView from './example-component.view';
import {
    exampleAction,
    exampleAsyncAction
    /*
    Import all the actions you wish to expose to the view here.
    */
} from './example-component.reducer';

export function mapStateToProps({ exampleComponentReducer }) {
    return {
        exampleVariable: exampleComponentReducer.exampleVariable
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

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponentView);
