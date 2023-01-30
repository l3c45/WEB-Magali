import {  fireEvent } from '../../utils/testUtils'
import {   renderHook } from "@testing-library/react-hooks"

import useNav from '../../hooks/useNav'

describe('testing useNav hook', () => {
  it('Check initial value of hook and move scrool down and up', () => {
    const { result } = renderHook(() => useNav())

    expect(result.current[0]).toBe(true)

    fireEvent.scroll(window, { target: { scrollY: 100 } })

    expect(result.current[0]).toBe(false)

    fireEvent.scroll(window, { target: { scrollY: 90 } })
    expect(result.current[0]).toBe(true)
  })

})
