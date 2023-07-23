
import React, { useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'
import { TextInput } from '../TextInput/TextInput';

import { bringOneMovie } from '../../services/apiCalls';

import { useDispatch } from "react-redux";
import { addFindings, deleteFindings } from '../../pages/searchSlice';
import { useNavigate } from 'react-router-dom';

import './Header.css'

export const Header = () => {

  const [searchInfo, setSearchInfo] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(searchInfo){
      const bringData = setTimeout(() => {
        bringOneMovie(searchInfo)
        .then(
          res => {
            dispatch(addFindings({findings: res}))
          }
        )
        .catch(error => console.log(error))
      }, 750)
      return () => clearTimeout(bringData)
    }else{
      dispatch(deleteFindings({findings: []}))
    }
  },[searchInfo])

  return (
    <Container fluid className='contenedorHeader' xs={12} md={12} xl={12}>

        <div className='contenedorCentro' xs={6} md={6} xl={6}>
          <p onClick={() => navigate("/")} className='title'>Movie Town🎬</p>
        </div>
        <div className='contenedorBotones' xs={6} md={6} xl={6}>
            <button className="boton" onClick={() => navigate("/")}>Movies</button>
            <button className="boton" onClick={() => navigate("/topPeliculas")}>Top Movies</button>
            <button className="boton" onClick={() => navigate("/homeSeries")}>Series</button>
            <button className="boton" onClick={() => navigate("/topSeries")}>Top Series</button>
        </div>
        <div className='contenedorInput' xs={12} md={12} xl={12}>
            <TextInput className='search' name="search" type="text" placeholder="Search..." state = {setSearchInfo}/>
        </div>
    </Container>
  )
}