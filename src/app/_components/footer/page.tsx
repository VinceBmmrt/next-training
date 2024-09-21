import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-112959 text-white py-6 max-w-3/5 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo-large.svg"
            alt="Company Logo"
            width={200}
            height={100}
            className="mb-6"
          />
          <div className="flex justify-center space-x-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src={`/partner-logo-${i}.svg`}
                alt={`Partner ${i}`}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p>123 Main Street</p>
            <p>Anytown, ST 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@company.com</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
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
                <Link href="/order-tracking" className="hover:underline">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-blue-700 border-blue-500 placeholder-blue-300 text-white"
              />
              <Button
                type="submit"
                className="w-full bg-white text-blue-600 hover:bg-blue-100"
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
