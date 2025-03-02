function LocationCard({image, titre, index}) {
    return (
        <a className="LocationCard" href={`/Fiche-Logement/${index}`}>
            <div className="ContainerImageLocation">
                <img src={image}></img>
            </div>
            <h2 >{titre}</h2>
        </a>
    )
}

export default LocationCard