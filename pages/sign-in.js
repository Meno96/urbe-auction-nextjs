import { Form } from "@web3uikit/core"
import axios from "axios"
import bcrypt from "bcryptjs"

export default function SignIn() {
    async function handleSubmit(data) {
        const username = data.data[0].inputResult
        const password = data.data[1].inputResult

        // Hash delle password con bcrypt
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        console.log(hashedPassword)

        const formData = new FormData()
        formData.append("username", username)
        formData.append("password", hashedPassword)

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
                                name: "Password",
                                type: "password",
                                value: "",
                                key: "password",
                                validation: {
                                    required: true,
                                },
                            },
                        ]}
                        title="Sign In!"
                        id="Sign In Form"
                    />
                    <div className="flex mt-3 self-start">
                        <div>Don't have an account yet? </div>
                        <div className="ml-2 hover:scale-125">
                            <a href="/sign-up" className="cursor-pointer text-green-600 ">
                                Sign Up!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
