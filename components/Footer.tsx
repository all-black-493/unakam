export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">?</span>
              </div>
              <span className="font-bold text-lg text-foreground">Unakam</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Discover amazing events happening around you. Connect with like-minded people and create unforgettable memories.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Events</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/events/nearby" className="hover:text-blue-600 transition-colors">Nearby Events</a></li>
              <li><a href="/events/trending" className="hover:text-blue-600 transition-colors">Trending Events</a></li>
              <li><a href="/discover/calendar" className="hover:text-blue-600 transition-colors">Calendar View</a></li>
              <li><a href="/discover/saved" className="hover:text-blue-600 transition-colors">Saved Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/connect/friends" className="hover:text-blue-600 transition-colors">Find Friends</a></li>
              <li><a href="/connect/eyfa" className="hover:text-blue-600 transition-colors">Friends' Events</a></li>
              <li><a href="/my-tickets" className="hover:text-blue-600 transition-colors">My Tickets</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/help" className="hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Unakam? . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}