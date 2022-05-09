import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';


describe("Login Component", () => {

    test('renders login component', () => {
        const { queryByTestId } = render(<BrowserRouter><Login /></BrowserRouter>);
        const loginElement = queryByTestId("login-form");
        expect(loginElement).toBeTruthy();
    });

});