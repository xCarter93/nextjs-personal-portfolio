import H1 from "@/components/ui/H1";
import H2 from "@/components/ui/H2";
import H3 from "@/components/ui/H3";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";
import Link from "next/link";
import sfadmin_cert from "@/assets/sfadmin_cert.png";
import pba_cert from "@/assets/pba_cert.png";
import pd1_cert from "@/assets/pd1_cert.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Florian Walther and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Patrick Carter and I am an aspiring full-stack software
          engineer based out of Boston, Massachusetts. I started my coding
          journey at the beginning of the COVID-19 epidemic as a way to broaden
          my horizen and introduce myself to new things I could leverage in my
          career.
        </p>
        <p>
          I graduated from Marist University in 2015 with a B.A. in Mathematics.
          I currently work at Datadog which is a SaaS company in the
          observability space as a Manager of our Order Operations team.
        </p>
        <p>
          I started my coding journey learning Python for scripting and data
          science and once comfortable there, moved over to web development. The
          joy I got from creating websites and web apps and being able to see my
          creations come to life was an experience unlike any other. I have
          since moved on to learning different frameworks such as React and
          Next.js which is what this portfolio is built using!
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills / Frameworks / Certifications</H2>
        <div className="grid grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col items-center p-4 text-center"
            >
              <a href={cert.url} rel="noopener noreferrer" target="_blank">
                <Image
                  src={cert.imageSrc}
                  alt={cert.title}
                  height={125}
                  width={125}
                />
              </a>

              <h4 className="mt-2 text-base font-semibold">{cert.title}</h4>
              <p className="text-sm text-secondary-foreground">
                Issued:{" "}
                {cert.issuedDate.toLocaleDateString("us-EN", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Work History</H2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="datadog">
            <AccordionTrigger>
              <H3 className="flex flex-col">Datadog</H3>
              <span className="font-normal flex flex-col">
                <em>(Nov 2020 - Present)</em>
                <em>Boston, MA</em>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                <li className="space-y-1">
                  <strong>Manager, Order Operations</strong> (Jun 2021 -
                  Present)
                  <ul className="list-disc space-y-1 indent-4">
                    <li className="list-inside truncate">
                      Manages a team of 8 across Boston, New York, Dublin and
                      Singapore that on average processes over 2,000 orders per
                      month.
                    </li>
                    <li className="list-inside truncate">
                      Assists in building out complex business automation within
                      Salesforce using Process Builder, Flow Builder, APEX and
                      writing custom Lightning Web Components.
                    </li>
                    <li className="list-inside truncate">
                      Utilizes Salesforce Reporting and Dashboarding daily to
                      ensure we are meeting all SLA&apos;s within a given month
                      and quarter.
                    </li>
                    <li className="list-inside truncate">
                      Works cross-departmentally and meets regularly with
                      Engineering, Finance, Go To Market, Deal Desk and
                      Commission teams to review upcoming changes as well as
                      areas of improvement.
                    </li>
                    <li className="list-inside truncate">
                      Responsible for upholding certain SOX compliance steps as
                      it pertains to the deal review process.
                    </li>
                    <li className="list-inside truncate">
                      Working with Engineering PM&apos;s on overlapping projects
                      and offer valuable insight to ensure success of rollouts.
                    </li>
                    <li className="list-inside truncate">
                      Meeting with Sales and CS leaders to review pain points
                      and coordinate plans to improve processes.
                    </li>
                    <li className="list-inside truncate">
                      Wrote a Python script which communicates with Salesforce
                      and alleviates some of the manual aspects of Opportunity
                      review for the team to use.
                    </li>
                  </ul>
                </li>

                <li className="list-inside">
                  <strong>Team Lead, Order Operations</strong> (Nov 2020 - Jun
                  2021)
                  <ul className="list-disc space-y-1 indent-4">
                    <li className="list-inside truncate">
                      Brought on to assist the Order Operations team scale and
                      ensure all processes are being adhered to while also
                      trying to identify inefficiencies and implement long term
                      solutions.
                    </li>
                    <li className="list-inside truncate">
                      Managed a team of 3 analysts across Boston and Dublin.
                    </li>
                    <li className="list-inside truncate">
                      Responsible for reviewing all large Enterprise deals to
                      ensure accuracy of pricing, compliance with internal
                      policies, as well as deal structure and flagged to
                      necessary teams downstream.
                    </li>
                    <li className="list-inside truncate">
                      Worked with our Sales Systems team to implement Salesforce
                      enhancements which lowered the chance of error and
                      increased efficiencies.
                    </li>
                    <li className="list-inside truncate">
                      Responsible for sending out legal documents and customer
                      specific Order Forms for signature using DocuSign.
                    </li>
                    <li className="list-inside truncate">
                      Responsible for existing contract changes requested by
                      Sales and Customer Success.
                    </li>
                    <li className="list-inside truncate">
                      Held training sessions on a monthly basis on best
                      practices around deal closing and Salesforce cleanliness.
                    </li>
                    <li className="list-inside truncate">
                      Worked within AWS, Azure, GCP Private Offer portals for
                      customers who wanted to buy Datadog through an external
                      marketplace.
                    </li>
                  </ul>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="granite">
            <AccordionTrigger>
              <H3>Granite Telecommunications LLC</H3>
              <span className="font-normal flex flex-col">
                <em>(Feb 2016 - Nov 2020)</em>
                <em>Quincy, MA</em>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                <li className="space-y-1">
                  <strong>Senior Offer Management Supervisor</strong> (Apr 2019
                  - Nov 2020)
                  <ul className="list-disc space-y-1 indent-4">
                    <li className="list-inside truncate">
                      Oversaw team of 12 analysts who handle entirety of quoting
                      responsibilities while monitoring and maintaining accuracy
                    </li>
                    <li className="list-inside truncate">
                      Able to manage and distribute workload evenly across team
                      while handling any escalations with management.
                    </li>
                    <li className="list-inside truncate">
                      Brought in to help lead a marketing initiative requested
                      by CEO to revamp all customer facing documents.
                    </li>
                    <li className="list-inside truncate">
                      Was heavily involved with integrating automated quoting
                      process within Salesforce CPQ.
                    </li>
                    <li className="list-inside truncate">
                      Worked cross departmentally to ensure accuracy of cost and
                      revenue information as well as new company wide
                      initiatives.
                    </li>
                    <li className="list-inside truncate">
                      Trusted to handle most reporting which includes weekly
                      report of workload and efficiency numbers as well
                      monthly/quarterly report which is used to assist in
                      personnel decisions as well as areas of focus
                    </li>
                    <li className="list-inside truncate">
                      Trusted to respond to and investigate inquiries which
                      involve high priority customers.
                    </li>
                    <li className="list-inside truncate">
                      Assisted in training internal operations teams as well as
                      sales staff when new releases within Salesforce get
                      released as they pertain to CPQ.
                    </li>
                    <li className="list-inside truncate">
                      Two direct reports ended up moving into full time CPQ
                      Analyst roles where they&apos;re sole responsibility was
                      the upkeep of Salesforce CPQ as well as building out new
                      features.
                    </li>
                  </ul>
                </li>
                <li className="space-y-1">
                  <strong>Cost Analysis and Savings Supervisor</strong> (Jun
                  2017 - Apr 2019)
                  <ul className="list-disc space-y-1 indent-4">
                    <li className="list-inside truncate">
                      Oversaw a team of 10 analysts who were responsible for all
                      proposal quoting within the broader team
                    </li>
                    <li className="list-inside truncate">
                      Was responsible for dealing directly with upper management
                      daily, resolving credit requests/inquiries, and ensuring
                      all company and team procedures are followed accordingly
                    </li>
                    <li className="list-inside truncate">
                      Worked cross departmentally to ensure accuracy of cost and
                      revenue information as well as new company wide
                      initiatives
                    </li>
                  </ul>
                </li>
                <li className="space-y-1">
                  <strong>Senior Cost Analysis and Savings Analyst</strong> (Apr
                  2017 – Jun 2017)
                  <ul className="list-disc space-y-1 indent-4">
                    <li className="list-inside truncate">
                      Took on additional responsibilities while also completing
                      normal Cost Analysis and Savings duties with no loss of
                      efficiency
                    </li>
                    <li className="list-inside truncate">
                      Oversaw queue for West Palm Beach and Orlando branches
                      while delegating requests to different Cost Analysis and
                      Savings analysts.
                    </li>
                    <li className="list-inside truncate">
                      Established self as direct source of contact for
                      questions, concerns and quick turnaround times from sales
                      representatives.
                    </li>
                    <li className="list-inside truncate">
                      Experience working directly with customers.
                    </li>
                    <li className="list-inside truncate">
                      Responsible for weekly and monthly reporting to upper
                      management.
                    </li>
                  </ul>
                </li>
                <li className="space-y-1">
                  <strong>Cost Analysis and Savings Analyst</strong> (Feb 2016 –
                  Apr 2017)
                  <ul className="list-disc space-y-1 indent-4">
                    <li className="list-inside truncate">
                      Analyzed invoices for potential customers and put together
                      savings reports based on their current Telecom spend
                    </li>
                    <li className="list-inside truncate">
                      Dealt directly with Florida sales branches who
                      consistently lead company in contributor of requests
                      (volume and size)
                    </li>
                    <li className="list-inside truncate">
                      Assisted in resolution of daily disputes and helped
                      answered all Premier, Sales and customer inquiries
                    </li>
                    <li className="list-inside truncate">
                      Led multiple high priority requests that CEO was directly
                      involved with as well as customer visits
                    </li>
                    <li className="list-inside truncate">
                      Internal Employee of the Month, 7/12/16, due to taking on
                      extra responsibilities such as updating team trackers as
                      well as helping to train new hires
                    </li>
                  </ul>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
      </section>
    </section>
  );
}

const certifications = [
  {
    title: "Salesforce Certified Administrator",
    issuedDate: new Date(2023, 9),
    imageSrc: sfadmin_cert,
    url: "https://trailhead.salesforce.com/en/credentials/administrator",
  },
  {
    title: "Salesforce Certified Platform App Builder",
    issuedDate: new Date(2023, 10),
    imageSrc: pba_cert,
    url: "https://trailhead.salesforce.com/en/credentials/platformappbuilder",
  },
  {
    title: "Salesforce Certified Platform Developer I",
    issuedDate: new Date(2023, 10),
    imageSrc: pd1_cert,
    url: "https://trailhead.salesforce.com/en/credentials/platformdeveloperi",
  },
];
