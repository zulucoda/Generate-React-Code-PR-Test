import React from 'react';
import { shallow } from 'enzyme';

import TestCode2View from '../test-code-2.view';

describe('TestCode2View - Unit Test', () => {
    /*
    Here you can mock out any view function props not needed for rendering
    (i.e. state read/write functions passed in as props) so as to only test the view.

    These mocks may be omitted if no function props need to be mocked.
    */

    it('should render without crashing', () => {
        shallow(<TestCode2View />);
    });
});
