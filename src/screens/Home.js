import React from 'react'
import MeatCover from '../components/Images/meat.png'
import Meat1 from '../components/Images/Meat1.jpeg'
import Meat2 from '../components/Images/Meat2.jpeg'
import Meat3 from '../components/Images/Meat3.jpeg'
import Meat5 from '../components/Images/Meat5.jpeg'
import Meat4 from '../components/Images/Meat4.jpeg'
import Meat6 from '../components/Images/Meat6.jpeg'
import Meat7 from '../components/Images/Meat7.jpeg'
import Meat8 from '../components/Images/Meat8.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <section  >

                <h1 style={{ color: "teal", fontSize: "3rem", fontWeight: "bolder" }}>ATRS HALAL MEAT AND GROCERY LIMTED</h1>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Bucher Shop</p>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Open Today until 7.30pm</p>
                <div>
                    <img src={MeatCover} width="80%" />
                </div>

            </section>
            <section>
                <div style={{ textAlign: "center", marginTop: "5vh", marginBottom: "5vh" }} ><h3 style={{ fontSize: "1.9rem", fontWeight: "bolder" }}>Testimonials</h3>
                    <h3>_________</h3></div>
                <div className="Testimonials" style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div style={{ width: "20%" }}>
                        <p><span style={{ color: "teal", fontSize: "2rem", margin: "2%" }}>
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                        </span>A Year ago</p>
                        <p>"Quality 5 Cleanliness 5 Friendly 5 Fresh meat 5 I'm so glad I found this place. It's hard to find lean meat and fresh chicken but there quality I'd say is the best out of all butchers that I've been to. I would 100% recommend these butchers."</p>
                        <h3 style={{ color: "teal", fontSize: "1.5rem", fontWeight: "bolder" }}>- John</h3>
                    </div>
                    <div style={{ width: "20%" }}>
                        <p><span style={{ color: "teal", fontSize: "2rem", margin: "2%" }}><FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" /></span>2 months ago</p>
                        <p>"Excellent find, consistently good quality meat and very reasonable prices. The owners are friendly and the variety of other products make this shop a real winner."</p>
                        <h3 style={{ color: "teal", fontSize: "1.5rem", fontWeight: "bolder" }}>- Farrah ilyas</h3>
                    </div>
                    <div style={{ width: "20%" }}>
                        <p><span style={{ color: "teal", fontSize: "2rem", margin: "2%" }}><FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" />
                            <FontAwesomeIcon icon={faStar} size="xs" /></span> 3 months ago</p>
                        <p>"Always a very good service and they cut the meat and chicken really nicely. Price is very good too"</p>
                        <h3 style={{ color: "teal", fontSize: "1.5rem", fontWeight: "bolder" }}>- jenna Marks</h3>
                    </div>
                </div>
            </section>
            <section style={{ marginTop: "10vh" }}>
                <div>
                    <h3 style={{ fontSize: "1.9rem", fontWeight: "bolder" }}>Gallary</h3>
                    <h3>_________</h3>
                </div>
                <div classname="image-grid" style={{ display: "grid", gridTemplateColumns: "auto auto auto", padding: "10%", gridGap: "2rem", paddingTop: "1%" }} >
                    <div style={{ width: "100%", height: "50vh", backgroundColor: "teal" }}  >
                        <img src={Meat1} width="100%" height="100%" />
                    </div>
                    <div style={{ width: "100%", height: "50vh", backgroundColor: "teal" }}  >
                        <img src={Meat2} width="100%" height="100%" />
                    </div>
                    <div style={{ width: "100%", height: "50vh", backgroundColor: "teal" }}  >
                        <img src={Meat7} width="100%" height="100%" />
                    </div>
                    <div style={{ width: "100%", height: "50vh", backgroundColor: "teal" }}  >
                        <img src={Meat4} width="100%" height="100%" />
                    </div>
                    <div style={{ width: "100%", height: "50vh", backgroundColor: "teal" }}  >
                        <img src={Meat5} width="100%" height="100%" />
                    </div>
                    <div style={{ width: "100%", height: "50vh", backgroundColor: "teal" }}  >
                        <img src={Meat6} width="100%" height="100%" />
                    </div>
                    <div style={{ width: "100%", height: "50vh", backgroundColor: "teal" }}  >
                        <img src={Meat7} width="100%" height="100%" />
                    </div>
                    <div style={{ width: "100%", height: "50vh", backgroundColor: "teal" }}  >
                        <img src={Meat8} width="100%" height="100%" />
                    </div>
                    <div style={{ width: "100%", height: "50vh", backgroundColor: "teal" }}  >
                        <img src={Meat3} width="100%" height="100%" />
                    </div>


                </div>
            </section>
            <footer style={{ borderTop: " solid grey", width: "80%", marginLeft: "10%", display: "flex", justifyContent: "space-evenly" }} >
                <h3>Report Abuse</h3>
                <h3>ATRS HALAL MEAT AND GROCERY LIMTED </h3>

            </footer>
        </div>
    )
}

export default Home
