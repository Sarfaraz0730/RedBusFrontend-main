import { RouteComponentProps } from '@reach/router'
import { APAsyncButton, APButton, APColumn, APExpanded, Deferred, launchDialog } from 'ap-components'
import React, { useState } from 'react'

export default function DialogComponents(prop: RouteComponentProps) {
     const [formCountDialog, setformCountDialog] = useState<number>()
     return (

          <APExpanded>
               <>
                    <APColumn style={{ height: "500px", width: "300px" }}>
                         Hello world {formCountDialog}
                         <APAsyncButton onClick={async () => {
                              try {
                                   var count = await launchDialog<number>((deferred) => <CustomDailogBox deferred={deferred} />)
                                   // var count = await launchDialog<number>((deferred) => <CustomDailogBox deferred={deferred} />);
                                   setformCountDialog(count)
                              } catch (error) {
                                   console.log(error);

                              }

                         }}>Open Dialog</APAsyncButton>
                    </APColumn>
               </>

          </APExpanded >
     )
}

function CustomDailogBox({ deferred }: { deferred: Deferred<number> }) {
     const [count, setCount] = useState(0)
     return (
          <div style={{ height: "500px", width: "300px" }}> New Dialog Box {count}
               <APButton onClick={() => setCount(count + 1)} >Increment  </APButton>
               <APButton color="primary" variant="contained" onClick={() => { deferred.resolve(count) }}>Confirm</APButton>

               <APButton color="primary" variant="contained" onClick={() => { deferred.reject(new Error("Oops! something went wrong")) }}>Reject</APButton>
          </div>
     )
}