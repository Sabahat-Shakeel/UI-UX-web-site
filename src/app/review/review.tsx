import Image from 'next/image';

export default function Reviews() {
  return (
    <div className="max-w-3xl mx-auto p-4 py-24">
        <hr/>
        <br/>
      <em className="text-2xl flex justify-center font-bold text-center mb-6 text-black">Our Best Customer Reviews</em>

   
      <div className="space-y-4 ">
   
        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 1"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4 bg-yellow-400"
          />
          <div>
            <h2 className="font-bold text-black">John Doe</h2>
            <em className="text-black">Great product! Really satisfied with the quality.</em>
          </div>
        </div>

   
        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 2"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4 bg-green-400"
          />
          <div>
            <h2 className="font-bold text-black">Jane Smith</h2>
            <em className="text-black">Excellent customer service and a fantastic product.</em>
          </div>
        </div>

    
        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 3"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4 bg-blue-500"
          />
          <div>
            <h2 className="font-bold text-black">Alex Brown</h2>
            <em className="text-black">Value for money! Would definitely recommend it.</em>
          </div>
        </div>


        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 4"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4 bg-purple-500"
          />
          <div>
            <h2 className="font-bold text-black">Emily White</h2>
            <em className="text-black">The product exceeded my expectations. Amazing quality!</em>
          </div>
        </div>

       
        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 5"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4 bg-red-400"
          />
          <div>
            <h2 className="font-bold text-black">Michael Lee</h2>
            <em className="text-black">Prompt delivery and excellent packaging. Very happy!</em>
          </div>
        </div>

   
        <div className="flex bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/people.png"
            alt="Person 6"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full mr-4 bg-pink-500"
          />
          <div>
            <h2 className="font-bold text-black">Samantha Green</h2>
            <em className="text-black">High quality and great performance. Worth every penny!</em>
          </div>
        </div>
      </div>
      <em>Gives Your Feedback !</em>

      <div className='flex flex-col py-11 space-y-8 shadow-md border justify-center mt-11'>
      <p className='flex justify-center font-semibold'>We happy to see your feedback!</p>
<input className='border-transparent py-4 outline-none shadow-md border border-gray-400 rounded-full text-center' type ="email" placeholder='Email'></input>
<input className='border-transparent py-4 outline-none shadow-md border border-gray-400 rounded-full text-center' type ="text" placeholder='Name'></input>
<input className='border-transparent py-4 outline-none shadow-md border border-gray-400 rounded-full text-center' type = "text" placeholder='
Feedback'></input>
<button className='flex justify-center outline-none ml-8 focus:bg-black focus:text-white bg-yellow-400 px-8 py-1 rounded-md border w-28 '>Submit</button>
      </div>
    </div>
  );
}
