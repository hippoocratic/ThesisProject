import React from 'react'
import HeroSection from '../HeroSection'
import {homeObjOne} from './Data';
import {homeObjTwo} from './Data';

function Home() {
    return (
        <>
           <HeroSection {...homeObjOne}/>
           <HeroSection {...homeObjTwo}/>
        </>
    );
}
export default Home ;
