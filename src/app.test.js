import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AboutPage from "./components/AboutPage/AboutPage";
import LoginPage from "./components/LoginPage/LoginPage";

describe('AboutPage component', () => {
 
  test('renders About Us as a text', () => {
    render(<AboutPage/>);
    const aboutUs = screen.getByText('About Us');
    expect(aboutUs).toBeInTheDocument();
  });

  test('render phone number as an element', () => {
    render(<AboutPage/>);
    const phoneNumber = screen.getByText('+381605553344');
    expect(phoneNumber).toBeInTheDocument();
  });

});

describe('LoginPage component', () => {
 
  test('render Login as a header', () => {
    render(<LoginPage/>);
    const loginHeader = screen.getByText('Login');
    expect(loginHeader).toBeInTheDocument();
  });

  test('when logged out, header still there', async () => {
    render(<LoginPage/>);
    const buttonElement = await screen.getByRole('button');
    userEvent.click(buttonElement);

    const loginHeader = await screen.getByText('Login');
    expect(loginHeader).toBeInTheDocument();
  });

});


