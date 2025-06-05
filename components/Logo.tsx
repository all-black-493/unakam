export function Logo() {
    return (
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                <img
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=32&h=32&fit=crop&crop=center"
                    alt="Unakam Logo"
                    className="w-full h-full object-cover"
                />
            </div>
            <span className="font-bold text-lg text-foreground">Unakam</span>
        </div>
    )
}