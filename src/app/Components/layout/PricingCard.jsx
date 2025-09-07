export default function PricingCard() {
  return (
    <div className="py-20 px-4">
      <h1 className="text-center text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        Choose Your Plan
      </h1>
      <p className="text-center text-gray-400 md:text-lg mt-2">
        Start for free and scale up as you grow. Find the perfect plan for your
        content creation needs.
      </p>
      <div className=" flex flex-wrap justify-center gap-6  mt-10 ">
        {/* Card 1 */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6 w-[70%] sm:w-[35%] lg:w-[23%]">
          <div className="flex flex-col items-center border-b border-gray-300 pb-6">
            <span className="mb-6 text-gray-800">Free</span>
            <span className="mb-3 text-4xl font-medium">$0/mo</span>
            <span className="text-gray-500">Always Free</span>
          </div>
          <div className="space-y-4 py-9">
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Title Generation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Article Generation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-gray-200 text-sm text-gray-600">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Generate Images</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-gray-200 text-sm text-gray-600">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Remove Background</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-gray-200 text-sm text-gray-600">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Remove Object</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-gray-200 text-sm text-gray-600">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Resume Review</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6 w-[70%] sm:w-[35%] lg:w-[23%]">
          <div className="flex flex-col items-center border-b border-gray-300 pb-6">
            <span className="mb-6 text-gray-800">Pro</span>
            <span className="mb-3 text-4xl font-medium">$20/mo</span>
            <span className="text-gray-500">Best for More Features</span>
          </div>
          <div className="space-y-4 py-9">
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Title Generation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Article Generation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Generate Images</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Remove Background</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Remove Object</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-sm text-gray-400">Resume Review</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
