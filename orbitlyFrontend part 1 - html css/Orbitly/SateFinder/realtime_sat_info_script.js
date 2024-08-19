document.getElementById('get-info').addEventListener('click', function () {
    var realtimeSatInfoContainer = document.querySelector('.realtime-sat-info-container');
    if (realtimeSatInfoContainer.style.bottom === '0%') {
        realtimeSatInfoContainer.style.bottom = '-100%';
    } else {
        realtimeSatInfoContainer.style.bottom = '0%';
    }
});

document.getElementById('closeMapBtn').addEventListener('click', function () {
    var realtimeSatInfoContainer = document.querySelector('.realtime-sat-info-container');
    realtimeSatInfoContainer.style.bottom = '-100%';
});


document.getElementById('Select-Loc-Button').addEventListener('click', function () {
    const headingContainer = document.querySelector('.SelectLocationHeading');
    const buttonContainers = document.querySelector('.SelectLocation')
    headingContainer.style.textAlign = 'left';
    headingContainer.style.transform = 'translateX(-90%)';
    buttonContainers.style.textAlign = 'left';
    buttonContainers.style.transform = 'translateX(-80%)';
});


document.addEventListener("DOMContentLoaded", function () {
    var url2 = "https://tle.ivanstanojevic.me/api/tle/42792";

    var showMapBtn = document.getElementById('Select-Loc-Button');
    var closeMapBtn = document.getElementById('closeMapBtn');
    var getInfoBtn = document.getElementById('get-info');
    var closeInfoBtn = document.getElementById('close-info');
    var id = document.getElementById('sid');
    var sdate = document.getElementById('date');
    var sname = document.getElementById('sname');
    var para1 = document.getElementById('spara1');
    var para2 = document.getElementById('spara2');
    var distance = document.getElementById('distance');

    var userLatitude, userLongitude, userAltitude = 34;

    // Initialize the map
    var map = L.map('map').setView([24.93641298161959, 67.08921432495119], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    var marker = L.marker([24.93641298161959, 67.08921432495119]).addTo(map);

    map.on('click', function (e) {
        userLatitude = e.latlng.lat;
        userLongitude = e.latlng.lng;
        marker.setLatLng(e.latlng);
    });

    showMapBtn.addEventListener('click', function () {
        var mapDiv = document.getElementById('map');
        mapDiv.style.display = 'block';
        setTimeout(function () {
            mapDiv.classList.add('visible');
        }, 10); // Slight delay to ensure the transition is applied
    });

    closeMapBtn.addEventListener('click', function () {
        var mapDiv = document.getElementById('map');
        mapDiv.classList.remove('visible');
        setTimeout(function () {
            mapDiv.style.display = 'none';
        }, 500); // Match this delay with the CSS transition duration
    });

    getInfoBtn.addEventListener('click', function () {
        fetchData();
        document.querySelector('.realtime-sat-info-container').style.bottom = '0%';
    });

    closeInfoBtn.addEventListener('click', function () {
        document.querySelector('.realtime-sat-info-container').style.bottom = '-100%';
    });

    async function fetchData() {
        console.log("Loading data...");
        var response = await fetch(url2);
        var data = await response.json();
        console.log(data);
        id.textContent = data.satelliteId;
        sname.textContent = data.name;
        sdate.textContent = data.date;
        para1.textContent = data.line1;
        para2.textContent = data.line2;

        // Parse the TLE data
        var tleLine1 = data.line1;
        var tleLine2 = data.line2;

        // Use satellite.js to calculate the satellite position
        var satrec = satellite.twoline2satrec(tleLine1, tleLine2);
        var positionAndVelocity = satellite.propagate(satrec, new Date(data.date));
        var positionEci = positionAndVelocity.position;

        // Convert the satellite position from ECI to ECEF
        var gmst = satellite.gstime(new Date(data.date));
        var positionEcf = satellite.eciToEcf(positionEci, gmst);

        // Convert user's geodetic coordinates to ECEF
        var userEcf = satellite.geodeticToEcf({
            longitude: satellite.degreesToRadians(userLongitude),
            latitude: satellite.degreesToRadians(userLatitude),
            height: userAltitude / 1000 // convert altitude to kilometers
        });

        // Calculate the distance
        var distanceKm = Math.sqrt(
            Math.pow(positionEcf.x - userEcf.x, 2) +
            Math.pow(positionEcf.y - userEcf.y, 2) +
            Math.pow(positionEcf.z - userEcf.z, 2)
        );

        // Display the distance
        distance.textContent = distanceKm.toFixed(2) + " km";
    }
});