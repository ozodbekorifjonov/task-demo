import { render, screen } from '@testing-library/react';
import DashboardHome from '../DashboardHome.tsx';

describe('DashboardHome', () => {
  it('renders the correct text with h3 heading', () => {
    render(<DashboardHome />);

    // Assert that the text "Hello World :)" is rendered
    const helloWorldText = screen.getByText('Hello World :)');
    expect(helloWorldText).toBeInTheDocument();

    // Assert that the text is rendered inside an h3 heading
    const headingElement = screen.getByRole('heading', { level: 3 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toContainElement(helloWorldText);
  });
});
