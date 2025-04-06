import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactBar() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                contact@learnhub.com
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Learning Street, Education City
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="/careers" className="hover:text-indigo-400">Careers</a></li>
              <li><a href="/blog" className="hover:text-indigo-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400">Twitter</a>
              <a href="#" className="hover:text-indigo-400">LinkedIn</a>
              <a href="#" className="hover:text-indigo-400">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}