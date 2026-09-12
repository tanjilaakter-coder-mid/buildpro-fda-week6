import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

export default function FeatureCard({ title, description, iconSrc }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 md:p-10 rounded-2xl shadow-xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer">
        <h3 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2.5">
            <Image 
                src={iconSrc} 
                alt={title} 
                width={22} 
                height={22} 
                className="object-contain" 
            />
            {title}
        </h3>
        <p className="text-sm opacity-95 leading-relaxed">{description}</p>
    </div>
  );
}