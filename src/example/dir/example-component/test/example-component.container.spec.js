jest.mock('redux');

import { bindActionCreators } from 'redux';
import { mapStateToProps, mapDispatchToProps } from '../example-component.container';
import {
    exampleAction,
    exampleAsyncAction
    /*
    Import all the actions you wish to expose to the view here.
    */
} from '../example-component.reducer';

describe('exampleComponentContainer - Unit test', () => {
    function stateBefore() {
        return {
            exampleComponentReducer: {
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
