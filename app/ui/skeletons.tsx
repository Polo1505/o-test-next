// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function ReviewSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-mygray-300 p-2 shadow-sm w-full`}
    >
      <div className=" my-auto rounded-[15px] bg-mygray-400 p-5 min-h-[480px] w-[464px]" />
    </div>
  );
}

export function ReviewsSkeleton() {
  return (
    <div className="mx-[14px] my-[100px] grid grid-cols-1 gap-4 lg:mx-auto lg:grid-cols-2">
      <ReviewSkeleton />
      <ReviewSkeleton />
    </div>
  );
}

