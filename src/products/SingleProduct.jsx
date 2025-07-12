import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IoMdClose } from "react-icons/io"; 

export const SingleProduct = () => {
  const data = useLoaderData();
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10 relative">

      <div className="flex justify-center mb-6">
        <img
          src={data.images?.[0]}
          alt={data.title}
          className="w-96 h-auto object-cover rounded-xl shadow-lg cursor-pointer"
          onClick={() => openModal(data.images?.[0])}
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        {data.title}
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
        {data.description}
      </p>
      <h3 className="text-2xl m-4 text-black text-center font-bold">Price - ${data.price}</h3>
      <h1 className="text-3xl font-bold mb-4">More Images....</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data.images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(img)}
          />
        ))}
      </div>


      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] rounded-xl shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-1 rounded-full hover:bg-opacity-80 transition"
            >
              <IoMdClose size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
