import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h3 className="mt-8 text-xl font-semibold">Find Us On</h3>
            <div className="join flex join-vertical *:bg-base-100 my-4">
                <button className="justify-start btn join-item"><FaFacebook></FaFacebook> Facebook</button>
                <button className="justify-start btn join-item"><FaTwitter></FaTwitter> Twitter</button>
                <button className="justify-start btn join-item"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;