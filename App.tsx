import React, { useState } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  Star, 
  CheckCircle2,
  TrendingUp,
  Users
} from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import RegistrationForm from './components/RegistrationForm';
import Instructors from './components/Instructors';
import { StreamType } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStream, setActiveStream] = useState<StreamType>(StreamType.SCIENTIFIC);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black text-gray-800 tracking-tight">مؤسسة هدية</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-600">
            <button onClick={() => scrollToSection('home')} className="hover:text-indigo-600 transition">الرئيسية</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-indigo-600 transition">المميزات</button>
            <button onClick={() => scrollToSection('instructors')} className="hover:text-indigo-600 transition">المعلمين</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition">اتصل بنا</button>
          </nav>

          <button 
            onClick={() => scrollToSection('register')}
            className="hidden md:block bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            سجل الآن
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4 shadow-lg absolute w-full z-40">
             <button onClick={() => scrollToSection('home')} className="text-right py-2 hover:bg-gray-50 px-2 rounded">الرئيسية</button>
             <button onClick={() => scrollToSection('features')} className="text-right py-2 hover:bg-gray-50 px-2 rounded">المميزات</button>
             <button onClick={() => scrollToSection('instructors')} className="text-right py-2 hover:bg-gray-50 px-2 rounded">المعلمين</button>
             <button onClick={() => scrollToSection('register')} className="bg-indigo-600 text-white py-3 rounded-lg font-bold text-center mt-2">سجل الآن</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://picsum.photos/1920/1080?blur=4" className="w-full h-full object-cover opacity-10" alt="Background" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-indigo-50/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-right space-y-6">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-2 animate-bounce">
                <Star className="w-4 h-4 fill-current" />
                <span>الفرصة الذهبية لعام 2025</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
                طريقك نحو التفوق <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">يبدأ من هنا</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                انضم إلى نخبة الطلاب في <strong>مؤسسة هدية التعليمية</strong>. 
                دورات مكثفة ومتميزة في الرياضيات واللغة الإنجليزية للفرعين العلمي والأدبي.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button 
                  onClick={() => scrollToSection('register')}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-indigo-300 hover:bg-indigo-700 hover:scale-105 transition-all"
                >
                  احجز مقعدك الآن
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all"
                >
                  اعرف المزيد
                </button>
              </div>

              <div className="pt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
                <Users className="w-5 h-5 text-gray-400" />
                <span>انضم إلينا أكثر من 500 طالب متميز هذا العام</span>
              </div>
            </div>

            <div className="lg:w-1/2 w-full max-w-md lg:max-w-full flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-600 rounded-full blur-xl opacity-40"></div>
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">لماذا تختار مؤسسة هدية؟</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">نحن لا نقدم مجرد دروس خصوصية، نحن نقدم مستقبلاً أكاديمياً مشرقاً من خلال منهجية مدروسة.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:bg-indigo-50 transition-colors duration-300 border border-gray-100 group">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">نتائج مثبتة</h3>
              <p className="text-gray-600">سجل حافل من قصص النجاح والعلامات الكاملة لطلابنا في السنوات السابقة.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl hover:bg-indigo-50 transition-colors duration-300 border border-gray-100 group">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">أعداد محدودة</h3>
              <p className="text-gray-600">نحرص على أعداد قليلة في كل شعبة لضمان التركيز والاهتمام الفردي لكل طالب.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl hover:bg-indigo-50 transition-colors duration-300 border border-gray-100 group">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">بيئة تفاعلية</h3>
              <p className="text-gray-600">قاعات مجهزة وأساليب تدريس حديثة تدمج بين المتعة والفائدة العلمية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <Instructors />

      {/* Registration Section */}
      <section id="register" className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 relative">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 text-white space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                هل أنت مستعد <br/>
                <span className="text-yellow-400">لصناعة مستقبلك؟</span>
              </h2>
              <p className="text-indigo-200 text-lg leading-relaxed">
                لا تضيع الفرصة! باب التسجيل مفتوح لفترة محدودة جداً. 
                ابدأ رحلتك الدراسية مع أفضل المعلمين في المنطقة واضمن تفوقك في الرياضيات واللغة الإنجليزية.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                  <span className="font-medium">الفرع العلمي: رياضيات وفيزياء (قريباً)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                  <span className="font-medium">الفرع الأدبي: رياضيات وإنجليزي</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                  <span className="font-medium">مراجعات مكثفة قبل الامتحانات</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 w-full">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h3 className="text-white text-xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                <GraduationCap className="text-indigo-500" />
                مؤسسة هدية
              </h3>
              <p className="text-sm text-gray-400">
                منصة تعليمية رائدة تهدف إلى رفع مستوى الطلاب الأكاديمي في المواد الأساسية للثانوية العامة.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
                  <Phone className="w-4 h-4" />
                  <span>059xxxxxxx</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
                  <MapPin className="w-4 h-4" />
                  <span>غزة - العنوان بالتفصيل</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-indigo-400 transition">الرئيسية</button></li>
                <li><button onClick={() => scrollToSection('register')} className="hover:text-indigo-400 transition">التسجيل</button></li>
                <li><a href="#" className="hover:text-indigo-400 transition">سياسة الخصوصية</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} مؤسسة هدية التعليمية. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;