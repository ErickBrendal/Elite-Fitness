import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contato@elitefitness.com', href: 'mailto:contato@elitefitness.com' },
    { icon: Phone, text: '(11) 99999-9999', href: 'tel:+5511999999999' },
    { icon: MapPin, text: 'São Paulo, SP', href: '#' },
  ];

  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-4">Personal Brenda</h3>
            <p className="text-gray-300 mb-6">
              Transformando corpos e vidas através de um treinamento premium e personalizado. 
              Sua jornada para a excelência física começa aqui.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <motion.a
                href="https://wa.me/5511954004713"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                <span>(11) 95400-4713</span>
              </motion.a>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-gray-300"
              >
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Receba dicas exclusivas e novidades sobre fitness diretamente no seu e-mail.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
              />
              <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-r-lg transition-colors duration-300">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 Personal Brenda. Todos os direitos reservados. Desenvolvido com 💪 por <a href="https://erick-almeida-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">@erickalmeida</a> para mulheres que exigem o máximo.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
