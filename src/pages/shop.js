import { useState } from "react";
import Image from "next/image";
import pic1 from "../../public/img/pic1.jpg";
import pic2 from "../../public/img/pic2.jpg";
import pic3 from "../../public/img/pic3.jpg";
import pic4 from "../../public/img/pic4.jpg";
import pic5 from "../../public/img/pic5.jpg";

const Shop = () => {
  let paintings = [
    {
      id: 1,
      srcImg: pic1,
      met: "100x120cm",
    },
    {
      id: 2,
      srcImg: pic2,
      met: "80x120cm",
    },
    {
      id: 3,
      srcImg: pic3,
      met: "90x110cm",
    },
    {
      id: 4,
      srcImg: pic4,
      met: "85x140cm",
    },
    {
      id: 5,
      srcImg: pic5,
      met: "98x100cm",
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState(paintings[0].srcImg);
  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModel(true);
  };
  const cssmodelopen = { maxHeight: "80%", width: "auto" };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <Image
          src={tempimgSrc}
          alt={"image of a painting"}
          style={cssmodelopen}
          className="modelimg"
          onClick={() => {
            setModel(false);
          }}
        />
      </div>
      <section className="main-view d-flex flex-column py-5">
        <h2 className="text-center mt-3 mb-3">Have a look of my paintings</h2>
        <div className="shop">
          {paintings.map((item, index) => {
            return (
              <div
                className="paint"
                key={index}
                onClick={() => {
                  getImg(item.srcImg);
                }}
              >
                <Image src={item.srcImg} layout="intrinsic" alt={"image of a painting"} />
                <h3 className="met">{item.met}</h3>
              </div>
            );
          })}
        </div>
      </section>
      <style jsx>
        {`
          .shop {
            max-width: 100vw;
            min-heigth: 100vh;
            -webkit-column-count: 3;
            -moz-column-count: 3;
            column-count: 3;
            -webkit-column-width: 33%;
            -moz-column-width: 33%;
            column-width: 33%;
            padding: 0 12px;
          }
          .shop .paint {
            -webkit-transition: all 350ms ease;
            transition: all 350ms ease;
            cursor: pointer;
            margin-bottom: 12px;
          }
          .shop .paint:hover {
            filter: opacity(0.8);
          }
          @media (width < 768px) {
            .shop {
              -webkit-column-count: 2;
              -moz-column-count: 2;
              column-count: 2;
            }
          }
          @media (width < 576px) {
            .shop {
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
          .met {
            position: fixed;
            top: 0;
            left: 0;
          }
        `}
      </style>
    </>
  );
};

export default Shop;
