import { notFound } from "next/navigation";

function getRandomInt(count) {
    return Math.floor(Math.random() * count);
}

function ReviewDetail({ params }) {
    // Invoke notFound function when the reviewID exceeds a certain threshold eg. 1000
    if(parseInt(params.reviewID) > 1000) {
        notFound();
    }

    const random = getRandomInt(2);

    if(random === 1) {
        throw new Error('Error loading review!');
    }

    return (
        <div className="p-8">
            <h1>Product ID: { params.productID }</h1>
            <h1>Review ID: { params.reviewID }</h1>
        </div>
    );
}

export default ReviewDetail;
