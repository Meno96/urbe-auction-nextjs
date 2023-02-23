import { Form } from "@web3uikit/core"
import axios from "axios"
import bcrypt from "bcryptjs"

export default function SignIn() {
    async function handleSubmit(data) {
        const username = data.data[0].inputResult
        const email = data.data[1].inputResult
        const password = data.data[2].inputResult
        const password2 = data.data[3].inputResult

        // Hash delle password con bcrypt
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const hashedPassword2 = await bcrypt.hash(password2, salt)

        console.log(hashedPassword)

        const formData = new FormData()
        formData.append("username", username)
        formData.append("email", email)
        formData.append("password", hashedPassword)
        formData.append("password2", hashedPassword2)

        try {
            await axios.post("/sign-up", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="w-[100%] h-[100vh] flex flex-col">
            <div className="h-[100%] flex flex-col justify-center items-center">
                <div>
                    <Form
                        buttonConfig={{
                            onClick: function noRefCheck() {},
                            theme: "outline",
                        }}
                        onSubmit={handleSubmit}
                        data={[
                            {
                                name: "Username",
                                type: "text",
                                value: "",
                                key: "username",
                                validation: {
                                    required: true,
                                },
                            },
                            {
                                name: "Email",
                                type: "email",
                                value: "",
                                key: "email",
                                validation: {
                                    required: true,
                                },
                            },
                            {
                                name: "Password",
                                type: "password",
                                value: "",
                                key: "password",
                                validation: {
                                    required: true,
                                },
                            },
                            {
                                name: "Password Confirmation",
                                type: "password",
                                value: "",
                                key: "password2",
                                validation: {
                                    required: true,
                                },
                            },
                        ]}
                        title="Sign Up!"
                        id="Sign Up Form"
                    />
                    <div className="flex mt-3 self-start">
                        <div>Already have an account? </div>
                        <div className="ml-2 hover:scale-125">
                            <a href="/sign-in" className="cursor-pointer text-green-600 ">
                                Sign In!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
