const CodeReviewCard = () => {
  return (
    <div className="flex mt-10 w-full justify-between p-4 rounded-lg transition duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 cursor-pointer">
      <div className="flex items-center w-40">
        <div className="flex items-center">
          <div className="flex flex-col items-center mr-2">
            <span className="font-medium">0</span>
            <span className="text-gray-500 font-semibold">Votes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium">0</span>
            <span className="text-gray-500 font-semibold">Views</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <h1 className="text-base sm:text-lg font-semibold">
          Remove calender from react bootstrap datepicker
        </h1>
      </div>
    </div>
  );
};

export default CodeReviewCard;
