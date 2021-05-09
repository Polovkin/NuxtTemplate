export default function ({$device}) {
    $device.isTabletCustom = !$device.isDesktop && ($device.isTablet || window.innerWidth < 1200 && window.innerWidth >= 768)
}
