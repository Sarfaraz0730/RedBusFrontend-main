import { APButton, APImage, APRow, APSizedBox, APTable, APText } from 'ap-components'
import React from 'react'

const AutoCard = () => {
    return (
        <div style={{ backgroundColor: "#2A2B3E", borderRadius: '16px' }}>

            <APRow mainAxisAlignment='spaceAround' style={{ height: "50px", width: "100%", padding: "30px", borderRadius: '16px' }}>
                <APRow >
                    <APRow style={{ width: "162px", fontSize: "28px", lineHeight: "32px", marginRight: "16px", color: "#fff" }}>  <APText>Automations</APText></APRow>
                    <APRow style={{ height: "30px", width: "30px", backgroundColor: "#929bae", borderRadius: "8px" }}>
                        <APText style={{ color: "#5B85FD", fontSize: "16px", lineHeight: "18px", textAlign: "center", paddingLeft: "10px" }}  > 7</APText>
                    </APRow>
                </APRow>
                {/* button  and input */}
                <APRow mainAxisAlignment='end' >
                    <APRow mainAxisAlignment='end' style={{ height: "40px", width: "280px", }} >
                        <CustomInput placeholder='Search' />
                    </APRow>
                    <APButton variant='contained' onClick={() => console.log("clicked")}
                        style={{
                            textTransform: "none",
                            padding: "10px, 16px, 10px, 16px",
                            width: "246px", height: "40px", fontSize: "13px", fontWeight: 600, backgroundColor: "#5B85FD", color: "#fff"
                        }} >
                        +  Create Automations Series
                    </APButton>
                </APRow>
            </APRow>
            <APRow mainAxisAlignment='center' style={{ padding: "30px" }} gap="30px" >
                <CustomCardCSS />
                <CustomCardCSS />
                <CustomCardCSS />
            </APRow>
            <APRow mainAxisAlignment='center' style={{ paddingLeft: "30px", paddingRight: "30px" }} gap="30px" >
                <CustomCardCSS />
                <CustomCardCSS />
                <CustomCardCSS />
            </APRow>
        </div >
    )
}
export default AutoCard
function CustomCardCSS() {
    return (
        <APRow mainAxisAlignment='center' style={{ marginTop: "30px", marginBottom: "30px" }} gap="30px" >

            <div style={{ height: "228px", width: "342px", border: "1px solid #383A47", padding: "30px", backgroundColor: "#383A47", borderRadius: "10px" }} >
                <APRow style={{ height: "48px", width: "100%", }}>
                    <APText style={{ fontSize: "20px", fontWeight: 500, lineHeight: "24px", color: "#F2F2F3" }}>OkDork onboarding iTunes clickers</APText>
                </APRow>
                <APText style={{ color: "#8E96A9", marginTop: "20px" }}>May 22, 2021 15:35</APText>
                <APRow style={{ marginTop: "20px" }} mainAxisAlignment='spaceAround'>
                    <APButton variant='outlined' onClick={() => console.log("clicked")}
                        style={{ textTransform: "none", height: "50px", fontSize: "16px", lineHeight: "18px", backgroundColor: "##FEB23A", color: "#FEB23A" }}
                    >Start</APButton>
                    <APButton variant='contained' onClick={() => console.log("clicked")}
                        style={{ textTransform: "none", fontSize: "16px", fontWeight: 600, backgroundColor: "#5B85FD", color: "#fff" }} >Add subscribers
                    </APButton>
                </APRow>
            </div>
        </APRow>
    )
}
function CustomInput(props: { placeholder: string, style?: React.CSSProperties }) {
    return (
        <APRow style={{ width: "400px", paddingLeft: "52px", height: "50px", marginRight: "15px" }}>
            <div style={{ width: "424px", backgroundColor: "#222433", paddingLeft: "15px" }} >
                <APImage src='/img/Bell.svg' />
                <input style={{ height: "40px", border: "none", padding: "10px", backgroundColor: "#222433", fontSize: "14px", lineHeight: "16px" }} type="text" placeholder={props.placeholder} />
            </div>
        </APRow>
    )
}