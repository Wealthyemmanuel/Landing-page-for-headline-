import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, AlertTriangle, ArrowRight, Mail, ShieldCheck, User } from 'lucide-react';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-6"
        >
          <div className="flex justify-center">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Success, {firstName}!</h1>
          <p className="text-lg text-gray-600">
            The <span className="font-bold text-red-600">Ifenna Headline Generator</span> is being sent to <span className="font-medium">{email}</span> right now.
          </p>
          <p className="text-sm text-gray-500">
            Check your inbox (and spam folder) in the next 2 minutes.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-red-100 selection:text-red-900">
      {/* Top Warning Bar */}
      <div className="bg-red-600 text-white py-2 text-center text-sm font-bold uppercase tracking-widest px-4">
        Warning: This software is only free for a limited time.
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* 1. The "Enquirer Interrupt" Headline (The Hook) */}
        <header className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-tight">
            <AlertTriangle className="w-4 h-4" /> Attention: Marketers & Entrepreneurs
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
            WARNING: Is Your <span className="text-red-600 underline decoration-4 underline-offset-4">Weak Headline</span> Flushing Your Ad Budget Down The Toilet?
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Discover how changing a single title can explode your sales by <span className="bg-yellow-200 px-1">500% to 1,000%</span>—without spending an extra kobo on traffic.
          </p>
        </header>

        {/* 2. The Johnson Box (Core Promise) */}
        <section className="mb-16">
          <div className="border-4 border-dashed border-red-600 bg-white p-8 md:p-12 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 font-bold uppercase text-sm">
              The Proprietary Framework
            </div>
            <div className="space-y-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Who Else Wants To Go From A "Blank Page" To A Scientific, High-Converting Headline In Under 60 Seconds?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stop the "skull sweat" of writer's block. Let my proprietary software do the heavy lifting for you.
              </p>
              
              {/* 5. Call to Action (The Transaction) */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your first name..."
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:ring-0 transition-all text-lg"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your best email address..."
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:ring-0 transition-all text-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-5 rounded-lg shadow-xl shadow-red-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 uppercase tracking-tight"
                >
                  Give Me The Software Now! <ArrowRight className="w-6 h-6" />
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" /> 100% Secure. No Spam. Ever.
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 3. Agitate the Pain (The Problem) */}
        <section className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
              Tired of watching your ads "bomb"?
            </h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                There is nothing worse than that "kicked in the gut" feeling. 
              </p>
              <p>
                You spend hours crafting the perfect offer. You spend your hard-earned money on traffic. And then... <strong>crickets.</strong>
              </p>
              <p>
                No sales. No conversions. Just a wasted budget and the frustration of being a "wage slave" to a business that doesn't work.
              </p>
              <p className="font-bold text-red-600 italic">
                The truth is: If your headline fails, the rest of your copy doesn't even exist.
              </p>
            </div>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl text-white space-y-6 shadow-2xl">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-red-500" />
              ))}
            </div>
            <p className="text-xl font-medium italic leading-relaxed">
              "A headline is the 'multiplied salesmanship' of an ad. It is the single most important element you will ever write."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center font-bold text-gray-400">
                DR
              </div>
              <div>
                <p className="font-bold">Direct Response Legend</p>
                <p className="text-sm text-gray-400">Claude Hopkins</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Epiphany (The Story) - REWRITTEN */}
        <section className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-gray-100 mb-20">
          <div className="max-w-2xl mx-auto space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center">The "Amazing Discovery"</h3>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Not long ago, I was exactly where you are. I was running ads, pouring money into campaigns, and <strong>I couldn't make a single sale.</strong>
              </p>
              <p>
                I was losing money every day. I felt like I was flushing my future down the toilet. I almost gave up.
              </p>
              <p>
                But then, I discovered the missing link. I realized that my <strong>headlines were fucking me up.</strong> They weren't grabbing attention. They weren't stopping the scroll.
              </p>
              <p>
                So, I decided to create a solution. I built a proprietary framework that generates scientific, high-converting headlines in seconds.
              </p>
              <p className="font-bold text-gray-900">
                Now, when I write copy, I can sleep at night knowing that it will convert like crazy.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4 pt-8 border-t border-gray-100">
              <img 
                src="https://i.ibb.co/b5GxMwhC/i54kw8.jpg" 
                alt="Emmanuel Ifenna" 
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div className="text-center">
                <p className="font-bold text-gray-900 text-xl">Emmanuel Ifenna</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Founder, The Million-Naira Copy Lab</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Ready To Claim Your "Only Choice" Advantage?
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Don't let another ad bomb. Join the elite marketers who use science to win.
          </p>
          <div className="max-w-md mx-auto">
             <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold text-lg py-4 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              Get The Generator Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} The Million-Naira Copy Lab. All rights reserved.
          </p>
        </section>
      </main>
    </div>
  );
}
