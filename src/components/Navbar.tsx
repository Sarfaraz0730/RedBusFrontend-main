import { navigate } from '@reach/router'
import { APRow, APSizedBox } from 'ap-components'
import React from 'react'

export const Navbar = () => {
    return (
        <div style={{ height: "70px", width: "1440px", backgroundColor: "#cb4952" }}>
            <APRow mainAxisAlignment='spaceAround'>
                <APRow>
                    <APRow onClick={() => navigate("/search")} >  <APSizedBox width='100px' height="50px" ></APSizedBox> <img style={{ height: "70px" }} src={"/img/redBusLogo.jpg"} alt="" />  </APRow>
                    <APRow style={{ fontSize: "18px", color: "#fff", padding: "18px 0px 18px 0px" }}>BUS TICKET </APRow>

                    <APRow style={{ fontSize: "13px", color: "#fff", padding: "18px 0px 18px 0px" }}> rYde</APRow>

                    <APRow style={{ fontSize: "13px", lineHeight: "0px", color: "#fff", padding: "18px 0px 18px 0px" }}>redRail</APRow>

                </APRow>


                <APRow mainAxisAlignment='end'>
                    <APSizedBox width='300px'></APSizedBox>

                    <APRow style={{ fontSize: "13px", lineHeight: "0px", color: "#fff", }} >Help</APRow>

                    <APRow style={{ fontSize: "13px", lineHeight: "0px", color: "#fff", }} >Manage Booking</APRow>
                    <APSizedBox width='30px'></APSizedBox>
                    <APRow>
                        <div onClick={() => navigate("/userProfile")} >
                            <img
                                style={{ fontSize: "13px", lineHeight: "0px", color: "#fff", height: "50px", width: "50px", borderRadius: "50%", backgroundColor: "gray" }}
                                src={"/img/ProfileTop.jpg"} alt="" />
                        </div>

                    </APRow>


                </APRow>
            </APRow>
        </div>
    )
}
