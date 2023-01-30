import { fireEvent, render, screen } from '../utils/testUtils'

import Navbar from '../components/sections/NavBar'

describe('Testing Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />)
  })

  it('Shouldnt have navbar when menu is active ', () => {
    const button = screen.getByRole('button')
    const nav = screen.getByRole('navigation')

    expect(nav).toBeDefined

    fireEvent.click(button)
    const slider = screen.getByRole('slider')
    expect(nav).toBeUndefined
    expect(slider).toBeDefined
  })
})
