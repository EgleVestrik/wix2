import React from 'react'
import Introduction from './Introduction';
import Descripton from './Description';
import Templates from './Templates';
import Editor from './Editor';
import Tools from './Tools';
import Business from './Business';
import How from './How';
import Why from './Why';
import Blog from './Blog';
import FAQ from './FAQ';
import About from './About';


function Home(){
            // Leht jaotatud Tükkideks

            /*
            <navbar> Tanel
            <Introduction />  Tanel
            <Descripton /> Tanel
            <Templates /> Tanel
            <Editor />  Egle
            <Tools /> Tanel
            <Business /> Egle
            <How /> Egle
            <Why /> Egle 
            <Blog /> Egle
            <FAQ /> Egle
            <About />  Egle
            */
    return(
        <>
            <Introduction /> 
            <Descripton />
            <Templates />
            <Editor />  
            <Tools />
            <Business />
            <How />
            <Why /> 
            <Blog />
            <FAQ />
            <About />
        </>
    )
}

export default Home