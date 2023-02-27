import { APRow } from 'ap-components'
import React, { useEffect, useState } from 'react'

export const MyOwnInput = ({
    placeholder,
    label,
    prefix,
    suffix,
    onChnageEvent,
    height,
    boarderRadius,
    backgroundColor,
    type,
    style,
    intialValue

}: {
    placeholder: string,
    label: string,
    prefix: string,
    suffix: string,
    onChnageEvent: ((value: string) => void),
    height?: string,
    boarderRadius?: string,
    backgroundColor?: string,
    type?: "email" | "text" | "number" | undefined,
    style?: React.CSSProperties,
    intialValue?: string
}) => {
    const [intial, setInitial] = useState(intialValue)

    const inputType = {
        email: "email",
        text: "text",
        number: "number"

    }
    // useEffect(() => {
    //     console.log("useEfect  : ", intial,)

    // }, [intial])

    return (
        <div
            style={{
                height: "100px",
                width: "100%",
                border: "1px solid black",
                display: "flex",
                flexDirection: "column"
            }}>
            <div style={{ marginLeft: "20px", paddingTop: "6px" }}>{label}</div>
            <APRow
                style={{
                    marginLeft: "10px",
                    height: height,
                    width: "500px",
                    margin: "10px",
                    padding: "10px",
                    borderRadius: boarderRadius,
                    backgroundColor: backgroundColor,
                    border: "none"

                }}>
                <div>  <img src={prefix} alt="" /> </div>
                <div>

                    <input
                        style={{
                            height: height,
                            width: "400px",
                            margin: "10px",
                            padding: "10px",
                            borderRadius: boarderRadius,
                            backgroundColor: backgroundColor,
                            border: "none",
                            color: "#fff"
                        }}
                        type={type ? inputType[type] : undefined}
                        placeholder={placeholder}
                        value={intialValue}
                        // onChange={(event) => {
                        // console.log(event.target.value)
                        // if (onChnageEvent) {
                        //     console.log(event.target.value);
                        // variant ? variantStyle[variant] : undefined
                        // onChnageEvent(event.target.value)
                        // setInitial(event.target.value)
                        // console.log("Intial value coming from MyOwnInput :", intial)
                        // console.log("user typed value", event.target.value)
                        // }
                        // event(event.target.value)&& event(event.target.value):undefined
                        // { onChnageEvent(event.target.value)? }
                        // }}
                        onChange={(event) => {
                            console.log(event.target.value, "Hi from MyOwnInput")
                        }}
                    />
                </div>
                <div> <img src={suffix} alt="" /></div>

            </APRow>

        </div>
    )
}
