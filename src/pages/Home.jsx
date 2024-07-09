import "bootstrap/dist/css/bootstrap.min.css";

import MyImage from '../assets/img/moai.jpg'

function Home() {
    return (
        <div className="container justify-content-center">
            <div className="card my-5" style={{width: "18rem"}}>
                <img src={MyImage} className="card-img-top" alt="Profil"/>
                <div className="card-body">
                    <Name name="Natanael James Santoso" />
                    <NIM nim="A11.2021.13533" />
                </div>
            </div>
        </div>
    )
}

function Name(props) {
    return <p className="card-text">Nama : {props.name}</p>
}

function NIM(props) {
    return <p className="card-text">NIM : {props.nim}</p>
}

export default Home;