import { Search } from "lucide-react"
import { useState, useEffect } from "react"

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [placeholderText, setPlaceholderText] = useState("")
  
  const placeholderOptions = [
    "Search for concerts...",
    "Find workshops...",
    "Discover meetups...",
    "Search events nearby...",
    "Find trending events..."
  ]
  
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0)

  useEffect(() => {
    if (!isExpanded) return

    const currentText = placeholderOptions[currentPlaceholderIndex]
    let charIndex = 0
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setPlaceholderText(currentText.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        
        // Switch to next placeholder after a delay
        setTimeout(() => {
          setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholderOptions.length)
        }, 2000)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [currentPlaceholderIndex, isExpanded])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchValue.trim()) {
      console.log("Searching for:", searchValue)
      // Handle search logic here
    }
  }

  return (
    <div className="flex justify-center mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <div 
          className={`flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg transition-all duration-500 ease-in-out border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 ${
            isExpanded ? 'w-80 md:w-96' : 'w-12'
          }`}
        >
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={placeholderText}
            className={`bg-transparent border-none outline-none text-gray-700 dark:text-gray-300 transition-all duration-500 ${
              isExpanded ? 'w-full px-2 py-1' : 'w-0 px-0'
            }`}
            style={{ opacity: isExpanded ? 1 : 0 }}
          />
          
          {isExpanded && (
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors mr-1"
            >
              Search
            </button>
          )}
        </div>
      </form>
    </div>
  )
}