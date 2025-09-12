import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';
import { ReactNode } from 'react';

interface CodeComponentProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

interface ImageComponentProps {
  src?: string;
  alt?: string;
  node?: any;
}

interface AnchorComponentProps {
  href?: string;
  children?: ReactNode;
  node?: any;
}

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-img:rounded-lg prose-img:shadow-lg">
      <ReactMarkdown
        components={{
          // Handle paragraphs with proper spacing
          p: ({ node, children }) => (
            <p className="mb-6 leading-relaxed text-foreground/90">
              {children}
            </p>
          ),
          // Handle images with proper sizing and fallback
          img: ({ src, alt, node, ...props }: ImageComponentProps) => (
            <div className="my-8">
              <div className="relative w-full h-64 md:h-[32rem] rounded-xl overflow-hidden">
                <Image
                  src={src || '/blog-images/placeholder.svg'}
                  alt={alt || 'Blog post image'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={false}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/blog-images/placeholder.svg';
                  }}
                />
              </div>
              {alt && (
                <p className="text-center text-sm text-muted-foreground mt-2">
                  {alt}
                </p>
              )}
            </div>
          ),
          code({ node, inline, className, children, ...props }: CodeComponentProps) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className="rounded-lg overflow-hidden my-4">
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  showLineNumbers
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    fontSize: '0.9rem',
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                {children}
              </code>
            );
          },
          a: ({ href, children, node, ...props }: AnchorComponentProps) => (
            <a
              href={href}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
