import React from 'react';

const Portfolio = () => {
    return (
        <div className="font-montserrat">
        <div className="flex flex-col items-center justify-center mt-8 md:mt-36 text-slate-50 z-10">
            <h1 className="text-5xl md:text-9xl font-bold tracking-wider mb-4 md:mb-8 mt-2 md:mt-4">TALYA ÇOLAK</h1>
            <p className="text-lg md:text-4xl mb-4 md:mb-8 font-medium">Full Stack Developer</p>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 mb-4 md:mb-10 mt-2 md:mt-4">
                <a href="https://github.com/talyacl" target="_blank" rel="noopener noreferrer" className="w-12 h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.256c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.306 3.495.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.334-5.467-5.931 0-1.31.47-2.381 1.236-3.221-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.625-5.479 5.921.431.372.815 1.102.815 2.222v3.293c0 .321.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/talya-%C3%A7olak-6b5678314/" target="_blank" rel="noopener noreferrer" className="w-12 h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.292c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.292h-3v-5.504c0-1.314-.026-3.004-1.833-3.004-1.835 0-2.117 1.433-2.117 2.914v5.594h-3v-10h2.877v1.367h.041c.4-.755 1.379-1.551 2.837-1.551 3.033 0 3.594 1.995 3.594 4.59v5.594z"/></svg>
                </a>
                <a href="mailto:talyacolakt@gmail.com" className="w-12 h-12">
                    <svg height="50px" viewBox="0 0 24 24" width="50px" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M21,7.38246601 L21,5 L3,5 L3,7.38199365 L12.0000224,11.8824548 L21,7.38246601 Z M21,9.61853399 L11.9999776,14.1185452 L3,9.61810635 L3,19 L21,19 L21,9.61853399 Z M3,3 L21,3 C22.1045695,3 23,3.8954305 23,5 L23,19 C23,20.1045695 22.1045695,21 21,21 L3,21 C1.8954305,21 1,20.1045695 1,19 L1,5 C1,3.8954305 1.8954305,3 3,3 Z"/></svg>                
                </a>
                <a href="/talya_colak_resume.pdf" download="Talya_Colak_Resume.pdf" className="w-12 h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="white"><path d="M480-315.33 284.67-510.67l47.33-48L446.67-444v-356h66.66v356L628-558.67l47.33 48L480-315.33ZM226.67-160q-27 0-46.84-19.83Q160-199.67 160-226.67V-362h66.67v135.33h506.66V-362H800v135.33q0 27-19.83 46.84Q760.33-160 733.33-160H226.67Z"/></svg>
                </a>
            </div>


            <footer className="text-center py-4 mt-10 md:mt-36">
                <p className="text-sm md:text-base">&copy; 2024 Talya Çolak. All rights reserved.</p>
            </footer>
            </div>
        </div>
    );
};

export default Portfolio;
