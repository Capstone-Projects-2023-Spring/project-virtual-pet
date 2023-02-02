import React from 'react';
import LastUpdated from '@theme-original/LastUpdated';
import RevisionHistory from "../../components/RevisionHistory";

export default function LastUpdatedWrapper(props) {
    return (
        <>
            {process.env.NODE_ENV === 'production' ?  <RevisionHistory/> :  <></>}
            <LastUpdated {...props} />
        </>
    );
}
