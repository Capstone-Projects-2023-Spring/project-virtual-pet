import React from 'react';
import Admonition from '@theme/Admonition';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function ForReview() {
    const {siteConfig} = useDocusaurusContext();
    console.log("REVIEW="+process.env.REVIEW);
    return <>
        {process.env.REVIEW === 0 ? <div style={{margin:"10px"}}>
            <Admonition title="FOR REVIEW" type="caution">
                <p>This is a review copy version of {siteConfig.title}</p>
            </Admonition>
        </div> : <></>}
    </>
}
