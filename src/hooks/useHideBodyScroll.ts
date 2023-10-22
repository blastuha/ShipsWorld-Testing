import { useEffect } from 'react'

export const useHideBodyScroll = (isMobileOpen: boolean) => {
  useEffect(() => {
    const bodyStyle = document.body.style
    if (isMobileOpen) {
      bodyStyle.overflow = 'hidden'
    } else {
      bodyStyle.overflow = 'scroll'
    }
  }, [isMobileOpen])
}
