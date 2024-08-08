import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-6"
        />
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Fascinating Felines</h2>
          <p className="mb-4">
            Cats are one of the most popular pets in the world. Known for their independence,
            grace, and playful nature, cats have been companions to humans for thousands of years.
          </p>
          <h3 className="text-xl font-semibold mb-2">Characteristics of Cats</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Excellent hunters with keen senses</li>
            <li>Flexible bodies and sharp retractable claws</li>
            <li>Can purr when content or stressed</li>
            <li>Sleep for 12-16 hours a day</li>
            <li>Have an average lifespan of 12-18 years</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Popular Cat Breeds</h3>
          <ul className="list-disc list-inside">
            <li>Siamese</li>
            <li>Persian</li>
            <li>Maine Coon</li>
            <li>Bengal</li>
            <li>Scottish Fold</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
