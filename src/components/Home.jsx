import React from "react";
import "../styles/Home.scss";

import vg from "../assets/2.webp";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TeachStar</h1>
          <p>
            Find Your all Text Book Soltion For Free!!! Now Your Tension is Free
          </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="VectorGraphics" />
        <div>
          <p>
            We are your one any only solution provider form your textbook
            without charge. So When you face problem just submit your problem
            here. We will answer it as soon as possible and given your deisred
            solution.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who We Are</h1>
          <p>
            quam, modi doloribus minus voluptatem quibusdam. Ipsum! Molestiae
            itaque nesciunt provident quia ea corrupti qui, quisquam ex
            deserunt! Ratione libero fugiat sint magnam. Libero eum commodi
            aliquid impedit rem quis eligendi fugiat saepe. Ea? Deserunt
            dignissimos, oloribus ipsa possimus fugiat? Fuga neque
            necessitatibus porro ipsa, magni repellendus cum distinctio
            temporibus exercitationem labore eius totam adipisci, explicabo a
            nisi accusantium nihil voluptatem atque in ullam? Sint consequatur
            delectus distinctio repellendus consequuntur? Consectetur minus,
            placeat nihil officiis, alias laudantium alias officiis expedita
            earum excepturi quaerat laboriosam. Iure id voluptates quis ab odio,
            obcaecati adipisci culpa. Alias aspernatur, numquam nihil
            accusantium rem temporibus delectus vel.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle className="icon"/>
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle className="icon"/>
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube className="icon"/>
              <p>YouTube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram className="icon"/>
              <p>Instragram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
