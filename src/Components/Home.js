import React from "react";


const Home = () => {
    return (
        <div className="hero">
            <div className="card text-white border-0">

                <img src="/assets/bg.jpg" class="card-img" alt="Background" />

                <div style={{ marginTop: "30px" }} />
                <img src={require("../assets/slide_8.jpg")}class="card-img" alt="" />
                <div className="card-img-overlay">
                    <div className="container">
                    <div style={{marginBottom: "1px"}} >
                        <p className="card-text">
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Home;
