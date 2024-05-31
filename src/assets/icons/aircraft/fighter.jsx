import { defs } from "@/assets/filters/AircraftMarkerDefs";
import { Marker } from "@/classes/Marker";

export default new Marker({
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  defs: [defs.outline],
  children: [
    <path
      name="path-0"
      filters={[0]}
      style="paint-order:fill markers;stroke-linecap: round; stroke-linejoin: round;"
      d="M 7.462 27.371 L 7.079 28.003 L 7.04 28.816 L 8.516 28.759 L 8.562 28.151 L 17.252 28.185 L 17.146 30.781 L 13.182 34.386 L 13.098 36.219 L 13.519 36.754 L 17.208 36.717 L 18.096 36.428 L 18.176 33.765 L 18.56 35.681 L 19.085 37.248 L 19.707 37.266 L 20 38.6 L 20.299 37.281 L 20.83 37.224 L 21.42 35.624 L 21.69 33.696 L 21.877 36.45 L 22.749 36.722 L 26.521 36.658 L 26.981 35.989 L 26.822 34.255 L 22.927 30.89 L 22.966 28.044 L 31.426 28.065 L 31.576 28.775 L 32.862 28.687 L 32.869 27.938 L 32.413 27.582 L 32.243 21.254 L 31.474 25.144 L 23.77 18.686 L 22.474 14.206 L 21.604 8.572 L 21.17 4.509 L 19.945 1.396 L 18.829 4.558 L 18.389 8.531 L 17.389 14.241 L 16.334 18.726 L 8.577 24.995 L 7.694 21.259 L 7.424 27.369"
    />,
  ],
});
