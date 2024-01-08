import React from 'react'

export default function Login() {
    return (
        <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialogsm mx-auto mt-0 mb-0"
                style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", maxWidth: 50 + "rem" }}>
                <div className="w-100 d-flex justify-content-end d-none d-lg-flex"
                    style={{ marginBottom: 1 + "rem", marginLeft: 1 + "rem", cursor: "pointer" }}>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <img src="./images/cancel.png" alt="" />
                    </button>
                </div>
                <div className="modal-content">
                    <div className="modal-header d-none d-lg-block " style={{ background: "#EFFFF4" }}>
                        <p className="modal-title text-success fw-medium px-3" id="loginModalLabel">Let's learn, share& inspire each other
                            with our passion for computer engineering. Sign up now 🤘🏼</p>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="modal-body" style={{ padding: 2 + "rem" }}>
                            <form id="loginForm">
                                <div className="mb-3">
                                    <div className="d-flex flex-row justify-content-between align-items-start">
                                        <label for="login-username" className="form-label fs-3 fw-bolder pb-2">Sign In</label>
                                        <button type="button" className="border-0 bg-white d-md-none" data-bs-dismiss="modal">
                                            <img src="./images/Group3.png" alt="" />
                                        </button>
                                    </div>
                                    <input type="email" className="form-control" id="login-username" placeholder="Email" />
                                    <input type="password" className="form-control" id="login-password" placeholder="Password" />
                                </div>
                                <div className="d-flex flex-row justify-content-between w-100 d-md-none">
                                    <button type="submit"
                                        className="btn btn-primary w-100 rounded-pill mb-4 s50-50">Login</button>
                                    <div className="d-flex w-50 "
                                        style={{ justifyContent: "end", alignItems: "baseline", display: "flex", textAlign: "end" }}>
                                        <a href="#" data-bs-toggle="modal" data-bs-dismiss="modal"
                                            data-bs-target="#registerModal" className="s50-50">or, Sign In</a>
                                    </div>
                                </div>
                                <button type="submit"
                                    className="btn btn-primary w-100 rounded-pill mb-4 s50-50 d-none d-lg-block ">Login</button>
                                <button type="submit" class="btn border w-100 mb-2 px-0"><img style={{ paddingTop: 0.4 + "rem",paddingBottom: 0.4+"rem" }} src="./images/f_logo_RGB-Blue_1024.png" alt=""/> Sign in with Facebook</button>
                                <button type="submit" class="btn border w-100 mb-2 px-0"><img style={{ paddingTop: 0.4 + "rem",paddingBottom: 0.4+"rem" }} src="./images/google.png" alt=""/> Sign in with Google</button>
                                <div className="w-100 d-flex justify-content-center align-items-center">
                                    <a href="" className="text-decoration-none p-3 text-black">
                                        Forget Password?
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div className="p-3 d-none d-lg-block">
                            <p>Don’t have an account yet?<a href="#" data-bs-toggle="modal" data-bs-dismiss="modal"
                                data-bs-target="#registerModal" className="text-decoration-none">Create new for free!</a>
                            </p>
                            <img className="hei-dis" src="./images/atg_illustration.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
