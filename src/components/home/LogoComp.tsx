const LogoComp = () =>{
    return(
        <>
        <section className="brand-logo-section">
        <div className="brand-logo-container">
            <h1>Diselenggarakan Oleh</h1>
            <div className="brand-logo">
                <ul>
                    <li>
                        <img src="/assets/images/logo/LogoIYSA.webp" alt=""/>
                    </li>
                    <li>
                        <img src="/assets/images/logo/LOGOAKTUARIA.png" alt=""/>
                    </li>
                </ul>
            </div>
            <br/>
            <h1>Didukung Oleh</h1>
            <div className="brand-logo">
                <ul>
                    <li>
                        <img src="/assets/images/logo/MIICA.png" alt=""/>
                    </li>
                    {/* <li>
                        <img src="./assets/images/MYSA.png" style={{height: "170px"}} alt=""/>
                    </li> */}
                </ul>
            </div>
        </div>
        </section>
        </>
    )
}

export default LogoComp