import { render, screen } from '../utils/testUtils';
import  "../__mock__/interseccionObserber"


import App from '../App';

describe('Testing App component', () => {
  it('renders component', () => {
    render(<App />);
    screen.debug()
  });
});