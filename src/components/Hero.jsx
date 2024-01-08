export default function Hero() {
    return (
        <section className="Hero-section">
            <div className="hero position-relative">
                <div className="hei-dis" style={{position: "absolute",background: "black", opacity: 0.6}}>
                </div>
                <div className="position-absolute hei-dis text-start pb5">
                    <div className="container hei-dis d-flex justify-content-end align-items-start flex-column space">
                        <div className="d-flex d-md-none justify-content-between" style={{width: "100%"}}>
                            <img className="p-1" src="./images/arrow_back.png" alt=""/>
                                <button type="button" className="btn btn-outline-light" data-bs-toggle="modal"
                                    data-bs-target="#registerModal">Join Group</button>
                        </div>
                        <div>
                            <div className="fs-2 fw-bold" style={{color: "white"}}>Computer Engineering</div>
                            <p style={{color: "white"}}>142,765 Computer Engineers follow this</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
