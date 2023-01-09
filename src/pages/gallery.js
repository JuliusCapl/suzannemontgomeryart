import { useState } from "react";
import Image from "next/image";
import pic1 from "../../public/img/pic1.jpg";
import pic2 from "../../public/img/pic2.jpg";
import pic3 from "../../public/img/pic3.jpg";
import pic4 from "../../public/img/pic4.jpg";
import pic5 from "../../public/img/pic5.jpg";
import pic6 from "../../public/img/pic6.jpg";
import pic7 from "../../public/img/pic7.jpg";

const Gallery = () => {
  let galleryData = [
    {
      id: 1,
      imgSrc: pic1,
    },
    {
      id: 2,
      imgSrc: pic2,
    },
    {
      id: 3,
      imgSrc: pic3,
    },
    {
      id: 4,
      imgSrc: pic4,
    },
    {
      id: 5,
      imgSrc: pic5,
    },
    {
      id: 6,
      imgSrc: pic6,
    },
    {
      id: 7,
      imgSrc: pic7,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState(galleryData[0].imgSrc);
  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModel(true);
  };
  const cssmodelopen = {maxHeight:'80%', width:'auto'}
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <Image
          src={tempimgSrc}
          alt="image of a painting"
          style={cssmodelopen}
          className="modelimg"
          onClick={() => {
            setModel(false);
          }}
        />
        {/* <img src={tempimgSrc} onClick={()=>{setModel(false)}}/> */}
      </div>
      <section className="main-view d-flex flex-column py-5">
        <h2 className="container text-center mt-3 mb-3">Gallery</h2>
        <div className="gallery">
          {galleryData.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => {
                  getImg(item.imgSrc);
                }}
              >
                <Image src={item.imgSrc} alt="image of a painting" layout="intrinsic" />
                {/* <img src={item.imgSrc} style={{ width: "100%" }} /> */}
              </div>
            );
          })}
        </div>
      </section>
      <style jsx>{`
        .gallery {
          -webkit-column-count: 3;
          -moz-column-count: 3;
          column-count: 3;
          -webkit-column-width: 33%;
          -moz-column-width: 33%;
          column-width: 33%;
          padding: 0 12px;
        }
        .gallery .pics {
          -webkit-transition: all 350ms ease;
          transition: all 350ms ease;
          cursor: pointer;
          margin-bottom: 12px;
        }
        .gallery .pics:hover {
          filter: opacity(0.8);
        }
        @media (width < 768px) {
          .gallery {
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
          }
        }
        @media (width < 576px) {
          .gallery {
            -webkit-column-count: 1;
            -moz-column-count: 1;
            column-count: 1;
          }
        }

        .model {
          width: 100%;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ccc;
          transition: opacity 0.4s ease, transform 0.5s ease-in-out;
          visibility: hidden;
          opacity: 0;
          transform: scale(0);
          overflow: hidden;
          z-index: 100;
        }
        .model.open {
          visibility: visible;
          opacity: 1;
          transform: scale(1);
        }
        .modelimg {
          width: auto;
          max-width: 100%;
          height: auto;
          max-height: 100%;
          display: block;
          line-height: 0;
          box-sizing: border-box;
          padding: 20px 0 20px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Gallery;
