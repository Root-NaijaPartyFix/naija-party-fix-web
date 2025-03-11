const PlanForm = () => {
  return (
    <div className="mb-bom mx-auto flex w-full max-w-[52rem] flex-col gap-8 rounded-lg p-6 shadow-xl sm:flex-row sm:gap-6">
      {/* Left Section */}
      <div className="flex flex-col justify-center">
        <p className="mb-1 text-center text-2xl font-semibold text-white sm:text-left sm:text-xl">
          Plan an Event
        </p>
        <p className="text-center text-sm text-gray-300 sm:text-left">
          Fill in the details below to start planning your event.
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="flex w-full flex-col gap-4">
        {/* Event Type */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-200">
            Event Type
          </label>
          <input
            type="text"
            className="focus:border-bgDeep focus:ring-bgDeep w-full rounded-lg border border-gray-600 bg-transparent p-3 text-sm text-white placeholder-gray-400 outline-none focus:ring-2"
            placeholder="E.g., Wedding, Birthday, etc."
          />
        </div>

        {/* Budget */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-200">
            Budget Range
          </label>
          <input
            type="text"
            className="focus:border-bgDeep focus:ring-bgDeep w-full rounded-lg border border-gray-600 bg-transparent p-3 text-sm text-white placeholder-gray-400 outline-none focus:ring-2"
            placeholder="E.g., N100,000"
          />
        </div>

        {/* Submit Button */}
        <button className="hover:bg-lightBrown w-full rounded-lg bg-brown p-3 text-sm font-semibold text-white shadow-lg transition-all duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PlanForm;
