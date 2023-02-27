import { Divider } from '@material-ui/core'
import { RouteComponentProps } from '@reach/router'
import { APAsyncButton, APButton, APColumn, APDialogCard, APRow, APScrollView, APSizedBox, APText, Deferred, launchDialog } from 'ap-components'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'

export default function MyBookings(prop: RouteComponentProps<{ seatId: string }>) {
     const [allInfo, setAllInfo] = useState<any>()
     const token = localStorage.getItem("token");
     useEffect(() => {
          const getAlltheDetails = () => {
               axios.get("http://localhost:80/client/wholeInfo", {
                    headers: {
                         'Authorization': `bearer ${token}`
                    }
               }).then((res) => {

                    setAllInfo(res.data)
               }).catch((err) => {
                    console.log(err);

               })
          }
          getAlltheDetails()
     }, [])




     const cancelBookedSeat = (seatId: string) => {

          axios.patch("http://localhost:80/client/cancelBookedSeat", {}, {
               headers: {
                    'Authorization': `bearer ${token}`
               },
               params: { seatId, }
          }).then((res) => {

          }
          ).catch((err) => console.log(err))
     }
     return (
          <APColumn mainAxisSize='max' crossAxisAlignment='stretch'>
               <Navbar />
               <APColumn style={{ height: "400px", width: "100%", }}>
                    <APText style={{ color: "#676565", fontSize: "16px", fontWeight: 900, margin: "20PX" }}>My Trips</APText>
                    <APRow crossAxisAlignment='start' style={{ height: "100%", width: "80%", paddingLeft: "10px", }}>
                         <APColumn>
                              <APRow> <APText style={{ color: "red", fontSize: "16px", fontWeight: 900 }}>Upcoming</APText>
                                   <APSizedBox width='100px' />
                                   <APText style={{ color: "#676565", fontSize: "16px", fontWeight: 900 }} >Completed</APText></APRow>
                              {/* allInfo.map */}
                              <APScrollView style={{ width: "100%" }}>
                                   {
                                        allInfo?.map((e: any) => {
                                             return (
                                                  <APRow key={e._id} crossAxisAlignment='start' style={{ paddingLeft: "10px", height: "200px", marginTop: "20px", backgroundColor: "#fff", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                                       <APColumn>
                                                            <APRow>
                                                                 <APRow style={{ color: "red", fontSize: "16px", fontWeight: 900 }} > <APText style={{ color: "#676565", fontSize: "16px", fontWeight: 900 }} > Name :  </APText> <APText style={{ marginLeft: "5px" }}> {e.username} </APText></APRow>
                                                                 <APRow style={{ color: "#676565", fontSize: "16px", fontWeight: 900, margin: "20PX" }}> From :  {e.busRouteFrom}<br />  To :  {e.busRouteTo} </APRow>
                                                                 <APRow style={{ color: "#676565", fontSize: "16px", fontWeight: 900, margin: "20PX" }}> Bus Number : {e.busNumber}  <br /> Seat Number: {e.seatNumber}  </APRow>
                                                                 <APRow>
                                                                      <APAsyncButton
                                                                           style={{ marginTop: "50px", backgroundColor: "red" }} onClick={async () => {
                                                                                try {
                                                                                     var count = await launchDialog<number>((deferred) => <CustomCancelDialog deferred={deferred} />)
                                                                                     {
                                                                                          allInfo.map((e: any, index: any) => {
                                                                                               return (
                                                                                                    <div key={index}> {cancelBookedSeat(e.seatId)} </div>
                                                                                               )
                                                                                          })
                                                                                     }
                                                                                } catch (error) {
                                                                                     console.log(error);
                                                                                }
                                                                           }} >Cancel Seat
                                                                      </APAsyncButton>
                                                                 </APRow>
                                                            </APRow>
                                                            <APRow>
                                                                 <APRow style={{ color: "#676565", fontSize: "16px", fontWeight: 900 }} > Date :  {e.date} <br /> E Ticket Id : {e.seatId.slice(15, 26)}
                                                                 </APRow>
                                                                 <APRow style={{ color: "#676565", fontSize: "16px", fontWeight: 900, margin: "20PX" }}> {e.agencyName} </APRow>
                                                                 <APRow style={{ color: "#676565", fontSize: "16px", fontWeight: 900, margin: "20PX" }}> Boarding Time : {e.departureTime} </APRow>
                                                                 <APRow>  </APRow>
                                                            </APRow>
                                                       </APColumn>
                                                  </APRow>

                                             )
                                        })
                                   }
                              </APScrollView>
                         </APColumn>
                    </APRow>
               </APColumn>

          </APColumn>

     )
}

function CustomCancelDialog({ deferred }: { deferred: Deferred<number> }) {
     const [count, setCount] = useState(0)

     return (
          < div style={{ height: "500px", width: "500px", backgroundColor: "#f8f8f8" }}>
               <APDialogCard style={{ width: "500px", color: "#676565", fontSize: "16px", backgroundColor: "#f8f8f8", fontWeight: 900 }} title={"Cancellation"} >
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
                         <CustomisingDialogBox from='Seat Number' time="8" />


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
                         <APButton color="primary" variant="contained" style={{ backgroundColor: "red", width: "90%" }} onClick={() => { deferred.resolve(count) }}> Cancel Ticket</APButton>
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