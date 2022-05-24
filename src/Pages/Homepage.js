import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Homepage = () => {

  // For githubcopilot: can you please write the multilevel string sign??
  // Multi level string
  const x = "<script> console.log('aspon-funguju') function change_switcher_next() { UIkit.switcher(document.getElementById('muj-testovy - switcher')).show('next') }  function run_switcher_next() { setTimeout(() => { change_switcher_next(); run_switcher_next() }, 2500) } run_switcher_next() </script> "


  return (
    <div className="uk-container  uk-position-relative">
      <h1 className="uk-heading-medium">ProStudenty</h1>
      <div className="hlavni_nadpisss">
        <ul className="uk-subnav uk-subnav-pill uk-hidden@s uk-visible@l" uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium" id="muj-testovy-switcher">
          <li><a href="#">01</a></li>
          <li><a href="#">02</a></li>
          <li><a href="#">03</a></li>
          <li><a href="#">04</a></li>
        </ul>
        <h2 style={{ color: '#666666' }}>Chceš se naučit&nbsp; </h2>
        <ul className="uk-switcher ">
          <li>
            <h2 style={{ color: 'brown' }}><Link to="/dejepis" className="uk-link-reset">Dějepis</Link></h2>
          </li>
          <li>
            <h2 style={{ color: 'green' }}><Link to="/" className="uk-link-reset">Biologii</Link></h2>
          </li>
          <li>
            <h2 style={{ color: 'red' }}><Link to="/" className="uk-link-reset">Matematiku</Link></h2>
          </li>
          <li>
            <h2 style={{ color: 'purple' }}><Link to="/" className="uk-link-reset">Fyziku</Link></h2>
          </li>
        </ul>
        <h2 style={{ color: '#666666' }}>??</h2>
      </div>
      <div className="uk-padding-small" />
      <div className="uk-child-width-1-2@s uk-grid uk-child-width-1-3@l uk-grid-match moje-vyber-predmetu" uk-grid uk-scrollspy="cls: uk-animation-scale-up uk-transform-origin-bottom-center; target: .uk-card; delay: 250; repeat: false">
        <div className="uk-grid-margin">
          <a className="uk-card uk-card-default uk-card-hover uk-card-body  uk-visible-toggle " href="/home.html" tabIndex={0} style={{ height: '250px' }}>
            <img uk-svg="stroke-animation: false" src="/imgs/ptak_pak_vymaz.svg" style={{ height: '190px', width: '100%', opacity: '0.5', position: 'absolute', top: 0, left: 0, paddingTop: '30px', filter: 'blur(20px)' }} className="uk-flex uk-flex-center uk-link-reset uk-preserve  " />
            <div className="uk-animation-toggle uk-invisible-hover" style={{ height: '220px', marginTop: '-30px', paddingTop: '30px' }} tabIndex={0}>
              <img uk-svg="stroke-animation: true" src="/imgs/ptak_pak_vymaz.svg" style={{ height: '190px', width: '100%', opacity: 1, position: 'absolute', top: 0, left: 0, paddingTop: '30px' }} className="uk-flex uk-flex-center uk-link-reset  uk-animation-stroke  uk-preserve" />
            </div>
            <h3 className="uk-card-title uk-link-reset" style={{ position: 'absolute', bottom: '30px', left: '60px' }}>
              Biologie</h3>
          </a>
        </div>
        <div className="uk-grid-margin">
          <a className="uk-card uk-card-default uk-card-hover uk-card-body  uk-visible-toggle " href="/home.html" tabIndex={0} style={{ height: '250px' }}>
            <img uk-svg="stroke-animation: false" src="/imgs/leaf03.svg" style={{ height: '190px', width: '100%', opacity: '0.5', position: 'absolute', top: 0, left: 0, paddingTop: '30px', filter: 'blur(20px)' }} className="uk-flex uk-flex-center uk-link-reset uk-preserve  " />
            <div className="uk-animation-toggle uk-invisible-hover" style={{ height: '220px', marginTop: '-30px', paddingTop: '30px' }} tabIndex={0}>
              <img uk-svg="stroke-animation: true" src="/imgs/leaf03.svg" style={{ height: '190px', width: '100%', opacity: 1, position: 'absolute', top: 0, left: 0, paddingTop: '30px' }} className="uk-flex uk-flex-center uk-link-reset  uk-animation-stroke  uk-preserve" />
            </div>
            <h3 className="uk-card-title uk-link-reset" style={{ position: 'absolute', bottom: '30px', left: '60px' }}>
              Biologie</h3>
          </a>
        </div>
        <div className="uk-grid-margin">
          <a className="uk-card uk-card-default uk-card-hover uk-card-body  uk-visible-toggle " href="/home.html" tabIndex={0} style={{ height: '250px' }}>
            <img uk-svg="stroke-animation: false" src="/imgs/ptak_pak_vymaz.svg" style={{ height: '190px', width: '100%', opacity: '0.5', position: 'absolute', top: 0, left: 0, paddingTop: '30px', filter: 'blur(20px)' }} className="uk-flex uk-flex-center uk-link-reset uk-preserve  " />
            <div className="uk-animation-toggle uk-invisible-hover" style={{ height: '220px', marginTop: '-30px', paddingTop: '30px' }} tabIndex={0}>
              <img uk-svg="stroke-animation: true" src="/imgs/ptak_pak_vymaz.svg" style={{ height: '190px', width: '100%', opacity: 1, position: 'absolute', top: 0, left: 0, paddingTop: '30px' }} className="uk-flex uk-flex-center uk-link-reset  uk-animation-stroke  uk-preserve" />
            </div>
            <h3 className="uk-card-title uk-link-reset" style={{ position: 'absolute', bottom: '30px', left: '60px' }}>
              Biologie</h3>
          </a>
        </div>
        <div className="uk-grid-margin">
          <a className="uk-card uk-card-default uk-card-hover uk-card-body  uk-visible-toggle " href="/home.html" tabIndex={0} style={{ height: '250px' }}>
            <img uk-svg="stroke-animation: false" src="/imgs/leaf01v2.svg" style={{ height: '190px', width: '100%', opacity: '0.5', position: 'absolute', top: 0, left: 0, paddingTop: '30px', filter: 'blur(20px)' }} className="uk-flex uk-flex-center uk-link-reset uk-preserve  " />
            <div className="uk-animation-toggle uk-invisible-hover" style={{ height: '220px', marginTop: '-30px', paddingTop: '30px' }} tabIndex={0}>
              <img uk-svg="stroke-animation: true" src="/imgs/leaf01v2.svg" style={{ height: '190px', width: '100%', opacity: 1, position: 'absolute', top: 0, left: 0, paddingTop: '30px' }} className="uk-flex uk-flex-center uk-link-reset  uk-animation-stroke  uk-preserve" />
            </div>
            <h3 className="uk-card-title uk-link-reset" style={{ position: 'absolute', bottom: '30px', left: '60px' }}>
              Biologie</h3>
          </a>
        </div>
        <div className="uk-grid-margin">
          <a className="uk-card uk-card-default uk-card-hover uk-card-body  uk-visible-toggle " href="/home.html" tabIndex={0} style={{ height: '250px' }}>
            <img uk-svg="stroke-animation: false" src="/imgs/ptak_pak_vymaz.svg" style={{ height: '190px', width: '100%', opacity: '0.5', position: 'absolute', top: 0, left: 0, paddingTop: '30px', filter: 'blur(20px)' }} className="uk-flex uk-flex-center uk-link-reset uk-preserve  " />
            <div className="uk-animation-toggle uk-invisible-hover" style={{ height: '220px', marginTop: '-30px', paddingTop: '30px' }} tabIndex={0}>
              <img uk-svg="stroke-animation: true" src="/imgs/ptak_pak_vymaz.svg" style={{ height: '190px', width: '100%', opacity: 1, position: 'absolute', top: 0, left: 0, paddingTop: '30px' }} className="uk-flex uk-flex-center uk-link-reset  uk-animation-stroke  uk-preserve" />
            </div>
            <h3 className="uk-card-title uk-link-reset" style={{ position: 'absolute', bottom: '30px', left: '60px' }}>
              Biologie</h3>
          </a>
        </div>
      </div>


      <div className="uk-padding-small"></div>
      <div className="uk-padding-small"></div>

      <div dangerouslySetInnerHTML={{ __html: x }}>

      </div>


    </div >

  )

}
export default Homepage;
