import React, { useState } from 'react'
import './PostBearers.css'

function Card(props) {
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} alt={props.title} class="card__image" />
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            {/* <button className="card__btn">View Recipe</button> */}
        </div>
    )
}
function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../Assets/FlagBearers', false, /\.(png|jpe?g|svg)$/));
   
  

function PostBearers() {
    const [post, setPosts] = useState([
        {
            name: 'AADIL SHAMEEM',
            branch: '',
            batch: 2020,
            post: 'Chairperson',
            imageurl:
                images[0],
        },
        {
            name: 'ADITYA KUMAR MANDAL',
            branch: 'Mechanical',
            batch: 2020,
            post: 'Secretary & Manufacturing Head',
            imageurl:
                images[1],
        },
        {
            name: 'ADITYA GAUTAM',
            branch: 'Mechanical',
            batch: 2020,
            post: 'Secretary',
            imageurl:
            images[2],
        },
        {
            name: 'AYUSH RAJ',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Vice-Chairperson',
            imageurl:
                images[3],
        },
        {
            name: 'HARSH RAJ',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Team Manager & Transmission Head',
            imageurl:
                images[4],
        },
        {
            name: 'SHRUTI KUMARI',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Operation & Event Manager',
            imageurl:
                images[5],
        },
        {
            name: 'ABHAY TOPPO',
            branch: '',
            batch: 2018,
            post: 'Operation and Event Manager cum Breaking Head',
            imageurl:
                images[6],
        },
        {
            name: 'SHREYA KAPISWE',
            branch: '',
            batch: 2018,
            post: 'Team Manager',
            imageurl:
                images[7],
        },
        {
            name: 'SHIVAM KUMAR MISHRA',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Treasurer',
            imageurl:
            images[8],
        },
        {
            name: 'RITIK KUMAR',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Electronics Head',
            imageurl:
            images[9],
        },
        {
            name: 'SHREYA PRABHA',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Alumni Incharge',
            imageurl:
            images[10],
        },
        {
            name: 'AKASH SINGH',
            branch: 'Mechanical',
            batch: 2018,
            post: 'P.R.O.',
            imageurl:
            images[11],
        },
        {
            name: 'PRIYARANJAN TIWARY',
            branch: '',
            batch: 2020,
            post: 'Electronics Head',
            imageurl:
                images[12],
        },
        {
            name: 'RISHI RAUNAK PAHAN',
            branch: '',
            batch: 2020,
            post: 'Sponsorship & Suspension Head',
            imageurl:
                images[13],
        },
        {
            name: 'ANEESHA LIZA LAKRA',
            branch: '',
            batch: 2020,
            post: 'Workshop Incharge',
            imageurl:
                images[14],
        },
        {
            name: 'SHARIQUE AHSAN',
            branch: '',
            batch: 2020,
            post: 'Workshop Incharge & Steering Head',
            imageurl:
                images[15],
        },
        {
            name: 'AKASHDEEP',
            branch: '',
            batch: 2020,
            post: 'Workshop Incharge & Steering Head',
            imageurl:
                images[16],
        },
        {
            name: 'KUMAR PRIYAM',
            branch: '',
            batch: 2020,
            post: 'Design & CAE HEAD',
            imageurl:
                images[17],
        },
        
    ])

    return (
        <div className="PostBearers">
            <h2 className="section-heading">Post Bearers</h2>

            <div className="wrapper">
                {post.map((member) => {
                    return (
                        <Card
                            img={member.imageurl}
                            title={member.name}
                            description={member.post}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PostBearers
