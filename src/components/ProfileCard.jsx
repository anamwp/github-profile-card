import React, { useEffect, useState } from 'react'

export default function ProfileCard({name}) {

    const [userdata, setUserdata] = useState({
        loading: true,
        data: '',
        status: false
    })
    
    const apiurl = 'https://api.github.com/users/' + name;

    useEffect( () => {
        async function fetchData(apiurl){
            setUserdata({
                loading:true
            });
            const response = await fetch(apiurl)
            .then( res => res.json() )
            .then( data => ({ loading: false, data: data, status: true }) )
            .catch( e => ({ loading:false, data: e.message, status:false }) )
            return response;
        }
        fetchData(apiurl).then(res => setUserdata(res));
    }, [apiurl]);

    return (
        <>
        <h2>user data is under construction</h2>
        {
            userdata.loading 
            ?
            'Loading'
            :
                ! userdata.data.message
                ? 
                <div className="card">
                    <img
                    className="card-img-top"
                    src={userdata.data.avatar_url}
                    alt="user"
                    />
                    <div className="card-body">
                    <h5 className="card-title">{userdata.data.name}</h5>
                    <p className="card-text">{userdata.data.bio}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Username - {userdata.data.login}</li>
                    <li className="list-group-item">blog - {userdata.data.blog ? userdata.data.blog : "N/A" }</li>
                    <li className="list-group-item">Followers - {userdata.data.followers}</li>
                    <li className="list-group-item">Following - {userdata.data.following}</li>
                    <li className="list-group-item">Company - {userdata.data.company}</li>
                    <li className="list-group-item">Location - {userdata.data.location}</li>
                    <li className="list-group-item">Public Repo - {userdata.data.public_repos}</li>
                    <li className="list-group-item">Public Gists - {userdata.data.public_gists}</li>
                    <li className="list-group-item">Twitter - {userdata.data.twitter_username ? '@' + userdata.data.twitter_username : 'Not Available' }</li>
                    </ul>
                    <div className="card-body">
                    <a href={userdata.data.html_url} className="card-link">
                        Full Profile
                    </a>
                    </div>
                </div>
                : 
                "No user found"
            }

        </>
    )
}
