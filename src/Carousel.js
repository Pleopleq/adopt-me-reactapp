import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => {
        return large;
      });
    }

    return { photos };
  }
  render() {
    const { photos, active } = this.state;
    return (
      <div>
        <img src={photos[active]} alt="pet" />
        <div>
          {photos.map((photo, index) => (
            <img
              key={photo}
              data-index={index}
              src={photo}
              alt="pet thumbnail"
            ></img>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
