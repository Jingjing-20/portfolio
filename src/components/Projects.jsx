const externalLinkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.2em] text-gray-500" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5" /></svg>
)

const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.1em]" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" /></svg>
)

const chevronLeftIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.2em]" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 18l-6-6l6-6" /></svg>
)

const chevronRightIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.2em]" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 18l6-6l-6-6" /></svg>
)

const techIcons = {
  QR: (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.35em]" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 7V2h5v2H4v3zm0 15v-5h2v3h3v2zm15 0v-2h3v-3h2v5zm3-15V4h-3V2h5v5zm-2.5 10.5H19V19h-1.5zm0-3H19V16h-1.5zM16 16h1.5v1.5H16zm-1.5 1.5H16V19h-1.5zM13 16h1.5v1.5H13zm3-3h1.5v1.5H16zm-1.5 1.5H16V16h-1.5zM13 13h1.5v1.5H13zm6-8v6h-6V5zm-8 8v6H5v-6zm0-8v6H5V5zM9.5 17.5v-3h-3v3zm0-8v-3h-3v3zm8 0v-3h-3v3z" /></svg>
  ),
  PHP: (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.35em]" width="1em" height="1em" viewBox="0 0 128 128"><path fill="url(#SVGC9rnueOH)" d="M0 64c0 18.593 28.654 33.667 64 33.667S128 82.593 128 64S99.345 30.333 64 30.333S0 45.407 0 64" /><path fill="#777bb3" d="M64 95.167c33.965 0 61.5-13.955 61.5-31.167c0-17.214-27.535-31.167-61.5-31.167S2.5 46.786 2.5 64c0 17.212 27.535 31.167 61.5 31.167" /><path d="M34.772 67.864c2.793 0 4.877-.515 6.196-1.53c1.306-1.006 2.207-2.747 2.68-5.175c.44-2.27.272-3.854-.5-4.71c-.788-.874-2.493-1.317-5.067-1.317h-4.464l-2.473 12.732zM20.173 83.547a.694.694 0 0 1-.68-.828l6.557-33.738a.695.695 0 0 1 .68-.561h14.134c4.442 0 7.748 1.206 9.827 3.585c2.088 2.39 2.734 5.734 1.917 9.935c-.333 1.711-.905 3.3-1.7 4.724a15.8 15.8 0 0 1-3.128 3.92c-1.531 1.432-3.264 2.472-5.147 3.083c-1.852.604-4.232.91-7.07.91h-5.724l-1.634 8.408a.695.695 0 0 1-.682.562z" /><path fill="#fff" d="M34.19 55.826h3.891c3.107 0 4.186.682 4.553 1.089c.607.674.723 2.097.331 4.112c-.439 2.257-1.253 3.858-2.42 4.756c-1.194.92-3.138 1.386-5.773 1.386h-2.786zm6.674-8.1H26.731a1.39 1.39 0 0 0-1.364 1.123L18.81 82.588a1.39 1.39 0 0 0 1.363 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.151c2.912 0 5.364-.318 7.287-.944c1.977-.642 3.796-1.731 5.406-3.237a16.5 16.5 0 0 0 3.259-4.087c.831-1.487 1.429-3.147 1.775-4.931c.86-4.423.161-7.964-2.076-10.524c-2.216-2.537-5.698-3.823-10.349-3.823zM30.301 68.557h4.471q4.445.001 6.62-1.675q2.175-1.674 2.938-5.591q.728-3.762-.665-5.308q-1.395-1.546-5.584-1.546h-5.036l-2.743 14.12m10.563-19.445q6.378 0 9.303 3.348t1.76 9.346q-.482 2.472-1.625 4.518q-1.145 2.048-2.991 3.747q-2.2 2.06-4.892 2.935q-2.691.876-6.857.875h-6.296l-1.743 8.97h-7.35l6.558-33.739z" /><path d="M69.459 74.577a.694.694 0 0 1-.682-.827l2.9-14.928c.277-1.42.209-2.438-.19-2.87c-.245-.263-.979-.704-3.15-.704h-5.256l-3.646 18.768a.695.695 0 0 1-.683.56h-7.29a.695.695 0 0 1-.683-.826l6.558-33.739a.695.695 0 0 1 .682-.561h7.29a.695.695 0 0 1 .683.826L64.41 48.42h5.653c4.307 0 7.227.758 8.928 2.321c1.733 1.593 2.275 4.14 1.608 7.573l-3.051 15.702a.695.695 0 0 1-.682.56z" /><path fill="#fff" d="M65.31 38.755h-7.291a1.39 1.39 0 0 0-1.364 1.124l-6.557 33.738a1.39 1.39 0 0 0 1.363 1.654h7.291a1.39 1.39 0 0 0 1.364-1.124l3.537-18.205h4.682c2.168 0 2.624.463 2.641.484c.132.14.305.795.019 2.264l-2.9 14.927a1.39 1.39 0 0 0 1.364 1.654h7.408a1.39 1.39 0 0 0 1.363-1.124l3.051-15.7c.715-3.686.103-6.45-1.82-8.217c-1.836-1.686-4.91-2.505-9.398-2.505h-4.81l1.421-7.315a1.39 1.39 0 0 0-1.364-1.655m0 1.39l-1.743 8.968h6.496q6.131 0 8.457 2.14q2.328 2.138 1.398 6.93l-3.052 15.699h-7.407l2.901-14.928q.495-2.547-.365-3.474q-.86-.926-3.658-.926h-5.829l-3.756 19.327H51.46l6.558-33.739h7.292z" /><path d="M92.136 67.864c2.793 0 4.878-.515 6.198-1.53c1.304-1.006 2.206-2.747 2.679-5.175c.44-2.27.273-3.854-.5-4.71c-.788-.874-2.493-1.317-5.067-1.317h-4.463l-2.475 12.732zM77.54 83.547a.694.694 0 0 1-.682-.828l6.557-33.738a.695.695 0 0 1 .682-.561H98.23c4.442 0 7.748 1.206 9.826 3.585c2.089 2.39 2.734 5.734 1.917 9.935a15.9 15.9 0 0 1-1.699 4.724a15.8 15.8 0 0 1-3.128 3.92c-1.53 1.432-3.265 2.472-5.147 3.083c-1.852.604-4.232.91-7.071.91h-5.723l-1.633 8.408a.695.695 0 0 1-.683.562z" /><path fill="#fff" d="M91.555 55.826h3.891c3.107 0 4.186.682 4.552 1.089c.61.674.724 2.097.333 4.112c-.44 2.257-1.254 3.858-2.421 4.756c-1.195.92-3.139 1.386-5.773 1.386h-2.786zm6.674-8.1H84.096a1.39 1.39 0 0 0-1.363 1.123l-6.558 33.739a1.39 1.39 0 0 0 1.364 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.15c2.911 0 5.364-.318 7.286-.944c1.978-.642 3.797-1.731 5.408-3.238a16.5 16.5 0 0 0 3.258-4.086c.832-1.487 1.428-3.147 1.775-4.931c.86-4.423.162-7.964-2.076-10.524c-2.216-2.537-5.697-3.823-10.35-3.823zM87.666 68.557h4.47q4.445.001 6.622-1.675q2.175-1.674 2.936-5.591q.731-3.762-.665-5.308t-5.583-1.546h-5.035Zm10.563-19.445q6.378 0 9.303 3.348t1.759 9.346q-.48 2.472-1.624 4.518q-1.144 2.048-2.992 3.747q-2.2 2.06-4.892 2.935q-2.69.876-6.856.875h-6.295l-1.745 8.97h-7.35l6.558-33.739h14.133" /><defs><radialGradient id="SVGC9rnueOH" cx="0" cy="0" r="1" gradientTransform="translate(38.426 42.169)scale(84.04136)" gradientUnits="userSpaceOnUse"><stop stop-color="#aeb2d5" /><stop offset=".3" stop-color="#aeb2d5" /><stop offset=".75" stop-color="#484c89" /><stop offset="1" stop-color="#484c89" /></radialGradient></defs></svg>
  ),
  JavaScript: (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.35em]" width="1em" height="1em" viewBox="0 0 256 256"><rect width="256" height="256" fill="#f0db4f" rx="60" /><path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" /></svg>
  ),
  jQuery: (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.35em]" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#0868ac" d="M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759l.246.437l.439.786q.393.691.804 1.379l.459.756q.456.735.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05l.228.308q.603.83 1.232 1.639l.464.59q.56.703 1.138 1.399l.435.52a75 75 0 0 0 1.586 1.812l.033.033l.061.068a80 80 0 0 0 1.612 1.699l.517.521q.635.638 1.287 1.262l.527.5q.869.82 1.764 1.607l.028.022l.307.262q.792.686 1.603 1.353l.664.529q.662.531 1.336 1.044l.714.543q.744.548 1.499 1.075l.546.387l.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355q.847.49 1.71.959c.312.168.632.327.946.488c.407.213.811.429 1.225.636l.283.137l.501.242q.961.46 1.94.897l.41.184a67 67 0 0 0 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693c53.339 9.727 68.833-32.053 68.833-32.053c-13.013 16.953-36.111 21.425-57.996 16.446c-.829-.187-1.633-.446-2.442-.685l-.609-.185a73 73 0 0 1-2.352-.765l-.323-.117a72 72 0 0 1-2.074-.769l-.582-.229q-1.13-.445-2.239-.931l-.447-.198a93 93 0 0 1-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743c-.324-.171-.654-.332-.975-.51a59 59 0 0 1-1.751-.982l-.591-.33a81 81 0 0 1-2.28-1.397l-.615-.41a59 59 0 0 1-1.623-1.079l-.522-.367a89 89 0 0 1-1.534-1.109l-.679-.514a65 65 0 0 1-1.384-1.082l-.617-.495a83 83 0 0 1-1.724-1.453l-.189-.159a84 84 0 0 1-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a71 71 0 0 1-1.598-1.69l-.079-.084a67 67 0 0 1-1.621-1.844l-.424-.504a71 71 0 0 1-1.167-1.442l-.427-.532a78 78 0 0 1-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a51 51 0 0 0 3.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48 48 0 0 0 1.79 1.858l.472.465a52 52 0 0 0 1.828 1.698l.074.064l.018.018a55 55 0 0 0 2.135 1.767l.485.378a54 54 0 0 0 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319q.816.525 1.655 1.015l.235.136q.726.418 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672c41.183 6.823 50.691-24.886 50.691-24.886c-8.57 12.343-25.168 18.233-42.879 13.635a50 50 0 0 1-2.333-.674l-.701-.227a45 45 0 0 1-1.631-.562l-.736-.274a56 56 0 0 1-1.756-.708l-.473-.2a48 48 0 0 1-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a45 45 0 0 1-1.363-.77l-.326-.185a48 48 0 0 1-1.651-1.008l-.498-.332a62 62 0 0 1-1.069-.707a58 58 0 0 1-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971c-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156c3.441 8.113 10.491 14.476 18.72 17.495c.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424c22.74 4.394 28.908-11.669 30.549-14.034c-5.402 7.779-14.482 9.646-25.623 6.942c-.88-.213-1.847-.531-2.695-.832a33 33 0 0 1-3.201-1.329a33 33 0 0 1-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745" /></svg>),
  Laravel: (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.35em]" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#ff5252" d="M31.963 9.12c-.008-.03-.023-.056-.034-.085a1 1 0 0 0-.07-.156a2 2 0 0 0-.162-.205a1 1 0 0 0-.088-.072a1 1 0 0 0-.083-.068l-.044-.02l-.035-.024l-6-3a1 1 0 0 0-.894 0l-6 3l-.035.024l-.044.02a1 1 0 0 0-.083.068a.7.7 0 0 0-.187.191a1 1 0 0 0-.064.086a1 1 0 0 0-.069.156c-.01.029-.026.055-.034.085a1 1 0 0 0-.037.265v5.382l-4 2V5.385a1 1 0 0 0-.037-.265c-.008-.03-.023-.056-.034-.085a1 1 0 0 0-.07-.156a1 1 0 0 0-.063-.086a.7.7 0 0 0-.187-.191a1 1 0 0 0-.083-.068l-.044-.02l-.035-.024l-6-3a1 1 0 0 0-.894 0l-6 3l-.035.024l-.044.02a1 1 0 0 0-.083.068a1 1 0 0 0-.088.072a1 1 0 0 0-.1.119a1 1 0 0 0-.063.086a1 1 0 0 0-.069.156c-.01.029-.026.055-.034.085A1 1 0 0 0 0 5.385v19a1 1 0 0 0 .553.894l6 3l6 3c.014.007.03.005.046.011a.9.9 0 0 0 .802 0c.015-.006.032-.004.046-.01l12-6a1 1 0 0 0 .553-.895v-5.382l5.447-2.724a1 1 0 0 0 .553-.894v-6a1 1 0 0 0-.037-.265M9.236 21.385l4.211-2.106h.001L19 16.503l3.764 1.882L13 23.267ZM24 13.003v3.764l-4-2v-3.764Zm1-5.5l3.764 1.882L25 11.267l-3.764-1.882ZM8 19.767V9.003l4-2v10.764ZM7 3.503l3.764 1.882L7 7.267L3.236 5.385Zm-5 3.5l4 2v16.764l-4-2Zm6 16l4 2v3.764l-4-2Zm16 .764l-10 5v-3.764l10-5Zm6-9l-4 2v-3.764l4-2Z" /></svg>
  ),
  React: (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.35em]" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#00bcd4" d="M16 12c7.444 0 12 2.59 12 4s-4.556 4-12 4s-12-2.59-12-4s4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6s14-2.686 14-6s-6.268-6-14-6" /><path fill="#00bcd4" d="M16 14a2 2 0 1 0 2 2a2 2 0 0 0-2-2" /><path fill="#00bcd4" d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493c3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124c-3.284-5.69-7.72-9.493-10.74-9.493Z" /><path fill="#00bcd4" d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393c-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 9 28.124a2.87 2.87 0 0 0 1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369" /></svg>
  ),
  'Tailwind CSS': (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.35em]" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#44a8b3" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1" /></svg>
  ),
  MySQL: (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.35em]" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#00618a" d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379c-1.293.547-3.355.559-3.566 2.18c.711.746.82 1.859 1.387 2.777c1.086 1.754 2.922 4.113 4.559 5.352c1.789 1.348 3.633 2.793 5.551 3.961c3.414 2.082 7.223 3.27 10.504 5.352c1.938 1.23 3.859 2.777 5.75 4.164c.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719c-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391c2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152c-4.441-3.781-9.285-7.555-14.273-10.703c-2.766-1.746-6.184-2.883-9.117-4.363c-.988-.496-2.719-.758-3.371-1.586c-1.539-1.961-2.379-4.449-3.566-6.738c-2.488-4.793-4.93-10.023-7.137-15.066c-1.504-3.437-2.484-6.828-4.359-9.91c-9-14.797-18.687-23.73-33.695-32.508c-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672C-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539c.688 1.492.805 2.984 1.391 4.559c1.438 3.883 2.695 8.109 4.559 11.695c.941 1.816 1.98 3.727 3.172 5.352c.727.996 1.98 1.438 2.18 2.973c-1.227 1.715-1.297 4.375-1.984 6.543c-3.098 9.77-1.926 21.91 2.578 29.137c1.383 2.223 4.641 6.98 9.117 5.156c3.918-1.598 3.043-6.539 4.164-10.902c.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699c2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781c-1.551-1.523-3.277-3.414-4.559-5.156c-3.613-4.902-6.805-10.27-9.711-15.855c-1.391-2.668-2.598-5.609-3.77-8.324c-.453-1.047-.445-2.633-1.387-3.172c-1.281 1.988-3.172 3.598-4.164 5.945c-1.582 3.754-1.789 8.336-2.375 13.082c-.348.125-.195.039-.398.199c-2.762-.668-3.73-3.508-4.758-5.949c-2.594-6.164-3.078-16.09-.793-23.191c.59-1.836 3.262-7.617 2.18-9.316c-.516-1.691-2.219-2.672-3.172-3.965c-1.18-1.598-2.355-3.703-3.172-5.551c-2.125-4.805-3.113-10.203-5.352-15.062c-1.07-2.324-2.875-4.676-4.359-6.738c-1.645-2.289-3.484-3.977-4.758-6.742c-.453-.984-1.066-2.559-.398-3.566c.215-.684.516-.969 1.191-1.191c1.148-.887 4.352.297 5.547.793c3.18 1.32 5.832 2.578 8.527 4.363c1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988c4.609 1.402 8.738 3.582 12.488 5.949c11.422 7.215 20.766 17.48 27.156 29.734c1.027 1.973 1.473 3.852 2.379 5.945c1.824 4.219 4.125 8.559 5.941 12.688c1.816 4.113 3.582 8.27 6.148 11.695c1.348 1.801 6.551 2.766 8.918 3.766c1.66.699 4.379 1.43 5.949 2.379c3 1.809 5.906 3.965 8.723 5.945c1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164l.199-.195c1.227-.867 1.789-2.25 1.781-4.363c-.492-.52-.562-1.164-.992-1.785c-.562-.824-1.66-1.289-2.375-1.98zm0 0" /></svg>
  ),
  Leaflet: (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-[1.35em]" width="0.9em" height="1em" viewBox="0 0 460 512"><path fill="#2cb109" d="M156.483 498.57c-28.154 26.468-77.292 11.408-108.562-24.176C6.4 427.148-8.631 337.668 4.754 257.873zm32.732-30.512c-18.228-7.747-91.458-45.553-62.463-179.76C80.302 257.764 13.644 234.8 9.378 229.82c0 0 .174 8.073-1.962 23.902l157.637 235.35c3.916-7.718 14.3-13.878 24.162-21.014m-49.786-79.579c15.543 51.182 43.043 57.232 63.315 69.89L408.585 17.992h2.435L219.913 472.995c19.381 18.274 45.235 36.647 84.038 27.902C463.908 472.324 500.428 214.25 413.902 0C312.147 69.794 235.998 107.428 186.32 181.314c-38.638 57.467-68.612 138.396-46.891 207.165" /></svg>
  ),
}

function TechIcon({ tech }) {
  return (
    <span className="tooltip tooltip-top font-bold" data-tip={tech}>
      <span className="" aria-label={tech}>
        {techIcons[tech]}
      </span>
    </span>
  )
}

// Import all the project images
import chmsuIndexImg from '../assets/chmsuagrm/index.png'
import chmsuSigninFormImg from '../assets/chmsuagrm/signin form.png'
import chmsuDashboardImg from '../assets/chmsuagrm/dashboard.png'
import chmsuEnrollmentRequestImg from '../assets/chmsuagrm/enrollment request.png'
import chmsuEnrollmentsImg from '../assets/chmsuagrm/enrollments.png'
import chmsuStudentsImg from '../assets/chmsuagrm/students.png'
import chmsuFacultiesImg from '../assets/chmsuagrm/faculties.png'
import chmsuDepartmentsImg from '../assets/chmsuagrm/departments.png'
import chmsuProgramsImg from '../assets/chmsuagrm/programs.png'
import chmsuCoursesImg from '../assets/chmsuagrm/courses.png'
import chmsuSectionsImg from '../assets/chmsuagrm/sections.png'
import chmsuPositionsImg from '../assets/chmsuagrm/positions .png'
import chmsuPeriodsImg from '../assets/chmsuagrm/periods.png'
import chmsuGradeComponentsImg from '../assets/chmsuagrm/grade components.png'
import chmsuAssignedClassImg from '../assets/chmsuagrm/assigned class.png'
import chmsuClassAssessmentsImg from '../assets/chmsuagrm/class assessments.png'
import chmsuClassExamsImg from '../assets/chmsuagrm/class exams.png'
import chmsuClassParticipationsImg from '../assets/chmsuagrm/class participations.png'
import chmsuClassProjectsImg from '../assets/chmsuagrm/class projects.png'
import chmsuClassTermGradesImg from '../assets/chmsuagrm/class term grades.png'
import chmsuClassGradeBreakdownsImg from '../assets/chmsuagrm/class grade breakdowns.png'
import chmsuStudentAssessmentBreakdownImg from '../assets/chmsuagrm/student assessment breakdown.png'
import chmsuStudentExamsBreakdownImg from '../assets/chmsuagrm/student exams breakdown.png'
import chmsuStudentParticipationBreakdownImg from '../assets/chmsuagrm/student participation breakdown.png'
import chmsuStudentProjectsBreakdownImg from '../assets/chmsuagrm/student projects breakdown.png'
import chmsuStudentTermGradesBreakdownImg from '../assets/chmsuagrm/student term grades breakdown.png'
import chmsuStudentQrImg from '../assets/chmsuagrm/student qr.png'
import chmsuProfileImg from '../assets/chmsuagrm/profile.png'
import homePageImg from '../assets/pgsoulpmms/Home page.jpg'
import lotSigninImg from '../assets/pgsoulpmms/Lot Signin Page.jpg'
import propertySigninImg from '../assets/pgsoulpmms/Property Signin Page.jpg'
import interactiveMappingImg from '../assets/pgsoulpmms/Interactive Mapping.jpg'
import detailsMonitoringImg from '../assets/pgsoulpmms/Details Monitoring.jpg'
import centralizedOversightImg from '../assets/pgsoulpmms/Centralized Oversight.jpg'
import financialAdminImg from '../assets/pgsoulpmms/Financial Administration.jpg'
import documentRepoImg from '../assets/pgsoulpmms/Document Repository.jpg'
import spatialTrackingImg from '../assets/pgsoulpmms/Spatial Tracking.jpg'
import localityInsightsImg from '../assets/pgsoulpmms/Locality Insights.jpg'
import unifiedFilingImg from '../assets/pgsoulpmms/Unified Filing.jpg'
import assetControlImg from '../assets/pgsoulpmms/Asset Control.jpg'

export default function Projects() {
  const sectionExtra = {
    label: 'Impact',
    title: 'Systems in active use',
    detail: 'Deployed platforms serve CHMSU Alijis and the Provincial General Services Office in Negros Occidental.',
  }

  const recentProjectsData = [
    {
      id: 'project-chmsu-agrm',
      year: '2025',
      beneficiary: 'Carlos Hilado Memorial State University - Alijis',
      title:
        'Integrated Online Platform for Academic Grade and Report Management',
      summary:
        'Role-based academic platform for administrators, faculty, and students with enrollment, grade management, QR attendance, automated emails, and PDF/Excel reporting.',
      description:
        'A comprehensive academic management system built to centralize and streamline institutional data.',
      details: [
        'Created an academic management system for Carlos Hilado Memorial State University.',
        'Built separate dashboards for administrators, faculty, and students.',
        'Managed student, faculty, enrollment, program, and section records.',
        'Reduced manual grading by adding automatic grade computation.',
        'Allowed students to check grades and enrollment status online.',
        'Used QR codes to make attendance recording faster and easier.',
        'Sent email notifications for account verification and password recovery.',
        'Generated PDF and Excel reports for school records.',
      ],
      images: [
        { src: chmsuIndexImg, alt: 'Index Page' },
        { src: chmsuSigninFormImg, alt: 'Signin Form' },
        { src: chmsuDashboardImg, alt: 'Dashboard' },
        { src: chmsuEnrollmentRequestImg, alt: 'Enrollment Request' },
        { src: chmsuEnrollmentsImg, alt: 'Enrollments' },
        { src: chmsuStudentsImg, alt: 'Students' },
        { src: chmsuFacultiesImg, alt: 'Faculties' },
        { src: chmsuDepartmentsImg, alt: 'Departments' },
        { src: chmsuProgramsImg, alt: 'Programs' },
        { src: chmsuCoursesImg, alt: 'Courses' },
        { src: chmsuSectionsImg, alt: 'Sections' },
        { src: chmsuPositionsImg, alt: 'Positions' },
        { src: chmsuPeriodsImg, alt: 'Periods' },
        { src: chmsuGradeComponentsImg, alt: 'Grade Components' },
        { src: chmsuAssignedClassImg, alt: 'Assigned Class' },
        { src: chmsuClassAssessmentsImg, alt: 'Class Assessments' },
        { src: chmsuClassExamsImg, alt: 'Class Exams' },
        { src: chmsuClassParticipationsImg, alt: 'Class Participations' },
        { src: chmsuClassProjectsImg, alt: 'Class Projects' },
        { src: chmsuClassTermGradesImg, alt: 'Class Term Grades' },
        { src: chmsuClassGradeBreakdownsImg, alt: 'Class Grade Breakdowns' },
        { src: chmsuStudentAssessmentBreakdownImg, alt: 'Student Assessment Breakdown' },
        { src: chmsuStudentExamsBreakdownImg, alt: 'Student Exams Breakdown' },
        { src: chmsuStudentParticipationBreakdownImg, alt: 'Student Participation Breakdown' },
        { src: chmsuStudentProjectsBreakdownImg, alt: 'Student Projects Breakdown' },
        { src: chmsuStudentTermGradesBreakdownImg, alt: 'Student Term Grades Breakdown' },
        { src: chmsuStudentQrImg, alt: 'Student QR' },
        { src: chmsuProfileImg, alt: 'Profile' },
      ],
      techStack: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'jQuery', 'QR']
    },
    {
      id: 'project-pgso-ulpmms',
      year: '2026',
      beneficiary:
        'Provincial Government of Negros Occidental (General Services Office - Property Management Division)',
      title:
        'Unified Lot and Property Management and Monitoring ',
      summary:
        'Provincial lot and property system with awardee tracking, payments, document management, Leaflet map plotting, dashboard analytics, and Excel import/export.',
      description:
        'A provincial-scale digital platform developed to manage and monitor government housing lots and property assets.',
      details: [
        'Developed a digital platform for managing government housing lots and property assets.',
        'Built separate modules for lot management and property management.',
        'Tracked beneficiaries, lot assignments, and payment records.',
        'Added document management and duplicate transaction checking.',
        'Used Leaflet.js to display lot boundaries and property locations.',
        'Created dashboards with charts and real-time statistics.',
        'Supported bulk operations through Excel import and export features.',
        'Generated print-ready reports for official records.',
      ],
      images: [
        { src: homePageImg, alt: 'Home Page', description: 'Main landing page displaying both Lot and Property Management overview' },
        { src: lotSigninImg, alt: 'Lot Signin Page', description: 'Page used to access lot management system' },
        { src: propertySigninImg, alt: 'Property Signin Page', description: 'Page used to access property management system' },
        { src: interactiveMappingImg, alt: 'Interactive Mapping', description: 'View all provincial lots on an interactive map. Track boundaries and check real-time status easily.' },
        { src: detailsMonitoringImg, alt: 'Details Monitoring', description: 'Access clear summaries of all your lot data. Make better management decisions using detailed area reports.' },
        { src: centralizedOversightImg, alt: 'Centralized Oversight', description: 'Keep all lot records in one secure place. Manage ownership and update status information with speed.' },
        { src: financialAdminImg, alt: 'Financial Administration', description: 'Track lot payments and transaction history. Monitor balances and upcoming due dates automatically in the system.' },
        { src: documentRepoImg, alt: 'Document Repository', description: 'Safe storage for all your land documents. Scan, organize, and find your files whenever needed.' },
        { src: spatialTrackingImg, alt: 'Spatial Tracking', description: 'Map all provincial properties in detail. See exact locations and track property boundaries clearly on the screen.' },
        { src: localityInsightsImg, alt: 'Locality Insights', description: 'Get quick summaries for each property location. View your asset data organized efficiently by specific area.' },
        { src: unifiedFilingImg, alt: 'Unified Filing', description: 'Organize all property documents in a central vault. Keep your records safe, secure, and easy to search.' },
        { src: assetControlImg, alt: 'Asset Control', description: 'Monitor current conditions, usage, and maintenance status from one dashboard.' }
      ],
      techStack: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Leaflet']
    },
  ]

  const otherProjects = [
    {
      id: 'project-volunteering',
      title: 'Volunteering Management ',
      summary:
        'Platform for coordinating volunteer registrations, event assignments, hour tracking, and activity reporting.',
      description:
        'A web-based volunteering management system designed to streamline how organizations recruit, assign, and track volunteers. Administrators can publish events, manage volunteer profiles, and monitor participation hours. Volunteers can register for activities, view schedules, and receive updates on upcoming opportunities. The system centralizes attendance records and generates reports for institutional or community service documentation.',
    },
    {
      id: 'project-qr-memorandum',
      title: 'QR-Code Based Memorandum Distribution ',
      summary:
        'Digital memorandum distribution with QR verification for secure document access and acknowledgment tracking.',
      description:
        'A memorandum distribution system that replaces manual paper circulation with QR-code enabled digital documents. Administrators upload official memos and generate unique QR codes for each release. Recipients scan the code to view the document, confirm receipt, and access related attachments. The platform logs distribution status and read confirmations, improving accountability and reducing delays in internal communications.',
    },
    {
      id: 'project-capstone-archive',
      title: 'Capstone Archive Management ',
      summary:
        'Archive and retrieval system for capstone projects with metadata search, file uploads, and role-based access.',
      description:
        'An archive management system built to preserve and organize capstone project submissions from students and researchers. Users can upload project files, abstracts, and metadata such as course, year, and keywords. Faculty and administrators can review entries, approve submissions, and manage access permissions. A search and filter module helps users quickly find relevant past projects for reference or academic review.',
    },
    {
      id: 'project-patient-appointment',
      title: 'Patient Appointment ',
      summary:
        'Clinic scheduling system with patient registration, doctor availability, appointment booking, and status tracking.',
      description:
        'A patient appointment system developed to simplify clinic scheduling and reduce manual booking errors. Patients can register profiles, browse available time slots, and book appointments with assigned practitioners. Staff can manage schedules, update appointment statuses, and view daily queues from a centralized dashboard. The system supports reminders and basic record keeping to improve clinic workflow and patient experience.',
    },
  ]

  return (
    <section id="recent-projects" className="scroll-mt-24">
      {/* Header */}
      <header>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-shadow-lg uppercase text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none">
            <span className="md:hidden">
              Recent <span className="text-gray-500">Projects</span>
            </span>
            <span className="hidden md:block">
              Recent
              <br />
              <span className="text-gray-500">Projects</span>
            </span>
          </h2>
          <span className="shadow-xl badge badge-outline badge-sm text-gray-400 font-extrabold border-gray-400 shrink-0 mt-1 kbd kbd-sm md:kbd-md" aria-hidden="true">
            03
          </span>
        </div>
        <p className="mt-2 text-xs md:text-sm text-gray-500 leading-relaxed max-w-lg">
          Deployed institutional systems plus academic builds that shaped my development workflow.
        </p>
        <hr className="mt-3 mb-3 border-dashed border-gray-500" />
      </header>

      {/* Body */}
      <div className="relative pl-4 md:pl-5 border-l border-gray-500 space-y-6">

        {/* Extra Impact Info */}
        <ul className="list rounded-box gap-3">
          <li className="border border-gray-300 hover:border-gray-400 list-row hover:bg-base-300 hover:shadow-2xl transition-all duration-300 items-start p-3 md:p-4 bg-white/50 rounded-box">
            <div className="min-w-0">
              <div className="shadow-xl bg-base-300 border border-gray-400 kbd font-extrabold text-[8px] md:text-[10px] uppercase opacity-60">{sectionExtra.label}</div>
              <div className="text-sm md:text-base font-bold">{sectionExtra.title}</div>
              <hr className="border border-gray-300 mt-1"></hr>
              <p className="mt-1 text-xs md:text-sm text-gray-600 leading-relaxed">{sectionExtra.detail}</p>
            </div>
          </li>
        </ul>

        {/* Deployed Projects Section */}
        <div>
          <ul className="list rounded-box gap-3">
            {recentProjectsData.map((project) => (
              <li key={project.id} className="border border-gray-300 hover:border-gray-400 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 p-3 md:p-4 bg-white/50 rounded-box">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-bold text-xs md:text-sm">
                      {project.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-square border hover:border-gray-400 tooltip tooltip-top font-bold shrink-0"
                    data-tip="See more"
                    aria-label={`View ${project.title} details`}
                    onClick={() => document.getElementById(project.id).showModal()}
                  >
                    {externalLinkIcon}
                  </button>
                </div>

                <hr className="mt-3 mb-3 border-gray-400" />

                <div className="text-xs md:text-sm flex flex-wrap gap-1.5 mb-3">
                  <span className="kbd kbd-xs md:kbd-sm font-medium">{project.year}</span>
                  <span className="kbd kbd-xs md:kbd-sm font-medium">Deployed</span>
                </div>

                <p className="text-[10px] md:text-xs font-bold text-gray-900 mb-3">
                  {project.beneficiary}
                </p>

                <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed">{project.summary}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Academic Projects Section */}
        <div>
          <p className="shadow-xl bg-base-300 border border-gray-400 kbd font-extrabold text-[8px] md:text-[10px] uppercase mb-3">Others:</p>
          <ul className="list rounded-box gap-3">
            {otherProjects.map((project) => (
              <li key={project.id} className="border border-gray-300 hover:border-gray-400 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 p-3 md:p-4 bg-white/50 rounded-box">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-bold text-xs md:text-sm text-neutral-800">{project.title}</h3>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-square border hover:border-gray-400 tooltip tooltip-top font-bold shrink-0"
                    data-tip="See more"
                    aria-label={`View ${project.title} details`}
                    onClick={() => document.getElementById(project.id).showModal()}
                  >
                    {externalLinkIcon}
                  </button>
                </div>

                <hr className="mt-3 mb-3 border-gray-400" />

                <div className="text-xs md:text-sm flex flex-wrap gap-1.5 mb-3">
                  <span className="kbd kbd-xs md:kbd-sm font-medium">Academic</span>
                </div>

                <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed">{project.summary}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Section Meta */}
        <p className="mt-4 text-[10px] uppercase tracking-wide font-semibold text-gray-400 text-right">
          {recentProjectsData.length} deployed · {otherProjects.length} academic ·{' '}
          {recentProjectsData.length + otherProjects.length} total
        </p>

        {/* Project Detail Modals */}
        {recentProjectsData.map((project) => (
          <dialog key={`${project.id}-modal`} id={project.id} className="modal">
            <div className="modal-box max-w-3xl max-h-[80vh] overflow-y-auto border border-gray-300 hover:border-gray-400 bg-white/95 backdrop-blur-sm rounded-box p-0 shadow-2xl">
              <form method="dialog">
                <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-white/80 hover:bg-white hover:border-gray-300 border" aria-label="Close modal">
                  {closeIcon}
                </button>
              </form>

              <div className="p-6 pb-0">
                <div className="min-w-0 space-y-1 pr-10">
                  <h3 className="font-bold text-sm md:text-base text-neutral-800">
                    {project.title}
                  </h3>
                </div>

                <hr className="mt-3 mb-3 border-gray-400" />

                <div className="text-xs md:text-sm flex flex-wrap gap-1.5 mb-3">
                  <span className="kbd kbd-xs md:kbd-sm font-medium">{project.year}</span>
                  <span className="kbd kbd-xs md:kbd-sm font-medium">Deployed</span>
                </div>

                <p className="text-[10px] md:text-xs font-bold text-gray-900 mb-3">
                  {project.beneficiary}
                </p>
              </div>

              <div className="p-6 pt-0">
                <div className="mb-5 space-y-3">
                  <p className="text-xs md:text-sm leading-relaxed text-gray-700">{project.description}</p>
                  {project.details && project.details.length > 0 && (
                    <ul className="list-disc list-inside text-xs md:text-sm leading-relaxed text-gray-700 space-y-1">
                      {project.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {project.images && project.images.length > 0 && (
                  <div className="mb-3">
                    <hr className="mt-3 mb-3 border-gray-400" />
                    <div className="carousel w-full rounded-box overflow-hidden border border-gray-300 bg-base-100">
                      {project.images.map((img, idx) => (
                        <div id={`${project.id}-img${idx}`} key={idx} className="carousel-item relative w-full flex-col border border-gray-400">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-64 md:h-96 object-contain bg-base-300 p-3"
                          />
                          <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between">
                            <a
                              href={`#${project.id}-img${idx === 0 ? project.images.length - 1 : idx - 1}`}
                              className="btn btn-sm btn-circle bg-white/85 hover:bg-white border-gray-300"
                              aria-label="Previous screenshot"
                            >
                              {chevronLeftIcon}
                            </a>
                            <a
                              href={`#${project.id}-img${idx === project.images.length - 1 ? 0 : idx + 1}`}
                              className="btn btn-sm btn-circle bg-white/85 hover:bg-white border-gray-300"
                              aria-label="Next screenshot"
                            >
                              {chevronRightIcon}
                            </a>
                          </div>
                          <div className="border-t border-gray-200 bg-white/90 p-3">
                            <p className="text-xs font-bold text-neutral-800">{img.alt}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack && project.techStack.length > 0 && (
                  <div>
                    <h4 className="kbd shadow-xl text-xs uppercase font-bold text-gray-500 mb-3">
                      Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <TechIcon key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <form method="dialog" className="modal-backdrop bg-black/30 backdrop-blur-xs">
              <button type="submit">close</button>
            </form>
          </dialog>
        ))}

        {/* Other Projects Detail Modals */}
        {otherProjects.map((project) => (
          <dialog key={`${project.id}-modal`} id={project.id} className="modal">
            <div className="modal-box max-w-2xl max-h-[80vh] overflow-y-auto border border-gray-300 hover:border-gray-400 bg-white/95 backdrop-blur-sm rounded-box p-0 shadow-2xl">
              <form method="dialog">
                <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-white/80 hover:bg-white hover:border-gray-300 border" aria-label="Close modal">
                  {closeIcon}
                </button>
              </form>

              <div className="p-6 pb-0">
                <div className="min-w-0 space-y-1 pr-10">
                  <h3 className="font-bold text-sm md:text-base text-neutral-800">{project.title}</h3>
                </div>

                <hr className="mt-3 mb-3 border-gray-400" />

                <div className="text-xs md:text-sm flex flex-wrap gap-1.5 mb-3">
                  <span className="kbd kbd-xs md:kbd-sm font-medium">Academic</span>
                </div>
              </div>

              <div className="p-6 pt-0">
                <p className="text-sm leading-relaxed text-gray-700">{project.description}</p>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop bg-black/30 backdrop-blur-xs">
              <button type="submit">close</button>
            </form>
          </dialog>
        ))}
      </div>
    </section>
  )
}
