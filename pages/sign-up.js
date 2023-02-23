import { Form } from "@web3uikit/core"

export default function SignIn() {
    return (
        <div className="w-[100%] h-[100vh] flex flex-col">
            <div className="h-[100%] flex flex-col justify-center items-center">
                <div>
                    <Form
                        className=""
                        buttonConfig={{
                            onClick: function noRefCheck() {},
                            theme: "outline",
                        }}
                        onSubmit={""}
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
                        onChange={""}
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
