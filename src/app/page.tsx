import H1 from "@/components/ui/H1";
import { Metadata } from "next";
import Image from "next/image";
import me from "@/assets/me.jpg";
import H2 from "@/components/ui/H2";
import { Bot } from "lucide-react";
import { FaGithub, FaLinkedin, FaSalesforce } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patrick Carter - My Smart Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-52 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hi, I&apos;m Pat 👋</H1>
          <p className="text-center sm:text-start">
            I&apos;m an aspiring software engineer and full-stack web developer.
            I love building web applications and learning new technologies. I
            currently love working with Salesforce and Next.js!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={me}
            alt="A photo Patrick Carter"
            width={300}
            height={300}
            className="rounded-full aspect-square border-4 object-cover shadow-md dark:border-foreground border-foreground"
          />
          <div className="flex justify-center items-center mt-4 gap-8">
            <Link
              href="https://github.com/xCarter93"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to Github Profile"
            >
              <FaGithub className="text-black text-3xl md:text-4xl dark:text-primary-foreground" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/patrick-carter-306746a8/"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to LinkedIn Profile"
            >
              <FaLinkedin className="text-black text-3xl md:text-4xl dark:text-primary-foreground" />
            </Link>
            <Link
              href="https://www.salesforce.com/trailblazer/pcarter8"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to Salesforce Profile"
            >
              <FaSalesforce className="text-black text-3xl md:text-4xl dark:text-primary-foreground" />
            </Link>
          </div>
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Ask the chatbot anything about me!</H2>
        <p>
          Click the little <Bot className="inline pb-1" /> icon in the top bar
          to activate the AI chat. You can ask the chatbot any question about me
          and it will find the relevant info on this website. The bot can even
          provide lings to the pages you are looking for!
        </p>
      </section>
    </section>
  );
}