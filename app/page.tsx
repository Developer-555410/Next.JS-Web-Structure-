  // // import Image from "next/image";

  // // export default function Home() {
  // //   return (
  // //   <div className="bg-black ">
  // //     <h1 className="text-purple-900 font-bold text-9xl"> Tailwind CSS</h1>
  // //     <p className="text-red-700 text-pretty">
  // //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime nulla alias eaque voluptatem obcaecati enim quos expedita. Deserunt doloribus quia ad odit? Laborum non magni accusamus saepe voluptates at.
  // //     </p>
  // //   </div>
  // //   );
  // // }

  import Image from "next/image";

  export default function Home() {
    return (
    <div>
      <nav className="flex w-full bg-black h-32 items-center">
  <div className="bg-purple-900 h-10 w-96"></div>

  <div className="flex justify-end w-3/5 items-center">
  <div className="bg-red-900 h-10 w-44"></div>
  <div className="bg-yellow-900 h-10 w-44"></div>
  <div className="bg-blue-900 h-10 w-44"></div>
  </div>
      </nav>
      <div className="flex justify-center items-center min-h-screen bg-yellow-600">
      <div className="bg-red-500 p-4 rounded-lg shadow-lg" >
        <div className="flex">
          <div className="m-3 p-4 bg-pink-400" style={{ width: '550px', height: '400px'}}>
          </div>
          <div className="m-3 p-4 bg-green-500" style={{ width: '550px', height: '400px'}}>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }

  
