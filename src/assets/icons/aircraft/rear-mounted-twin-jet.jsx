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
      d="M 18.5 15.064 L 18.61 2.931 C 18.573 2.931 18.716 2.43 18.904 1.977 C 18.904 1.977 19.485 0.905 20 0.905 C 20.542 0.905 21.121 1.977 21.121 1.977 C 21.313 2.44 21.466 2.941 21.466 2.941 L 21.466 15.117 L 34.454 20 L 34.454 21.003 L 21.466 21.003 L 21.466 23.205 C 21.499 23.041 23.437 23.041 23.404 23.205 L 23.124 28.571 L 21.466 28.571 L 20.717 33.893 L 25.435 37.187 C 25.495 37.187 25.494 38.688 25.435 38.688 L 20 37.187 L 14.487 38.688 C 14.429 38.688 14.429 37.187 14.487 37.187 L 19.301 33.893 L 18.585 28.571 L 16.795 28.571 L 16.5 23.205 C 16.5 23.073 18.585 23.073 18.585 23.205 L 18.585 21.003 L 5.963 21.003 L 5.963 20 L 18.5 15.064 Z"
    />,
  ],
});
