import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative">
      <Image
        src="/images/hero-background.jpg"
        alt="Healthcare professional consulting with patient"
        width={1920}
        height={1080}
        priority
        className="object-cover w-full h-full"
      />
      {/* Rest of your hero content */}
    </div>
  );
} 