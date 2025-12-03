import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";


const Map = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<maplibregl.Map | null>(null);

    useEffect(() => {
        const defaultCoords: maplibregl.LngLatLike = [-0.1277343287804971, 51.50296904996885];


        const map = new maplibregl.Map({
            container: mapContainerRef.current!,
            style: "https://tiles.openfreemap.org/styles/bright",
            center: defaultCoords,
            zoom: 11,
        });

        mapRef.current = map;

        // Marcador por defecto
        const marker = new maplibregl.Marker()
            .setLngLat(defaultCoords)
            .addTo(map);

        // Agregar manejador de clic al marcador
        const markerEl = marker.getElement();
        markerEl.style.cursor = "pointer";
        markerEl.onclick = () => {
            window.open("https://maps.google.com/maps?q=Londres%2C%20Reino%20Unido", "_blank");
        };

        return () => map.remove();
    }, []);

    return <div ref={mapContainerRef} style={{ width: "100%", height: "300px" }} />;
}

export default Map;