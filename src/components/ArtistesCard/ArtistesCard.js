import React, { useState, useEffect } from "react";
import "./ArtistesCard.css";
import Representations from "./Representations/Representations";
import axios from "axios";

const ArtistesCard = () => {
  const [artistes, setArtistes] = useState([]);
  const [currentArtiste, setCurrentArtiste] = useState(0);

  useEffect(() => {
    const fetchArtistes = async () => {
      const result = await axios.get("http://localhost:5000/api/v1/artistes");
      setArtistes(result.data);
      console.log(artistes);
    };
    fetchArtistes();
  }, []);

  const nextArtistes = () => {
    if (currentArtiste < artistes.length - 1) {
      setCurrentArtiste(currentArtiste + 1);
    } else {
      console.log("limite artiste");
    }
  };

  const previousArtistes = () => {
    if (currentArtiste > 0) {
      setCurrentArtiste(currentArtiste - 1);
    }
  };

  return (
    <>
      {artistes.map((artiste, index) => (
        <div
          key={artiste.id}
          className={
            index === currentArtiste
              ? "artisteCard__content"
              : "artisteCard__content_notVisible"
          }
        >
          <div className="block_img-name-author">
            <img
              src={artiste.picture}
              className="artiste-picture"
              alt="artiste"
            ></img>
            <div className="block_name-author">
              <h2 className="artiste-name">{artiste.name}</h2>
              <p className="artiste-author">{artiste.author}</p>
            </div>
          </div>
          <div className="artiste-description-button">
            <div className="block-description">
              <p className="artiste-description">{artiste.description}</p>
            </div>
            <div className="block-description-button">
              <button
                type="button"
                className={
                  index === artistes.length - artistes.length
                    ? "buttonInvisible"
                    : "buttonPreviousVisible"
                }
                onClick={previousArtistes}
              >
                previous
              </button>
              <button
                type="button"
                className={
                  index === artistes.length - 1
                    ? "buttonInvisible"
                    : "buttonNextVisible"
                }
                onClick={nextArtistes}
              >
                next
              </button>
            </div>
          </div>
        </div>
      ))}
      <Representations />
    </>
  );
};

export default ArtistesCard;
