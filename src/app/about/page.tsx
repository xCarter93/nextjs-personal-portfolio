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
import sfadmin_cert from "@/assets/sfadmin_cert.png";
import pba_cert from "@/assets/pba_cert.png";
import pd1_cert from "@/assets/pd1_cert.png";
import jd1_cert from "@/assets/jd1_cert.png";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Patrick Carter and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Patrick Carter and I am an aspiring full-stack software
          engineer based out of Boston, Massachusetts. I graduated from Marist
          College in 2015 with a Bachelor&apos;s degree in Mathematics. I
          currently work at Datadog which is a SaaS company in the observability
          space as a Manager of our Order Operations team. In my current
          position I have been able to hone a lot of my skills while learning
          others along the way.
        </p>
        <p>
          I started my coding journey learning Python for scripting and data
          science and once comfortable there, moved over to web development. The
          joy I got from creating websites and web apps and being able to see my
          creations come to life was an experience unlike any other. I have
          since moved on to learning different frameworks such as React and
          Next.js which is what this portfolio is built using! In addition to
          that I have also been learning Salesforce development and have
          obtained multiple certifications with hopes of earning more.
        </p>
        <p>
          I am now in the next phase of my journey where I am trying to build up
          my skills in order to get employed as a developer, either in the
          Salesforce space or as a full-stack engineer. Feel free to check out
          my{" "}
          <Link className="text-primary underline" href="/projects">
            projects
          </Link>{" "}
          to see what I have been working on or head over to my{" "}
          <Link className="text-primary underline" href="/contact">
            contact
          </Link>{" "}
          page to reach out and connect!
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Certifications</H2>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col items-center justify-start p-4 text-center"
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
              <H3 className="flex flex-col text-start">Datadog</H3>
              <span className="flex flex-col font-normal">
                <em>(Nov 2020 - Present)</em>
                <em>Boston, MA</em>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                <li className="space-y-1">
                  <strong>Senior Sales Systems Analyst</strong> (April 2024 -
                  Present)
                  <ul className="list-inside list-disc space-y-1 pl-9 -indent-5">
                    <li>
                      Obtained four separate Salesforce Certifications proving
                      ability to work as an admin and developer within
                      Salesforce and deliver results.
                    </li>
                    <li>
                      Part of the CPQ team at Datadog responsible for updating
                      and maintaining Product Rules, Approval Rules, Pricing
                      Rules, as well as product configurations.
                    </li>
                    <li>
                      Leverages Apex and Salesforce Flow Builder to build out
                      complex business automations.
                    </li>
                    <li>
                      Develop and maintain custom Lightning Web Components.
                    </li>
                  </ul>
                </li>
                <li className="space-y-1">
                  <strong>Manager, Order Operations</strong> (Jun 2021 - April
                  2024)
                  <ul className="list-inside list-disc space-y-1 pl-9 -indent-5">
                    <li>
                      Manages a team of 8 across Boston, New York, Dublin and
                      Singapore that on average processes over 2,000 orders per
                      month.
                    </li>
                    <li>
                      Assists in building out complex business automation within
                      Salesforce using Process Builder, Flow Builder, APEX and
                      writing custom Lightning Web Components.
                    </li>
                    <li>
                      Utilizes Salesforce Reporting and Dashboarding daily to
                      ensure we are meeting all SLA&apos;s within a given month
                      and quarter.
                    </li>
                    <li>
                      Works cross-departmentally and meets regularly with
                      Engineering, Finance, Go To Market, Deal Desk and
                      Commission teams to review upcoming changes as well as
                      areas of improvement.
                    </li>
                    <li>
                      Responsible for upholding certain SOX compliance steps as
                      it pertains to the deal review process.
                    </li>
                    <li>
                      Working with Engineering PM&apos;s on overlapping projects
                      and offer valuable insight to ensure success of rollouts.
                    </li>
                    <li>
                      Meeting with Sales and CS leaders to review pain points
                      and coordinate plans to improve processes.
                    </li>
                    <li>
                      Wrote a Python script which communicates with Salesforce
                      and alleviates some of the manual aspects of Opportunity
                      review for the team to use.
                    </li>
                  </ul>
                </li>

                <li className="list-inside">
                  <strong>Team Lead, Order Operations</strong> (Nov 2020 - Jun
                  2021)
                  <ul className="list-inside list-disc space-y-1 pl-9 -indent-5">
                    <li>
                      Brought on to assist the Order Operations team scale and
                      ensure all processes are being adhered to while also
                      trying to identify inefficiencies and implement long term
                      solutions.
                    </li>
                    <li>
                      Managed a team of 3 analysts across Boston and Dublin.
                    </li>
                    <li>
                      Responsible for reviewing all large Enterprise deals to
                      ensure accuracy of pricing, compliance with internal
                      policies, as well as deal structure and flagged to
                      necessary teams downstream.
                    </li>
                    <li>
                      Worked with our Sales Systems team to implement Salesforce
                      enhancements which lowered the chance of error and
                      increased efficiencies.
                    </li>
                    <li>
                      Responsible for sending out legal documents and customer
                      specific Order Forms for signature using DocuSign.
                    </li>
                    <li>
                      Responsible for existing contract changes requested by
                      Sales and Customer Success.
                    </li>
                    <li>
                      Held training sessions on a monthly basis on best
                      practices around deal closing and Salesforce cleanliness.
                    </li>
                    <li>
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
              <H3 className="flex flex-col text-start">
                Granite Telecommunications LLC
              </H3>
              <span className="flex flex-col font-normal">
                <em>(Feb 2016 - Nov 2020)</em>
                <em>Quincy, MA</em>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                <li className="space-y-1">
                  <strong>Senior Offer Management Supervisor</strong> (Apr 2019
                  - Nov 2020)
                  <ul className="list-inside list-disc space-y-1 pl-9 -indent-5">
                    <li>
                      Oversaw team of 12 analysts who handle entirety of quoting
                      responsibilities while monitoring and maintaining accuracy
                    </li>
                    <li>
                      Able to manage and distribute workload evenly across team
                      while handling any escalations with management.
                    </li>
                    <li>
                      Brought in to help lead a marketing initiative requested
                      by CEO to revamp all customer facing documents.
                    </li>
                    <li>
                      Was heavily involved with integrating automated quoting
                      process within Salesforce CPQ.
                    </li>
                    <li>
                      Worked cross departmentally to ensure accuracy of cost and
                      revenue information as well as new company wide
                      initiatives.
                    </li>
                    <li>
                      Trusted to handle most reporting which includes weekly
                      report of workload and efficiency numbers as well
                      monthly/quarterly report which is used to assist in
                      personnel decisions as well as areas of focus
                    </li>
                    <li>
                      Trusted to respond to and investigate inquiries which
                      involve high priority customers.
                    </li>
                    <li>
                      Assisted in training internal operations teams as well as
                      sales staff when new releases within Salesforce get
                      released as they pertain to CPQ.
                    </li>
                    <li>
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
                  <ul className="list-inside list-disc space-y-1 pl-9 -indent-5">
                    <li>
                      Oversaw a team of 10 analysts who were responsible for all
                      proposal quoting within the broader team
                    </li>
                    <li>
                      Was responsible for dealing directly with upper management
                      daily, resolving credit requests/inquiries, and ensuring
                      all company and team procedures are followed accordingly
                    </li>
                    <li>
                      Worked cross departmentally to ensure accuracy of cost and
                      revenue information as well as new company wide
                      initiatives
                    </li>
                  </ul>
                </li>
                <li className="space-y-1">
                  <strong>Senior Cost Analysis and Savings Analyst</strong> (Apr
                  2017 – Jun 2017)
                  <ul className="list-inside list-disc space-y-1 pl-9 -indent-5">
                    <li>
                      Took on additional responsibilities while also completing
                      normal Cost Analysis and Savings duties with no loss of
                      efficiency
                    </li>
                    <li>
                      Oversaw queue for West Palm Beach and Orlando branches
                      while delegating requests to different Cost Analysis and
                      Savings analysts.
                    </li>
                    <li>
                      Established self as direct source of contact for
                      questions, concerns and quick turnaround times from sales
                      representatives.
                    </li>
                    <li>Experience working directly with customers.</li>
                    <li>
                      Responsible for weekly and monthly reporting to upper
                      management.
                    </li>
                  </ul>
                </li>
                <li className="space-y-1">
                  <strong>Cost Analysis and Savings Analyst</strong> (Feb 2016 –
                  Apr 2017)
                  <ul className="list-inside list-disc space-y-1 pl-9 -indent-5">
                    <li>
                      Analyzed invoices for potential customers and put together
                      savings reports based on their current Telecom spend
                    </li>
                    <li>
                      Dealt directly with Florida sales branches who
                      consistently lead company in contributor of requests
                      (volume and size)
                    </li>
                    <li>
                      Assisted in resolution of daily disputes and helped
                      answered all Premier, Sales and customer inquiries
                    </li>
                    <li>
                      Led multiple high priority requests that CEO was directly
                      involved with as well as customer visits
                    </li>
                    <li>
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
  {
    title: "Salesforce Certified JavaScript Developer I",
    issuedDate: new Date(2024, 1),
    imageSrc: jd1_cert,
    url: "https://trailhead.salesforce.com/en/credentials/javascriptdeveloperi",
  },
];
