import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../assets/App.css";
// import "../assets/w3.css";
import TarjetasBasicas from "../paginas/TarjetasBasicas/TarjetasBasicas";
import TarjestasShadow from "../paginas/TarjetasShadow/TarjetasShadow";
import TarjetasAlbumAnimales from "../paginas/TarjetasAlbumAnimales/TarjetasAlbumAnimales";
import TarjetasAlbumPaisajes from "../paginas/TarjetasAlbumPaisaje/TarjetasAlbumPaisajes";
import TarjestasClimaCiudad from "../paginas/TarjetasClimaCiudad/TarjetasClimaCiudad";
import CarouselPagina from "../paginas/CarouselPagina/CarouselPagina";
import TarjetaContactoPagina from "../paginas/TarjetaContactoPagina/TarjetaContactoPagina";
import TarjetaContactoLlamadaPagina from "../paginas/TarjetaContactoLlamadaPagina/TarjetaContactoLLamadaPagina";


const App = () => {
  return (
    <Router>
      <div>
        <nav>
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
              <Link to="/tarjetacontactollamadapagina">Tarjeta Contacto Llamada Pagina</Link>
            </li>
          </ul>
        </nav>
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
            <CarouselPagina/>
          </Route>
          <Route path="/tarjetacontactopagina">
           <TarjetaContactoPagina/>
          </Route>
          <Route path="/tarjetacontactollamadapagina">
            <TarjetaContactoLlamadaPagina/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
