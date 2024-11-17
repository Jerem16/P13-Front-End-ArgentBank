import "./features.scss";
import React, { useEffect, useState } from "react";
import featuresData from "../../assets/data/features.json";

function Features() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [storedData, setStoredData] = useState([]);

    useEffect(() => {
        const featuresDataString = JSON.stringify(featuresData);
        localStorage.setItem("featuresData", featuresDataString);

        const storedDataString = localStorage.getItem("featuresData");
        const parsedData = JSON.parse(storedDataString);
        setStoredData(parsedData);

        const imagePromises = featuresData.map((feature) => {
            return new Promise((resolve) => {
                const iconSrc = require(`../../assets/img/${feature.icon}`);
                const iconImage = new Image();
                iconImage.src = iconSrc;
                iconImage.onload = () => {
                    localStorage.setItem(feature.icon, iconSrc);
                    resolve();
                };
            });
        });

        Promise.all(imagePromises).then(() => {
            setImagesLoaded(true);
        });
    }, []);

    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {imagesLoaded ? (
                storedData.map((feature) => (
                    <div className="feature-item" key={feature.id}>
                        <img
                            className="feature-icon"
                            src={localStorage.getItem(feature.icon)}
                            alt={`${feature.title} Icon`}
                            width="150px"
                        />
                        <h3 className="feature-item-title">{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))
            ) : (
                // Affichez un loader ou un message de chargement ici
                <div className="loader">Chargement en cours...</div>
            )}
        </section>
    );
}

export default Features;
