import axios from "axios";

// const myURL = 'http://localhost:8080/'

const getAllReviews = (setReview) => {
    axios.get(`http://localhost:8080/`)
    .then(({data}) => {console.log(data)
    setReview(data)
})
}
const addReview = (name, setName, comment, setComment, setReview) => {
    axios.post(`http://localhost:8080/saveReview`, {name, comment})
    .then((data) => {
      console.log(data);
      setName('');
      setComment('');
      getAllReviews(setReview)
    })
  }
  
export { getAllReviews, addReview };