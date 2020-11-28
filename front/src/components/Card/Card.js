import React, { useEffect, useState } from 'react';
import './Card.scss'
import axios from 'axios';


import { connect } from 'react-redux';

// ACTIONS
import { like, block } from '../../store/actions/match';
import { setAlert } from '../../store/actions/alert';

const Card = ({ candidate, like, block, setResetCandidates, setAlert }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            console.log('getImages');
            try {
                const res = await axios.get(`/api/image?user_id=${candidate.id}`);
                console.log(res.data);
                setImages(res.data);

            } catch (err) {
                const error = err.response.data.message;

                if (err) {
                    setAlert(error, ` error getting images for user: ${candidate.id}`);
                }
            }
        };
        getImages()

    }, [candidate]);

    const likeClick = () => {
        like(candidate.id);
        setResetCandidates((before) => !before);
    };

    const blockClick = () => {
        block(candidate.id);
        setResetCandidates((before) => !before);
    };

    return (
        <div>

            {images.length > 0 &&
                <div className="card"
                    style={{ backgroundImage: `url("http://localhost:5000/images/${images[0].path}")` }}
                >
                    <div className='card-footer'>
                        <div className='card-footer-name'>{candidate.firstname}</div>
                        <div className='card-footer-name'>{candidate.id}</div>

                        <div className='card-footer-info'>
                            <i className="fas fa-info-circle"></i>
                        </div>
                    </div>
                </div>
            }

            <div className='actions'>
                <div className='actions-icons'>
                    <div className='cross' onClick={() => blockClick()}>
                        <i class="fas fa-times"></i>
                    </div>
                    <div className='heart' onClick={() => likeClick()}>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>

            </div>

        </div >

    )
}

export default connect(null, { like, block, setAlert })(Card);