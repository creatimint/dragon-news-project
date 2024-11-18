import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div>
            <h3 className="mb-4 text-xl font-semibold">Login with</h3>
            <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center btn"><FaGithub className="mr-2 text-lg"></FaGithub>Login with Github</button>
                <button className="flex items-center justify-center btn"><FaGoogle className="mr-2 text-lg"></FaGoogle>Login with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;