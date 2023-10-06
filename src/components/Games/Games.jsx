import React from "react";
import { ArrowBarDown } from "react-bootstrap-icons";

export default function Games() {
  const games = [
    {
      id: 1,
      gameName: "Assassins Creed 2",
      link: "https://www.ubisoft.com/en-us/game/assassins-creed/assassins-creed-ii",
      image: "./AC2.jpeg",
    },
    {
      id: 2,
      gameName: "Crysis 2",
      link: "https://www.ea.com/games/crysis/crysis-2",
      image: "./Crysis2.jpeg",
    },
    {
      id: 3,
      gameName: "DOTA 2",
      link: "https://www.dota2.com/home",
      image: "./Dota2.png",
    },
    {
      id: 4,
      gameName: "God of War",
      link: "https://www.playstation.com/en-in/god-of-war/",
      image: "./GodOfWar.jpeg",
    },
    {
      id: 5,
      gameName: "Crysis 3",
      link: "https://www.ea.com/games/crysis/crysis-3",
      image: "./Crysis3.jpg",
    },
    {
      id: 6,
      gameName: "Mafia 2: Definitive Edition",
      link: "https://mafiagame.com/mafia-2/",
      image: "./Mafia2.jpeg",
    },
    {
      id: 7,
      gameName: "Sekiro : Shadows die twice",
      link: "https://www.sekirothegame.com/",
      image: "./Sekiro.jpeg",
    },
    {
      id: 8,
      gameName: "Humankind",
      link: "https://humankind.game/en",
      image: "./Humankind.jpg",
    },
  ];

  return (
    <div className="container-fluid bg-dark">
      <div className="text-bg-dark p-3 text-center">
        <h1 className="d-block">Checkout my favourite games here</h1>
        <ArrowBarDown size={50} />
      </div>
      <div className="container-fluid bg-dark text-bg-dark">
        <div className="row row-cols-4">
          {games.map((game) => {
            return (
              <div
                className="col card-columns text-bg-dark text-center"
                id={game.id}
              >
                <a href={game.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={game.image}
                    className="card-img-top bg-dark"
                    alt={game.image}
                  />
                  <div className="card-body">
                    <h5 className="card-title p-2">{game.gameName}</h5>
                    <p className="card-text ">{game.gameDesc}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
