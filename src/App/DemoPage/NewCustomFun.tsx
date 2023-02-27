import { APColumn, APImage, APRow, APText } from 'ap-components'
import React from 'react'

const NewCustomFun = (props: {
    image: string,
    icon: string,
    title: string,
    description: string,
    viewCount: string,
    seenCount: string,


    //image
    //Peopleicon
    //title
    //description
    //vieweCount
    //seenCount
    // image,
    // icon,




}) => {
    return (
        <div style={{ borderRadius: "16px", padding: 0, maxWidth: "392px", minWidth: "300px", overflow: "hidden" }} >
            <APColumn>
                <APRow style={{ background: "#160F1D" }} mainAxisAlignment="center" >
                    <APImage src={props.image} height="162px" />
                </APRow>

            </APColumn>
            <APColumn style={{ backgroundColor: "#fff" }}>
                <APColumn style={{ padding: "16px" }} >
                    <APRow style={{ height: "36px" }}>
                        <APImage style={{ paddingRight: "8px" }} src={props.icon} />

                        <div style={{ fontSize: "14px", fontWeight: 600, lineHeight: "18px" }} >{props.title}</div>
                    </APRow>
                </APColumn>
                <APColumn style={{ paddingLeft: "16px", fontSize: "12px", lineHeight: "16PX" }}>{props.description} </APColumn>

                <APColumn style={{ padding: "16px" }}>
                    <APRow>
                        <APImage style={{ paddingRight: "8px " }} src='img/viewers.svg' />
                        <APText style={{ paddingRight: "16px " }}>{props.viewCount}</APText>
                        <APRow>
                            <APImage style={{ paddingRight: "8px " }} src='img/Union.svg' />
                            <APText>{props.seenCount}</APText>

                        </APRow>

                        <button style={{ background: "gray", padding: "4px 8px", borderRadius: "50px", border: "none" }}>

                            Private

                        </button>

                    </APRow>

                </APColumn>



            </APColumn>
        </div>
    )
}

export default NewCustomFun