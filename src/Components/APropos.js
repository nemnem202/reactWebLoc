import Header from './Header'
import Footer from './Footer'
import ImagePresentationCard from './ImagePresentationCard'
import imageSrc from '../assets/b9995860bb6384a77ca7dc9bf52da3be.png'
import MenuDeroulant from './MenuDeroulant'
import '../styles/APropos.scss'
import content from '../datas/APropos.json'

function APropos() {
    return (
  
    <div className='MainContainer'>
    
        <div className='HeaderPageContent'>
                <div>                
                    <Header page={'APropos'}/>
                    <div className='APropos'>
                    <ImagePresentationCard image={imageSrc}/>
                    <MenuDeroulant titre='Fiabilité' contenu={content[0].content}/>
                    <MenuDeroulant titre='Respect' contenu={content[1].content}/>
                    <MenuDeroulant titre='Service' contenu={content[2].content}/>
                    <MenuDeroulant titre='Sécurité' contenu={content[3].content}/>
                    </div>

                </div>
        
        </div>        
        
        <Footer />
    
    </div>  

    )
}

export default APropos

