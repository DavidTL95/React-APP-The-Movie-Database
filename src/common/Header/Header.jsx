
import React, { useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'
import { TextInput } from '../TextInput/TextInput';

import { bringOneMovie } from '../../services/apiCalls';

import { useDispatch } from "react-redux";
import { addFindings, deleteFindings } from '../../pages/searchSlice';

import './Header.css'

export const Header = () => {

  const [searchInfo, setSearchInfo] = useState("");

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

        <div className='contenedorCentro'>
          <p className='title'>Movie Town🎬</p>
        </div>

        <div className='contenedorDer'>
              <TextInput className='search' name="search" type="text" placeholder="Search a movie..." state = {setSearchInfo}/>
        </div>
    </Container>
  )
}