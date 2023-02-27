import { navigate, RouteComponentProps } from '@reach/router'
import { APAsyncButton, APButton, APColumn, APDialogCard, APRow, APSizedBox, APText, Deferred, launchDialog } from 'ap-components';
import jwt_decode from "jwt-decode";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'


export default function SeatDeatils(prop: RouteComponentProps<{ busId: string }>) {

     let [seatData, setSeatData] = useState<any>()
     const [filterArray, setFilterArray] = useState<any>(seatData)
     const seatPrice = ["All", 1000, 1200, 1500]


     const token = localStorage.getItem("token")

     useEffect(() => {
          const handleViewSeatDetails = () => {
               axios.get("http://localhost:80/client/seatDetails/", {
                    params: prop.busId,

               }).then((res: any) => {
                    setSeatData(res.data)

               }).catch((err) => console.log("error", err))
          }
          handleViewSeatDetails()
     }, [])



     const seatBookingConfirmation = (seatId: object,) => {
          axios.get("http://localhost:80/client/bookingStatus", {
               params: { seatId, },
               headers: {
                    'Authorization': `bearer ${token}`
               }
          }).then((res) => {
               if (res.data == "This Seat is  Already Booked") {
                    return alert("Already Booked!")
               }
               else {
                    alert("You seat is Booked,Thank you for Choosing Red Bus")
                    navigate(`/myBookings/${seatId}`)
               }
          }).catch((err) => console.log(err))
     }

     var output: any = [seatData]

     const filteredSeat = (e: any) => {
          if (e != "All") {
               var newArr = seatData.filter(function (item: any) {
                    return item.price == e;
               });
               setFilterArray(newArr)
          }
          else if (e == "All") {
               setFilterArray(seatData)
          }
     }



     return (
          <div>
               <Navbar />
               <APColumn style={{ height: "1000px", width: "100%", backgroundColor: "#eeeded" }}>
                    <APRow style={{ color: "#3e3e52", fontSize: "15px", height: "50px", lineHeight: "30px", fontWeight: 700, }} >
                         <APRow mainAxisAlignment='spaceEvenly' style={{ width: "40%", }}>
                              <APText  >Seat Price</APText>
                              {/* <CustomButton buttonDetail='All' /> */}

                              {/* <APColumn style={{ border: "1px solid blue", }}>
                                   {
                                        seatPrice.map((e: any, index: any) => {
                                             return (

                                                  <APRow key={index} mainAxisAlignment='center' crossAxisAlignment='center' > <button style={{ height: "30px", border: "1px solid red" }} onClick={() => filteredSeat(e)} >{e}</button></APRow>

                                             )

                                        })
                                   }
                              </APColumn> */}



                              <div>
                                   <button onClick={() => filteredSeat("All")} style={{ backgroundColor: "#545454", color: "#fff", fontSize: "15px", height: "100%", width: "80px", border: "none" }}  >   <APText style={{ color: "#fff", fontSize: "15px", lineHeight: "24px", fontWeight: 700, }} > All </APText></button>
                              </div>
                              <div>
                                   <button onClick={() => filteredSeat(1000)} style={{ backgroundColor: "#545454", color: "#fff", fontSize: "15px", height: "100%", width: "80px", border: "none" }}  >   <APText style={{ color: "#fff", fontSize: "15px", lineHeight: "24px", fontWeight: 700, }} > 1000 </APText></button>
                              </div>
                              <div>
                                   <button onClick={() => filteredSeat(1200)} style={{ backgroundColor: "#545454", color: "#fff", fontSize: "15px", height: "100%", width: "80px", border: "none" }}  >   <APText style={{ color: "#fff", fontSize: "15px", lineHeight: "24px", fontWeight: 700, }} > 1200</APText></button>
                              </div>
                              <div>
                                   <button onClick={() => filteredSeat(1500)} style={{ backgroundColor: "#545454", color: "#fff", fontSize: "15px", height: "100%", width: "80px", border: "none" }}  >   <APText style={{ color: "#fff", fontSize: "15px", lineHeight: "24px", fontWeight: 700, }} > 1500 </APText></button>
                              </div>
                              {/* <CustomButton buttonDetail='1500' /> */}
                         </APRow>
                    </APRow>
                    <APRow crossAxisAlignment='start' style={{ height: "300px", }}>
                         <APRow style={{ border: "0.1px solid black", height: "350px", paddingRight: "10px" }}>

                              {
                                   filterArray?.map((e: any) => {
                                        return (
                                             <APColumn mainAxisAlignment='start' crossAxisAlignment='start' style={{ paddingLeft: "10px", paddingRight: "5px" }} key={e._id}>
                                                  <APAsyncButton
                                                       onClick={async () => {
                                                            try {
                                                                 var count = await launchDialog<number>((deferred) => <SeatBookingConfirmationDialog deferred={deferred} />)

                                                                 seatBookingConfirmation(e._id)

                                                            } catch (error) {
                                                                 console.log(error);
                                                            }
                                                       }}
                                                       style={{
                                                            color: "black",
                                                            fontSize: "15px",
                                                            height: "110px",
                                                            width: "80px",
                                                            margin: "2px",
                                                            border: "none",
                                                            backgroundColor: e.seatStatus == "BOOKED" ? "red" : "white"
                                                       }}

                                                  >
                                                       <APText style={{ color: "black", fontSize: "12px", lineHeight: "24px", fontWeight: 700, }} >
                                                            {e.seatNumber} <br /> ₹  {e.price} <br /> Window {e.isItWindowSeat ? "Yes" : "No"} </APText> <br /><br />
                                                  </APAsyncButton>
                                             </APColumn>
                                        )
                                   })
                              }

                         </APRow>
                         <APRow mainAxisAlignment='start' crossAxisAlignment='start' style={{ height: "250px" }} >
                              <APColumn>
                                   <APRow style={{ color: "#3e3e52", fontSize: "22px", lineHeight: "24px", fontWeight: 700, }}  > <APSizedBox width='50px' /> Seat Legend</APRow>
                                   <APColumn  >
                                        <APRow style={{ marginTop: "20px" }}> <APSizedBox width='50px' /> <input style={{ width: "70px", }} type="text" name="" id="" disabled /> <APSizedBox width='50px' /> Available </APRow>
                                        <APRow style={{ marginTop: "20px" }}> <APSizedBox width='50px' /> <input style={{ width: "70px", backgroundColor: "red", border: "none" }} type="text" name="" id="" disabled /> <APSizedBox width='50px' /> Unavailable  </APRow>
                                   </APColumn>
                              </APColumn>
                         </APRow>
                    </APRow>
               </APColumn>
          </div>
     )
}



function SeatBookingConfirmationDialog({ deferred }: { deferred: Deferred<number> }) {
     const [count, setCount] = useState(0)
     return (
          < div style={{ height: "500px", width: "500px", backgroundColor: "#f8f8f8" }}>
               <APDialogCard style={{ width: "500px", color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} title={"Bording & Dropping"} >
               </APDialogCard>
               <div style={{ height: "100%", width: "500px", backgroundColor: "#f8f8f8" }} >
                    <APColumn style={{ height: "65%", width: "100%", }} >

                         <CustomisingDialogBox from='Chennai Guindy Bus Stand ' time='8:10 Am' />
                         {/* the below css is written for direction from top to bottom throw black dot   */}
                         <APRow mainAxisAlignment='spaceAround' crossAxisAlignment='center' style={{ height: "20px", }}  >
                              <APRow >
                                   <APSizedBox width='50px' />
                                   <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} > <div style={{ height: "15px", width: "15px", borderRadius: "50%", backgroundColor: "black" }}></div> </APText>
                              </APRow>
                              <APRow>
                                   <APSizedBox width='50px' />
                                   <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} >  </APText>
                              </APRow>
                         </APRow>
                         <APRow mainAxisAlignment='spaceAround' crossAxisAlignment='center' style={{ height: "30px", marginLeft: "5px", }}  >
                              <APRow >
                                   <APSizedBox width='50px' />
                                   <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} > <div style={{ height: "10px", width: "10px", borderRadius: "50%", backgroundColor: "black" }}></div> </APText>
                              </APRow>
                              <APRow>
                                   <APSizedBox width='50px' />
                                   <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} >  </APText>
                              </APRow>
                         </APRow>
                         <APRow mainAxisAlignment='spaceAround' crossAxisAlignment='center' style={{ height: "20px", marginLeft: "10px", }}  >
                              <APRow >
                                   <APSizedBox width='50px' />
                                   <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} > <div style={{ height: "6px", width: "6px", borderRadius: "50%", backgroundColor: "black" }}></div> </APText>
                              </APRow>
                              <APRow>
                                   <APSizedBox width='50px' />
                                   <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} >  </APText>
                              </APRow>
                         </APRow>
                         <APRow mainAxisAlignment='spaceAround' crossAxisAlignment='center' style={{ height: "25px", marginLeft: "12px", }}  >
                              <APRow >
                                   <APSizedBox width='50px' />
                                   <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} > <div style={{ height: "4px", width: "4px", borderRadius: "50%", backgroundColor: "black" }}></div> </APText>
                              </APRow>
                              <APRow>
                                   <APSizedBox width='50px' />
                                   <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} >  </APText>
                              </APRow>
                         </APRow>
                         {/* the above css is written for direction from top to bottom throw black dot   */}

                         <CustomisingDialogBox from='Bangalore -Ashok pilar' time="12:30 Pm" />

                         <APRow mainAxisAlignment='spaceAround' crossAxisAlignment='center' style={{ height: "40px", }}  >
                              <APRow >
                                   <APSizedBox width='50px' />
                                   <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} > <u >Fare Details</u> </APText>
                              </APRow>
                         </APRow>
                         <APRow mainAxisAlignment='spaceAround' crossAxisAlignment='center' style={{ height: "40px", }}  >
                              <APRow >
                                   <APSizedBox width='50px' />
                                   <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} >Amount</APText>
                              </APRow>
                              <APRow>
                                   <APSizedBox width='30px' />
                                   <APText style={{ color: "red", fontSize: "22px", backgroundColor: "#f8f8f8", fontWeight: 900 }} >  INR 1500 </APText>
                              </APRow>
                         </APRow>
                    </APColumn>
                    <APRow mainAxisAlignment='spaceAround' style={{ marginTop: "10px" }}>
                         <APButton color="primary" variant="contained" style={{ backgroundColor: "red", width: "90%" }} onClick={() => { deferred.resolve(count) }}>Proceed to Book</APButton>

                    </APRow>
               </div>
          </div>
     )
}


function CustomisingDialogBox(props: { from: string, time: string }) {
     return (
          <APRow mainAxisAlignment='spaceAround' crossAxisAlignment='center' style={{ height: "50px", }}  >
               <APRow >
                    <APSizedBox width='50px' />
                    <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} >{props.from}</APText>
               </APRow>
               <APRow>
                    <APSizedBox width='50px' />
                    <APText style={{ color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} >  {props.time}</APText>
               </APRow>
          </APRow>
     )
}