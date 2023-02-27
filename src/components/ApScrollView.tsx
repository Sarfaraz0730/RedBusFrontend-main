import { RouteComponentProps } from '@reach/router'
import { APColumn, APScrollView } from 'ap-components'
import React, { useState } from 'react'

export default function ApScrollView(props: RouteComponentProps) {
     const Array = [1, 2, 3, 4, 5, 56, 7, 8, 6, 4, 3, 2, 2, 4, 5, 66, 77, 7, 8, , 54, 43,]


     return (
          <APColumn mainAxisSize='max' crossAxisAlignment='stretch'>
               {/* <div style={{ height: "100px", border: "1px solid red", width: "1440px", backgroundColor: "black" }}></div> */}


               <APScrollView>
                    <APColumn>
                         {
                              Array.map((e, index) => <div key={index} style={{ height: "300px", border: "1px solid red" }}>Hello World! {e} </div>)
                         }
                    </APColumn>
               </APScrollView>
          </APColumn>
     )
}
