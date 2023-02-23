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
                                name: "Password",
                                type: "password",
                                value: "",
                                key: "password",
                                validation: {
                                    required: true,
                                },
                            },
                        ]}
                        onChange={""}
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
