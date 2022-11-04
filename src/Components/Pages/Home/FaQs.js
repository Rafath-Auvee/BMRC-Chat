import React from "react";

const FaQs = () => {
  const collapse = [
    {
      question: "What does BMRC do?",
      answer:
        "BMRC provides a platform for collaboration. There is an immense gap and contradiction; between unemployment in the nation and the companies not getting the right team.We BMRC, will find out the best of the talent and coach them to become Business Influencer. At the same time, we understand the needs and challenges of the businesses. And become a mediator and connect the right Business Influencer with the right company. We couple the talents of the candidates to the needs of the companies.",
    },
    {
      question: "What does BMRC do for the Candidates?",
      answer:
        "After joining BMRC, candidates are given counseling; they know more about their interests and competencies. One must know about their talents along with their passions. We provide them with skill-based and mindset training. It will be an entire journey from the Candidate to a Business Influencer. Then they will be associated with established companies according to their interest and choice.",
    },
    {
      question: "Who are the Candidates?",
      answer:
        "Candidates are the students, freshers, or people who are looking for an alternative to a job. They are the ones who don’t want to limit themselves in a 9 to 5 job cycle, who dare to do something big, something out of the box and are self-driven. Who are passionate but lack support, appropriate skills, and Business knowledge. The selected candidates will be trained to become Business Influencers.",
    },
    {
      question: "Who are Business Influencers?",
      answer:
        "Business Influencers are the candidates who have finished their training period. They will have to choose between Executive Business Partner (EBP) Model or Executive Business Leader (EBL) Model.",
    },
  ];
  return (
    <div className="py-[5%]">
      <h1 className="mb-[3%] text-4xl text-center font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
        <span className="block xl:inline">Frequently Asked</span>
        <span className="ml-1 block text-indigo-600 xl:inline">Questions</span>
      </h1>
      <div className=" mx-auto w-4/5 2xl:w-[94rem] ">
        <div className="">
          {collapse.map((col) => (
            <div className="collapse collapse-arrow rounded-lg my-[0.7%]">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#f7f7f7] text-[#000000] peer-checked:bg-[#0d71f4] peer-checked:text-[#ffffff] font-bold border-l-4 border-[#0d71f4] rounded-lg">
                {col.question}
              </div>
              <div className="peer-checked:p-3 peer-checked:mb-2 collapse-content bg-[#ffffff] text-[#000000] peer-checked:bg-[#ffffff] peer-checked:text-[#000000] border-none">
                <p>{col.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaQs;
