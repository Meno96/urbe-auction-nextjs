import { useForm } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import Cookies from "js-cookie"

export default function SignIn() {
    const router = useRouter()

    const csrfToken = Cookies.get("csrftoken")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [error, setErrors] = useState([])
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    const onSubmit = async (data) => {
        const username = data.username
        const email = data.email
        const password1 = data.password1
        const password2 = data.password2

        if (password1 !== password2) {
            setErrors(["The passwords do not match."])
        } else {
            const formData = new FormData()
            formData.append("username", username)
            formData.append("email", email)
            formData.append("password1", password1)
            formData.append("password2", password2)

            try {
                const response = await axios.post("/sign-up", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-CSRFToken": csrfToken,
                    },
                })

                if (response.data.success) {
                    router.push({
                        pathname: "/sign-in",
                        query: { message: `Account ${username} successfully created.` },
                    })
                } else {
                    let errorMessages = response.data.messages.map((message) => message.message)
                    setErrors(errorMessages)
                    console.log("Check that you have filled in all the required fields correctly.")
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

    const toggleShowPassword1 = () => {
        setShowPassword1((prevState) => !prevState)
    }
    const toggleShowPassword2 = () => {
        setShowPassword2((prevState) => !prevState)
    }

    return (
        <div className="w-[100%] h-[100vh] flex flex-col">
            <div className="h-[100%] flex flex-col justify-center items-center">
                <div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-[360px] p-4 transition duration-700 text-gray-900 dark:text-gray-400 dark:bg-slate-800 border-4 border-solid border-green-600 rounded-2xl"
                    >
                        <p className="text-xl text-slate-500 mt-2">Sign Up!</p>
                        <div className="relative form-group my-7">
                            <input
                                type="text"
                                id="username"
                                placeholder=" "
                                className={`rounded-2xl w-[100%] bg-transparent border hover:border-sky-600 transition duration-500 p-2 px-4 form-control focus:outline-none focus:ring-0 focus:border-sky-600 peer autofill:bg-transparent ${
                                    errors.username ? "is-invalid border-red-500" : ""
                                }`}
                                {...register("username", { required: true })}
                            />
                            {errors.username && (
                                <strong className="invalid-feedback text-red-500 ml-5 text-[12px] font-sans font-medium">
                                    This field is required
                                </strong>
                            )}
                            <label
                                htmlFor="username"
                                for="username"
                                className={`absolute left-3 top-1 text-gray-900 dark:text-gray-400 transition duration-500 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white dark:bg-slate-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-0 peer-focus:left-3 peer-focus:scale-75 peer-focus:-translate-y-4 ${
                                    errors.username ? "is-invalid" : ""
                                }`}
                            >
                                Username*
                            </label>
                        </div>
                        <div className="relative form-group my-7">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className={`rounded-2xl w-[100%] bg-transparent border hover:border-sky-600 transition duration-500 p-2 px-4 form-control focus:outline-none focus:ring-0 focus:border-sky-600 peer autofill:bg-transparent autofill:!bg-black ${
                                    errors.email ? "is-invalid border-red-500" : ""
                                }`}
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <strong className="invalid-feedback text-red-500 ml-5 text-[12px] font-sans font-medium">
                                    This field is required
                                </strong>
                            )}
                            <label
                                htmlFor="email"
                                for="email"
                                className={`absolute left-3 top-1 text-gray-900 dark:text-gray-400 transition duration-500 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white dark:bg-slate-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-0 peer-focus:left-3 peer-focus:scale-75 peer-focus:-translate-y-4 ${
                                    errors.email ? "is-invalid" : ""
                                }`}
                            >
                                Email*
                            </label>
                        </div>
                        <div className="relative form-group my-7">
                            <input
                                type={showPassword1 ? "text" : "password"}
                                id="password1"
                                placeholder=" "
                                className={`rounded-2xl w-[100%] bg-transparent border hover:border-sky-600 transition duration-500 p-2 px-4 form-control focus:outline-none focus:ring-0 focus:border-sky-600 peer ${
                                    errors.password1 ? "is-invalid border-red-500" : ""
                                }`}
                                {...register("password1", { required: true })}
                            />
                            <button
                                type="button"
                                className="absolute top-2 right-5 text-gray-900 dark:text-gray-400 hover:text-sky-600 transition duration-500"
                                onClick={toggleShowPassword1}
                            >
                                {showPassword1 ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                )}
                            </button>
                            {errors.password1 && (
                                <strong className="invalid-feedback text-red-500 ml-5 text-[12px] font-sans font-medium">
                                    This field is required
                                </strong>
                            )}
                            <label
                                htmlFor="password1"
                                for="password1"
                                className={`absolute left-3 top-1 text-gray-900 dark:text-gray-400 transition duration-500 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white dark:bg-slate-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-0 peer-focus:left-3 peer-focus:scale-75 peer-focus:-translate-y-4   ${
                                    errors.password1 ? "is-invalid" : ""
                                }`}
                            >
                                Password*
                            </label>
                        </div>
                        <div className="relative form-group my-7">
                            <input
                                type={showPassword2 ? "text" : "password"}
                                id="password2"
                                placeholder=" "
                                className={`rounded-2xl w-[100%] bg-transparent border hover:border-sky-600 transition duration-500 p-2 px-4 form-control focus:outline-none focus:ring-0 focus:border-sky-600 peer ${
                                    errors.password2 ? "is-invalid border-red-500" : ""
                                }`}
                                {...register("password2", { required: true })}
                            />
                            <button
                                type="button"
                                className="absolute top-2 right-5 text-gray-900 dark:text-gray-400 hover:text-sky-600 transition duration-500"
                                onClick={toggleShowPassword2}
                            >
                                {showPassword2 ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                )}
                            </button>
                            {errors.password2 && (
                                <strong className="invalid-feedback text-red-500 ml-5 text-[12px] font-sans font-medium">
                                    This field is required
                                </strong>
                            )}
                            <label
                                htmlFor="password2"
                                for="password2"
                                className={`absolute left-3 top-1 text-gray-900 dark:text-gray-400 transition duration-500 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white dark:bg-slate-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-0 peer-focus:left-3 peer-focus:scale-75 peer-focus:-translate-y-4   ${
                                    errors.password2 ? "is-invalid" : ""
                                }`}
                            >
                                Password Confirmation*
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-outline-primary px-3 py-1 rounded-xl border-2 font-semibold text-[14px] hover:scale-125 transition ease-out duration-500 border-green-600 dark:bg-green-600 text-slate-800"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="flex mt-3 self-start">
                        <div>Already have an account? </div>
                        <div className="ml-2 hover:scale-125">
                            <a href="/sign-in" className="cursor-pointer text-green-600 ">
                                Sign In!
                            </a>
                        </div>
                    </div>
                    <div>
                        {error && error.length > 0 && (
                            <div className="mt-3 text-red-500">
                                {error.map((error, index) => (
                                    <div key={index}>- {error}</div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}