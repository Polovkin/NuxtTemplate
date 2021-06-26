export default function (context) {
  if (process.browser) {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    console.log('is IOS', isIOS)
  }

  // $device.isCustom = $device.userAgent.includes('Custom-Agent')
}

/*
export default function (ctx, inject) {
  const customIsTabet = ctx.isTablet || ctx.store.state.userAgent.includes('iPad')

  inject('device', {
    isTablet: customIsTabet,
    isMobile: ctx.isMobile,
    isMobileOrTablet: ctx.isMobileOrTablet,
    isDesktop: !ctx.isMobileOrTablet,
    isIos: ctx.isIos,
    isWindows: ctx.isWindows,
    isMacOS: ctx.isMacOS,
    isDesktopOrTablet: !ctx.isMobile,
    isAndroid: ctx.isMobileOrTablet && !ctx.isIos
  })
} */
