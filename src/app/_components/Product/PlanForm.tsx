const PlanForm = () => {
  return (
    <div className="mx-auto flex w-full max-w-lg gap-6 rounded-lg bg-gray-100/50 p-6 shadow-lg">
      {/* Item One */}
      <div className="flex flex-col justify-center">
        <p className="text-xl font-semibold text-gray-100">Plan an Event</p>
        <p className="text-sm text-gray-300">
          Fill in the details below to start planning your event.
        </p>
      </div>

      {/* Item Two */}
      <div className="flex w-full flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-100">
            Event Type
          </label>
          <input
            type="text"
            className="w-full rounded-lg border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="E.g., Wedding, Birthday, etc."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100">
            Budget Range
          </label>
          <input
            type="text"
            className="w-full rounded-lg border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="E.g., N100,000"
          />
        </div>
        <button className="w-full rounded-lg bg-brown p-2 text-sm font-medium text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PlanForm;
