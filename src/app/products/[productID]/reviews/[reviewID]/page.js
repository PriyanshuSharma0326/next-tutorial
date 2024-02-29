function ReviewDetail({ params }) {
    return <>
        <h1>Product ID: { params.productID }</h1>
        <h1>Review ID: { params.reviewID }</h1>
    </>;
}

export default ReviewDetail;
