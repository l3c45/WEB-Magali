import { act, renderHook } from '../../utils/testUtils'

import useMenu from '../../hooks/useMenu'

describe('testing useMenu hook', () => {
  it('Check initial value of hook', () => {
    const { result } = renderHook(() => useMenu())

    expect(result.current.isOpenMenu).toBe(false)
    expect(result.current.handleMenu).toBeInstanceOf(Function)
  })
})

it('handleMenu changue value ', () => {
  const { result } = renderHook(() => useMenu())

  expect(result.current.isOpenMenu).toBe(false)

  act(() => {
    result.current.handleMenu()
  })

  expect(result.current.isOpenMenu).toBe(true)

  act(() => {
    result.current.handleMenu()
  })

  expect(result.current.isOpenMenu).toBe(false)
})

it("check if after unmount and rerender hook, value is default", () => {
  const { result, unmount ,rerender} = renderHook(() => useMenu())

  expect(result.current.isOpenMenu).toBe(false)

  act(() => {
      result.current.handleMenu()
  })

  expect(result.current.isOpenMenu).toBe(true)

  unmount()


  const { result:result2 } = renderHook(() => useMenu())

  expect(result2.current.isOpenMenu).toBe(false)
})