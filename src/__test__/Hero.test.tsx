import { render, screen } from '../utils/testUtils';
//import  "../__mock__/interseccionObserber"
import Hero from '../components/sections/Hero';

describe('Testing Hero Component', () => {

beforeEach(()=>{
  render(<Hero />);
})

  it('Should render title ', () => {
    const title="Magali"

    expect(screen.getByText(title)).toMatchSnapshot()
  });
});