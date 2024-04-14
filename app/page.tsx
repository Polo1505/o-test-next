import CartContainer from '@/app/ui/cart/cart-wrapper';
import ReviewsContainer from '@/app/ui/reviews/reviews-wrapper';
import ProductContainer from '@/app/ui/products/products-wrapper';
import { Suspense } from 'react';
import { ReviewsSkeleton } from './ui/skeletons';

const Page = () => {
  return (
    <>
      <main className="m-auto flex max-w-screen-lg flex-col justify-center items-center">
        <Suspense fallback={<ReviewsSkeleton />}>
          <ReviewsContainer />
        </Suspense>
        <CartContainer />
        <ProductContainer />
      </main>
    </>
  );
};

export default Page;
