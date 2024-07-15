import React from 'react';
import renderer from 'react-test-renderer';
import HelloWorld from './components/HelloWorld';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {

  const components = renderer.create(<HelloWorld />);
  const tree = components.toJSON();
  expect(tree).toMatchSnapshot();

})