import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current!, "YOUR_PUBLIC_KEY")
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  return (
    <section className="bg-white py-16 px-6" dir="rtl" id="contact">
      <div className="max-w-2xl mx-auto">

        {/* White card */}
        <div className="bg-gray-100 rounded-3xl px-10 py-12">

          <h2 className="text-[#004aad] text-2xl font-black mb-1.5 text-right" style={{ fontFamily: "Syne, sans-serif" }}>
            تواصل معنا
          </h2>
          <p className="text-[#004aad]/50 text-sm mb-7 text-right">سنرد عليك في أقرب وقت ممكن</p>

          {status === "success" ? (
            <div className="bg-[#004aad]/8 border border-[#004aad]/15 rounded-xl px-6 py-10 text-center">
              <p className="text-[#004aad] text-lg font-bold mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
                تم الإرسال بنجاح ✓
              </p>
              <p className="text-[#004aad]/60 text-sm">سنتواصل معك قريباً</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#004aad] text-xs font-semibold tracking-wide">الاسم</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="أدخل اسمك"
                    required
                    className="bg-[#f5f7ff] border border-[#004aad]/12 focus:border-[#004aad] focus:bg-[#eef1ff] rounded-xl px-4 py-3 text-sm text-[#004aad] placeholder:text-[#004aad]/30 outline-none transition-colors text-right"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#004aad] text-xs font-semibold tracking-wide">رقم الهاتف</label>
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="05xxxxxxxx"
                    required
                    className="bg-[#f5f7ff] border border-[#004aad]/12 focus:border-[#004aad] focus:bg-[#eef1ff] rounded-xl px-4 py-3 text-sm text-[#004aad] placeholder:text-[#004aad]/30 outline-none transition-colors text-right"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#004aad] text-xs font-semibold tracking-wide">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="example@email.com"
                  required
                  className="bg-[#f5f7ff] border border-[#004aad]/12 focus:border-[#004aad] focus:bg-[#eef1ff] rounded-xl px-4 py-3 text-sm text-[#004aad] placeholder:text-[#004aad]/30 outline-none transition-colors text-right"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#004aad] text-xs font-semibold tracking-wide">اختر الخدمة</label>
                <select
                  name="user_service"
                  defaultValue=""
                  required
                  className="bg-[#f5f7ff] border border-[#004aad]/12 focus:border-[#004aad] focus:bg-[#eef1ff] rounded-xl px-4 py-3 text-sm text-[#004aad] outline-none transition-colors appearance-none cursor-pointer text-right"
                >
                  <option value="" disabled>اختر الخدمة المناسبة</option>
                  <option>التسويق الرقمي</option>
                  <option>التصميم الإبداعي</option>
                  <option>التصوير الاحترافي</option>
                  <option>المونتاج وصناعة الفيديو</option>
                  <option>الحملات الإعلانية</option>
                  <option>استراتيجية المحتوى</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#004aad] text-xs font-semibold tracking-wide">اكتب عن الموضوع</label>
                <textarea
                  name="user_message"
                  rows={5}
                  placeholder="أخبرنا عن مشروعك أو استفسارك..."
                  required
                  className="bg-[#f5f7ff] border border-[#004aad]/12 focus:border-[#004aad] focus:bg-[#eef1ff] rounded-xl px-4 py-3 text-sm text-[#004aad] placeholder:text-[#004aad]/30 outline-none transition-colors resize-none text-right"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">حدث خطأ، يرجى المحاولة مرة أخرى</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#004aad] text-white rounded-xl py-3.5 font-black text-base hover:opacity-90 hover:-translate-y-0.5 transition-all mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {status === "sending" ? "جاري الإرسال..." : "إرسال الرسالة ←"}
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}