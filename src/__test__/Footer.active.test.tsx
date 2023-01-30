import { render, screen } from '../utils/testUtils'
import '../__mock__/interseccionObserber'
import Footer from '../components/sections/Footer'
import { vi } from 'vitest'

vi.mock('../hooks/useObserver', () => {
  return {
    default: () => ({ footer: { isInView: true } }),
  }
})

const mockConfig = vi.fn()

vi.mock('../hooks/useObserver', () => mockConfig)

describe('Testing Footer Component', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('Should have animate__animated class ', async () => {
    const span = screen.getByText(/developed/i)

    expect(span).toHaveClass('animate__animated')
  })
})
