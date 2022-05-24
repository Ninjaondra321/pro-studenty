import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CarouselCard from "../Components/Cards";
import Carousel from "../Components/Carousel";

import Vybery from "../Components/Vybery";


const PredmetMainPage = () => {
    let { predmet } = useParams();

    const [predmetInfo, setPredmetInfo] = useState('Loading...');
    const [vybery, setVybery] = useState(null);

    const [search, setSearch] = useState('');

    const [obsah, setObsah] = useState(null);

    const [vysledkyVyhledavani, setVysledkyVyhledavani] = useState([]);

    function findLessons() {
        // setVysledkyVyhledavani([])
        let prubezneVysledkyVyheldavani = []
        for (var key of Object.keys(obsah)) {

            if (obsah[key].key_words.includes(search.toLocaleLowerCase())) {

                prubezneVysledkyVyheldavani.push(obsah[key]);

            }

        }

        setVysledkyVyhledavani(prubezneVysledkyVyheldavani)


    }




    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/predmet.json")
            .then(response => response.json())
            .then(text => setPredmetInfo(text))
            .catch(error => console.log(error));
    }, [])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/vybery.json")
            .then(response => response.json())
            .then(text => setVybery(text))
            .catch(error => console.log(error));
    }, [])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/temata.json")
            .then(response => response.json())
            .then(text => setObsah(text))
            .catch(error => console.log(error));
    }, [])

    function upravLink(l) {
        if (l[0] === "/") {
            return l.substring(1)
        }
        return l
    }





    return (
        <div class="tm-main  uk-section-default">
            <div class="uk-container uk-container-medium uk-position-relative moje-main-content-padding-left">

                <h1 className="uk-heading-large"> {predmetInfo.title && predmetInfo.title}</h1>

                <div className="uk-padding-small"></div>

                <div class="uk-search uk-search-large">
                    <span uk-search-icon></span>
                    <input class="uk-search-input" type="search" placeholder="Vyhledat téma" value={search} onChange={(e) => { setSearch(e.target.value); console.log(search); findLessons() }} />
                </div>

                <div className={search !== "" && "uk-animation-fade uk-animation-reverse uk-hidden"} >
                    <Vybery vybery={vybery} />
                </div>

                {search &&
                    <div className="" style={{ padding: "20px" }}>






                        {vysledkyVyhledavani.map((tema) =>
                            <Link to={upravLink(tema.url)} >
                                <div className="uk-card uk-card-default uk-link-reset">
                                    <div className="uk-card-body uk-link-reset">

                                        <h3 className="uk-card-title uk-link-reset">{tema.title}</h3>
                                        <p className="uk-link-reset">{tema.ukazka}</p>
                                    </div>
                                </div>
                            </Link>


                        )}

                    </div>
                }

                {/* 
                {vybery && Object.keys(vybery).map((key) => <div className="vyber">
                    <h2>{vybery[key].title}</h2>
                    <Carousel temata={vybery[key].temata} /> 

            </div>
                )}*/}

            </div>
        </div >

        // <div class="tm-main  uk-section-default">
        //     <div class="uk-container uk-container-medium uk-position-relative moje-main-content-padding-left">

        //         <h1>{predmetInfo.title}</h1>
        //         <p>{predmet}</p>
        //         <p>{predmetInfo.title}</p>

        //         {/* <OwlCarousel className="owl-theme" loop margin={10} items={1}>
        //             {vybery.map((vyber) => <div className="item"><img src={vyber.img} alt="Owl Image" /></div>)}
        //         </OwlCarousel> */}

        //         <div className="vybery">
        //             {vybery && Object.keys(vybery).map((key) => <div className="vyber">
        //                 <h2>{vybery[key].title}</h2>
        //                 <div className="owl-carousel owl-theme">
        //                     <OwlCarousel className="owl-theme" nav loop items="3">
        //                         {vybery[key].temata.map((obj) =>

        //                             <CarouselCard icon={obj.icon} title={obj.title} link={obj.path} />

        //                         )}
        //                     </OwlCarousel>
        //                     {/* TADY POKRACUJ -- DODELAT!!! */}
        //                 </div>
        //             </div>
        //             )}

        //         </div>



        //     </div>
        // </div>
    );
}
export default PredmetMainPage;