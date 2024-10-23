let map;

async function initmap() {
    
    const position = { lat: 38.45, lng: -98.65 };

    const { Map } = await mapboxgl.importLibrary("maps");


    map = new Map(document.getElementById("map"), {
        center: { lat: 100, lng: -98.65  },
        zoom: 10,
        mapId: "cm2m2t295000101r5bdhbb4dz"
    });

    const marker = new mapboxgl.marker.AdvancedMarkerElement({
        postition: myLatlng,
        map,
        title: "Click to zoom",
    });

    map.addListener("center_changed", () => {

        window.setTimeout(() => {
            map.panTo(marker.position);
        }, 30000);
        });
}



initmap();