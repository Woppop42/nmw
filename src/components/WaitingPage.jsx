import React from "react";
import "./WaitingPage.css";
import logo from "../assets/images/logoClassic.png";
import mosaic from "../assets/images/mosaic.jpg"; 

export function WaitingPage() {
  return (
    <div className="container">
      {/* Section Image */}
      <div className="image-section">
        <img src={mosaic} alt="Mosaïque de vins" />
      </div>

      {/* Section Texte */}
      <div className="text-section">
        {/* Logo */}
        <img src={logo} alt="Logo Nestor M Wine"  />
        <h1>Madame, Monsieur, Chers futurs clients,</h1>
        {/* <p>
          Il ne pouvait y avoir de meilleur moment pour faire cette annonce
          avant les fêtes de fin d'année !!
        </p> */}
        <p>
          Nous souhaitons la bienvenue aux visiteurs de cette page. Toute
          l'équipe <strong>Nestor M Wine</strong> est très enthousiaste et très
          heureuse de vous annoncer prochainement l'arrivée de votre futur site
          internet, marque spécialisée dans la cave à vin haut de gamme.
        </p>
        <hr />
        <p>
          En attendant l'ouverture de ce site qui satisfera vos attentes, vous
          pouvez d’ores et déjà nous contacter à l’adresse suivante :
        </p>
        <a href="mailto:contact@NestorMwine.com" className="contact">contact@NestorMwine.com</a>

        <p>Notre catalogue est aussi disponible sous le lien suivant : </p>
        <a href="https://online.fliphtml5.com/otftp/ojjv/#p=1" target="_blank" rel="noopener noreferrer" className="catalog-button">
          Catalogue Nestor M Wine 2025
        </a>
      </div>
    </div>
  );
}

