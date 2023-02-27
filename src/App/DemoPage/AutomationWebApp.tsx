
import { APButton, APColumn, APImage, APRow, APSizedBox, APTable, APText } from 'ap-components'
import React, { ReactEventHandler, useState } from 'react'
import AutoCard from './AutoCard'

export default function AutomationWebApp() {
    const [text, setText] = useState("");

    const handleChange = (e: string) => {
        console.log(e);
        setText(e)
    }
    console.log("Change", text)
    return (
        <div>
            {/* nabvar */}
            <APRow mainAxisAlignment='spaceBetween' style={{ height: "80px", width: "100%", backgroundColor: "#2A2B3D", paddingLeft: "30px" }} >
                <APRow style={{ height: "50px", }} >

                    <APImage style={{ paddingRight: "16px" }} src='/img/upwardArrow.svg' />
                    <APText style={{ fontSize: "24px", fontWeight: 700, lineHeight: "28px", color: "#fff" }}>Sendmail</APText>
                    <CustomInput placeholder='Search' icon='/img/Bell.svg' variant="contained" event={handleChange} />
                </APRow>
                <APRow mainAxisAlignment='end' style={{ height: "50px", width: "200px", padding: "20px" }} >
                    <div style={{ marginRight: "32px" }} >
                        <APImage style={{ height: "20px", width: "20px", borderRadius: "50%", }} src='/img/Bell.svg' />
                    </div>
                    <div style={{ marginRight: "32px" }} >
                        <APImage style={{ height: "20px", width: "20px", borderRadius: "50%", }} src='/img/Bell.svg' />
                    </div>
                    <div  >
                        <APImage style={{ height: "40px", width: "40px", borderRadius: "50%", }} src='/img/ProfileTop.jpg' />
                    </div>
                </APRow>
            </APRow>
            {/* sidebar */}
            <APRow>
                <APRow style={{ height: "900px", width: "243px", backgroundColor: "#2A2B3D" }}>
                    <APColumn>
                        <APColumn crossAxisAlignment='start' style={{ height: "400px", width: "100%", paddingLeft: "30px" }}>

                            <SideBarText content='Dashboard' />
                            <SideBarText content='Email' />

                            <div style={{ paddingTop: "26px" }}>
                                <APButton variant='contained' onClick={() => console.log("clicked")}
                                    style={{
                                        textTransform: "none",
                                        padding: "10px, 16px, 10px, 16px",
                                        width: "100%", height: "40px", fontSize: "13px", fontWeight: 500, backgroundColor: "#5B85FD", color: "#fff"
                                    }} >
                                    Automations
                                </APButton>
                            </div>

                            <SideBarText content='List' />
                            <SideBarText content='Contacts' />
                            <SideBarText content='Smart Pages' />
                            <SideBarText content='Forms' />
                            <SideBarText content='Compgain' />
                        </APColumn>
                        <APColumn crossAxisAlignment='start' style={{ height: "400px", width: "100%", paddingLeft: "30px" }}>
                            <div style={{ marginTop: "70px" }}>
                                <APText style={{
                                    fontSize: "18px", fontWeight: 500, lineHeight: "20px", color: "#A3A4A9"
                                }}>Newest Version are Available!</APText>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                                <APText style={{
                                    fontSize: "14px", lineHeight: "16px", color: "#A3A4A9"
                                }}>More info version 8.2</APText>
                            </div>
                            <div style={{ paddingTop: "26px" }}>
                                <APButton variant='contained' onClick={() => console.log("clicked")}
                                    style={{
                                        textTransform: "none",
                                        padding: "10px, 16px, 10px, 16px",
                                        width: "100%", height: "40px", fontSize: "18px", fontWeight: 500, backgroundColor: "#FEB23A", color: "#FFF",
                                        lineHeight: "20px"
                                    }} >
                                    Upgrade
                                </APButton>
                            </div>
                        </APColumn>
                    </APColumn>
                </APRow>
                {/* centre code  */}
                <div style={{ height: "900px", width: "100%", padding: "30px", backgroundColor: "black" }}>
                    <AutoCard />
                </div>
            </APRow>
        </div >
    )
}
function SideBarText(props: { content: string, style?: React.CSSProperties }) {
    return (
        <div style={{
            paddingTop: "26px", fontSize: "16px", lineHeight: "18px", color: "#A3A4A9"
        }} >{props.content}</div>
    )
}
const variantStyle = {
    outlined: "gray",
    contained: "#222433"
}
function CustomInput(props: {
    placeholder: string,
    icon: string,
    style?: React.CSSProperties,
    variant?: "outlined" | "contained",
    input?: string,
    event?: (value: string) => void
}) {
    return (
        <APRow style={{ width: "400px", paddingLeft: "52px", height: "50px", }}>
            <div style={{ width: "424px", backgroundColor: props.variant ? variantStyle[props.variant] : undefined, paddingLeft: "15px", borderRadius: "20px" }} >
                <APImage src={props.icon} />
                <input
                    onChange={(event) => {
                        if (props.event) {
                            props.event(event.target.value)
                        }
                    }}
                    style={{ height: "40px", border: "none", padding: "10px", backgroundColor: props.variant ? variantStyle[props.variant] : undefined, fontSize: "14px", lineHeight: "16px" }} type="text" placeholder={props.placeholder} />
            </div>
        </APRow>
    )
}

