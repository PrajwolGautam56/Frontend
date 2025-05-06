'use client';

import { motion } from 'framer-motion';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

const FooterWithSocialMediaIcons = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: 'Facebook',
      icon: BsFacebook,
      href: 'https://www.facebook.com/eercnepal',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: BsInstagram,
      href: '#',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter',
      icon: BsTwitter,
      href: '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: BsLinkedin,
      href: '#',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <Footer container className="bg-[#F2F7F6] text-black">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1"
        >
          <div className="space-y-4">
            <Footer.Brand
              alt="EERC Logo"
              href="/"
              name="EERC"
              src="images/eercLogo.png"
              className="hover:opacity-80 transition-opacity duration-200"
            />
            <p className="text-slate-500 max-w-xs">
              Registration Number: 148886/072/073 <br />
              Contact Number: +977-9841525256
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" className="text-black font-semibold" />
              <Footer.LinkGroup col>
                <Footer.Link 
                  href="/about" 
                  className="text-slate-500 hover:text-[#F59E0B] transition-colors duration-200"
                >
                  About Us
                </Footer.Link>
                <Footer.Link 
                  href="/contact" 
                  className="text-slate-500 hover:text-[#F59E0B] transition-colors duration-200"
                >
                  Contact Us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow us" className="text-black font-semibold" />
              <Footer.LinkGroup col>
                {socialLinks.map((link, index) => (
                  <Footer.Link
                    key={index}
                    href={link.href}
                    className={`text-slate-500 ${link.color} transition-colors duration-200`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Footer.Link>
                ))}
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" className="text-black font-semibold" />
              <Footer.LinkGroup col>
                <Footer.Link 
                  href="#" 
                  className="text-slate-500 hover:text-[#F59E0B] transition-colors duration-200"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link 
                  href="#" 
                  className="text-slate-500 hover:text-[#F59E0B] transition-colors duration-200"
                >
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </motion.div>

        <Footer.Divider className="my-6" />

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="EERC™"
            href="#"
            year={currentYear}
            className="text-black"
          />
          <motion.div 
            className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 ${link.color} transition-colors duration-200`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-6 w-6" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterWithSocialMediaIcons;


