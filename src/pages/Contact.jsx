import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { USER_DATA } from '../data/portfolioData';
import { FiMail, FiPhone, FiDownload, FiSend } from 'react-icons/fi';

export default function Contact() {
  const formRef = useRef();
  const [buttonText, setButtonText] = useState('Send Message');

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs.sendForm(
      'service_uk9rhek',       // Aapka Service ID
      'template_6cuj2np',      // Aapka Template ID
      formRef.current,
      '-h9nWRwJV4trH0_tL'      // Aapki Public Key
    )
    .then(() => {
      setButtonText('Message Sent!');
      formRef.current.reset();
      setTimeout(() => setButtonText('Send Message'), 3000);
    }, (error) => {
      setButtonText('Failed to Send');
      console.log(error.text);
    });
  };

  return (
    <section id="contact" className="min-h-screen py-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-indigo-500">Connect</span></h2>
          <p className="text-gray-400 text-lg">
            Currently open for internships, freelance projects, or just a chat about technology and gaming.
          </p>
        </div>

        <div className="space-y-4">
          <a href={`mailto:${USER_DATA.email}`} className="flex items-center gap-4 p-4 vision-glass hover:bg-white/10 transition-colors">
            <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-full"><FiMail size={24} /></div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Email</p>
              <p className="text-lg font-semibold">{USER_DATA.email}</p>
            </div>
          </a>
          
          <a href={`tel:${USER_DATA.phone}`} className="flex items-center gap-4 p-4 vision-glass hover:bg-white/10 transition-colors">
            <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-full"><FiPhone size={24} /></div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Phone</p>
              <p className="text-lg font-semibold">{USER_DATA.phone}</p>
            </div>
          </a>
        </div>

        <a 
          href="/Areeb_Ahmed_ATS_CV.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] w-fit"
        >
          <FiDownload /> View Resume
        </a>
      </motion.div>

      <motion.form 
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="vision-glass p-8 flex flex-col gap-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
          <input type="text" name="user_name" required className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="e.g Ahmed" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
          <input type="email" name="user_email" required className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="name@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
          <textarea name="message" required rows="4" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="How can we work together?"></textarea>
        </div>
        <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-indigo-500 hover:text-white transition-colors flex justify-center items-center gap-2">
          {buttonText} <FiSend />
        </button>
      </motion.form>
    </section>
  );
}