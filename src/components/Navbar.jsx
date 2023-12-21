import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white position-sticky top-0 " style={{ zIndex: 4 }}>
            <div className="container-fluid px-5">
                <a className="navbar-brand d-none d-lg-block" href="#"><img src="./images/whole.png" alt="" /></a>
                <form action="" className="d-flex flex-row d-none d-lg-block rounded-pill" style={{ backgroundColor: "#F2F2F2" }}>
                    <img className="p-3" src="./images/Vector.png" alt="" />
                    <input className="tp border-0 rounded-pill" type="text"
                        style={{ width: 25 + "rem", background: "#F2F2F2", outline: "none" }}
                        placeholder="Search for your favourite groups in ATG" aria-label="Search" />
                </form>
                <div className="d-none d-lg-block">
                    Create Account. <a href="" data-bs-toggle="modal" data-bs-target="#registerModal" className="text-decoration-none">IT's free <img src="./images/arrow.png" alt="" /></a>
                </div>
                <div className="d-flex d-md-none hei-dis gap-2 justify-content-end">
                    <img src="./images/Rectangle.png" alt="" />
                    <img src="./images/Oval.png" alt="" />
                    <img src="./images/Path.png" alt="" />
                </div>
            </div>
        </nav>
    )
}
