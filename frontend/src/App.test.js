import { render } from '@testing-library/react';
import App from './App';


describe("App Component", () => {

  test('renders app component', () => {
    const { queryByTestId } = render(<App />);
    const appElement = queryByTestId("app-component");
    expect(appElement).toBeTruthy();
  });

});

