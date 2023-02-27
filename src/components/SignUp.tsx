import { Link, navigate, RouteComponentProps } from '@reach/router';
import { APButton, APColumn, APForm, APFormFieldController, APFormFieldDropdown, APFormFieldFile, APFormFieldRadio, APFormFieldText, APFormSubmit, APImage, APRow, APText, showErrorDialog, showSnackbar, sleep, useAPForm } from 'ap-components'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
export const SignUp = (prop: RouteComponentProps) => {
    var control = useAPForm();
    const [form, setForm] = useState({
        username: "",
        password: "",
        email: "",
        dob: "",
        gender: "",
        phoneCode: "",
        phoneNumber: ""

    })

    var namedAmount = new APFormFieldController();
    var noNameAmount = new APFormFieldController();
    const register = (form: any) => {

        axios.post("http://localhost:80/client/signup", form)
            .then((res) => {

            })
            .catch(err => alert("User  exist"))
    }


    const handleChange = (e: any) => {

        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    }
    return (
        <div>
            <APRow style={{ height: "800px", width: "1435px", }}>
                <APColumn>
                    <img style={{ height: "700px", width: "100%", marginTop: "0px", marginLeft: "10px", padding: "10px" }} src={"/img/redbusSidePic.svg"} alt="" />
                </APColumn>
                <APColumn style={{
                    backgroundColor: "#fff",
                    height: "750px",
                    width: "100%",
                    marginRight: "50px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
                }}>

                    <APText style={{ fontSize: "54px", fontWeight: 500, lineHeight: "20px", marginTop: "20px", }}>Sign in</APText>
                    <APForm control={control}>
                        <APColumn crossAxisAlignment="stretch">
                            <APFormFieldText
                                style={{
                                    height: "35px",
                                    width: "580px",
                                    padding: "10px",
                                    marginTop: "50px",
                                }}
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
                                style={{
                                    height: "35px",
                                    width: "580px",
                                    padding: "10px",
                                    marginTop: "30px",
                                }}
                                label='Password'

                                onChanged={(v) => form.password = v}
                                validator={(v) => {
                                    if (v.length === 0) {
                                        return 'Input required';
                                    }
                                    return null;
                                }}
                            />
                            <APFormFieldText
                                style={{
                                    height: "35px",
                                    width: "580px",
                                    padding: "10px",
                                    marginTop: "30px",
                                }}
                                label='Email'

                                onChanged={(v) => form.email = v}
                                validator={(v) => {
                                    if (v.length === 0) {
                                        return 'Input required';
                                    }
                                    return null;
                                }}
                            />
                            <APFormFieldText
                                style={{
                                    height: "35px",
                                    width: "580px",
                                    padding: "10px",
                                    marginTop: "30px",
                                }}
                                label='Date Of Birth'

                                onChanged={(v) => form.dob = v}
                                validator={(v) => {
                                    if (v.length === 0) {
                                        return 'Input required';
                                    }
                                    return null;
                                }}
                            />
                            <APFormFieldText
                                style={{
                                    height: "35px",
                                    width: "580px",
                                    padding: "10px",
                                    marginTop: "30px",
                                }}
                                label='Phone Number'

                                onChanged={(v) => form.phoneNumber = v}
                                validator={(v) => {
                                    if (v.length === 0) {
                                        return 'Input required';
                                    }
                                    return null;
                                }}
                            />
                            <APFormFieldDropdown label="Gender"
                                style={{
                                    height: "35px",
                                    width: "580px",
                                    padding: "10px",
                                    marginTop: "50px",
                                }}
                                onChanged={v => {
                                    form.gender = v ? v : "MALE"
                                }}
                                items={[
                                    {
                                        value: "MALE",
                                        label: "MALE"
                                    },
                                    {
                                        value: "FEMALE",
                                        label: "FEMALE"
                                    },
                                ]}
                            />



                            <APFormSubmit
                                style={{
                                    height: "50px",
                                    width: "580px",
                                    padding: "10px",
                                    marginTop: "90px",
                                }}
                                onClick={async () => {
                                    if (await control.validate()) {
                                        try {
                                            await sleep(1000);

                                            register(form)
                                            navigate("/login")
                                        } catch (error) {
                                            if (error instanceof Error)
                                                showErrorDialog(error.message);
                                        }
                                    }
                                }}
                            >
                                Submit
                            </APFormSubmit>
                            <APButton variant='contained' style={{
                                height: "50px",
                                width: "580px",
                                padding: "10px",
                                marginTop: "20px",
                                backgroundColor: "#3399fe", color: "#fff"
                            }}
                                onClick={() => navigate("/login")}>Already have an Account ?</APButton>
                        </APColumn>
                    </APForm>
                </APColumn>

            </APRow>
        </div>
    )
}
