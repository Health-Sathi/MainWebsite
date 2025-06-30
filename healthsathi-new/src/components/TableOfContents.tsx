import { useState, useEffect } from 'react';

interface TableOfContentsProps {
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="toc-container" aria-label="Table of contents">
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
        <h2 className="text-lg font-bold text-brand-black mb-4">
          Table of Contents
        </h2>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`text-left w-full px-2 py-1 rounded text-sm transition-colors ${
                  activeId === heading.id
                    ? 'text-brand-red-primary font-semibold bg-brand-red-light'
                    : 'text-gray-600 hover:text-brand-red-primary hover:bg-gray-50'
                }`}
                style={{ paddingLeft: `${(heading.level - 1) * 16 + 8}px` }}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents; 