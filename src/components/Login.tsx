import { ContactSupportOutlined } from '@material-ui/icons';
import { navigate, RouteComponentProps } from '@reach/router';
import { APColumn, APForm, APFormFieldText, APFormSubmit, APRow, APSizedBox, APText, showErrorDialog, sleep, useAPForm } from 'ap-components'
import axios from 'axios'
import React, { useState } from 'react'

export const Login = (prop: RouteComponentProps) => {
    var control = useAPForm();

    const [form, setForm] = useState({
        username: "",
        password: "",
    })
    const handleChange = (e: any) => {

        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    }

    const loginAuth = (form: any) => {
        axios.post("http://localhost:80/client/login", form)
            .then(res => {

                localStorage.setItem("token", res.data.token);


                navigate('/search')
            })
            .catch(err => console.log("error", err))
    }

    return (
        <div>
            <APRow style={{ height: "800px", width: "1440px", }}>
                <APColumn>
                    <img style={{ height: "700px", width: "100%", marginTop: "0px", marginLeft: "10px", padding: "10px" }} src={"/img/redbusSidePic.svg"} alt="" />
                </APColumn>
                <APColumn style={{ height: "700px", width: "100%", marginRight: "50px" }}>
                    <APText style={{ fontSize: "54px", fontWeight: 500, lineHeight: "20px", marginTop: "40px", marginBottom: "50px" }}>Login </APText>
                    <APColumn style={{
                        height: "800px",
                        width: "100%",
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
                        backgroundColor: "#fff"
                    }}>
                        <APForm control={control}>
                            <APSizedBox width='500px'>
                                <APColumn crossAxisAlignment="stretch">
                                    <APFormFieldText
                                        label='Username'
                                        onChanged={(v) => form.username = v}
                                        validator={(v) => {
                                            if (v.length === 0) {
                                                return 'Input required';
                                            }
                                            return null;
                                        }}
                                    />
                                    <APFormFieldText
                                        label='Password'
                                        obscureText
                                        onChanged={(v) => form.password = v}
                                        validator={(v) => {
                                            if (v.length === 0) {
                                                return 'Input required';
                                            }
                                            return null;
                                        }}
                                    />
                                    <APFormSubmit
                                        style={{
                                            marginTop: "50px",
                                        }}
                                        onClick={async () => {
                                            if (await control.validate()) {
                                                try {
                                                    loginAuth(form)
                                                } catch (error) {
                                                    if (error instanceof Error)
                                                        showErrorDialog(error.message);
                                                }
                                            }
                                        }}

                                    >
                                        Submit
                                    </APFormSubmit>
                                </APColumn>
                            </APSizedBox>
                        </APForm>
                    </APColumn>
                </APColumn>
            </APRow>
        </div>
    )
}
