import Navbar from '../components/Navbar';

const Skills = () => {
  const resources = [
    { 
      id: 1, 
      title: "Data Structures", 
      icon: "💻", 
      topics: "Arrays, Trees, Graphs", 
      status: "In Progress",
      pdfUrl: "https://www.tutorialspoint.com/data_structures_algorithms/data_structures_algorithms_tutorial.pdf" 
    },
    { 
      id: 2, 
      title: "Soft Computing", 
      icon: "🧠", 
      topics: "Neural Networks, Fuzzy Logic", 
      status: "Reviewing",
      pdfUrl: "https://www.vssut.ac.in/lecture_notes/lecture1423725453.pdf" 
    },
    { 
      id: 3, 
      title: "Software Engineering", 
      icon: "⚙️", 
      topics: "SDLC, Agile, Testing", 
      status: "Not Started",
      pdfUrl: "https://www.vssut.ac.in/lecture_notes/lecture1428551142.pdf" 
    },
    { 
      id: 4, 
      title: "DAA", 
      icon: "📉", 
      topics: "Greedy, Dynamic Programming", 
      status: "Completed",
      pdfUrl: "https://www.gatevidyalay.com/wp-content/uploads/2018/06/Design-and-Analysis-of-Algorithms-Notes.pdf" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-10 px-4">
        <header className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Academic Skills Hub</h2>
          <p className="text-gray-500 mt-2">Access your notes and roadmap in one place.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res) => (
            <div key={res.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{res.icon}</div>
              <h4 className="text-lg font-bold text-gray-900">{res.title}</h4>
              <p className="text-gray-400 text-xs mt-1 uppercase font-semibold tracking-tighter">{res.topics}</p>
              
              <div className="mt-6 flex justify-between items-center">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                  res.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                }`}>
                  {res.status}
                </span>
                
                {/* PDF Link Button */}
                <a 
                  href={res.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-50 text-blue-600 font-bold text-xs px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Notes
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Skills;