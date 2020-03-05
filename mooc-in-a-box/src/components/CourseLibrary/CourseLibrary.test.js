import React from 'react';
import { render } from '@testing-library/react';
import CurrentCourse from './CourseLibrary';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
