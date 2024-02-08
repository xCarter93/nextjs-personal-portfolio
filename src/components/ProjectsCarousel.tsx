import * as React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import flowbrain from "@/assets/flowbrain.jpg";
import ecommerce from "@/assets/nextjs-ecommerce.webp";
import imagegallery from "@/assets/image-gallery.webp";
import smartbrain from "@/assets/smartbrain-project-min.webp";
import coffee from "@/assets/coffee-connoisseur.jpg";
import jobsBoard from "@/assets/jobs-board.jpg";
import Image from "next/image";

export default function ProjectsCarousel() {
  return (
    <Carousel className="min-w-[300px] p-10 md:w-full">
      <CarouselContent className="-ml-1">
        {projects.map((project) => (
          <CarouselItem key={project.id} className="pl-1 md:basis-1/2">
            <div className="p-1">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Card className="flex min-h-[450px] flex-col justify-between shadow-xl dark:shadow-indigo-500/50">
                  <CardHeader className="mb-3 text-center">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center py-2">
                    <Image
                      className="rounded-lg"
                      src={project.imgUrl}
                      alt={project.description}
                      height={250}
                      width={250}
                    />
                  </CardContent>
                  <CardFooter className="pb-6">
                    <p>{project.description}</p>
                  </CardFooter>
                </Card>
              </a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const projects = [
  {
    id: 0,
    imgUrl: jobsBoard,
    category:
      "Next.js, Typescript, Tailwind CSS, Vercel Blob, Postgres, Prisma, Clerk",
    title: "Jobs Board",
    description:
      "A job posting website that allows you to create and view job postings",
    url: "https://nextjs-job-board-smoky.vercel.app/",
  },
  {
    id: 1,
    imgUrl: flowbrain,
    category: "Next.js, Typescript, OpenAI, Pinecone, Shadcn UI, Clerk",
    title: "FlowBrain",
    description: "An intelligent note-taking app with AI integration",
    url: "https://nextjs-notesapp-ai.vercel.app/",
  },
  {
    id: 2,
    imgUrl: ecommerce,
    category: "Typescript, Next.js, MongoDB, Prisma, DaisyUI",
    title: "Flowmazon (Amazon Clone)",
    description:
      "Amazon clone that allows you to add products to a cart, sign in, sign out, etc.",
    url: "https://nextjs-ecommerce-xcarter93.vercel.app/",
  },
  {
    id: 3,
    imgUrl: coffee,
    category: "Next.js, Typescript, Tailwind CSS, Mapbox",
    title: "Coffee Connoisseur",
    description: "A website that allows you to find coffee shops near you",
    url: "https://nextjs-coffee-connoisseur.vercel.app/",
  },
  {
    id: 3,
    imgUrl: imagegallery,
    category: "Typescript, NextJS, Unsplash API",
    title: "NextJS Image Gallery",
    description: "Image gallery built with NextJS and the Unsplash API",
    url: "https://nextjs13-image-gallery-eh4xhm4f0-xcarter93.vercel.app/",
  },
  {
    id: 4,
    imgUrl: smartbrain,
    category: "ReactJS, Express, PostregSQL, Clarifai API",
    title: "SmartBrain",
    description:
      "Single page React App that uses ML to do face recognition on image URLs",
    url: "https://smartbrain-project-six.vercel.app/",
  },
];
