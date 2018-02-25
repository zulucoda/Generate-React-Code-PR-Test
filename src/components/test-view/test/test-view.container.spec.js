jest.mock('redux');

import { bindActionCreators } from 'redux';
import { mapStateToProps, mapDispatchToProps } from '../test-view.container';
import {
    exampleAction,
    exampleAsyncAction
    /*
    Import all the actions you wish to expose to the view here.
    */
} from '../test-view.reducer';

describe('testViewContainer - Unit test', () => {
    function stateBefore() {
        return {
            testViewReducer: {
                exampleVariable: true
                /*
                Setup your initial state for testing here.
                */
            }
        };
    }

    it('should map state to props', () => {
        const actual = mapStateToProps(stateBefore());

        const expected = {
            exampleVariable: true
            /*
            Setup your initial state for verification here.
            */
        };

        expect(actual).toEqual(expected);
    });

    it('should map dispatch to props', () => {
        const dispatch = jest.fn();

        mapDispatchToProps(dispatch);

        expect(bindActionCreators).toHaveBeenCalledWith(
            {
                exampleAction,
                exampleAsyncAction
                /*
                Import all the actions you wish to expose to the view here.
                */
            },
            dispatch
        );
    });
});
