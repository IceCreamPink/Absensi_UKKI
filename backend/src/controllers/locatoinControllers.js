const geolib = require("geolib");
const sekolah = require("../models/sekolah");

exports.checkRadius = (req, res) => {
  const { latitude, longitude } = req.body;

  sekolah.sekolah((err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const sekolah = results[0];
    const sekolahLocation = {
      latitude: sekolah.latitude,
      longitude: sekolah.longitude,
    };

    const isInside = geolib.isPointWithinRadius(
      { latitude, longitude },
      sekolahLocation,
      sekolah.radius
    );

    res.json({
      isInside,
      message: isInside
        ? "✅ Anda dalam radius sekolah"
        : "❌ Anda di luar radius sekolah",
    });
  });
};

exports.getsekolahPolygon = (req, res) => {
  // Koordinat polygon area sekolah (sesuaikan dengan Leaflet)
  const sekolahPolygon = [
    { lat: -7.866315, lng: 111.469043 },
    { lat: -7.866315, lng: 111.47 },
    { lat: -7.867, lng: 111.47 },
    { lat: -7.867, lng: 111.469043 },
  ];

  res.json({ sekolahPolygon });
};
