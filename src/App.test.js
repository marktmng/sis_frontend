import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders learn react link', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Use waitFor to wait for the element to appear
  await waitFor(() => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
