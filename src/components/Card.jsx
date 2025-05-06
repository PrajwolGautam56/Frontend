import { motion } from 'framer-motion';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Card = () => {
	const contactInfo = [
		{
			icon: <FaPhoneAlt className="text-[#F59E0B] text-xl" />,
			text: "+977-9841525256",
			link: "tel:+9779841525256"
		},
		{
			icon: <MdEmail className="text-[#F59E0B] text-xl" />,
			text: "info@eerc.com.np",
			link: "mailto:info@eerc.com.np"
		},
		{
			icon: <FaMapMarkerAlt className="text-[#F59E0B] text-xl" />,
			text: "Lalitpur, Kathmandu",
			link: "https://maps.google.com/?q=Lalitpur,Kathmandu"
		}
	];

	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
			className="w-full md:w-96"
		>
			<div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-amber-100 transition-shadow duration-300">
				<div className="p-8">
					<h5 className="text-center mb-6 block font-sans text-2xl font-semibold text-gray-900">
						Reach Us At
					</h5>
					<ul className="space-y-4">
						{contactInfo.map((item, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								className="flex items-center space-x-3 group"
							>
								<span className="group-hover:scale-110 transition-transform duration-200">
									{item.icon}
								</span>
								<a
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-600 hover:text-[#F59E0B] transition-colors duration-200"
								>
									{item.text}
								</a>
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</motion.div>
	);
};

export default Card;
