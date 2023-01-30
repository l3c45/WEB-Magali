import { render, screen } from '../utils/testUtils'
import '../__mock__/interseccionObserber'
import Contact from '../components/sections/Contact'

describe('Testing Contact Component', () => {
  beforeEach(() => {
    render(<Contact />)
  })

  it('Both elements Shouldnt have class animate__animated in initial render ', () => {
    const title = screen.getByText(/encontrar/i)
    const bottomContainer = title.parentElement?.lastChild
    const iframe = bottomContainer?.firstChild
    const contactLinks = bottomContainer?.lastChild

    expect(iframe).not.toHaveClass('animate__animated')
    expect(contactLinks).not.toHaveClass('animate__animated')
  })
})
