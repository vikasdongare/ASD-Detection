import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menubar from './Main/Menubar';
import HomeInput from './Main/HomeInput';
import HomeOutput from './Main/HomeOutput';


describe("Menubar Component", () => {

    test('renders menubar component', () => {
        const { queryByTestId } = render(<BrowserRouter><Menubar /></BrowserRouter>);
        const menubarElement = queryByTestId("menubar-component");
        expect(menubarElement).toBeTruthy();
    });

});

describe("Home Input Component", () => {

    test('renders Home Input component', () => {
        const { queryByTestId } = render(<BrowserRouter><HomeInput /></BrowserRouter>);
        const homeInputElement = queryByTestId("homeInput-component");
        expect(homeInputElement).toBeTruthy();
    });

});

describe("Home Output Component", () => {

    test('renders Home Output component', () => {
        const { queryByTestId } = render(<BrowserRouter><HomeOutput /></BrowserRouter>);
        const homeOutputElement = queryByTestId("homeOutput-component");
        expect(homeOutputElement).toBeTruthy();
    });

});