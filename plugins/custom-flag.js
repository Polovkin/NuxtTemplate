export default function ({ $device }) {
    $device.isTabletCustom = window.innerWidth < 1200 && window.innerWidth >=768
}
