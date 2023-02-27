import { navigate, RouteComponentProps } from '@reach/router'
import { APButton, APCard, APColumn, APRow, APSizedBox, APText } from 'ap-components'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'

export const UserProfile = (prop: RouteComponentProps) => {
  const [userInfo, setUserInfo] = useState<any>()

  useEffect(() => {
    getUserProfile();
  }, []);

  async function getUserProfile() {
    try {
      var token = localStorage.getItem("token");
      if (token == null) {
        navigate('/login');
        throw new Error("Unathourized Access")
      }
      var res = await axios.get("http://localhost:80/client/userProfile", {
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
      setUserInfo(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  const editButton = () => {

  }
  return (
    <div>
      <APRow> <Navbar /> </APRow>
      <APRow>
        <APColumn crossAxisAlignment='start'
          style={{ height: "900px", border: "0.1px solid gray", width: "250px", padding: "30px", backgroundColor: "#efeeee" }} >
          <APColumn crossAxisAlignment='start' style={{ borderBottom: "0.1px solid gray", height: "80px", width: "230px", marginBottom: "20px" }}>
            <APRow>  <div style={{ height: "50px", width: "50px", borderRadius: "50%", backgroundColor: "gray", margin: "15px" }}>
              <img
                style={{ fontSize: "13px", lineHeight: "0px", color: "#fff", height: "50px", width: "50px", borderRadius: "50%", backgroundColor: "gray" }}
                src={"/img/ProfileTop.jpg"} alt="" />
            </div>
              <div style={{ color: "#676565", fontSize: "16px", fontWeight: 900 }} >{userInfo?.username}</div></APRow>
          </APColumn>
          <APColumn crossAxisAlignment='start'
            style={{
              borderBottom: "0.1px solid gray",
              height: "80px",
              width: "230px",
              marginBottom: "20px",
              boxShadow: "inset 1px 1px 0 #aaa, inset 0 -1px 0 #aaa;"
            }}>

            <APRow onClick={() => { navigate("/myBookings/:seatId") }}>  <div style={{ height: "50px", width: "50px", borderRadius: "50%", backgroundColor: "gray", margin: "15px" }}>
            </div>
              <div onClick={() => { navigate("/myBookings") }} style={{ color: "#676565", fontSize: "13px", fontWeight: 900 }} >My Trips</div>
            </APRow>
          </APColumn>
          <SideBarProperty sidebarProperty='Wallets/Cards' />
          <SideBarProperty sidebarProperty='My Profile' />
          <SideBarProperty sidebarProperty='Wallet' />
        </APColumn>
        <APColumn crossAxisAlignment='start' style={{ height: "900px", width: "1200px", backgroundColor: "#efeeee" }}
        >
          <APRow style={{ height: "700px", width: "1050px", marginLeft: "100px", padding: "50px" }}>
            <APRow crossAxisAlignment='start' >
              <APColumn
                mainAxisAlignment='start'
                style={{
                  height: "600px",
                  width: "800px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
                }}
              >
                <APRow mainAxisAlignment='end'>
                  <APButton
                    onClick={editButton}
                    variant="contained"
                    style={{ backgroundColor: "green", color: "#fff", margin: "10px" }}
                  >Edit</APButton>
                </APRow>
                <APColumn style={{
                  height: "400px",
                  width: "90%",
                }}>
                  <UserNameAndDob YOURNAME='YOUR NAME' DATEOFBIRTH='DATE OF BIRTH' />
                  <APRow mainAxisAlignment='start'
                    style={{ height: "40px", width: "100%", }}>
                    <APRow style={{ color: "#676565", fontSize: "16px", fontWeight: 900 }} >
                      {
                        userInfo?.username
                      }
                    </APRow>
                    <APRow style={{ color: "#676565", fontSize: "16px", fontWeight: 900 }} >{userInfo?.dob}</APRow>
                  </APRow>
                  <APRow mainAxisAlignment='start'
                    style={{ height: "40px", width: "100%", marginTop: "70px" }}>
                    <APRow style={{ color: "#737373", fontSize: "12px", fontWeight: 400 }} >GENDER</APRow>
                  </APRow>
                  <APRow mainAxisAlignment='start'
                    style={{ height: "40px", width: "100%", }}>
                    <APRow style={{ color: "#676565", fontSize: "16px", fontWeight: 900 }}>
                      {userInfo?.gender}
                    </APRow>
                  </APRow>
                  <APRow mainAxisAlignment='start'
                    style={{ height: "40px", width: "100%", marginTop: "50px" }}>
                    <APRow
                      style={{ border: "1px solid black" }}
                    >
                      <hr style={{ width: "30%" }} />
                    </APRow>
                    <APRow style={{ fontSize: "22px", fontWeight: 500, marginLeft: "50px" }}>
                      Contact Details
                    </APRow>
                    <APRow style={{ border: "1px solid black" }}>
                      <hr style={{ width: "30%", }} />
                    </APRow>
                  </APRow>
                  <CustomDesign EMAILID='EMAILID' PHONECODE='PHONECODE' MUBILENUMBER='MOBILENUMBER' />
                  <APRow mainAxisAlignment='start'
                    style={{ height: "40px", width: "100%", marginTop: "1px", color: "#676565", fontSize: "16px", fontWeight: 900 }}>
                    <APRow>{userInfo?.email}</APRow>
                    <APRow>+91</APRow>
                    <APRow>{userInfo?.phoneNumber}</APRow>
                  </APRow>

                </APColumn>
              </APColumn>
            </APRow >
          </APRow>
        </APColumn>
      </APRow>
    </div>
  )
}
function CustomDesign(prop: { EMAILID?: string, PHONECODE?: string, MUBILENUMBER?: string, YOURNAME?: string, DATEOFBIRTH?: string }) {
  return (
    <APRow mainAxisAlignment='start'>
      <APRow style={{ color: "#737373", fontSize: "12px", fontWeight: 400 }} >{prop.EMAILID}</APRow>
      <APRow style={{ color: "#737373", fontSize: "12px", fontWeight: 400 }} >{prop.PHONECODE}</APRow>
      <APRow style={{ color: "#737373", fontSize: "12px", fontWeight: 400 }} >{prop.MUBILENUMBER}</APRow>
    </APRow>
  )
}

function UserNameAndDob(prop: { EMAILID?: string, PHONECODE?: Number, MUBILENUMBER?: Number, YOURNAME?: string, DATEOFBIRTH?: string }) {
  return (
    <APRow mainAxisAlignment='start'
      style={{ height: "40px", width: "100%", }}>
      <APRow style={{ color: "#737373", fontSize: "12px", fontWeight: 400 }} >{prop.YOURNAME}</APRow>
      <APRow style={{ color: "#737373", fontSize: "12px", fontWeight: 400 }}>{prop.DATEOFBIRTH}</APRow>
    </APRow>
  )
}
function SideBarProperty(prop: { sidebarProperty: string }) {
  return (
    <APColumn crossAxisAlignment='start'
      style={{
        borderBottom: "0.1px solid gray",
        height: "80px",
        width: "230px",
        marginBottom: "20px",
        boxShadow: "inset 1px 1px 0 #aaa, inset 0 -1px 0 #aaa;"
      }}>

      <APRow>  <div style={{ height: "50px", width: "50px", borderRadius: "50%", backgroundColor: "gray", margin: "15px" }}>
      </div>
        <div style={{ color: "#676565", fontSize: "13px", fontWeight: 900 }} >{prop.sidebarProperty}</div></APRow>
    </APColumn>
  )
}