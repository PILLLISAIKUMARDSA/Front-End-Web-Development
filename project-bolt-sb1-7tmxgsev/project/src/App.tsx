import React, { useState, useEffect } from 'react';
import { 
  Users, 
  BookOpen, 
  Zap, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  TrendingUp,
  Award,
  Network,
  Target
} from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StickyBanner from './components/StickyBanner';

const universities = [
  { name: "Harvard University", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop&crop=center" },
  { name: "Stanford University", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop&crop=center" },
  { name: "MIT", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop&crop=center" },
  { name: "Oxford University", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop&crop=center" },
  { name: "Cambridge University", logo: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=200&h=200&fit=crop&crop=center" },
  { name: "Yale University", logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=200&h=200&fit=crop&crop=center" },
  { name: "Princeton University", logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=200&h=200&fit=crop&crop=center" },
  { name: "Columbia University", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop&crop=center" },
  { name: "UC Berkeley", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop&crop=center" },
  { name: "UCLA", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop&crop=center" },
  { name: "University of Toronto", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop&crop=center" },
  { name: "ETH Zurich", logo: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=200&h=200&fit=crop&crop=center" }
];

const socialStats = [
  { platform: "Facebook", icon: Facebook, followers: "125K", engagement: "8.2%", color: "text-blue-600" },
  { platform: "Twitter", icon: Twitter, followers: "87K", engagement: "12.5%", color: "text-sky-500" },
  { platform: "Instagram", icon: Instagram, followers: "156K", engagement: "15.3%", color: "text-pink-600" },
  { platform: "LinkedIn", icon: Linkedin, followers: "94K", engagement: "6.8%", color: "text-blue-700" }
];

const missionPoints = [
  {
    icon: Users,
    title: "Student-Centric Approach",
    description: "Tailored technology solutions designed specifically for the unique needs of university students worldwide."
  },
  {
    icon: Zap,
    title: "Cutting-Edge Innovation",
    description: "Leveraging the latest technologies to provide students with competitive advantages in their academic journey."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connecting students across 500+ universities worldwide through our comprehensive technology platform."
  },
  {
    icon: BookOpen,
    title: "Educational Excellence",
    description: "Supporting academic success through innovative tools and resources that enhance learning experiences."
  }
];

function CountUpAnimation({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      
      {/* Sticky Banner */}
      <StickyBanner />

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <Header onMenuToggle={toggleSidebar} />

        {/* Hero Section */}
        <section id="home" className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>Trusted by 500K+ Students Worldwide</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Empowering Students Through
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Technology</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                MITS provides cutting-edge technology services tailored for university students. 
                Join our global network and access premium tools that enhance your academic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Join Our Network
                </button>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Internship Section */}
        <section id="internship" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Internship Opportunities</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join our team and gain valuable experience in cutting-edge technology while working with students from top universities worldwide.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl border border-blue-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Apply for Internship</h4>
              <p className="text-gray-600 mb-6">Ready to start your journey with MITS? Apply now and become part of our innovative team.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Application
              </button>
            </div>
          </div>
        </section>

        {/* Offer Letter Section */}
        <section id="offer-letter" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Offer Letter Generation</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Generate professional offer letters for successful candidates with our automated system.
              </p>
            </div>
          </div>
        </section>

        {/* Certificate Verification Section */}
        <section id="certificate" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Certificate Verification</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Verify the authenticity of MITS certificates and credentials through our secure verification system.
              </p>
            </div>
          </div>
        </section>

        {/* Team Join Section */}
        <section id="team-join" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Join Our Team</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Become part of our growing team and help shape the future of student technology services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                To democratize access to advanced technology services for students worldwide, 
                fostering innovation, collaboration, and academic excellence through cutting-edge digital solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {missionPoints.map((point, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{point.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* University Affiliations */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">University Partners</h3>
              <p className="text-xl text-gray-600">
                Proudly serving students from leading universities across the globe
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {universities.map((university, index) => (
                <div key={index} className="group text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-blue-200 transition-colors">
                    <img 
                      src={university.logo} 
                      alt={`${university.name} logo`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    {university.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Statistics */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Our Growing Community</h3>
              <p className="text-xl text-gray-300">
                Join hundreds of thousands of students who trust MITS for their technology needs
              </p>
            </div>
            
            {/* Main Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <CountUpAnimation target={500000} />+
                </div>
                <p className="text-gray-300">Active Students</p>
              </div>
              
              <div className="text-center p-8 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <CountUpAnimation target={500} />+
                </div>
                <p className="text-gray-300">Universities</p>
              </div>
              
              <div className="text-center p-8 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <CountUpAnimation target={95} />%
                </div>
                <p className="text-gray-300">Satisfaction Rate</p>
              </div>
            </div>
            
            {/* Social Media Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              {socialStats.map((stat, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    <Target className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.followers}</div>
                  <div className="text-sm text-gray-400 mb-2">{stat.platform} Followers</div>
                  <div className="text-sm text-green-400">{stat.engagement} engagement</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Academic Journey?</h3>
              <p className="text-xl mb-8 text-blue-100">
                Join our community of forward-thinking students and access the technology tools you need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-gray-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">MITS</div>
                  <div className="text-sm">Micro Information Technology Services</div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
              <p>&copy; 2024 MITS - Micro Information Technology Services. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;