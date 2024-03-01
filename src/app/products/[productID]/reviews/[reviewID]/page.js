import { notFound } from "next/navigation";

function ReviewDetail({ params }) {
    // Invoke notFound function when the reviewID exceeds a certain threshold eg. 1000
    if(parseInt(params.reviewID) > 1000) {
        notFound();
    }

    return <>
        <h1>Product ID: { params.productID }</h1>
        <h1>Review ID: { params.reviewID }</h1>
    </>;
}

export default ReviewDetail;
