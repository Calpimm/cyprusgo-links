"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Globe,
  Users,
  MapPin,
  Camera,
  Heart,
  Languages,
  Smartphone,
  Clock,
  Sparkles,
  Linkedin,
  ExternalLink,
  Star,
  Zap,
} from "lucide-react"

interface LinkData {
  title: { en: string; tr: string }
  description: { en: string; tr: string }
  icon: any
  url: string
  color: string
  featured?: boolean
  comingSoon?: boolean
}

export default function CyprusGoLinks() {
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<"en" | "tr">("en")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    // Mouse tracking for enhanced effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleClick = (index: number) => {
    setClickedIndex(index)
    setTimeout(() => setClickedIndex(null), 300)
  }

  const translations = {
    en: {
      tagline: "Discover Cyprus Like Never Before",
      subtitle: "Your ultimate travel companion",
      madeWith: "Made with ❤️ for Cyprus travelers",
      comingSoon: "Coming Soon",
      verySoon: "Very Soon",
      appStoreText: "CyprusGO",
      appStoreSubtext: "Available soon on App Store & Google Play",
      followUs: "Follow our journey",
    },
    tr: {
      tagline: "Kıbrıs'ı Hiç Olmadığı Gibi Keşfedin",
      subtitle: "Mükemmel seyahat arkadaşınız",
      madeWith: "Kıbrıs gezginleri için ❤️ ile yapıldı",
      comingSoon: "Çok Yakında",
      verySoon: "Çok Yakında",
      appStoreText: "CyprusGO",
      appStoreSubtext: "App Store ve Google Play'de yakında",
      followUs: "Yolculuğumuzu takip edin",
    },
  }

  const links: LinkData[] = [
    {
      title: { en: "Instagram", tr: "Instagram" },
      description: { en: "Daily adventures & stories", tr: "Günlük maceralar ve hikayeler" },
      icon: Instagram,
      url: "https://www.instagram.com/cyprusgo.official/",
      color: "from-pink-500 to-purple-600",
      featured: true,
    },
    {
      title: { en: "Twitter / X", tr: "Twitter / X" },
      description: { en: "Latest updates & news", tr: "Son güncellemeler ve haberler" },
      icon: Twitter,
      url: "https://x.com/cypGO_official",
      color: "from-gray-800 to-black",
      featured: true,
    },
    {
      title: { en: "LinkedIn", tr: "LinkedIn" },
      description: { en: "Professional updates", tr: "Profesyonel güncellemeler" },
      icon: Linkedin,
      url: "https://www.linkedin.com/company/cyprusgo/about/",
      color: "from-blue-600 to-blue-800",
      featured: true,
    },
    {
      title: { en: "Google Groups", tr: "Google Groups" },
      description: { en: "Join our community discussions", tr: "Topluluk tartışmalarına katıl" },
      icon: Users,
      url: "https://groups.google.com/g/cyprusgo",
      color: "from-blue-500 to-indigo-600",
      featured: true,
    },
    {
      title: { en: "Facebook", tr: "Facebook" },
      description: { en: "Community & discussions", tr: "Topluluk ve tartışmalar" },
      icon: Facebook,
      url: "#",
      color: "from-blue-500 to-blue-700",
      comingSoon: true,
    },
    {
      title: { en: "YouTube", tr: "YouTube" },
      description: { en: "Travel guides & vlogs", tr: "Seyahat rehberleri ve vloglar" },
      icon: Youtube,
      url: "#",
      color: "from-red-500 to-red-700",
      comingSoon: true,
    },
    {
      title: { en: "Official Website", tr: "Resmi Website" },
      description: { en: "Complete travel platform", tr: "Tam seyahat platformu" },
      icon: Globe,
      url: "#",
      color: "from-emerald-500 to-teal-600",
      comingSoon: true,
    },
    {
      title: { en: "Photo Gallery", tr: "Fotoğraf Galerisi" },
      description: { en: "Beautiful Cyprus moments", tr: "Güzel Kıbrıs anları" },
      icon: Camera,
      url: "#",
      color: "from-amber-500 to-orange-600",
      comingSoon: true,
    },
    {
      title: { en: "Contact Us", tr: "İletişim" },
      description: { en: "Get in touch", tr: "İletişime geç" },
      icon: Mail,
      url: "#",
      color: "from-teal-500 to-cyan-600",
      comingSoon: true,
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main floating blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float-smooth"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float-smooth-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse-gentle"></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-smooth-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float-smooth-reverse"></div>

        {/* Enhanced floating particles */}
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-orange-400/70 rounded-full animate-float-particle shadow-lg"></div>
        <div className="absolute top-40 right-[15%] w-2 h-2 bg-amber-400/60 rounded-full animate-float-particle-delayed shadow-md"></div>
        <div className="absolute bottom-32 left-[20%] w-1.5 h-1.5 bg-orange-500/80 rounded-full animate-twinkle shadow-sm"></div>
        <div className="absolute bottom-20 right-[25%] w-3 h-3 bg-amber-300/70 rounded-full animate-gentle-bounce shadow-lg"></div>
        <div className="absolute top-1/3 left-[5%] w-2 h-2 bg-orange-300/60 rounded-full animate-orbit"></div>
        <div className="absolute bottom-1/3 right-[8%] w-2.5 h-2.5 bg-amber-400/50 rounded-full animate-orbit-reverse"></div>

        {/* Magical sparkles */}
        <div className="absolute top-16 right-[30%] animate-sparkle-1">
          <Star size={12} className="text-orange-400/60" />
        </div>
        <div className="absolute bottom-24 left-[35%] animate-sparkle-2">
          <Sparkles size={10} className="text-amber-400/50" />
        </div>
        <div className="absolute top-2/3 right-[12%] animate-sparkle-3">
          <Zap size={14} className="text-orange-500/40" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-md">
        {/* Language Toggle - Centered */}
        <div className="flex justify-center mb-8 animate-slide-in-smooth">
          <div className="bg-white/90 backdrop-blur-md rounded-full p-1 shadow-xl border border-orange-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-700 ease-out">
            <div className="flex items-center space-x-1">
              <Languages size={16} className="text-orange-500 ml-3 animate-pulse-gentle" />
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-700 ease-out transform hover:scale-110 active:scale-95 ${
                  language === "en"
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105 animate-glow-gentle"
                    : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("tr")}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-700 ease-out transform hover:scale-110 active:scale-95 ${
                  language === "tr"
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105 animate-glow-gentle"
                    : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                TR
              </button>
            </div>
          </div>
        </div>

        {/* Logo Section - Fixed mobile layout */}
        <div className="text-center mb-12 animate-fade-in-smooth">
          <div className="relative mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-800 tracking-tight leading-tight">
              <span className="relative inline-block">
                <span className="relative">
                  Cyprus
                  <div className="absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-ping-gentle opacity-75"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-twinkle"></div>
                </span>
                <span className="relative ml-2">
                  <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 bg-clip-text text-transparent animate-gradient-flow">
                    GO
                  </span>
                  <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full transform scale-x-0 animate-scale-in-smooth shadow-lg"></div>
                  <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-orange-400 animate-spin-gentle" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-400/20 rounded-full animate-pulse-gentle"></div>
                </span>
              </span>
            </h1>
          </div>

          <div className="space-y-3">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 animate-fade-in-smooth"
              style={{ animationDelay: "0.3s" }}
            >
              🌴 {translations[language].tagline} 🌴
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-gray-600 font-medium animate-fade-in-smooth"
              style={{ animationDelay: "0.5s" }}
            >
              {translations[language].subtitle}
            </p>
          </div>
        </div>

        {/* Enhanced App Store Section */}
        <div className="mb-10 animate-fade-in-smooth" style={{ animationDelay: "0.7s" }}>
          <div className="relative group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl p-6 sm:p-7 shadow-2xl hover:shadow-3xl transform hover:scale-[1.05] hover:-translate-y-2 transition-all duration-700 ease-out overflow-hidden border border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/15 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700 animate-gradient-flow"></div>

            <div className="relative text-center space-y-4">
              <div className="flex justify-center items-center space-x-4">
                <div className="bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700 shadow-lg">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                </div>
                <div className="text-2xl sm:text-3xl font-light animate-pulse-gentle">+</div>
                <div className="bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700 shadow-lg">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 animate-gradient-flow bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                  {translations[language].appStoreText}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">{translations[language].appStoreSubtext}</p>
              </div>

              <div className="flex justify-center items-center space-x-3 text-orange-400">
                <Clock size={20} className="animate-spin-gentle" />
                <span className="font-bold text-base">{translations[language].comingSoon}</span>
                <Sparkles size={20} className="animate-twinkle" />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>

        {/* Enhanced Social Links */}
        <div className="space-y-3 sm:space-y-4">
          {links.map((link, index) => {
            const Icon = link.icon
            const isHovered = hoveredIndex === index
            const isClicked = clickedIndex === index
            const isActive = !link.comingSoon

            return (
              <div key={index} className="relative">
                {isActive ? (
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleClick(index)}
                    className={`
                      block w-full p-4 sm:p-5 rounded-2xl shadow-lg transform transition-all duration-700 ease-out
                      hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-1 active:scale-[0.97] group relative overflow-hidden
                      bg-white/95 backdrop-blur-sm border border-white/70 hover:border-orange-200/70
                      animate-slide-up-smooth
                      ${link.featured ? "ring-2 ring-orange-200/50 shadow-orange-100/40 animate-glow-gentle" : ""}
                      ${isClicked ? "scale-[0.97] shadow-xl" : ""}
                    `}
                    style={{
                      animationDelay: `${index * 80 + 1000}ms`,
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-12 transition-all duration-700 rounded-2xl`}
                    ></div>

                    <div className="relative flex items-center space-x-4">
                      <div
                        className={`
                          p-3 sm:p-4 rounded-xl bg-gradient-to-r ${link.color} text-white shadow-lg
                          transform transition-all duration-700 ease-out group-hover:scale-125 group-hover:rotate-6
                          ${link.featured ? "animate-glow-gentle shadow-xl" : ""}
                        `}
                      >
                        <Icon size={22} className="sm:w-6 sm:h-6 transition-transform duration-500" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-black text-gray-800 text-base sm:text-lg group-hover:text-gray-900 transition-colors duration-500 flex items-center space-x-2">
                          <span className="truncate">{link.title[language]}</span>
                          {link.featured && (
                            <div className="flex space-x-1">
                              <Sparkles size={14} className="text-orange-500 animate-spin-gentle flex-shrink-0" />
                              <Star size={12} className="text-amber-500 animate-twinkle flex-shrink-0" />
                            </div>
                          )}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-500 truncate">
                          {link.description[language]}
                        </p>
                      </div>

                      <div
                        className={`text-gray-400 group-hover:text-orange-500 transition-all duration-700 ease-out transform flex-shrink-0 ${isHovered ? "translate-x-2 scale-125 rotate-12" : ""}`}
                      >
                        <ExternalLink size={20} className="sm:w-6 sm:h-6" />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                  </Link>
                ) : (
                  <div
                    className={`
                      w-full p-4 sm:p-5 rounded-2xl shadow-md relative overflow-hidden
                      bg-gray-100/80 backdrop-blur-sm border border-gray-200/70
                      animate-slide-up-smooth opacity-75 hover:opacity-90 transition-opacity duration-500
                    `}
                    style={{
                      animationDelay: `${index * 80 + 1000}ms`,
                    }}
                  >
                    <div className="relative flex items-center space-x-4">
                      <div
                        className={`
                          p-3 sm:p-4 rounded-xl bg-gradient-to-r ${link.color} text-white shadow-md opacity-60
                        `}
                      >
                        <Icon size={22} className="sm:w-6 sm:h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-black text-gray-600 text-base sm:text-lg truncate">
                          {link.title[language]}
                        </h3>
                        <p className="text-gray-500 text-sm sm:text-base truncate">{link.description[language]}</p>
                      </div>

                      <div className="flex items-center space-x-2 text-orange-500 flex-shrink-0">
                        <Clock size={16} className="sm:w-5 sm:h-5 animate-spin-gentle" />
                        <span className="font-bold text-sm">{translations[language].verySoon}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-16 animate-fade-in-smooth" style={{ animationDelay: "1600ms" }}>
          <p className="text-gray-500 text-base mb-6 font-medium">{translations[language].madeWith}</p>
          <div className="flex justify-center items-center space-x-4">
            <MapPin size={20} className="text-orange-400 animate-gentle-bounce" />
            <Heart size={20} className="text-red-400 animate-pulse-gentle" />
            <Smartphone
              size={20}
              className="text-orange-400 animate-gentle-bounce"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
