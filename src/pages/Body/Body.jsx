
import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Detail } from "../Detail/Detail"
import { TopPeliculas } from "../Top/TopPeliculas"
import { HomeSeries } from "../HomeSeries/HomeSeries"
import { TopSeries } from "../TopSeries/TopSeries"
import { DetailSeries } from "../DetailSeries/DetailSeries"


export const Body = () => {
    return(
        <>
            <Routes>
                <Route path="*" element={<Navigate to ="/"/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="/topPeliculas" element={<TopPeliculas/>}/>
                <Route path="/homeSeries" element={<HomeSeries/>}/>
                <Route path="/topSeries" element={<TopSeries/>}/>
                <Route path="/detailSeries" element={<DetailSeries/>}/>
            </Routes>
        </>
    )
}