import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Signup from './Signup';


describe("Signup Component", () => {

    test('renders signup component', () => {
        const { queryByTestId } = render(<BrowserRouter><Signup /></BrowserRouter>);
        const signupElement = queryByTestId("signup-form");
        expect(signupElement).toBeTruthy();
    });

});