import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg" alt="gambar kosong"/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time:'00.00',
    title:'title here',
    desc:'xx ditontin. x hari yang lalu'
}

export default YoutubeComp;