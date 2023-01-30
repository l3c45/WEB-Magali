import { render, screen } from '../utils/testUtils'
import '../__mock__/interseccionObserber'
import Footer from '../components/sections/Footer'


describe('Testing Footer Component', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('Should render author name ', () => {
    const text = 'Zarate Lucas'

    expect(screen.getByText(text)).toMatchSnapshot()
  })

  it('Should render actual year ', () => {
    const year = String(new Date().getFullYear())
    const span = screen.getByText(/copyright/i)

    expect(span).toContainHTML(year)
  })

  it('Shouldnt have animate__animated class  in initial render ', () => {
    const span = screen.getByText(/developed/i)

    expect(span).not.toHaveClass('animate__animated')
  })
})
