export default function (ctx, inject) {
  if (process.browser) {
    const $device = ctx.$device;
    const NewTabletRule =
      /iPad|iPod/.test(navigator.platform) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) ||
      $device.isTablet;
    const newMobileOrTabletRule = $device.isMobileOrTablet || NewTabletRule;

    inject("device", {
      isTablet: NewTabletRule,
      isMobile: $device.isMobile,
      isMobileOrTablet: newMobileOrTabletRule,
      isDesktop: !newMobileOrTabletRule,
      isIos: $device.isIos,
      isWindows: $device.isWindows,
      isMacOS: $device.isMacOS,
      isDesktopOrTablet: !$device.isMobile || NewTabletRule,
      isAndroid: $device.isMobileOrTablet && !$device.isIos,
    });
  }
}
