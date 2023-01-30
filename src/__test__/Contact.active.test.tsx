import { render, screen } from '../utils/testUtils'
import '../__mock__/interseccionObserber'
import Contact from '../components/sections/Contact'
import { vi } from 'vitest'

vi.mock('../hooks/useObserver', () => {
  return {
    default: () => ({ left: { isInView: true }, right: { isInView: true } }),
  }
})

describe('Testing Contact Component', () => {
  beforeEach(() => {
    render(<Contact />)
  })

  it('Both elements Should have class animate__animated ', () => {
    const title = screen.getByText(/encontrar/i)
    const bottomContainer = title.parentElement?.lastChild
    const iframe = bottomContainer?.firstChild
    const contactLinks = bottomContainer?.lastChild

    expect(iframe).toHaveClass('animate__animated')
    expect(contactLinks).toHaveClass('animate__animated')
  })
})
