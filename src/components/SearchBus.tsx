import { RouteComponentProps } from '@reach/router'
import { navigate } from "@reach/router"
import { APButton, APColumn, APForm, APFormFieldText, APFormSubmit, APImage, APRow, APScrollView, APSizedBox, APText, showErrorDialog, sleep, useAPForm } from 'ap-components'
import axios from 'axios'
import React, { useState } from 'react'
import { Navbar } from './Navbar'


export const SearchBus = (prop: RouteComponentProps) => {
    var control = useAPForm();
    const [data, setData] = useState<any>()
    const [seatDetails, setSeatDetails] = useState<any>()
    const [form, setForm] = useState({
        busRouteFrom: "Chennai",
        busRouteTo: "Bangalore",
        date: "2-11-2022",
    })
    const handleChange = (e: any) => {

        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    }
    const handleSearch = (form: any) => {

        axios.get("http://localhost:80/client/busDetails", {
            params: form
        })
            .then((res) => {

                setData(res.data)

            })
            .catch(err => console.log("error", err))
    }


    const handleViewSeatDetails = (e: any) => {

        axios.get("http://localhost:80/client/seatDetails", {
            params: e
        }).
            then((res) => setSeatDetails(res.data)).
            catch((err) => console.log("error", err))

    }
    return (

        <APColumn mainAxisSize='max' crossAxisAlignment='stretch'>
            <APRow>  <Navbar /> </APRow>
            <APRow mainAxisAlignment='center' crossAxisAlignment='center' style={{ height: "100px", width: "1440px", border: "1px solid #cde4e5", backgroundColor: "#cde4e5" }}>
                <APRow mainAxisAlignment='center' crossAxisAlignment='center' style={{ height: "80px", width: "95%", }}>
                    <APForm control={control}>
                        <APRow>
                            <APFormFieldText
                                style={{
                                    height: "35px",
                                    width: "280px",
                                    paddingBottom: "10px"
                                }}
                                label='From'
                                initialValue={form.busRouteFrom}
                                onChanged={(v) => form.busRouteFrom = v}
                                validator={(v) => {
                                    if (v.length === 0) {
                                        return 'Input required';
                                    }
                                    return null;
                                }}
                            />

                            <APFormFieldText
                                initialValue={form.busRouteTo}
                                style={{
                                    height: "35px",
                                    width: "280px",
                                    marginLeft: "5px",
                                    paddingBottom: "10px"
                                }}
                                label='To'
                                onChanged={(v) => form.busRouteTo = v}
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
                                    width: "280px",
                                    marginLeft: "5px",
                                    paddingBottom: "10px"
                                }}
                                initialValue={form.date}
                                label='Date'
                                onChanged={(v) => form.date = v}
                                validator={(v) => {
                                    if (v.length === 0) {
                                        return 'Input required';
                                    }
                                    return null;
                                }}
                            />
                            <APFormSubmit
                                style={{
                                    width: "280px",
                                    marginLeft: "5px",
                                    backgroundColor: "red"
                                }}
                                onClick={async () => {
                                    if (await control.validate()) {
                                        try {
                                            handleSearch(form)
                                        } catch (error) {
                                            if (error instanceof Error)
                                                showErrorDialog(error.message);
                                        }
                                    }
                                }}

                            >
                                Search
                            </APFormSubmit>
                        </APRow>
                    </APForm>
                </APRow>
            </APRow>
            <APScrollView>
                {
                    data?.map((e: any) => {
                        return (
                            <div key={e._id}>
                                <APColumn crossAxisAlignment='start' style={{ height: "200px", marginTop: "15px", padding: "20px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)", }}>
                                    <APRow crossAxisAlignment='start' style={{ padding: "10px" }}>
                                        <APRow style={{ color: "#3e3e52", fontSize: "19", lineHeight: "24px", fontWeight: 700, }}> {e.agencyName}</APRow>
                                        <APRow style={{ color: "#3e3e52", fontSize: "19", lineHeight: "24px", fontWeight: 700, }} >  {e.departureTime}</APRow>
                                        <APRow style={{ color: "#7e7e8c", fontSize: "14", lineHeight: "24px", fontWeight: 400, }} >
                                            {e.durationToReachDestination}  </APRow>
                                        <APRow style={{ color: "#3e3e52", fontSize: "19", lineHeight: "24px", fontWeight: 900, }} > {e.arrivalTime} </APRow>

                                        <APRow style={{ color: "#7e7e8c", fontSize: "14", lineHeight: "24px", fontWeight: 400, }} > Start From INR </APRow>
                                    </APRow>
                                    <APRow crossAxisAlignment='start' style={{ padding: "10px" }}>
                                        <APRow> AC Sleeper (2+1) </APRow>
                                        <APRow style={{ color: "#7e7e8c", fontSize: "14", lineHeight: "24px", fontWeight: 400, }} >Bus Number {e.busNumber}  </APRow>
                                        <APRow> </APRow>
                                        <APRow> {e.date}</APRow>

                                        <APRow style={{ color: "#3e3e52", fontSize: "30px", lineHeight: "24px", fontWeight: 700, }} > {e.price} </APRow>
                                    </APRow>
                                    <APRow crossAxisAlignment='start' style={{ padding: "10px" }}>
                                        <APRow>  </APRow>
                                        <APRow style={{ color: "#3e3e52", fontSize: "22px", lineHeight: "24px", fontWeight: 700, }} > <APSizedBox width='30px' /> {e.busRouteFrom} </APRow>
                                        <APRow style={{ color: "#3e3e52", fontSize: "22px", lineHeight: "24px", fontWeight: 700, }}> <APSizedBox width='230px' /> {e.busRouteTo}</APRow>
                                        <APRow> </APRow>
                                        <APRow> </APRow>
                                        <APRow>  </APRow>
                                    </APRow>
                                    <APRow crossAxisAlignment='start' style={{ padding: "10px" }}>
                                        <APRow mainAxisSize='max' style={{ width: "560px" }} >

                                            <APRow> <APImage style={{ height: "25px", width: "30px" }} src={"/img/food2.svg"} /> </APRow>
                                            <APRow> <APImage style={{ height: "25px", width: "30px" }} src={"/img/food3.svg"} /> </APRow>

                                        </APRow>
                                        <APRow > <APSizedBox width='158px' /> Live tracking </APRow>
                                        <APRow>
                                            <APButton style={{ marginLeft: "60px" }} onClick={() => { }}>Change Travel Time </APButton></APRow>
                                        <APRow>  </APRow>
                                        <APRow>  </APRow>
                                        <APRow crossAxisAlignment='end'>
                                            <APButton onClick={() => { navigate(`/seat/${e._id}`) }}> View Seats </APButton>
                                        </APRow>
                                    </APRow>
                                </APColumn>
                            </div>
                        )
                    })
                }
            </APScrollView>
        </APColumn>

    )
}


