import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import bokuNoHero3 from "../../assets/imagenes/imagenes-con-formas/BokuNoHero3.jpg";
import bokuNoHero2 from "../../assets/imagenes/imagenes-con-formas/BokuNoHero2.jpg";
import bokuNoHero1 from "../../assets/imagenes/imagenes-con-formas/BokuNoHero1.jpg";
import bokuNoHero from "../../assets/imagenes/imagenes-con-formas/BokuNoHero.jpg";
import imagen1 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-1.jpg";
import imagen2 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-2.jpg";
import imagen3 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-3.jpg";
import imagen4 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-4.jpg";
const ListaCuadriculadaAvanzada = () => {
  const tileData = [
    {
      img: bokuNoHero3,
      title: "BokuNoHero",
      author: "persona",
      featured: true,
    },
    {
      img: bokuNoHero2,
      title: "BokuNoHero",
      author: "persona",
      featured: true,
    },
    {
      img: bokuNoHero1,
      title: "BokuNoHero",
      author: "persona",
      featured: true,
    },
    {
      img: bokuNoHero,
      title: "BokuNoHero",
      author: "persona",
      featured: true,
    },
    {
      img: imagen1,
      title: "imagen1",
      author: "persona",
      featured: true,
    },
    {
      img: imagen2,
      title: "imagen2",
      author: "persona",
      featured: true,
    },
    {
      img: imagen3,
      title: "imagen3",
      author: "persona",
      featured: true,
    },
    {
      img: imagen4,
      title: "imagen4",
      author: "persona",
      featured: true,
    },
  ];
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    titleBar: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
        "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    icon: {
      color: "white",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${tile.title}`}
                  className={classes.icon}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default ListaCuadriculadaAvanzada;
