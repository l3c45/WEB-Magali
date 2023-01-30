// import { vi } from "vitest";


// const intersectionObserverMock = () => ({
//   observe: () => null,
//   disconnect: () => null,

// });
// window.IntersectionObserver = vi.fn().mockImplementation(intersectionObserverMock)
  



import { vi } from 'vitest'

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)


