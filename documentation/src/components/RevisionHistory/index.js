import React, {useEffect, useState} from 'react';

export default function RevisionHistory(props) {
    const [history, setHistory] = useState(null)

    useEffect(()=>{
        console.log(props);
        if (history == null){
            var myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            // myHeaders.append("Authorization", `Bearer ${api_key}`);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow',
            };

            fetch(`https://api.github.com/repos/${process.env.ORG_NAME}/${process.env.PROJECT_NAME}/commits?path=documentation/`+location.pathname.substring(location.pathname.lastIndexOf('docs/'))+".md", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setHistory(result)
                })
                .catch(error => console.log('error', error));
        }
    },[history]);
    // const {siteConfig} = useDocusaurusContext();
    return <>
        <details>
            <summary>
                Revision History
            </summary>
        <table>
            <thead>
            <tr>
            <th scope="row">
                Author
            </th>
            <th scope="row">
                Revision
            </th>
                <th scope="row">
                Date
            </th>
            </tr>
            </thead>
            <tbody>
            {history != null ? history.map((hist)=>{
                return <>
                <tr>
                    <th scope="row">
                    {hist.commit.author.name}
                    </th>
                    <td>
                        <a href={`https://github.com/${process.env.ORG_NAME}/${process.env.PROJECT_NAME}/commit/${hist.sha}`}>

                        {hist.commit.message}
                        </a>
                    </td>
                    <td>
                        {`${new Date(hist.commit.author.date).toLocaleString()}`}
                    </td>
                </tr>
                </>
            }) : <>nothing</>
            }
        </tbody>
        </table>
        </details>
    </>
}
