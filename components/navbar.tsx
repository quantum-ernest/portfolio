"use client"

import type React from "react"

import {useState, useEffect} from "react"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {Button} from "@/components/ui/button"
import {ModeToggle} from "./mode-toggle"
import {Menu, X} from "lucide-react"
import {motion} from "framer-motion"
import {useMobile} from "@/hooks/use-mobile"

const navItems = [
    {name: "Home", href: "/"},
    {name: "Projects", href: "/projects"},
    {name: "Experience", href: "/experience"},
    {name: "Articles", href: "/articles"},
    {name: "Contact", href: "/#contact"},
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isMobile = useMobile()
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#")) {
            e.preventDefault()
            const element = document.querySelector(href.substring(1))
            if (element) {
                element.scrollIntoView({behavior: "smooth"})
                setIsMenuOpen(false)
            } else if (pathname !== "/") {
                window.location.href = href
            }
        } else {
            setIsMenuOpen(false)
        }
    }

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/"
        return pathname.startsWith(path)
    }

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-background/70 backdrop-blur-lg shadow-lg border-b border-white/10" : "bg-transparent"
            }`}
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500">
                      Ernest
                    </span>
                    <span> 👨‍💻</span>
                </Link>

                {/* Desktop Navigation */}
                {!isMobile && (
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-3 py-2 text-sm rounded-md transition-all duration-300 ${
                                    isActive(item.href)
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "hover:bg-white/10 hover:text-primary"
                                }`}
                                onClick={(e) => handleNavigation(e, item.href)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <ModeToggle/>
                    </nav>
                )}

                {/* Mobile Navigation */}
                {isMobile && (
                    <div className="flex items-center">
                        <ModeToggle/>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="ml-2 hover:bg-white/10"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </Button>
                    </div>
                )}
            </div>

            {/* Mobile Menu */}
            {isMobile && isMenuOpen && (
                <motion.div
                    className="fixed inset-0 top-16 bg-background/95 backdrop-blur-lg z-40 p-4 border-t border-white/10"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    transition={{duration: 0.2}}
                >
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-4 py-3 text-lg border-b border-white/10 transition-colors ${
                                    isActive(item.href) ? "text-primary font-medium border-primary" : "hover:bg-white/5"
                                }`}
                                onClick={(e) => handleNavigation(e, item.href)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}
        </motion.header>
    )
}
