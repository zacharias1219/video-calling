import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <MessageSquare className="h-6 w-6 mr-2 text-white" />
          <span className="font-bold text-white">MySivi</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 text-white">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="container px-4 md:px-6 flex justify-center items-center">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Chat with AI. Meet New Friends.
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Experience the future of online chatting with AI-powered conversations and real human connections.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-6">
                  <Link href="/auth/sign-in">
                    <Button className="bg-white text-purple-600 hover:bg-gray-100" type="submit">
                        Get Started
                    </Button>
                  </Link>
                <p className="text-xs text-gray-200 text-center mt-4">
                  Start chatting for free. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-dark-2">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl text-center mb-12">Why Choose MySivi?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl text-white font-bold mb-2">Meet New People</h3>
                <p className="text-gray-300">Connect with individuals from around the world and expand your social circle.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl text-white font-bold mb-2">AI-Powered Chats</h3>
                <p className="text-gray-300">Engage in intelligent conversations with our advanced AI when no humans are available.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl text-white font-bold mb-2">Safe & Secure</h3>
                <p className="text-gray-300">Your privacy and security are our top priorities. Chat with confidence.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 MySivi. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}