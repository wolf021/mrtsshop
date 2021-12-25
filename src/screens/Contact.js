import React from 'react'
import Map from '../components/Images/map.png'

const Contact = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <section>
                <div>
                    <h3>Contact Us</h3>
                    <h3>_________</h3>
                    <div>

                        <a href="https://www.google.com/maps/place/75+Edgware+Rd,+St+George's+Fields,+London+W2+2HZ,+UK/@51.515582,-0.1663489,17z/data=!4m13!1m7!3m6!1s0x48761acaafbe52e1:0x9df532b5e30f0d39!2s75+Edgware+Rd,+St+George's+Fields,+London+W2+2HZ,+UK!3b1!8m2!3d51.515582!4d-0.1641549!3m4!1s0x48761acaafbe52e1:0x9df532b5e30f0d39!8m2!3d51.515582!4d-0.1641549" >

                            <img src={Map} width="80%" />
                        </a>
                    </div>

                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "5vh", marginBottom: "5vh" }} >
                    <div >
                        <h3>Contact</h3>
                        <div style={{ backgroundColor: "teal", borderRadius: "0.5rem", color: "white", width: "auto", padding: "2%" }}>

                            <a style={{ textDecoration: "none", color: "white" }} href="tel:02079986852">
                                <h3>Contact</h3>

                            </a>
                        </div>

                        <p><strong>Tel:</strong>02079986852</p>
                        <p><strong>Mobile:</strong> 07404219570</p>

                        <a href="mailto: artshalalmeat@gmail.com" style={{ textDecoration: "none", color: "teal", fontSize: "1.3rem", fontWeight: "bold" }}>Send Email</a>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <div style={{ backgroundColor: "teal", borderRadius: "0.5rem", color: "white", width: "auto", padding: "2%", textDecoration: "none" }}>

                            <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com/maps/place/75+Edgware+Rd,+St+George's+Fields,+London+W2+2HZ,+UK/@51.515582,-0.1663489,17z/data=!4m13!1m7!3m6!1s0x48761acaafbe52e1:0x9df532b5e30f0d39!2s75+Edgware+Rd,+St+George's+Fields,+London+W2+2HZ,+UK!3b1!8m2!3d51.515582!4d-0.1641549!3m4!1s0x48761acaafbe52e1:0x9df532b5e30f0d39!8m2!3d51.515582!4d-0.1641549" >

                                <h3 >Get Directions</h3>
                            </a>
                        </div>
                        <p>75 Edgeware road London W2 2HZ</p>
                    </div>
                    <div>
                        <h3>Business Hourst</h3>
                        <p>Mon:	9:00 AM – 7:30 PM</p>
                        <p>Tue:	9:00 AM – 7:30 PM</p>
                        <p>Wed:	9:00 AM – 7:30 PM</p>
                        <p>Thu:	9:00 AM – 7:30 PM</p>
                        <p>Fri:	9:00 AM – 7:30 PM</p>
                        <p>Sat:	9:00 AM – 7:30 PM</p>
                        <p>Sun:	9:30 AM – 7:00 PM</p>

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

export default Contact
