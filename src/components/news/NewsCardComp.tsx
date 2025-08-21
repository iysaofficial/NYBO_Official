import Link from "next/link"

const NewsCardComp = () =>{
    return(
        <>
        <section>
        <br />
        <br />
        <br />
        <br />
        <section className="post news-container news-section">
            <div className="post-box">
                <Link href="/NewsContentPage1">
                <img src="./assets/images/news/news1.jpg" alt="" className="post-img"/>
                <h2 className="category">IYBO NYBO</h2>
                <Link href="/NewsContentPage1" className="post-title">National Youth Biology Olympiad Perdana dan International Youth Biology Olympiad ke-3 Sukses Terlaksana Secara Full Online</Link>
                <span className="post-date">7 Mei 2024</span>
                <p className="post-decription">DEPOKPOS – Kalian sudah tahu kan bahwa IYSA kini juga menyelenggarakan event Olimpiade tingkat Nasional dan Internasional? Nah di bulan April ini, IYSA kembali menyelenggarakan Olimpiade Biology full online tingkat Internasional yaitu International Youth Biology Olympiad (IYBO) untuk yang kedua kalinya dan menggelar juga tingkat nasionalnya yang diperuntukkan bagi peserta nasional saja dengan nama National Youth Biology Olympiad (NYBO).</p>

                <div className="profile">
                    <img src="./assets/images/news/Logo Profile News1.png" alt="" className="profile-img"/>
                    <span className="profile-name">Depokpos</span>
                </div>
                </Link>
            </div>
        </section>
        <br />
        <br />
        <br />
        </section>
        </>
    )
}

export default NewsCardComp