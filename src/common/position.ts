import { RefObject, useCallback } from 'react'

// 引数のtargetProperty をDOMRectのもつPropertyに限定する
type DOMRectProperty = 'height' | 'width' | 'x' | 'y' | 'top' | 'right' | 'bottom' | 'left'

export const Position = <T extends HTMLElement>(elementRef: RefObject<T>) => {
  const getPosition = useCallback(
    (targetProperty: DOMRectProperty): number => {
      const clientRect = elementRef.current?.getBoundingClientRect()
      if (clientRect) {
        return clientRect[targetProperty]
      }

      // clientRectがundefinedのときはデフォルトで0を返すようにする
      console.warn('Element reference is null or undefined. Returning default value of 0.')
      return 0
    },
    [elementRef]
  )

  return {
    getPosition
  }
}

export const PositionCard = <T extends HTMLElement>(elementRef: RefObject<T>) => {
  const getPositionCard = useCallback(
    (targetProperty: DOMRectProperty): number => {
      const clientRect = elementRef.current?.getBoundingClientRect()
      if (clientRect) {
        return clientRect[targetProperty]
      }

      // clientRectがundefinedのときはデフォルトで0を返すようにする
      console.warn('Element reference is null or undefined. Returning default value of 0.')
      return 0
    },
    [elementRef]
  )

  return {
    getPositionCard
  }
}
