import Girl from "../../assets/bella/girls.png";

export const About = () => {
  return (
    <div className="bg-[#59403b] relative mt-[-40px] h-auto text-[#b1a9a8] flex flex-col items-center font-playfair py-10">
    
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        About Us
      </h1>
      
      <div className="flex flex-col md:flex-row justify-center items-center w-full px-4">
        
        <div className="p-4 md:p-32 w-auto md:w-[900px] flex flex-col gap-4 md:mr-10">
          <h1 className="text-2xl md:text-4xl font-bold">
            Demam is a small, female-owned business focusing on natural beauty
            products like qasil and turmeric face cleansers and masks.
          </h1>
          <p>
            The word Demam translates to a beautiful person in and out, who
            radiates beautiful energy. Our products are more than just skincare;
            it’s the power of togetherness. The power of beautiful connections
            between people. With each application, you’re not just pampering
            yourself, but nourishing the bonds that make life beautiful.
          </p>
        </div>
        
        <img 
          src={Girl} 
          alt="Demam Beauty" 
          className="h-auto max-w-[300px] md:max-w-[400px] md:ml-10" 
        />
      </div>
    </div>
  );
}
