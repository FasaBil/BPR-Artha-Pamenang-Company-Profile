// Parameter 1d (altitude) mengatur tingkat zoom peta.
const MAP_SRC =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d100000.0!2d112.033816!3d-7.807098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78574358102481%3A0x51541f04ee07e9fb!2sArtha%20Pamenang%20Syariah%20Kediri!5e0!3m2!1sid!2sus!4v1773738257388!5m2!1sid!2sus';

export default function MapEmbed() {
    return (
        <div className="map-responsive-wrapper">
            <iframe
                title="Lokasi BPR Syariah Artha Pamenang"
                src={MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
