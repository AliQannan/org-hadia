import { GoogleGenAI } from "@google/genai";
import { StreamType } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generatePersonalizedMotivation = async (name: string, stream: StreamType): Promise<string> => {
  try {
    const prompt = `
      أنت مساعد تسويقي لمؤسسة تعليمية اسمها "مؤسسة هدية".
      قم بكتابة رسالة تشجيعية قصيرة جداً (لا تتجاوز 40 كلمة) للطالب "${name}" الذي يدرس في الفرع "${stream}".
      شجعه على التسجيل في دورات الرياضيات واللغة الإنجليزية مع المهندس علي قنن والمدرسة صابرين ماهر علوان.
      اجعل النغمة حماسية وملهمة واذكر أن المقاعد محدودة جداً.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "انضم إلينا الآن وحقق التفوق مع أفضل الكوادر التعليمية!";
  } catch (error) {
    console.error("Error generating content:", error);
    return "سارع بالتسجيل الآن، الفرصة لا تعوض والمقاعد محدودة!";
  }
};