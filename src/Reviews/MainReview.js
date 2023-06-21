import { useEffect, useState } from 'react';
import Reviews from './Reviews';
import { getAllReviews, addReview } from './FetchReviews';

function MainReview () {
    const [myReview, setReview] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    useEffect( ()=> {
        getAllReviews(setReview)
    }, [])

    return(
        <div>
            <h2>Reviews</h2>

            <input 
                type="text" 
                placeholder="Add a review"
                value={ name }
                onChange = {(e) => setName(e.target.value)}/>
            <input 
                type="text" 
                placeholder="Your name"
                value={ comment }
                onChange = {(e) => setComment(e.target.value)}/>

                <button       
                onClick={() => addReview(name, setName, comment, setComment, setReview)}
                > Add a review
                </button>


            {myReview.map((review) => <Reviews name={review.name} comment={review.comment} key={review._id} />
                )}
        </div>
    )
}
export default MainReview;