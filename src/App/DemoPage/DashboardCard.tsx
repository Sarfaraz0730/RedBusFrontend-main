import { APCard, APColumn, APImage, APRow, APSizedBox } from 'ap-components'
import React from 'react'

export default function DashboardCard({
    image,
    icon = '/img/message.svg',
    title,
    description,
    viewersCount,
    seenCount,
    buttonLabel,
}: {
    image: string,
    icon?: string,
    title: string,
    description: string,
    viewersCount: string,
    seenCount: string,
    buttonLabel: "Private" | "Moderated" | "Open",
}) {

    const buttonStyle = {
        Private: "#BCBEC2",
        Moderated: "#FBCA6A",
        Open: "#A6F2E4",
    }




    return (
        <APCard style={{ borderRadius: "16px", padding: 0, maxWidth: "392px", minWidth: "300px", overflow: "hidden" }}>
            <APColumn>
                {/* First content */}
                <APRow style={{ background: "#160F1D" }} mainAxisAlignment="center" >
                    <APImage src={image} height="162px" />
                </APRow>
                {/* Second content */}
                <APColumn style={{ padding: "16px" }} gap="8px">
                    <APRow style={{ height: "36px" }}>
                        <APImage src={icon} />
                        <APSizedBox width="10px" />
                        <div style={{ fontWeight: 600, lineHeight: "18px" }}> {title} </div>
                    </APRow>
                    <CardText style={{ height: "48px" }}>
                        {description}
                    </CardText>
                    <APRow>
                        <APRow>
                            <APImage src="/img/viewers.svg" />
                            <APSizedBox width="8px" />
                            <CardText>{viewersCount}</CardText>
                            <APSizedBox width="16px" />
                            <APImage src="/img/Union.svg" />
                            <APSizedBox width="8px" />
                            <CardText>{seenCount}</CardText>
                        </APRow>
                        <button style={{ background: buttonStyle[buttonLabel], padding: "4px 8px", borderRadius: "50px", border: "none" }}>
                            <CardText>
                                {buttonLabel}
                            </CardText>
                        </button>
                    </APRow>
                </APColumn>
            </APColumn>
        </APCard >
    )
}

function CardText({ style, children }: { style?: React.CSSProperties, children: string }) {

    return (
        <div style={{ ...style, fontSize: "12px", lineHeight: "16px" }}>
            {children}
        </div>
    )
}