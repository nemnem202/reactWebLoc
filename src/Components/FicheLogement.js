import Header from './Header'
import Footer from './Footer'
import Rating from '../assets/RatingStars.js'
import '../styles/FicheLogement.scss'
import MenuDeroulant from './MenuDeroulant.js'
import Caroussel from './Caroussel.js'


function FicheLogement({index}) {
    return (
<div className='MainContainer'>
    
    <div className='HeaderPageContent'>
        <div>
            <Header />
            <GroupInfo logement={index}/>
        </div>
    </div>        
    
    <Footer />
    
</div>
)
}



function GroupInfo({logement}) {

    const equipments = logement.equipments.map(equipment=>(
        <li key={equipment}>{equipment}</li>
    ))

    return (
        <div className='MainContainerGroupInfo'>
            
            <Caroussel object={logement}/>

            <div className='ContainerGroupInfo'>

                <div className='row1'>
                    <div className='TitreTag'>

                        <div className='Titre'>
                                <h1>{logement.title}</h1>

                                <h2>{logement.location}</h2>
                        </div>

                        <div className='TagContainer'>
                            {logement.tags.map(tag =>(
                            <div className='LogementTag' key={tag}>{tag}</div>
                            ))}
                        </div>


                    </div>

                    <div className='ProfilNote'>

                        <div className='NomEtImage'>
                                <h2>{logement.host.name}</h2>
                                <div> <img src={logement.host.picture}></img></div>
                                
                        </div>

                        <Rating value={Number(logement.rating)}/>


                    </div>
                </div>



                    <div className='DescriptEquip'>
                        <MenuDeroulant titre='Description' contenu={logement.description}/>
                        <MenuDeroulant titre='Équipements' contenu={equipments}/>
                    </div>

            </div>
        </div>
    )
}

export default FicheLogement



