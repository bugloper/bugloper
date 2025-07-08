'use client'

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, Folder } from "lucide-react"
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

const tooltipStyle = `
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`

export function PageComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fffbf2] p-4">
      <style>{tooltipStyle}</style>
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto mb-8 transform rotate-6 hover:rotate-0 transition-transform duration-300">
          <Image
            src="/images/my-pic.png"
            alt="bugloper"
            width={256}
            height={256}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">bugloper</h1>
        <h3 className="text-2xl font-bold mb-">Words hold power—but without substance, they’re transparent.</h3>
        <p className="text-xl text-muted-foreground mb-8">
          I am bugloper—an engineer, a writer, a thinker, and a seeker.
        </p>
        <nav className="mb-8">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#projects" className="text-primary hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="text-primary hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-primary hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center space-x-4">
          <Link href="https://github.com/bugloper">
            <div className="tooltip">
              <Button variant="outline" size="icon">
                <GitHubLogoIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <span className="tooltiptext">GitHub</span>
            </div>
          </Link>

          <Link href="https://www.linkedin.com/in/nima-yonten-a03995227/">
            <div className="tooltip">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <span className="tooltiptext">LinkedIn</span>
            </div>
          </Link>

          <Link href="mailto:bugloper@hey.com">
            <div className="tooltip">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
              <span className="tooltiptext">Email</span>
            </div>
          </Link>

          <Link href="https://x.com/bugloper">
            <div className="tooltip">
              <Button variant="outline" size="icon">
                <TwitterLogoIcon className="h-4 w-4" />
                <span className="sr-only">X</span>
              </Button>
              <span className="tooltiptext">X</span>
            </div>
          </Link>

          <Link href="https://github.com/bugloper/.dotfiles">
            <div className="tooltip">
              <Button variant="outline" size="icon">
                <Folder className="h-4 w-4" />
                <span className="sr-only">Dotfiles</span>
              </Button>
              <span className="tooltiptext">Dotfiles</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
