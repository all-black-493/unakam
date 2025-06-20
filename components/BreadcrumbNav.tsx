import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from 'next/navigation';

export default function BreadcrumbNav(){
    const pathname = usePathname();
    const pathnames = pathname.split('/').filter((x) => x);

    const breadcrumbMap: Record<string, string> = {
        'event': 'Event Details',
        'events': 'Events',
        'create': 'Create Event',
        'nearby': 'Nearby',
        'trending': 'Trending',
        'discover': 'Discover',
        'filter': 'Filter',
        'calendar': 'Calendar',
        'places': 'Places',
        'saved': 'Saved',
        'my-tickets': 'My Tickets',
        'connect': 'Connect',
        'friends': 'Friends',
        'eyfa': 'EYFA',
        'profile': 'Profile',
    };

    return (
        <Breadcrumb className="mb-4">
            <BreadcrumbList>
                {pathnames.map((path, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const name = breadcrumbMap[path] || path.charAt(0).toUpperCase() + path.slice(1);

                    return (
                        <div key={path} className="flex items-center">
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>{name}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={routeTo}>{name}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </div>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
};