import type { RenderOptions } from '@testing-library/react-native'
import { render } from '@testing-library/react-native'
import React from 'react'
export * from '@testing-library/react-native'

import Provider from '../provider'

// jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)

const AllTheProviders: React.FC = ({ children }) => {
  return <Provider>{children}</Provider>
}

export const customRender = (
  component: React.ReactElement<any>,
  options?: RenderOptions,
) =>
  render(component, {
    wrapper: AllTheProviders,
    ...options,
  })

export const mockPlatform = (OS: string, version: number) => {
  jest.resetModules()
  jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
    OS,
    select: objs => objs[OS],
    Version: version || undefined,
  }))
}
