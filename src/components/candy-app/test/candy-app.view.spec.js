import React from 'react';
import { shallow } from 'enzyme';

import CandyAppView from '../candy-app.view';

describe('CandyAppView - Unit Test', () => {
    /*
    Here you can mock out any view function props not needed for rendering
    (i.e. state read/write functions from the reducer) so as to only test the view.

    These mocks may be omitted if no function props need to be mocked.
    */
    const exampleAsyncActionMock = jest.fn();
    const exampleActionMock = jest.fn();

    it('should render without crashing', () => {
        shallow(
            <CandyAppView
                exampleAsyncAction={exampleAsyncActionMock}
                exampleAction={exampleActionMock}
            />
        );
    });
});
