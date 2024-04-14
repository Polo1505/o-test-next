
import Review from '@/app/ui/reviews/review';
import React from 'react';
import { fetchReviews } from '@/app/lib/data';
import {IReviewProps} from "@/app/lib/definitions"

type ReviewsContainerProps = {};

const ReviewsContainer: React.FC<ReviewsContainerProps> = async () => {
  const reviews:Array<IReviewProps> = (await fetchReviews()).items;

  return (
    <div className="mx-[14px] mt-[105px] mb-[243px] grid grid-cols-1 gap-4 lg:mx-auto lg:grid-cols-2">
      {reviews.map((item) => {
        return <Review key={item.id} id={item.id} text={item.text} />;
      })}
    </div>
  );
};

export default ReviewsContainer;
