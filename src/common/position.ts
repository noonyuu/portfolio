import { RefObject, useCallback } from 'react'

// 引数のtargetPropertyをDOMRectのもつPropertyに限定する
type DOMRectProperty = 'height' | 'width' | 'x' | 'y' | 'top' | 'right' | 'bottom' | 'left'

export const Position = <T extends HTMLElement>(elementRef: RefObject<T>) => {
  const getPosition = useCallback(
    (targetProperty: DOMRectProperty): number => {
      const clientRect = elementRef.current?.getBoundingClientRect()
      if (clientRect) {
        return clientRect[targetProperty]
      }

      // clientRectがundefinedのときはデフォルトで0を返すようにする
      return 0
    },
    [elementRef]
  )

  return {
    getPosition
  }
}
