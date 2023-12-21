import React from 'react'

export default function Register() {
    return (
        <div className="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialogsm mx-auto mt-0 mb-0"
                style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", maxWidth: 55 + "rem" }}>
                <div className="w-100 d-flex justify-content-end d-none d-lg-flex"
                    style={{ marginBottom: 1 + "rem", marginLeft: 1 + "rem", cursor: "pointer" }}>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <img src="./images/cancel.png" alt="" />
                    </button>
                </div>
                <div className="modal-content">
                    <div className="modal-header d-none d-lg-block" style={{ background: "#EFFFF4" }}>
                        <p className="modal-title text-success fw-medium px-3" id="loginModalLabel">Let's learn, share
                            & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="modal-body w-50" style={{ padding: 2 + "rem" }}>
                            <form id="loginForm">
                                <div className="mb-3">
                                    <div className="d-flex flex-row justify-content-between align-items-start">
                                        <label for="login-username" className="form-label fs-3 fw-bolder pb-2">Create
                                            Account</label>
                                        <button type="button" className="border-0 bg-white d-md-none" data-bs-dismiss="modal">
                                            <img src="./images/Group3.png" alt="" />
                                        </button>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <input type="text w-50" className="form-control" id="username" placeholder="First Name" />
                                        <input type="text w-50" className="form-control" id="username2" placeholder="Last Name" />
                                    </div>
                                    <input type="email" className="form-control border" id="login-username" placeholder="Email" />
                                    <input type="password" className="form-control" id="login-password" placeholder="Password" />
                                    <input type="password" className="form-control" id="login-Cpassword"
                                        placeholder="Confirm Password" />
                                </div>
                                <div className="d-flex flex-row justify-content-between w-100 d-md-none">
                                    <button type="submit" className="btn btn-primary w-100 rounded-pill mb-4 s50-50">Create
                                        Account</button>
                                    <div className="d-flex w-50 "
                                        style={{ justifyContent: "end", alignItems: "baseline", display: "flex", textAlign: "end" }}>
                                        <a href="#" data-bs-toggle="modal" data-bs-dismiss="modal"
                                            data-bs-target="#loginModal" className="s50-50">or, Sign In</a>
                                    </div>
                                </div>
                                <button type="submit"
                                    className="btn btn-primary w-100 rounded-pill mb-4 s50-50 d-none d-lg-block ">Create
                                    Account</button>
                                <button type="submit" class="btn border w-100 mb-2 px-0"><img style={{ paddingTop: 0.4 + "rem", paddingBottom: 0.4 + "rem" }} src="./images/f_logo_RGB-Blue_1024.png" alt="" /> Sign in with Facebook</button>
                                <button type="submit" class="btn border w-100 mb-2 px-0"><img style={{ paddingTop: 0.4 + "rem", paddingBottom: 0.4 + "rem" }} src="./images/google.png" alt="" /> Sign in with Google</button>
                            </form>
                        </div>
                        <div className="p-3 w-50 d-flex flex-column d-none d-lg-flex">
                            <p style={{ fontSize: ".9rem" }}>Don’t have an account yet?<a href="#" data-bs-toggle="modal"
                                data-bs-dismiss="modal" data-bs-target="#loginModal" className="text-decoration-none">Create
                                new for free!</a></p>
                            <img className="w-100" src="./images/atg_illustration.png" alt="" />
                            <p style={{ fontSize: "0.7rem" }}>By signing up, you agree to our Terms & conditions, Privacy policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
