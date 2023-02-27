import { Link, RouteComponentProps, Router } from '@reach/router'
import { APButton, APCenter, APColumn, APExpanded, APRow, APSizedBox, APText } from 'ap-components'
import React, { FunctionComponent } from 'react'
import { render } from "react-dom";
import DashboardCard from './DashboardCard'
import NewCustomFun from './NewCustomFun'
import NewCard from "../../App/DemoPage/"
import AutomationWebApp from './AutomationWebApp'
import { MyOwnInput } from './MyOwnInput'
import { UserProfile } from '../../components/UserProfile'
import { Navbar } from '../../components/Navbar'
import { SignUp } from '../../components/SignUp'
import { Login } from '../../components/Login'
import { SearchBus } from '../../components/SearchBus'
import SeatDeatils from '../../components/SeatDetails';
import MyBookings from '../../components/MyBookings';
import DialogComponents from '../../components/DialogComponents';
import ApScrollView from '../../components/ApScrollView';
import SeatDetails from '../../components/SeatDetails';
type Props = { component: FunctionComponent } & RouteComponentProps;

export default function DemoPage(props: RouteComponentProps) {
    return (
        <APColumn mainAxisSize='max' crossAxisAlignment='stretch'>
            <APExpanded>
                <Router>

                    <SignUp path="/" />
                    <Login path="/login" />
                    <UserProfile path="/userProfile" />
                    <SearchBus path="/search" />
                    <SeatDeatils path="/seat/:busId" />
                    <MyBookings path="myBookings/:seatId" />
                    <DialogComponents path="/dialog" />
                    <ApScrollView path="ApScroll" />

                </Router>
            </APExpanded>
        </APColumn>
    )
}

