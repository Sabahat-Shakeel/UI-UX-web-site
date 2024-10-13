import Image from 'next/image';

export default function Reviews() {
  return (
    <div className="max-w-3xl mx-auto p-4 py-24">
        <hr/>
        <br/>
      <h1 className="text-2xl font-bold text-center mb-6 text-yellow-500">Our Best Customer Reviews</h1>

   
      <div className="space-y-4 ">
   
        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 1"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="font-bold text-black">John Doe</h2>
            <p className="text-black">Great product! Really satisfied with the quality.</p>
          </div>
        </div>

   
        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 2"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="font-bold text-black">Jane Smith</h2>
            <p className="text-black">Excellent customer service and a fantastic product.</p>
          </div>
        </div>

    
        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 3"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="font-bold text-black">Alex Brown</h2>
            <p className="text-black">Value for money! Would definitely recommend it.</p>
          </div>
        </div>


        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 4"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="font-bold text-black">Emily White</h2>
            <p className="text-black">The product exceeded my expectations. Amazing quality!</p>
          </div>
        </div>

       
        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 5"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="font-bold text-black">Michael Lee</h2>
            <p className="text-black">Prompt delivery and excellent packaging. Very happy!</p>
          </div>
        </div>

   
        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 6"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="font-bold text-black">Samantha Green</h2>
            <p className="text-black">High quality and great performance. Worth every penny!</p>
          </div>
        </div>
      </div>
      <p>Gives Your Feedback !</p>
    </div>
  );
}
