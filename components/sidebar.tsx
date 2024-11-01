import { BarChart3, Mail, Users, Settings, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Analytics', icon: BarChart3, href: '#', current: true },
  { name: 'Campaigns', icon: Mail, href: '#', current: false },
  { name: 'Leads', icon: Users, href: '#', current: false },
  { name: 'Settings', icon: Settings, href: '#', current: false },
  { name: 'Help', icon: HelpCircle, href: '#', current: false },
];

export function Sidebar() {
  return (
    <div className="w-[72px] bg-[#0F4C5C] flex flex-col items-center py-4 space-y-4">
      <div className="flex-1 w-full">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center w-full p-3 text-sm font-medium transition-colors',
              item.current
                ? 'text-white bg-[#1a6276]'
                : 'text-gray-300 hover:text-white hover:bg-[#1a6276]'
            )}
          >
            <item.icon className="h-6 w-6" />
            <span className="mt-1 text-xs">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}