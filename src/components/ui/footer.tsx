import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import PaypalIcon from "../icons/paypal-icon";
import YoutubeIcon from "../icons/youtube-icon";

const paymentIcons = [
  PaypalIcon,
  PaypalIcon,
  PaypalIcon,
  PaypalIcon,
  PaypalIcon,
];
const socialIcons = [
  { component: YoutubeIcon, url: "https://paypal.com" },
  { component: YoutubeIcon, url: "https://paypal.com" },
  { component: YoutubeIcon, url: "https://paypal.com" },
  { component: YoutubeIcon, url: "https://paypal.com" },
  { component: YoutubeIcon, url: "https://paypal.com" },
  // Add other social icons here as needed
];

export default function Footer() {
  return (
    <footer className="bg-primary-112959 text-white py-6 w-[90%] mx-auto ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          {/* <Image
            src="/"
            alt="Company Logo"
            width={200}
            height={100}
            className="mb-6"
          /> */}
          <div className="flex justify-center space-x-6">
            {paymentIcons.map((Icon, index) => (
              <Icon key={index} className="text-white w-16 h-16" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p>+ 44 345 678 903</p>
            <p>yourname@gmail.com</p>
            <p>Find a store</p>
            <div className="flex space-x-4 mt-4">
              {socialIcons.map(({ component: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white w-8 h-8"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/payments" className="hover:underline">
                  Ordering & Payments
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:underline">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/FAQ" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Adobe XD Kit
                </Link>
              </li>
              <li>
                <Link href="/workwithus" className="hover:underline">
                  Work With Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:underline">
                  Press Enquiries
                </Link>
              </li>
              <li>
                <Link href="/artuppers" className="hover:underline">
                  © Artuppers 2002
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              Subscribe to Artuppers via email
            </h3>
            <p className="mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="space-x-2 flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-blue-500 placeholder-blue-300 text-white"
              />
              <Button
                type="submit"
                className="w-full border-2 border-blue-300 text-blue-300 hover:bg-blue-100 bg-primary-112959"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500 text-center">
          <p>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
