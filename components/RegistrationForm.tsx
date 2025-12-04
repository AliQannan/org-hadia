import React, { useState } from 'react';
import { StreamType, Subject } from '../types';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { generatePersonalizedMotivation } from '../services/geminiService';

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [stream, setStream] = useState<StreamType>(StreamType.SCIENTIFIC);
  const [subject, setSubject] = useState<Subject>(Subject.BOTH);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [motivation, setMotivation] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(async () => {
      // Generate motivational message using Gemini
      try {
          const aiMessage = await generatePersonalizedMotivation(name, stream);
          setMotivation(aiMessage);
      } catch (e) {
          console.error(e);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 p-8 rounded-2xl border border-green-200 text-center shadow-lg animate-fade-in-up">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">تم استلام طلبك بنجاح!</h3>
        <p className="text-green-700 mb-6">سنتواصل معك قريباً لتأكيد الحجز.</p>
        
        {motivation && (
          <div className="bg-white p-4 rounded-xl shadow-inner border border-green-100 relative">
            <span className="absolute -top-3 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
              رسالة خاصة لك من الذكاء الاصطناعي
            </span>
            <p className="text-gray-800 italic text-lg leading-relaxed mt-2">
              "{motivation}"
            </p>
          </div>
        )}
        
        <button 
          onClick={() => { setIsSuccess(false); setName(''); setPhone(''); setMotivation(null); }}
          className="mt-6 text-green-600 font-semibold hover:text-green-800 underline"
        >
          تسجيل طالب آخر
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-indigo-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">احجز مقعدك الآن</h3>
      <div className="mb-6 bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded-md">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-yellow-600 ml-2 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-yellow-700">
            تنبيه: العدد محصور! الأولوية للتسجيل المبكر. ينتهي التسجيل 1/1/2025.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الثلاثي</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="أحمد محمد علي"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف / الواتساب</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="059xxxxxxx"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">الفرع</label>
            <select
              value={stream}
              onChange={(e) => setStream(e.target.value as StreamType)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            >
              <option value={StreamType.SCIENTIFIC}>{StreamType.SCIENTIFIC}</option>
              <option value={StreamType.LITERARY}>{StreamType.LITERARY}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">المادة المطلوبة</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value as Subject)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            >
              <option value={Subject.MATH}>{Subject.MATH}</option>
              <option value={Subject.ENGLISH}>{Subject.ENGLISH}</option>
              <option value={Subject.BOTH}>{Subject.BOTH}</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 mt-4"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              جاري التسجيل...
            </>
          ) : (
            'تأكيد الحجز'
          )}
        </button>
        <p className="text-center text-xs text-gray-400 mt-2">بإرسال هذا النموذج أنت توافق على سياسة التسجيل</p>
      </form>
    </div>
  );
};

export default RegistrationForm;