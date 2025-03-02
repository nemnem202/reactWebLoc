function ImagePresentationCard({image, titre}) {
    return (
        <div className="ImagePresentationCardContainer">

            <img src={image} className="ImagePresentationCard" ></img>
            <h1 className="TitreImagePresentationCard">{titre}</h1>
        </div>
        
    )
}

export default ImagePresentationCard