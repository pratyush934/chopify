"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandX, IconHome } from "@tabler/icons-react";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { SiPeerlist } from "react-icons/si";
import { toast } from "sonner";

export function FloatingDockDemo() {
  const handleCopyEmail = () => {
    const email = "pratyushsinha982@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        // Display a toast notification when the email is copied
        toast.success("Email Copied!", {
          description:
            "pratyushsinha982@gmail.com has been copied to your clipboard.",
        });
      })
      .catch(() => {
        // Handle any errors during the copy operation
        toast.error("Failed to Copy Email", {
          description:
            "An error occurred while copying the email. Please try again.",
        });
      });
  };

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Email",
      icon: (
        <MdAttachEmail className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: handleCopyEmail,
    },
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/pratyushsinha934",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/Pratyush934",
    },
    {
      title: "PeerList",
      icon: (
        <SiPeerlist className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://peerlist.io/pratyush934",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/pratyush934",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-auto w-full py-10">
      <FloatingDock
        mobileClassName="translate-y-10" // Adjusted for better responsiveness
        items={links}
      />
    </div>
  );
}

const Contact = () => {
  return (
    <section id="contact" className="relative z-20 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left hidden sm:block">
            <h2 className="text-4xl font-bold uppercase tracking-tight font-mono gradient-title">
              Get in Touch
            </h2>
            <p className="text-neutral-400 mt-4">
              Feel free to connect with me on any of the platforms listed on the
              right. I’m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <div className="mt-4 text-left text-neutral-500 text-sm">
              © {new Date().getFullYear()} Pratyush Sinha. All rights reserved.
            </div>
          </div>

          <div className="flex items-center justify-center">
            <FloatingDockDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
