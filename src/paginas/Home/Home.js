import React from "react";
import {
  HeaderStyled,
  HomeStyled,
  NavStyled,
  FooterStyled,
  SectionStyled,
  ContentStyled,
} from "./styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../assets/App.css";
// import "../assets/w3.css";
import TarjetasBasicas from "../TarjetasBasicas/TarjetasBasicas";
import TarjestasShadow from "../TarjetasShadow/TarjetasShadow";
import TarjetasAlbumAnimales from "../TarjetasAlbumAnimales/TarjetasAlbumAnimales";
import TarjetasAlbumPaisajes from "../TarjetasAlbumPaisaje/TarjetasAlbumPaisajes";
import TarjestasClimaCiudad from "../TarjetasClimaCiudad/TarjetasClimaCiudad";
import CarouselPagina from "../CarouselPagina/CarouselPagina";
import TarjetaContactoPagina from "../TarjetaContactoPagina/TarjetaContactoPagina";
import TarjetaContactoLlamadaPagina from "../TarjetaContactoLlamadaPagina/TarjetaContactoLlamadaPagina";
import FormInformacionPersonal from "../FormInformacionPersonal/FormInformacionPersonal";
import PaginaEstado from "../PaginaEstado/PaginaEstado";
import MiniCalculadora from "../MiniCalculadora/MiniCalculadora";
import Form1 from "../Form1/Form1";
import Form2 from "../Form2/Form2";
import Form3 from "../Form3/Form3";
import FormUnoMejorado from "../FormUnoMejorado/FormUnoMejorado";
import FormTresMejorado from "../FormTresMejorado/FormTresMejorado";
import FormUnoMejoradoV2 from "../FormUnoMejoradoV2/FormUnoMejoradoV2";
import FormTresMejoradoV2 from "../FormTresMejoradoV2/FormTresMejoradoV2";
import FormDosMejoradoV2 from "../FormDosMejoradoV2/FormDosMejoradoV2";
import FormTresMejoradoV3 from "../FormTresMejoradoV3/FormTresMejoradoV3";
import FormDosMejoradoV3 from "../FormDosMejoradoV3/FormDosMejoradoV3";
import FormUnoMejoradoV3 from "../FormUnoMejoradoV3/FormUnoMejoradoV3";
import ImagenesConFormas from "../ImagenesConFormas/ImagenesConFormas";
import Contenido from "../Contenido/Contenido";
import ContenidoHorizontalUnoPagina from "../ContenidoHorizontalUnoPagina/ContenidoHorizontalUnoPagina";
import VidrioPaginas from "../VidrioPaginas/VidrioPaginas";
const Home = () => {
  return (
    <Router>
      <HomeStyled>
        <HeaderStyled>
          <h2>Curso De Programacion de Maria</h2>
        </HeaderStyled>
        <SectionStyled>
          <NavStyled>
            {" "}
            <ul>
              <li>
                <Link to="/basicas">Tarjetas Basicas</Link>
              </li>
              <li>
                <Link to="/shadow">Tarjetas Shadow</Link>
              </li>
              <li>
                <Link to="/album-animales">Tarjetas Album Animales</Link>
              </li>
              <li>
                <Link to="/album-paisajes">Tarjetas Album Paisaje</Link>
              </li>
              <li>
                <Link to="/clima-ciudad">Tarjetas Clima Ciudad</Link>
              </li>
              <li>
                <Link to="/carouselpagina">Carousel Pagina</Link>
              </li>
              <li>
                <Link to="/tarjetacontactopagina">Tarjeta Contacto Pagina</Link>
              </li>
              <li>
                <Link to="/tarjetacontactollamadapagina">
                  Tarjeta Contacto Llamada Pagina
                </Link>
              </li>
              <li>
                <Link to="/forminformacionpersonal">
                  Form Informacion Personal
                </Link>
              </li>
              <li>
                <Link to="/paginaestado">Pagina Estado</Link>
              </li>
              <li>
                <Link to="/minicalculadora">Mini Calculadora</Link>
              </li>
              <li>
                <Link to="/form1">Form 1</Link>
              </li>
              <li>
                <Link to="/form2">Form 2</Link>
              </li>
              <li>
                <Link to="/form3">Form 3</Link>
              </li>
              <li>
                <Link to="/formunomejorado">Form Uno Mejorado</Link>
              </li>
              <li>
                <Link to="/formtresmejorado">Form Tres Mejorado</Link>
              </li>
              <li>
                <Link to="/formunomejoradov2">Form Uno Mejorado V2</Link>
              </li>
              <li>
                <Link to="/formdosmejoradov2">Form Dos Mejorado V2</Link>
              </li>
              <li>
                <Link to="/formtresmejoradov2">Form Tres Mejorado V2</Link>
              </li>
              <li>
                <Link to="/formdosmejoradov3">Form Dos Mejorado V3</Link>
              </li>
              <li>
                <Link to="/formunomejoradov3">Form Uno Mejorado V3</Link>
              </li>
              <li>
                <Link to="/formtresmejoradov3">Form Tres Mejorado V3</Link>
              </li>
              <li>
                <Link to="/imagenesconformas">Imagenes Con Formas</Link>
              </li>
              <li>
                <Link to="/contenido">Contenido</Link>
              </li>
              <li>
                <Link to="/contenidohorizontalunopagina">
                  Contenido Horizontal Uno Pagina
                </Link>
              </li>
              <li>
                <Link to="/vidriopaginas">Vidrio paginas</Link>
              </li>
            </ul>{" "}
          </NavStyled>
          <ContentStyled>
            {" "}
            <Switch>
              <Route path="/basicas">
                <TarjetasBasicas />
              </Route>
              <Route path="/shadow">
                <TarjestasShadow />
              </Route>
              <Route path="/album-animales">
                <TarjetasAlbumAnimales />
              </Route>
              <Route path="/album-paisajes">
                <TarjetasAlbumPaisajes />
              </Route>
              <Route path="/clima-ciudad">
                <TarjestasClimaCiudad />
              </Route>
              <Route path="/carouselpagina">
                <CarouselPagina />
              </Route>
              <Route path="/tarjetacontactopagina">
                <TarjetaContactoPagina />
              </Route>
              <Route path="/tarjetacontactollamadapagina">
                <TarjetaContactoLlamadaPagina />
              </Route>
              <Route path="/forminformacionpersonal">
                <FormInformacionPersonal />
              </Route>
              <Route path="/paginaestado">
                <PaginaEstado />
              </Route>
              <Route path="/minicalculadora">
                <MiniCalculadora />
              </Route>
              <Route path="/form1">
                <Form1 />
              </Route>
              <Route path="/form2">
                <Form2 />
              </Route>
              <Route path="/form3">
                <Form3 />
              </Route>
              <Route path="/formunomejorado">
                <FormUnoMejorado />
              </Route>
              <Route path="/formtresmejorado">
                <FormTresMejorado />
              </Route>
              <Route path="/formunomejoradov2">
                <FormUnoMejoradoV2 />
              </Route>
              <Route path="/formdosmejoradov2">
                <FormDosMejoradoV2 />
              </Route>
              <Route path="/formtresmejoradov2">
                <FormTresMejoradoV2 />
              </Route>
              <Route path="/formdosmejoradov3">
                <FormDosMejoradoV3 />
              </Route>
              <Route path="/formunomejoradov3">
                <FormUnoMejoradoV3 />
              </Route>
              <Route path="/formtresmejoradov3">
                <FormTresMejoradoV3 />
              </Route>
              <Route path="/imagenesconformas">
                <ImagenesConFormas />
              </Route>
              <Route path="/contenido">
                <Contenido />
              </Route>
              <Route path="/contenidohorizontalunopagina">
                <ContenidoHorizontalUnoPagina />
              </Route>
              <Route path="/vidriopaginas">
                <VidrioPaginas />
              </Route>
            </Switch>
          </ContentStyled>
        </SectionStyled>
        <FooterStyled>
          <p>Curso basico de programacion @2021</p>
        </FooterStyled>
      </HomeStyled>
    </Router>
  );
};
export default Home;
