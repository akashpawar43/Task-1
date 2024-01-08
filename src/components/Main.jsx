import React from 'react'

export default function Main() {
    return (
        <section className="nav2">
            <div className="container flex-column">
                <div className="d-flex flex-row justify-content-between border-bottom d-none d-lg-flex position-sticky top-0 "
                    style={{ zIndex: 3, paddingTop: 4.5 + "rem", backgroundColor: "white" }}>
                    <ul className="d-flex flex-row navbar-nav gap-3">
                        <li className="nav-item border-bottom border-black">
                            <a className="nav-link" href="#">All Post(32)</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Article</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Event</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Job</a>
                        </li>
                    </ul>
                    <div className="d-flex gap-3 pb-2 ">
                        <div className="dropdown ">
                            <button className="btn btn-secondary dropdown-toggle fw-medium border-0" type="button"
                                data-bs-toggle="dropdown" style={{ background: "#EDEEF0", color: "black", paddingTop: "0.5rem", paddingRight: 1 + "rem", paddingBottom: 0.5 + "rem", paddingLeft: 1 + "rem" }} aria-expanded="false">
                                Write Post
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-primary"><img src="./images/group.png" alt="" /> Join
                            Group</button>
                    </div>
                </div>
                <ul className="d-flex d-md-none navbar-nav justify-content-between flex-row align-items-center pt-4">
                    <li>Posts(363)</li>
                    <div className="dropdown ">
                        <button className="btn btn-secondary dropdown-toggle fw-medium border-0" type="button"
                            data-bs-toggle="dropdown" style={{ background: "#EDEEF0", color: "black", paddingTop: "0.5rem", paddingRight: 1 + "rem", paddingBottom: 0.5 + "rem", paddingLeft: 1 + "rem" }}
                            aria-expanded="false">
                            Filter: All
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </ul>
                <div className="posts d-flex flex-row">
                    <div className="d-flex flex-row w-75 pt-4 gap-3 w-full">
                        <div className="d-flex flex-column gap-3 w-full">
                            <div className="d-flex flex-column border">
                                <img src="./images/Rectangle-5-2.png" alt="" />
                                <div className="p-3">
                                    <div>✍️ Article</div>
                                    <div className="d-flex flex-row">
                                        <p className="fs-3 fw-semibold" style={{ color: "black" }}>What if famous brands had regular
                                            fonts? Meet RegulaBrands!</p>
                                        <div className="dropdown">
                                            <button className="btn bg-white fw-medium border-0" type="button"
                                                data-bs-toggle="dropdown"
                                                style={{ background: "#EDEEF0", color: "black", paddingTop: "0.5rem", paddingRight: 1 + "rem", paddingBottom: 0.5 + "rem", paddingLeft: 1 + "rem" }}
                                                aria-expanded="false">
                                                <img src="./images/baseline-more_vert-24px.svg" alt="" />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="fs-4">I’ve worked in UX for the better part of a decade. From now on, I plan
                                        to rei…</p>
                                    <div className="d-flex flex-row justify-content-between " style={{ height: 3 + "rem" }}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <img src="./images/Rectangle-3-4.png" alt="" />
                                            <div className="p-3">Sarthak Kamra</div>
                                        </div>
                                        <div class="d-flex flex-row justify-content-center align-items-center gap-4">
                                            <div class="hei-dis d-flex justify-content-center align-items-center">
                                                <div><img src="./images/visibility_24px_outlined.svg" alt="" /> 1.4k views</div>
                                            </div>
                                            <div class="p-2 px-3 rounded" style={{background: "#EDEEF0"}}>
                                                <img src="./images/baseline-share-24px.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                            <div className="d-flex flex-column border">
                                <img src="./images/Rectangle-5.png" alt="" />
                                <div className="p-3">
                                    <div>🔬️ Education</div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="fs-3 fw-semibold" style={{ color: "black" }}>Tax Benefits for Investment under
                                            National Pension Scheme launched by Government</p>
                                        <div className="dropdown">
                                            <button className="btn bg-white fw-medium border-0" type="button"
                                                data-bs-toggle="dropdown"
                                                style={{ background: "#EDEEF0", color: "black", paddingTop: 0.5 + "rem", paddingRight: 0 + "rem", paddingBottom: 0.5 + "rem", paddingLeft: 0 + "rem" }}
                                                aria-expanded="false">
                                                <img src="./images/baseline-more_vert-24px.svg" alt="" />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="fs-4">I’ve worked in UX for the better part of a decade. From now on, I plan
                                        to rei…</p>
                                    <div className="d-flex flex-row justify-content-between " style={{ height: 3 + "rem" }}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <img src="./images/Rectangle-3-1.png" alt="" />
                                            <div className="p-3">Sarah West</div>
                                        </div >
                                        <div class="d-flex flex-row justify-content-center align-items-center gap-4">
                                            <div class="hei-dis d-flex justify-content-center align-items-center">
                                                <div><img src="./images/visibility_24px_outlined.svg" alt="" /> 1.4k views</div>
                                            </div>
                                            <div class="p-2 px-3 rounded" style={{background: "#EDEEF0"}}>
                                                <img src="./images/baseline-share-24px.png" alt="" />
                                            </div>
                                        </div>
                                    </div >
                                </div >
                            </div >
                            <div className="d-flex flex-column border">
                                <img src="./images/Rectangle-5-1.png" alt="" />
                                <div className="p-3">
                                    <div>🗓️ Meetup</div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="fs-3 fw-semibold" style={{ color: "black" }}>Finance & Investment Elite Social
                                            Mixer @Lujiazui</p>
                                        <div className="dropdown">
                                            <button className="btn bg-white fw-medium border-0" type="button"
                                                data-bs-toggle="dropdown"
                                                style={{ background: "#EDEEF0", color: "black", paddingTop: 0.5 + "rem", paddingRight: 0 + "rem", paddingBottom: 0.5 + "rem", paddingLeft: 0 + "rem" }}
                                                aria-expanded="false">
                                                <img src="./images/baseline-more_vert-24px.svg" alt="" />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className='d-flex flex-row' style={{ textAlign: "center", justifyContent: "start", alignItems: "baseline" }}>
                                            <img style={{ paddingRight: .5 + "rem" }} src="./images/cal.png" alt="" />
                                            <p>Fri, 12 Oct, 2018</p>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <img className='pt-0 pb-3' style={{ paddingRight: 0.5 + "rem", paddingLeft: 1 + "rem" }} src="./images/location.png" alt="" />
                                            <p>Ahmedabad, India</p>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-outline-secondary mb-3"
                                        style={{ width: "100%", color: "#E56135" }}>Visit Website</button>
                                    <div className="d-flex flex-row justify-content-between " style={{ height: 3 + "rem" }}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <img src="./images/Rectangle-3-2.png" alt="" />
                                            <div className="p-3">Ronal Jones</div>
                                        </div>
                                        <div class="d-flex flex-row justify-content-center align-items-center gap-4">
                                            <div class="hei-dis d-flex justify-content-center align-items-center">
                                                <div><img src="./images/visibility_24px_outlined.svg" alt="" /> 1.4k views</div>
                                            </div>
                                            <div class="p-2 px-3 rounded" style={{background: "#EDEEF0"}}>
                                                <img src="./images/baseline-share-24px.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column border">
                                <div className="p-3">
                                    <div>💼️ Job</div>
                                    <div className="d-flex flex-row justify-content-between ">
                                        <p className="fs-3 fw-semibold" style={{ color: "black" }}>Software Developer</p>
                                        <div className="dropdown">
                                            <button className="btn bg-white fw-medium border-0" type="button"
                                                data-bs-toggle="dropdown"
                                                style={{ background: "#EDEEF0", color: "black", paddingTop: 0.5 + "rem", paddingRight: 0 + "rem", paddingBottom: 0.5 + "rem", paddingLeft: 0 + "rem" }}
                                                aria-expanded="false">
                                                <img src="./images/baseline-more_vert-24px.svg" alt="" />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className='d-flex flex-row'>
                                            <img style={{ paddingBottom: 1 + "rem", paddingRight: .5 + "rem" }} src="./images/outline-work_outline-24px.png" alt="" />
                                            <p>Innovaccer Analytics Private Ltd.</p>
                                        </div>
                                        <div className='d-flex flex-row'>
                                            <img className='pt-0 pb-3' style={{ paddingRight: 0.5 + "rem", paddingLeft: 1 + "rem" }} src="./images/location.png" alt="" />
                                            <p>Noida, India</p>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-outline-secondary mb-3"
                                        style={{ width: "100%", color: "#02B875" }}>Apply on Timesjobs</button>
                                    <div className="d-flex flex-row justify-content-between " style={{ height: 3 + "rem" }}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <img src="./images/Rectangle-3-3.png" alt="" />
                                            <div className="p-3">Joseph Gray</div>
                                        </div>
                                        <div class="d-flex flex-row justify-content-center align-items-center gap-4">
                                            <div class="hei-dis d-flex justify-content-center align-items-center">
                                                <div><img src="./images/visibility_24px_outlined.svg" alt="" /> 1.4k views</div>
                                            </div>
                                            <div class="p-2 px-3 rounded" style={{background: "#EDEEF0"}}>
                                                <img src="./images/baseline-share-24px.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="d-flex flex-column d-none d-lg-flex w-25 position-sticky top-2"
                        style={{ paddingLeft: 4 + "rem", zIndex: 2, paddingTop: 2 + "rem", backgroundColor: "white" }}>
                        <div className="d-flex flex-row border-bottom justify-content-between">
                            <div className="d-flex flex-row" style={{ height: 1.5 + "rem", marginTOp: 2 + "rem", marginRight: 0 + "rem", marginBottom: 1 + "rem", marginLeft: 0 + "rem" }}>
                                <img src="./images/location.png" alt="" />
                                <p>Noida, India</p>
                            </div>
                            <div style={{ height: 1.5 + "rem", marginTOp: 2 + "rem", marginRight: 0 + "rem", marginBottom: 1 + "rem", marginLeft: 0 + "rem" }}>
                                <img src="./images/pencil.png" alt="" />
                            </div>
                        </div>
                        <div className="d-flex flex-row gap-1">
                            <div>
                                <img src="./images/not.png" alt="" />
                            </div>
                            <div className="pt-1">
                                <p className="" style={{ fontSize: .9 + "rem" }}>Your location will help us serve better and extend a
                                    personalised experience.</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row gap-1 mt-4">
                            <div style={{ height: 1.5 + "rem" }}>
                                <img src="./images/twotone-thumb_up-24px.png" alt="" />
                            </div>
                            <div>
                                <p>Recommended Groups</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row pb-3 justify-content-between">
                            <div className="d-flex flex-row gap-2">
                                <img src="./images/Rectangle-6.png" alt="" style={{ height: 2.5 + "rem" }} />
                                <div className="p-1">
                                    Leisure
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <button className="border-0 rounded-pill" style={{ paddingTop: 0.2 + "rem", paddingRight: 1 + "rem", paddingBottom: 0.2 + "rem", paddingLeft: 1 + "rem" }}>Follow</button>
                            </div>
                        </div>
                        <div className="d-flex flex-row pb-3 justify-content-between">
                            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                <img src="./images/Rectangle-6-1.png" alt="" style={{ height: 2.5 + "rem" }} />
                                <div className="p-1">
                                    Activism
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <button className="border-0 rounded-pill" style={{ paddingTop: 0.2 + "rem", paddingRight: 1 + "rem", paddingBottom: 0.2 + "rem", paddingLeft: 1 + "rem" }}>Follow</button>
                            </div>
                        </div>
                        <div className="d-flex flex-row pb-3 justify-content-between">
                            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                <img src="./images/Rectangle-6-2.png" alt="" style={{ height: 2.5 + "rem" }} />
                                <div className="p-1">
                                    MBA
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <button onclick="changeColor()" className="border-0 rounded-pill"
                                    style={{ paddingTop: 0.2 + "rem", paddingRight: 1 + "rem", paddingBottom: 0.2 + "rem", paddingLeft: 1 + "rem" }}>Follow</button>
                            </div>
                        </div>
                        <div className="d-flex flex-row pb-3 justify-content-between">
                            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                <img src="./images/Rectangle-6-3.png" alt="" style={{ height: 2.5 + "rem" }} />
                                <div className="p-1">
                                    Philosophy
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <button className="follow border-0 rounded-pill" style={{ paddingTop: 0.2 + "rem", paddingRight: 1 + "rem", paddingBottom: 0.2 + "rem", paddingLeft: 1 + "rem" }}>Follow</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end pt-4">
                            <a href="#" className="text-decoration-none">
                                See more...
                            </a>
                        </div>
                    </div >
                </div >
            </div >
        </section >
    )
}
