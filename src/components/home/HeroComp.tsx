import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section">
            <div className="hero-container">
                <img src="/assets/images/logo/NYBO.png" alt="" />
                <div className="hero-text">
                    <h1>National Youth Biology Olympiad</h1>
                    <p>Pendaftaran National Youth Biology Olympiad telah dibuka! Bergabunglah dengan acara bergengsi ini dan dapatkan pengalaman yang tak terlupakan!</p>
                    <br />
                    <Link href="#">Segera Hadir 2026</Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroComp