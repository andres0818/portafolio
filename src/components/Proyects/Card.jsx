import React, { useState } from "react";
import * as logos from "../../img";

const Card = ({ data }) => {
  const images = [data.fotos.uno, data.fotos.dos, data.fotos.tres];

  const [imageWeb, setImageWeb] = useState({ img: images[0], index: 0 });

  const nextImg = () => {
    imageWeb.index === images.length - 1
      ? setImageWeb({ img: images[0], index: 0 })
      : setImageWeb({
          img: images[imageWeb.index + 1],
          index: imageWeb.index + 1,
        });
  };

  const returnImg = () => {
    imageWeb.index === 0
      ? setImageWeb({ img: images[2], index: 2 })
      : setImageWeb({
          img: images[imageWeb.index - 1],
          index: imageWeb.index - 1,
        });
  };

  const onclickImg = (img, index) => {
    setImageWeb({
      img: img[index],
      index,
    });
  };

  return (
    <div
      className={
        "proyects__container " + (!data.status ? "column_reverse" : "column")
      }
    >
      <div className="proyects__info">
        <h1 className="proyects__title_info">{data.name }</h1>
        <p className="proyects__description">{data.description}</p>
        <div
          className="proyects__logos_languages"
        >
          <img src={logos.react} alt="" />
          {!data.mobile && (
            <>
              <img src={logos.sass} alt="" />
              <img src={logos.html} alt="" />
              <img src={logos.bootstrap} alt="" />
            </>
          )}
        </div>

        <div className="proyects__btn_redirect">
          <a href={data.url} target="_blank" rel="noreferrer">
            {!data.mobile ? "Ir a la pagina" : "Ir al repositorio"}
          </a>
        </div>
      </div>
      <div className="proyects__container_images">
        <div className="proyects__btn_images_container">
          <button onClick={returnImg} className="proyects__btn_images">
            {"<"}
          </button>
          <img
            className="proyects__images_primary"
            src={imageWeb.img}
            alt="Portada"
          />
          <button onClick={nextImg} className="proyects__btn_images">
            {'>'}
          </button>
        </div>
        <div className="proyects__images_secundary">
          <img
            onClick={() => onclickImg(images, 0)}
            className={imageWeb.img === images[0] ? "focus" : "opacity"}
            src={images[0]}
            alt="Miniatura "
          />
          <img
            onClick={() => onclickImg(images, 1)}
            className={imageWeb.img === images[1] ? "focus" : "opacity"}
            src={images[1]}
            alt="Miniatura"
          />
          <img
            onClick={() => onclickImg(images, 2)}
            className={imageWeb.img === images[2] ? "focus" : "opacity"}
            src={images[2]}
            alt="Miniatura"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
