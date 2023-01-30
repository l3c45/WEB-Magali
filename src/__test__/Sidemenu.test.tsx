import { fireEvent, render, screen } from '../utils/testUtils'

import SideMenu from '../components/SideMenu'
import { vi } from 'vitest'

describe('Testing SideMenu Component', () => {
  beforeEach(() => {
    render(<SideMenu toggle={vi.fn()} />)
  })

  it('Shouldnt have a navbar element ', () => {
    expect(screen.queryByRole('navigation')).toBeUndefined
  })
})
