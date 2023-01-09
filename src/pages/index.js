import connectDB from "../lib/dbConnect";
import Email from "../models/Email";

export default function Home () {
  return (
    <>
      <section>
        <div className="main-view home-pic container">
          <h1>Suzanne Montgomery</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit veritatis!</p>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(){
  try {
    await connectDB()
    const response = await Email.find({})
    return {props: {email: 123}}
  } catch (error) {
    console.log(error)
  }
}

