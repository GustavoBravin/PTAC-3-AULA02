// components/Map.js

export default function Map(){
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5539781585087!2d-74.00603628443354!3d40.71277631684784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sFlatiron%20Building!5e0!3m2!1sen!2sus!4v1683678867987!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        title="Localização"
      />
    </div>
  );
};

