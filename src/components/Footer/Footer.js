import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="d-flex ">
                    <div className="d-flex flex-column p-5">
                        <img src={require("../../assets/logos/logo-footer.svg")} />
                        <div>
                            <img src={require("../../assets/icons/icon-1.png")} width="30" height="30" class="d-inline-block align-top" alt="" />
                            <address className="fs-3 d-inline">
                                341 Londonderry Road, Istanbul Türkiye
                            </address>
                        </div>
                        <div>
                            <img src={require("../../assets/icons/icon-2.png")} width="30" height="30" class="d-inline-block align-top" alt="" />
                            <span className="fs-3 d-inline">
                                aciktim@teknolojikyemekler.com
                            </span>
                        </div>
                        <div>
                            <img src={require("../../assets/icons/icon-3.png")} width="30" height="30" class="d-inline-block align-top" alt="" />
                            <span className="fs-3 d-inline">+90 216 123 45 67</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column mt-5 p-5">
                        <h3 className="fs-2 pb-5">Sıccacık Menuler</h3>
                        <a className="fs-3 text-decoration-none text-white">Terminal Pizza</a>
                        <a className="fs-3 text-decoration-none text-white">5 Kişilik Hackathlon Pizza</a>
                        <a className="fs-3 text-decoration-none text-white">useEffect Tavuklu Pizza</a>
                        <a className="fs-3 text-decoration-none text-white">Beyaz  Console Frosty</a>
                        <a className="fs-3 text-decoration-none text-white">Testler Geçti Mutlu Burger</a>
                        <a className="fs-3 text-decoration-none text-white">Position Absolute Acı Burger</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
