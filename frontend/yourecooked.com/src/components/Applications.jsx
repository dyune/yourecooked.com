"use client";

export const Applications = () => {
    return (
        <div className="bg-gradient-to-br from-violet-500 to-pink-500 min-h-screen">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* Your other content goes here */}
        </main>
      {/* Bottom white rectangle */}
      <div className="bg-white w-[85%] h-[45%] flex justify-center items-center absolute bottom-8 left-1/2 transform -translate-x-1/2 rounded-xl shadow-lg">        {/* Clickable horizontal rectangles inside */}
          <div className="space-y-4">
          <div className="flex-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
      Option 1
    </div>
    <div className="flex-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
      Option 2
    </div>
    <div className="flex-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
      Option 3
    </div>
    <div className="flex-1 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
      Option 4
    </div>
          </div>
        </div>
      </div>
    );
};

