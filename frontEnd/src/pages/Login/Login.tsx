import "./Login.css";

import { useForm } from "react-hook-form";

function sendUser(info: any) {
    console.log(info);
}

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => sendUser(data);
    console.log(errors);

    return (
        <>
            <div className="loginWrap">
                <div className="topLogin"></div>
                <div className="formWrap">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="item">
                            <label htmlFor="">Username</label>
                            <input
                                type="text"
                                placeholder="Username"
                                {...register("Username", {
                                    required: true,
                                    maxLength: 80,
                                })}
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="">Password</label>
                            <input
                                type="text"
                                placeholder="Password"
                                {...register("Password", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                        </div>
                        <div className="item">
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
